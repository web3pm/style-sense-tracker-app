
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 p-4 md:p-6">
          <div className="flex justify-between items-center mb-8">
            <SidebarTrigger />
            <h1 className="text-3xl font-bold tracking-tight">Style Sense</h1>
            <div></div> {/* Spacer for alignment */}
          </div>
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}
