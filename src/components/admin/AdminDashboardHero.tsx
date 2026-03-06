import { Shield, Users, Calendar, CheckSquare, TrendingUp, Activity, MapPin } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const AdminDashboardHero = () => {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Bonjour" : hour < 18 ? "Bon après-midi" : "Bonsoir";

  const metrics = [
    { icon: Users, value: "188", label: "Ambassadeurs", change: "+12", color: "text-secondary" },
    { icon: Calendar, value: "12", label: "Événements", change: "+2", color: "text-highlight" },
    { icon: CheckSquare, value: "15", label: "En attente", change: "", color: "text-white" },
    { icon: TrendingUp, value: "78%", label: "Engagement", change: "+5%", color: "text-secondary" },
  ];

  return (
    <div className="relative overflow-hidden rounded-2xl gradient-admin-hero px-5 py-4 text-primary-foreground">
      {/* Decorative */}
      <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-white/8" />
      <div className="absolute -bottom-8 -left-8 w-20 h-20 rounded-full bg-white/5" />

      <div className="relative z-10 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10 border-2 border-white/25 shrink-0">
            <AvatarFallback className="bg-white/20 text-primary-foreground font-bold text-sm">
              <Shield className="w-4 h-4" />
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="font-display text-base font-bold leading-tight">{greeting}, Administrateur</h1>
            <div className="flex items-center gap-1 text-white/60 text-xs mt-0.5">
              <MapPin className="w-3 h-3" />
              <span>Réseau National CITZEN</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm rounded-full px-2.5 py-1 shrink-0">
          <Activity className="w-3.5 h-3.5 text-secondary animate-pulse-glow" />
          <span className="text-[11px] font-semibold">En ligne</span>
        </div>
      </div>

      {/* Compact metrics row */}
      <div className="relative z-10 grid grid-cols-4 gap-2 mt-3">
        {metrics.map((m) => (
          <div key={m.label} className="bg-white/12 backdrop-blur-sm rounded-lg px-2.5 py-2 text-center">
            <m.icon className={`w-3.5 h-3.5 mx-auto mb-0.5 ${m.color}`} />
            <p className="font-display font-bold text-sm leading-none">{m.value}</p>
            <p className="text-[9px] text-white/60 mt-0.5">{m.label}</p>
            {m.change && <p className="text-[8px] text-secondary font-semibold">{m.change}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboardHero;
