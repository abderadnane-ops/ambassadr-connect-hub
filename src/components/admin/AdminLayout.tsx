import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard, Users, GraduationCap, ShieldCheck, CheckSquare, FileText, Target,
  Calendar, BookOpen, Megaphone, Award, BarChart3, Settings, LogOut, Shield,
  ChevronDown
} from "lucide-react";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel,
  SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton,
  SidebarProvider, SidebarHeader, SidebarFooter, SidebarTrigger
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import logoLight from "@/assets/citizin-logo.png";
import AdminBottomNav from "./AdminBottomNav";

const navGroups = [
  {
    label: "Général",
    items: [
      { title: "Tableau de bord", url: "/admin/dashboard", icon: LayoutDashboard },
    ],
  },
  {
    label: "Personnes",
    items: [
      { title: "Ambassadeurs", url: "/admin/ambassadors", icon: Users },
      { title: "Mentors", url: "/admin/mentors", icon: GraduationCap },
      { title: "Rôles & Permissions", url: "/admin/roles", icon: ShieldCheck },
    ],
  },
  {
    label: "Activités",
    items: [
      { title: "Rapports", url: "/admin/reports", icon: FileText },
      { title: "Validations", url: "/admin/validations", icon: CheckSquare },
      { title: "Suivi d'impact", url: "/admin/impact", icon: Target },
    ],
  },
  {
    label: "Contenu",
    items: [
      { title: "Événements", url: "/admin/events", icon: Calendar },
      { title: "Ressources", url: "/admin/resources", icon: BookOpen },
      { title: "Annonces", url: "/admin/announcements", icon: Megaphone },
    ],
  },
  {
    label: "Stratégie",
    items: [
      { title: "Reconnaissance", url: "/admin/recognition", icon: Award },
      { title: "Analytiques", url: "/admin/analytics", icon: BarChart3 },
    ],
  },
  {
    label: "Système",
    items: [
      { title: "Paramètres", url: "/admin/settings", icon: Settings },
    ],
  },
];

const allItems = navGroups.flatMap((g) => g.items);

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
            {navGroups.map((group) => {
              const isGroupActive = group.items.some((i) => location.pathname.startsWith(i.url));
              return (
                <SidebarGroup key={group.label}>
                  <Collapsible defaultOpen={isGroupActive || group.label === "Général"}>
                    <CollapsibleTrigger className="w-full">
                      <SidebarGroupLabel className="text-sidebar-foreground/50 flex items-center justify-between w-full cursor-pointer hover:text-sidebar-foreground/70 transition-colors">
                        {group.label}
                        <ChevronDown className="w-3 h-3 transition-transform group-data-[state=open]:rotate-180" />
                      </SidebarGroupLabel>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarGroupContent>
                        <SidebarMenu>
                          {group.items.map((item) => (
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
                    </CollapsibleContent>
                  </Collapsible>
                </SidebarGroup>
              );
            })}
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
              {allItems.find((i) => location.pathname.startsWith(i.url))?.title || "Administration"}
            </h1>
          </header>
          <main className="flex-1 overflow-auto bg-background p-6 pb-24 lg:pb-6">
            {children}
          </main>
        </div>
        <AdminBottomNav />
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
