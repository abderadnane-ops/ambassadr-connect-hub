import { NavLink, useLocation } from "react-router-dom";
import BottomNav from "@/components/layout/BottomNav";
import { useState } from "react";
import {
  Home, Users, Briefcase, MessageCircle, User, Search, Bell, LogOut,
  Coffee, Share2, MessageSquarePlus, ClipboardList, ChevronDown, Settings,
  GraduationCap, History, MapPin, CheckSquare
} from "lucide-react";
import { useMentor } from "@/hooks/use-mentor";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel,
  SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton,
  SidebarProvider, SidebarHeader, SidebarFooter, SidebarTrigger
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import citizinLogoDark from "@/assets/citizin-logo-dark.png";
import profileAvatar from "@/assets/profile-avatar.jpg";

const baseNavGroups = [
  {
    label: "PRINCIPAL",
    items: [
      { title: "Accueil", url: "/dashboard", icon: Home },
      { title: "Hub", url: "/hub", icon: MessageCircle },
    ],
  },
  {
    label: "RÉSEAU",
    items: [
      { title: "Réseau", url: "/network", icon: Users },
      { title: "Ressources", url: "/resources", icon: Briefcase },
    ],
  },
  {
    label: "ACTIONS",
    items: [
      { title: "Créer un événement", url: "/event-application", icon: Coffee },
      { title: "Soumettre une activité", url: "/event-report", icon: ClipboardList },
    ],
  },
  {
    label: "MON COMPTE",
    items: [
      { title: "Mon profil", url: "/profile", icon: User },
    ],
  },
];

const mentorNavGroup = {
  label: "MENTORAT",
  items: [
    { title: "Validations", url: "/validation", icon: CheckSquare },
    { title: "Mes mentorés", url: "/mentees", icon: GraduationCap },
    { title: "Activité régionale", url: "/regional-activity", icon: MapPin },
    { title: "Historique", url: "/validation-history", icon: History },
  ],
};

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);
  const { isMentor } = useMentor();

  const navGroups = isMentor
    ? [...baseNavGroups.slice(0, 2), mentorNavGroup, ...baseNavGroups.slice(2)]
    : baseNavGroups;
  const allItems = navGroups.flatMap((g) => g.items);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar collapsible="icon">
          <SidebarHeader className="p-4">
            <div className="flex items-center gap-2">
              <img src={citizinLogoDark} alt="CITZEN" className="h-8 w-auto object-contain" />
            </div>
          </SidebarHeader>
          <Separator className="bg-sidebar-border mx-2" />
          <SidebarContent>
            {navGroups.map((group, gi) => {
              const isGroupActive = group.items.some((i) => location.pathname.startsWith(i.url));
              return (
                <SidebarGroup key={group.label}>
                  <Collapsible defaultOpen={isGroupActive || group.label === "PRINCIPAL"}>
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
              {allItems.find((i) => location.pathname.startsWith(i.url))?.title || "CITZEN"}
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
              <span className="absolute top-1 right-1 w-2 h-2 bg-secondary rounded-full animate-pulse" />
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 rounded-lg hover:bg-muted px-2 py-1 transition-colors">
                  <Avatar className="w-7 h-7">
                    <AvatarImage src={profileAvatar} />
                    <AvatarFallback className="bg-primary/15 text-primary text-xs font-bold">AC</AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <NavLink to="/profile" className="cursor-pointer">
                    <User className="w-4 h-4 mr-2" /> Mon profil
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

          <main className="flex-1 overflow-auto bg-background p-6 pb-20 lg:pb-6">
            {children}
          </main>
          <BottomNav />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;
