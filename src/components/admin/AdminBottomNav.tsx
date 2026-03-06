import { LayoutDashboard, Users, FileText, Calendar, Settings } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const tabs = [
  { path: "/admin/dashboard", icon: LayoutDashboard, label: "Tableau" },
  { path: "/admin/ambassadors", icon: Users, label: "Réseau" },
  { path: "/admin/reports", icon: FileText, label: "Activités" },
  { path: "/admin/events", icon: Calendar, label: "Contenu" },
  { path: "/admin/settings", icon: Settings, label: "Système" },
];

const AdminBottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-border/50 lg:hidden">
      <div className="flex items-center justify-around h-16 px-2">
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path;
          return (
            <button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              className={cn(
                "flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all relative",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {isActive && (
                <span className="absolute -top-1 w-8 h-1 rounded-full bg-primary" />
              )}
              <tab.icon className={cn("w-5 h-5", isActive && "stroke-[2.5]")} />
              <span className={cn("text-[10px] font-medium", isActive && "font-bold")}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
      <div className="h-[env(safe-area-inset-bottom)]" />
    </nav>
  );
};

export default AdminBottomNav;
