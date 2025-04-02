
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter,
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem 
} from "@/components/ui/sidebar";
import { Shirt, ShoppingBag, Images, Calendar, Heart, Tag } from "lucide-react";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    title: "Wardrobe",
    icon: Shirt,
    path: "/wardrobe"
  },
  {
    title: "Outfits",
    icon: ShoppingBag,
    path: "/outfits"
  },
  {
    title: "Lookbook",
    icon: Images,
    path: "/lookbook"
  },
  {
    title: "Calendar",
    icon: Calendar,
    path: "/calendar"
  },
  {
    title: "Favorites",
    icon: Heart,
    path: "/favorites"
  },
  {
    title: "Categories",
    icon: Tag,
    path: "/categories"
  }
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <h2 className="text-xl font-semibold tracking-tight">Style Sense</h2>
        <p className="text-xs text-muted-foreground">Track your fashion collection</p>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.path}
                      className={({ isActive }) => 
                        `flex items-center gap-3 w-full ${isActive ? 'text-fashion-accent font-medium' : ''}`
                      }
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <p className="text-xs text-muted-foreground">© 2023 Style Sense</p>
      </SidebarFooter>
    </Sidebar>
  );
}
