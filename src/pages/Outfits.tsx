
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, ShoppingBag, Search, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Sample outfits data
const outfits = [
  { 
    id: 1, 
    name: "Casual Friday", 
    items: ["White T-Shirt", "Blue Jeans", "Sneakers"], 
    occasion: "casual", 
    season: "all",
    image: "/placeholder.svg"
  },
  { 
    id: 2, 
    name: "Business Meeting", 
    items: ["Formal Shirt", "Black Pants", "Leather Shoes"], 
    occasion: "formal", 
    season: "all",
    image: "/placeholder.svg"
  },
  { 
    id: 3, 
    name: "Weekend Brunch", 
    items: ["Summer Dress", "Sandals", "Sun Hat"], 
    occasion: "casual", 
    season: "summer",
    image: "/placeholder.svg"
  },
  { 
    id: 4, 
    name: "Fall Ensemble", 
    items: ["Sweater", "Jeans", "Leather Jacket", "Boots"], 
    occasion: "casual", 
    season: "fall",
    image: "/placeholder.svg"
  }
];

const OutfitCard = ({ outfit }: { outfit: any }) => {
  return (
    <Card className="fashion-card h-full flex flex-col">
      <div className="relative">
        <img src={outfit.image} alt={outfit.name} className="h-64 w-full object-cover" />
        <Badge className="absolute top-2 right-2 bg-fashion-black/80">{outfit.occasion}</Badge>
        <button className="absolute top-2 left-2 bg-white/80 p-1.5 rounded-full hover:bg-white">
          <Heart className="h-4 w-4 text-fashion-accent" />
        </button>
      </div>
      <CardContent className="p-4 flex-grow">
        <h3 className="font-medium text-lg">{outfit.name}</h3>
        <p className="text-xs text-muted-foreground mb-2">Season: {outfit.season}</p>
        <div className="flex flex-wrap gap-1">
          {outfit.items.map((item: string, index: number) => (
            <Badge key={index} variant="outline" className="text-xs bg-secondary/50">
              {item}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button variant="outline" className="w-full">View Details</Button>
      </CardFooter>
    </Card>
  );
};

const Outfits = () => {
  return (
    <div className="animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Your Outfits</h2>
          <p className="text-muted-foreground">Create and manage your outfit combinations</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          <span>Create Outfit</span>
        </Button>
      </div>
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search outfits..." className="pl-9" />
        </div>
        <Button variant="outline" size="sm" className="gap-2">
          <ShoppingBag className="h-4 w-4" />
          <span>All Outfits</span>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {outfits.map(outfit => (
          <OutfitCard key={outfit.id} outfit={outfit} />
        ))}
      </div>
    </div>
  );
};

export default Outfits;
