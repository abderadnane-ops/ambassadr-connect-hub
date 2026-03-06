import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard, Users, CheckSquare, Calendar, FileText,
  Briefcase, MessageSquare, MapPin, BarChart3, Settings, LogOut, Shield
} from "lucide-react";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel,
  SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton,
  SidebarProvider, SidebarHeader, SidebarFooter, SidebarTrigger
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import logoLight from "@/assets/citizin-logo.png";

const navItems = [
  { title: "Dashboard", url: "/admin/dashboard", icon: LayoutDashboard },
  { title: "Ambassadeurs", url: "/admin/ambassadors", icon: Users },
  { title: "Validations", url: "/admin/validations", icon: CheckSquare },
  { title: "Événements", url: "/admin/events", icon: Calendar },
  { title: "Rapports", url: "/admin/reports", icon: FileText },
  { title: "Opportunités", url: "/admin/opportunities", icon: Briefcase },
  { title: "Communications", url: "/admin/communications", icon: MessageSquare },
  { title: "Régions", url: "/admin/regions", icon: MapPin },
  { title: "Analytiques", url: "/admin/analytics", icon: BarChart3 },
  { title: "Paramètres", url: "/admin/settings", icon: Settings },
];

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar collapsible="icon">
          <SidebarHeader className="p-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
                <Shield className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="group-data-[collapsible=icon]:hidden">
                <img src={logoLight} alt="CITZEN" className="h-6 invert" />
                <p className="text-[10px] text-sidebar-foreground/60 mt-0.5">Administration</p>
              </div>
            </div>
          </SidebarHeader>
          <Separator className="bg-sidebar-border mx-2" />
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel className="text-sidebar-foreground/50">Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        isActive={location.pathname === item.url}
                        tooltip={item.title}
                      >
                        <NavLink to={item.url}>
                          <item.icon className="w-4 h-4" />
                          <span>{item.title}</span>
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Déconnexion">
                  <NavLink to="/">
                    <LogOut className="w-4 h-4" />
                    <span>Déconnexion</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-14 border-b border-border flex items-center px-4 gap-3 bg-card shrink-0">
            <SidebarTrigger />
            <Separator orientation="vertical" className="h-6" />
            <h1 className="font-display font-semibold text-sm text-foreground">
              {navItems.find((i) => location.pathname.startsWith(i.url))?.title || "Administration"}
            </h1>
          </header>
          <main className="flex-1 overflow-auto bg-background p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
