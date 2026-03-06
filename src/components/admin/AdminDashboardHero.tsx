import { Shield, Users, Calendar, FileText, CheckSquare, MapPin, TrendingUp, Activity } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const AdminDashboardHero = () => {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Bonjour" : hour < 18 ? "Bon après-midi" : "Bonsoir";

  return (
    <div className="relative overflow-hidden rounded-2xl gradient-admin-hero p-5 text-primary-foreground animate-fade-in">
      {/* Decorative circles */}
      <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10 blur-sm" />
      <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/5" />
      <div className="absolute top-1/2 right-12 w-16 h-16 rounded-full bg-white/5" />

      <div className="relative z-10 flex items-start gap-4">
        {/* Avatar */}
        <Avatar className="w-14 h-14 border-2 border-white/30 shadow-elevated shrink-0 transition-transform duration-300 hover:scale-110">
          <AvatarFallback className="bg-white/20 text-primary-foreground font-display font-bold text-lg">
            <Shield className="w-6 h-6" />
          </AvatarFallback>
        </Avatar>

        <div className="flex-1 min-w-0">
          <p className="text-white/70 text-sm">{greeting},</p>
          <h1 className="font-display text-xl font-bold mt-0.5">Administrateur 👋</h1>
          <div className="flex items-center gap-1.5 mt-1 text-white/70 text-xs">
            <MapPin className="w-3 h-3" />
            <span>Réseau National CITZEN</span>
          </div>
        </div>

        {/* Network pulse */}
        <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5 shrink-0 transition-transform duration-200 hover:scale-105">
          <Activity className="w-4 h-4 text-secondary animate-pulse-glow" />
          <span className="text-xs font-bold">En ligne</span>
        </div>
      </div>

      {/* Quick stats */}
      <div className="relative z-10 grid grid-cols-4 gap-3 mt-5">
        <div className="bg-white/15 backdrop-blur-sm rounded-xl p-3 text-center transition-transform duration-200 hover:scale-105 hover:bg-white/20">
          <Users className="w-4 h-4 mx-auto mb-1 text-secondary" />
          <p className="font-display font-bold text-lg leading-none">188</p>
          <p className="text-[10px] text-white/70 mt-0.5">Ambassadeurs</p>
        </div>
        <div className="bg-white/15 backdrop-blur-sm rounded-xl p-3 text-center transition-transform duration-200 hover:scale-105 hover:bg-white/20">
          <Calendar className="w-4 h-4 mx-auto mb-1 text-highlight" />
          <p className="font-display font-bold text-lg leading-none">12</p>
          <p className="text-[10px] text-white/70 mt-0.5">Événements</p>
        </div>
        <div className="bg-white/15 backdrop-blur-sm rounded-xl p-3 text-center transition-transform duration-200 hover:scale-105 hover:bg-white/20">
          <CheckSquare className="w-4 h-4 mx-auto mb-1 text-white" />
          <p className="font-display font-bold text-lg leading-none">15</p>
          <p className="text-[10px] text-white/70 mt-0.5">En attente</p>
        </div>
        <div className="bg-white/15 backdrop-blur-sm rounded-xl p-3 text-center transition-transform duration-200 hover:scale-105 hover:bg-white/20">
          <TrendingUp className="w-4 h-4 mx-auto mb-1 text-secondary" />
          <p className="font-display font-bold text-lg leading-none">78%</p>
          <p className="text-[10px] text-white/70 mt-0.5">Engagement</p>
        </div>
      </div>

      {/* Alert banner */}
      <div className="relative z-10 mt-4 bg-white/10 backdrop-blur-sm rounded-lg px-3.5 py-2.5 flex items-center gap-3 transition-all duration-200 hover:bg-white/15">
        <div className="w-8 h-8 rounded-lg bg-highlight/30 flex items-center justify-center shrink-0">
          <FileText className="w-4 h-4 text-highlight" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[10px] text-white/60">Action requise</p>
          <p className="text-sm font-semibold line-clamp-1">4 rapports et 3 demandes d'accès en attente de validation</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardHero;
