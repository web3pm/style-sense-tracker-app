
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Search, SlidersHorizontal, Shirt, Tag } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

// Sample clothing data
const clothingItems = [
  { id: 1, name: "White T-Shirt", category: "tops", color: "white", season: "all", image: "/placeholder.svg" },
  { id: 2, name: "Blue Jeans", category: "bottoms", color: "blue", season: "all", image: "/placeholder.svg" },
  { id: 3, name: "Black Sweater", category: "tops", color: "black", season: "winter", image: "/placeholder.svg" },
  { id: 4, name: "Summer Dress", category: "dresses", color: "floral", season: "summer", image: "/placeholder.svg" },
  { id: 5, name: "Leather Jacket", category: "outerwear", color: "brown", season: "fall", image: "/placeholder.svg" },
  { id: 6, name: "Sneakers", category: "shoes", color: "white", season: "all", image: "/placeholder.svg" },
  { id: 7, name: "Formal Shirt", category: "tops", color: "blue", season: "all", image: "/placeholder.svg" },
  { id: 8, name: "Skirt", category: "bottoms", color: "black", season: "spring", image: "/placeholder.svg" }
];

const categories = [
  "All",
  "Tops",
  "Bottoms",
  "Dresses",
  "Outerwear",
  "Shoes",
  "Accessories"
];

const ClothingCard = ({ item }: { item: any }) => (
  <Card className="fashion-card overflow-hidden group">
    <div className="relative">
      <img src={item.image} alt={item.name} className="h-48 w-full object-cover transition-transform group-hover:scale-105" />
      <Badge className="absolute top-2 right-2 bg-fashion-black/80">{item.category}</Badge>
    </div>
    <CardContent className="p-4">
      <h3 className="font-medium truncate">{item.name}</h3>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-2">
          <div className={`h-3 w-3 rounded-full bg-${item.color}-500`}></div>
          <span className="text-xs">{item.color}</span>
        </div>
        <span className="text-xs text-muted-foreground">{item.season}</span>
      </div>
    </CardContent>
  </Card>
);

const AddClothingForm = () => (
  <div className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="name">Item Name</Label>
      <Input id="name" placeholder="E.g., Navy Blue Dress Shirt" />
    </div>
    
    <div className="space-y-2">
      <Label htmlFor="category">Category</Label>
      <Select>
        <SelectTrigger id="category">
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent>
          {categories.slice(1).map((category) => (
            <SelectItem key={category} value={category.toLowerCase()}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
    
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="color">Color</Label>
        <Input id="color" placeholder="E.g., Navy Blue" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="season">Season</Label>
        <Select>
          <SelectTrigger id="season">
            <SelectValue placeholder="Select season" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Seasons</SelectItem>
            <SelectItem value="spring">Spring</SelectItem>
            <SelectItem value="summer">Summer</SelectItem>
            <SelectItem value="fall">Fall</SelectItem>
            <SelectItem value="winter">Winter</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
    
    <div className="space-y-2">
      <Label htmlFor="image">Upload Image</Label>
      <Input id="image" type="file" className="cursor-pointer" />
      <p className="text-xs text-muted-foreground">Upload a clear photo of your item.</p>
    </div>
    
    <Button className="w-full">Add to Wardrobe</Button>
  </div>
);

const Wardrobe = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter items based on active tab and search query
  const filteredItems = clothingItems.filter(item => 
    (activeTab === "all" || item.category.toLowerCase() === activeTab.toLowerCase()) &&
    (item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
     item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
     item.color.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Your Wardrobe</h2>
          <p className="text-muted-foreground">Manage and browse your clothing collection</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              <span>Add Item</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Clothing Item</DialogTitle>
            </DialogHeader>
            <AddClothingForm />
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search items..." 
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            <span>Filter</span>
          </Button>
          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
              <SelectItem value="a-z">A-Z</SelectItem>
              <SelectItem value="z-a">Z-A</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList className="flex overflow-x-auto pb-1 mb-4">
          {categories.map(category => (
            <TabsTrigger 
              key={category} 
              value={category.toLowerCase()}
              className="flex items-center gap-2"
            >
              {category === "Tops" && <Shirt className="h-4 w-4" />}
              {category === "Categories" && <Tag className="h-4 w-4" />}
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {categories.map(category => (
          <TabsContent key={category} value={category.toLowerCase()} className="m-0">
            {filteredItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No items found. Try a different search or category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredItems.map(item => (
                  <ClothingCard key={item.id} item={item} />
                ))}
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Wardrobe;
