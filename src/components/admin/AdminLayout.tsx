import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  LayoutDashboard, Users, GraduationCap, ShieldCheck, CheckSquare, FileText, Target,
  Calendar, BookOpen, Megaphone, Award, BarChart3, Settings, LogOut, Shield,
  ChevronDown, Search, Bell
} from "lucide-react";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel,
  SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton,
  SidebarProvider, SidebarHeader, SidebarFooter, SidebarTrigger
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import logoLight from "@/assets/citizin-logo.png";

const navGroups = [
  {
    label: "GÉNÉRAL",
    items: [
      { title: "Tableau de bord", url: "/admin/dashboard", icon: LayoutDashboard },
    ],
  },
  {
    label: "PERSONNES",
    items: [
      { title: "Ambassadeurs", url: "/admin/ambassadors", icon: Users },
      { title: "Mentors", url: "/admin/mentors", icon: GraduationCap },
    ],
  },
  {
    label: "ACTIVITÉS",
    items: [
      { title: "Rapports", url: "/admin/reports", icon: FileText },
      { title: "Validations", url: "/admin/validations", icon: CheckSquare },
      { title: "Événements", url: "/admin/events", icon: Calendar },
    ],
  },
  {
    label: "CONTENU",
    items: [
      { title: "Ressources", url: "/admin/resources", icon: BookOpen },
      { title: "Annonces", url: "/admin/announcements", icon: Megaphone },
    ],
  },
  {
    label: "STRATÉGIE",
    items: [
      { title: "Analytics", url: "/admin/analytics", icon: BarChart3 },
      { title: "Impact territorial", url: "/admin/impact", icon: Target },
    ],
  },
  {
    label: "SYSTÈME",
    items: [
      { title: "Paramètres", url: "/admin/settings", icon: Settings },
      { title: "Rôles et accès", url: "/admin/roles", icon: ShieldCheck },
    ],
  },
];

const allItems = navGroups.flatMap((g) => g.items);

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);

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
            {navGroups.map((group, gi) => {
              const isGroupActive = group.items.some((i) => location.pathname.startsWith(i.url));
              return (
                <SidebarGroup key={group.label}>
                  <Collapsible defaultOpen={isGroupActive || group.label === "GÉNÉRAL"}>
                    <CollapsibleTrigger className="w-full">
                      <SidebarGroupLabel className="text-[10px] tracking-wider text-sidebar-foreground/40 flex items-center justify-between w-full cursor-pointer hover:text-sidebar-foreground/60 transition-colors">
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
                  {gi < navGroups.length - 1 && (
                    <Separator className="bg-sidebar-border/50 mx-1 my-1" />
                  )}
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

            <div className="flex-1" />

            {searchOpen ? (
              <div className="flex-1 max-w-xs animate-fade-in">
                <Input
                  placeholder="Rechercher..."
                  className="h-8 text-xs bg-muted/50 border-border/50"
                  autoFocus
                  onBlur={() => setSearchOpen(false)}
                />
              </div>
            ) : (
              <button onClick={() => setSearchOpen(true)} className="p-2 rounded-lg hover:bg-muted transition-colors">
                <Search className="w-4 h-4 text-muted-foreground" />
              </button>
            )}

            <button className="p-2 rounded-lg hover:bg-muted transition-colors relative">
              <Bell className="w-4 h-4 text-muted-foreground" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-highlight rounded-full" />
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 rounded-lg hover:bg-muted px-2 py-1 transition-colors">
                  <Avatar className="w-7 h-7">
                    <AvatarFallback className="bg-primary/15 text-primary text-xs font-bold">
                      <Shield className="w-3.5 h-3.5" />
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-xs font-medium hidden lg:inline">Admin</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <NavLink to="/admin/settings" className="cursor-pointer">
                    <Settings className="w-4 h-4 mr-2" /> Paramètres
                  </NavLink>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <NavLink to="/" className="cursor-pointer text-destructive">
                    <LogOut className="w-4 h-4 mr-2" /> Déconnexion
                  </NavLink>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
