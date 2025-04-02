
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Shirt, Tag, Footprints } from "lucide-react";
import { Progress } from "@/components/ui/progress";

// Sample categories data
const categories = [
  { id: 1, name: "Tops", count: 15, icon: Shirt, color: "bg-blue-100 text-blue-500" },
  { id: 2, name: "Bottoms", count: 10, icon: Tag, color: "bg-green-100 text-green-500" },
  { id: 3, name: "Dresses", count: 5, icon: Tag, color: "bg-purple-100 text-purple-500" },
  { id: 4, name: "Outerwear", count: 8, icon: Tag, color: "bg-amber-100 text-amber-500" },
  { id: 5, name: "Shoes", count: 12, icon: Footprints, color: "bg-red-100 text-red-500" },
  { id: 6, name: "Accessories", count: 20, icon: Tag, color: "bg-pink-100 text-pink-500" }
];

// Calculate total items
const totalItems = categories.reduce((sum, category) => sum + category.count, 0);

const CategoryCard = ({ category }: { category: any }) => {
  const percentage = Math.round((category.count / totalItems) * 100);
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className={`p-2 rounded-md ${category.color}`}>
            <category.icon className="h-5 w-5" />
          </div>
          <div className="text-2xl font-bold">{category.count}</div>
        </div>
        <CardTitle className="text-base mt-2">{category.name}</CardTitle>
      </CardHeader>
      <CardContent className="pb-2">
        <Progress value={percentage} className="h-2" />
        <p className="text-xs text-muted-foreground mt-2">{percentage}% of your wardrobe</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full">View Items</Button>
      </CardFooter>
    </Card>
  );
};

const Categories = () => {
  return (
    <div className="animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Categories</h2>
          <p className="text-muted-foreground">Organize and browse your wardrobe by categories</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          <span>New Category</span>
        </Button>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map(category => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
