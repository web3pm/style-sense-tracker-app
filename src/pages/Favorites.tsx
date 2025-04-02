
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Shirt, ShoppingBag } from "lucide-react";

// Sample favorite items and outfits
const favoriteItems = [
  { id: 1, name: "White T-Shirt", category: "tops", image: "/placeholder.svg" },
  { id: 2, name: "Blue Jeans", category: "bottoms", image: "/placeholder.svg" },
  { id: 3, name: "Leather Jacket", category: "outerwear", image: "/placeholder.svg" }
];

const favoriteOutfits = [
  { id: 1, name: "Casual Friday", items: ["White T-Shirt", "Blue Jeans", "Sneakers"], image: "/placeholder.svg" },
  { id: 2, name: "Weekend Brunch", items: ["Summer Dress", "Sandals"], image: "/placeholder.svg" }
];

const ItemCard = ({ item }: { item: any }) => (
  <Card className="fashion-card overflow-hidden group">
    <div className="relative">
      <img src={item.image} alt={item.name} className="h-48 w-full object-cover transition-transform group-hover:scale-105" />
      <button className="absolute top-2 right-2 bg-white/80 p-1.5 rounded-full hover:bg-white">
        <Heart className="h-4 w-4 text-fashion-accent fill-fashion-accent" />
      </button>
    </div>
    <CardContent className="p-4">
      <h3 className="font-medium">{item.name}</h3>
      <p className="text-xs text-muted-foreground">{item.category}</p>
    </CardContent>
  </Card>
);

const OutfitCard = ({ outfit }: { outfit: any }) => (
  <Card className="fashion-card overflow-hidden group">
    <div className="relative">
      <img src={outfit.image} alt={outfit.name} className="h-48 w-full object-cover transition-transform group-hover:scale-105" />
      <button className="absolute top-2 right-2 bg-white/80 p-1.5 rounded-full hover:bg-white">
        <Heart className="h-4 w-4 text-fashion-accent fill-fashion-accent" />
      </button>
    </div>
    <CardContent className="p-4">
      <h3 className="font-medium">{outfit.name}</h3>
      <p className="text-xs text-muted-foreground">{outfit.items.length} items</p>
    </CardContent>
  </Card>
);

const Favorites = () => {
  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight">Your Favorites</h2>
        <p className="text-muted-foreground">Items and outfits you've saved as favorites</p>
      </div>
      
      <Tabs defaultValue="items" className="mb-6">
        <TabsList className="mb-6">
          <TabsTrigger value="items" className="flex items-center gap-2">
            <Shirt className="h-4 w-4" />
            <span>Favorite Items</span>
          </TabsTrigger>
          <TabsTrigger value="outfits" className="flex items-center gap-2">
            <ShoppingBag className="h-4 w-4" />
            <span>Favorite Outfits</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="items" className="m-0">
          {favoriteItems.length === 0 ? (
            <div className="text-center py-12">
              <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium">No favorite items yet</h3>
              <p className="text-muted-foreground">
                Browse your wardrobe and mark items as favorites to see them here.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {favoriteItems.map(item => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="outfits" className="m-0">
          {favoriteOutfits.length === 0 ? (
            <div className="text-center py-12">
              <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium">No favorite outfits yet</h3>
              <p className="text-muted-foreground">
                Browse your outfits and mark some as favorites to see them here.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {favoriteOutfits.map(outfit => (
                <OutfitCard key={outfit.id} outfit={outfit} />
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Favorites;
