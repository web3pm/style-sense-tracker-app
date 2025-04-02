
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Sample planned outfits
const plannedOutfits = [
  { date: "2023-05-15", outfit: "Business Meeting", occasion: "Work", image: "/placeholder.svg" },
  { date: "2023-05-17", outfit: "Casual Friday", occasion: "Work", image: "/placeholder.svg" },
  { date: "2023-05-20", outfit: "Weekend Brunch", occasion: "Social", image: "/placeholder.svg" }
];

const Calendar = () => {
  // Current month and year for display
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });
  const currentYear = new Date().getFullYear();

  return (
    <div className="animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Outfit Calendar</h2>
          <p className="text-muted-foreground">Plan and schedule your outfits</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          <span>Plan Outfit</span>
        </Button>
      </div>
      
      <Card className="mb-8">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>{currentMonth} {currentYear}</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Previous</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-2 text-center font-medium mb-2">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {/* Calendar days would be dynamically generated */}
            {Array.from({ length: 35 }).map((_, index) => (
              <div 
                key={index} 
                className="aspect-square border rounded-md p-1 flex flex-col items-center"
              >
                <div className="text-sm font-medium">{(index % 31) + 1}</div>
                {/* Example of a day with a planned outfit */}
                {index === 14 && (
                  <div className="mt-1 w-full">
                    <Badge variant="outline" className="w-full flex justify-center text-xs bg-fashion-accent/10 text-fashion-accent">
                      Work
                    </Badge>
                  </div>
                )}
                {index === 19 && (
                  <div className="mt-1 w-full">
                    <Badge variant="outline" className="w-full flex justify-center text-xs bg-purple-500/10 text-purple-500">
                      Social
                    </Badge>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <div>
        <h3 className="text-xl font-medium mb-4">Upcoming Planned Outfits</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plannedOutfits.map((plan, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="h-40 relative">
                <img src={plan.image} alt={plan.outfit} className="h-full w-full object-cover" />
                <Badge className="absolute top-2 right-2">{plan.occasion}</Badge>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {new Date(plan.date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
                  </span>
                </div>
                <h3 className="font-medium">{plan.outfit}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
