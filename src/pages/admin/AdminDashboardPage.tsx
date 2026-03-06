import { Users, MapPin, FileText, CheckSquare, Calendar, Clock, ArrowUpRight, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const stats = [
  { label: "Total ambassadeurs", value: "247", icon: Users, change: "+12", color: "bg-primary/15 text-primary" },
  { label: "Régions couvertes", value: "12", icon: MapPin, change: "+1", color: "bg-secondary/15 text-secondary" },
  { label: "Rapports soumis", value: "89", icon: FileText, change: "+8", color: "bg-accent/15 text-accent" },
  { label: "Validations en attente", value: "15", icon: CheckSquare, change: "", color: "bg-highlight/15 text-highlight" },
  { label: "Événements à venir", value: "6", icon: Calendar, change: "+2", color: "bg-primary/15 text-primary" },
];

const recentActivity = [
  { user: "Amina El Fassi", initials: "AE", action: "a soumis un rapport", target: "Café Citoyen Casablanca", time: "Il y a 2h", type: "report" },
  { user: "Karim Tazi", initials: "KT", action: "a demandé l'accès", target: "Ambassadeur - Marrakech", time: "Il y a 3h", type: "request" },
  { user: "Fatima Zahra Ouali", initials: "FZ", action: "a proposé un événement", target: "Lab Citoyens Rabat", time: "Il y a 5h", type: "event" },
  { user: "Omar Idrissi", initials: "OI", action: "a complété sa formation", target: "Module Leadership", time: "Il y a 6h", type: "training" },
  { user: "Nadia Chraibi", initials: "NC", action: "a mis à jour son profil", target: "", time: "Il y a 8h", type: "profile" },
  { user: "Hassan Alaoui", initials: "HA", action: "a soumis un rapport", target: "Café Citoyen Fès", time: "Il y a 1j", type: "report" },
];

const typeColors: Record<string, string> = {
  report: "bg-accent/15 text-accent",
  request: "bg-highlight/15 text-highlight",
  event: "bg-secondary/15 text-secondary",
  training: "bg-primary/15 text-primary",
  profile: "bg-muted text-muted-foreground",
};

const AdminDashboardPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-bold">Tableau de bord</h2>
        <p className="text-sm text-muted-foreground mt-1">Vue d'ensemble du réseau ambassadeur</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="border-0 shadow-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                {stat.change && (
                  <Badge className="bg-secondary/15 text-secondary border-0 text-[10px] gap-0.5">
                    <TrendingUp className="w-3 h-3" />{stat.change}
                  </Badge>
                )}
              </div>
              <p className="text-2xl font-display font-bold">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <Card className="border-0 shadow-card">
        <CardHeader className="pb-3">
          <CardTitle className="font-display text-base flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            Activité récente
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-border">
            {recentActivity.map((activity, i) => (
              <div key={i} className="px-6 py-3.5 flex items-center gap-3 hover:bg-muted/50 transition-colors">
                <Avatar className="w-9 h-9 shrink-0">
                  <AvatarFallback className="text-xs font-bold bg-primary/10 text-primary">{activity.initials}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm">
                    <span className="font-semibold">{activity.user}</span>{" "}
                    <span className="text-muted-foreground">{activity.action}</span>
                    {activity.target && (
                      <>
                        {" "}<span className="font-medium text-primary">{activity.target}</span>
                      </>
                    )}
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{activity.time}</p>
                </div>
                <Badge className={`${typeColors[activity.type]} border-0 text-[10px] shrink-0`}>
                  {activity.type === "report" ? "Rapport" : activity.type === "request" ? "Demande" : activity.type === "event" ? "Événement" : activity.type === "training" ? "Formation" : "Profil"}
                </Badge>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground shrink-0" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboardPage;
