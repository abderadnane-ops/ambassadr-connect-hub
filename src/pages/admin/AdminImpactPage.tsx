import { Target, TrendingUp, Users, Calendar, FileText, MapPin, CheckCircle, XCircle, MoreHorizontal, Eye, Edit, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";

const impactStats = [
  { label: "Activités totales", value: "247", change: "+37", icon: FileText, color: "bg-primary/15 text-primary" },
  { label: "Taux de validation", value: "84%", change: "+5%", icon: CheckCircle, color: "bg-secondary/15 text-secondary" },
  { label: "Citoyens touchés", value: "3,420", change: "+280", icon: Users, color: "bg-accent/15 text-accent" },
  { label: "Régions actives", value: "12/12", change: "", icon: MapPin, color: "bg-highlight/15 text-highlight" },
];

const activities = [
  { id: "1", ambassador: "Amina El Fassi", initials: "AE", type: "Atelier", region: "Casablanca-Settat", title: "Atelier Leadership Jeunes", status: "approved", points: 80, date: "10 Mars 2026" },
  { id: "2", ambassador: "Karim Tazi", initials: "KT", type: "Initiative communautaire", region: "Marrakech-Safi", title: "Campagne propreté quartier", status: "pending", points: 60, date: "8 Mars 2026" },
  { id: "3", ambassador: "Fatima Zahra Ouali", initials: "FZ", type: "Formation", region: "Rabat-Salé-Kénitra", title: "Formation gouvernance locale", status: "approved", points: 100, date: "6 Mars 2026" },
  { id: "4", ambassador: "Omar Idrissi", initials: "OI", type: "Plaidoyer", region: "Fès-Meknès", title: "Plaidoyer accès à l'eau", status: "rejected", points: 0, date: "5 Mars 2026" },
  { id: "5", ambassador: "Nadia Chraibi", initials: "NC", type: "Atelier", region: "Tanger-Tétouan", title: "Café Citoyen Tanger", status: "pending", points: 70, date: "4 Mars 2026" },
  { id: "6", ambassador: "Hassan Alaoui", initials: "HA", type: "Initiative communautaire", region: "Fès-Meknès", title: "Projet recyclage Fès", status: "approved", points: 90, date: "2 Mars 2026" },
];

const statusConfig: Record<string, { label: string; className: string }> = {
  approved: { label: "Approuvé", className: "bg-secondary/15 text-secondary" },
  pending: { label: "En attente", className: "bg-highlight/15 text-highlight" },
  rejected: { label: "Rejeté", className: "bg-destructive/15 text-destructive" },
};

const AdminImpactPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-bold">Suivi d'impact</h2>
        <p className="text-sm text-muted-foreground mt-1">Monitoring des activités et de l'impact du réseau</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {impactStats.map((stat) => (
          <Card key={stat.label} className="border-0 shadow-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${stat.color}`}><stat.icon className="w-4 h-4" /></div>
                {stat.change && (
                  <Badge className="bg-secondary/15 text-secondary border-0 text-[10px] gap-0.5"><TrendingUp className="w-3 h-3" />{stat.change}</Badge>
                )}
              </div>
              <p className="text-2xl font-display font-bold">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Activities list */}
      <Card className="border-0 shadow-card">
        <CardHeader className="pb-3">
          <CardTitle className="font-display text-base flex items-center gap-2">
            <Target className="w-4 h-4 text-primary" />
            Activités soumises
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-border">
            {activities.map((activity) => {
              const sc = statusConfig[activity.status];
              return (
                <div key={activity.id} className="px-6 py-4 flex items-center gap-4 hover:bg-muted/50 transition-colors">
                  <Avatar className="w-9 h-9 shrink-0">
                    <AvatarFallback className="text-xs font-bold bg-primary/10 text-primary">{activity.initials}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold">{activity.title}</p>
                    <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground flex-wrap">
                      <span>{activity.ambassador}</span>
                      <Badge className="bg-muted text-muted-foreground border-0 text-[9px]">{activity.type}</Badge>
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{activity.region}</span>
                      <span>{activity.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {activity.points > 0 && <span className="text-xs font-bold text-primary">{activity.points} pts</span>}
                    <Badge className={`${sc.className} border-0 text-[10px]`}>{sc.label}</Badge>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0"><MoreHorizontal className="w-4 h-4" /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem><Eye className="w-4 h-4 mr-2" />Voir détails</DropdownMenuItem>
                      <DropdownMenuItem><CheckCircle className="w-4 h-4 mr-2" />Approuver</DropdownMenuItem>
                      <DropdownMenuItem><Edit className="w-4 h-4 mr-2" />Modifier les points</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive"><Trash2 className="w-4 h-4 mr-2" />Supprimer</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminImpactPage;
