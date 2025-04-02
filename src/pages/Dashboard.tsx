
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shirt, ShoppingBag, Image, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const StatCard = ({ title, value, icon: Icon, color, linkTo }: {
  title: string;
  value: number;
  icon: any;
  color: string;
  linkTo: string;
}) => (
  <Card className="fashion-card">
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <Icon className={`h-5 w-5 ${color}`} />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
    </CardContent>
    <CardFooter className="pt-0">
      <Link to={linkTo}>
        <Button variant="outline" size="sm">View all</Button>
      </Link>
    </CardFooter>
  </Card>
);

const RecentCard = ({ title, date, imageUrl }: {
  title: string;
  date: string;
  imageUrl: string;
}) => (
  <div className="flex items-center gap-4 p-4 rounded-lg bg-card hover:bg-secondary/50 transition-colors">
    <div className="h-16 w-16 bg-muted rounded-md overflow-hidden">
      <img src={imageUrl} alt={title} className="h-full w-full object-cover" />
    </div>
    <div>
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-muted-foreground">{date}</p>
    </div>
  </div>
);

const Dashboard = () => {
  // Sample data
  const stats = [
    { title: "Clothing Items", value: 54, icon: Shirt, color: "text-blue-500", linkTo: "/wardrobe" },
    { title: "Outfits Created", value: 12, icon: ShoppingBag, color: "text-fashion-accent", linkTo: "/outfits" },
    { title: "Lookbook Entries", value: 8, icon: Image, color: "text-purple-500", linkTo: "/lookbook" },
    { title: "Planned Outfits", value: 3, icon: Calendar, color: "text-green-500", linkTo: "/calendar" }
  ];

  const recentOutfits = [
    { title: "Summer Casual", date: "Added 2 days ago", imageUrl: "/placeholder.svg" },
    { title: "Office Business", date: "Added 5 days ago", imageUrl: "/placeholder.svg" },
    { title: "Evening Event", date: "Added 1 week ago", imageUrl: "/placeholder.svg" }
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold tracking-tight mb-6">Welcome to Style Sense</h2>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Outfits</CardTitle>
            <CardDescription>Your recently created outfit combinations.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentOutfits.map((outfit, i) => (
              <RecentCard key={i} {...outfit} />
            ))}
          </CardContent>
          <CardFooter>
            <Link to="/outfits">
              <Button>Create New Outfit</Button>
            </Link>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Get Started</CardTitle>
            <CardDescription>Follow these steps to build your virtual wardrobe.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="rounded-full h-8 w-8 flex items-center justify-center bg-fashion-accent/20 text-fashion-accent">1</div>
              <div>
                <h3 className="font-medium">Add Your Clothing Items</h3>
                <p className="text-sm text-muted-foreground">Start by capturing photos of your favorite pieces.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-full h-8 w-8 flex items-center justify-center bg-fashion-accent/20 text-fashion-accent">2</div>
              <div>
                <h3 className="font-medium">Create Outfits</h3>
                <p className="text-sm text-muted-foreground">Combine items to build your favorite looks.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-full h-8 w-8 flex items-center justify-center bg-fashion-accent/20 text-fashion-accent">3</div>
              <div>
                <h3 className="font-medium">Plan Your Week</h3>
                <p className="text-sm text-muted-foreground">Schedule outfits for upcoming events or daily wear.</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link to="/wardrobe">
              <Button>Add Clothing Item</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
