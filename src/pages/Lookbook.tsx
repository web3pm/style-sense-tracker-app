
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ImageIcon, Plus } from "lucide-react";

const lookbookEntries = [
  { id: 1, title: "Summer Collection", date: "June 2023", image: "/placeholder.svg" },
  { id: 2, title: "Fall Favorites", date: "September 2023", image: "/placeholder.svg" },
  { id: 3, title: "Winter Essentials", date: "December 2023", image: "/placeholder.svg" }
];

const Lookbook = () => {
  return (
    <div className="animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Your Lookbook</h2>
          <p className="text-muted-foreground">Capture and showcase your style evolution</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          <span>New Entry</span>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {lookbookEntries.map(entry => (
          <Card key={entry.id} className="group overflow-hidden">
            <div className="relative h-80">
              <img 
                src={entry.image} 
                alt={entry.title} 
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-fashion-black/70 to-transparent flex items-end p-4">
                <div className="text-white">
                  <h3 className="font-medium text-lg">{entry.title}</h3>
                  <p className="text-sm text-white/80">{entry.date}</p>
                </div>
              </div>
              <Button size="sm" variant="secondary" className="absolute top-3 right-3 gap-1">
                <ImageIcon className="h-4 w-4" />
                <span>View</span>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Lookbook;
