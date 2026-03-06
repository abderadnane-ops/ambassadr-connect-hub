import { BarChart3, TrendingUp, Users, Calendar, FileText, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const metrics = [
  { label: "Taux d'engagement", value: "78%", change: "+5%", icon: Activity, color: "bg-secondary/15 text-secondary" },
  { label: "Nouveaux ambassadeurs (mois)", value: "12", change: "+3", icon: Users, color: "bg-primary/15 text-primary" },
  { label: "Événements ce mois", value: "8", change: "+2", icon: Calendar, color: "bg-accent/15 text-accent" },
  { label: "Rapports soumis (mois)", value: "15", change: "+4", icon: FileText, color: "bg-highlight/15 text-highlight" },
];

const topRegions = [
  { name: "Casablanca-Settat", score: 92 },
  { name: "Rabat-Salé-Kénitra", score: 85 },
  { name: "Marrakech-Safi", score: 72 },
  { name: "Fès-Meknès", score: 68 },
  { name: "Tanger-Tétouan", score: 61 },
];

const topAmbassadors = [
  { name: "Amina El Fassi", events: 8, reports: 6, score: 95 },
  { name: "Fatima Zahra Ouali", events: 6, reports: 5, score: 88 },
  { name: "Hassan Alaoui", events: 5, reports: 7, score: 85 },
  { name: "Nadia Chraibi", events: 7, reports: 4, score: 82 },
  { name: "Karim Tazi", events: 4, reports: 3, score: 75 },
];

const AdminAnalyticsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-bold">Analytiques</h2>
        <p className="text-sm text-muted-foreground mt-1">Indicateurs de performance du réseau</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m) => (
          <Card key={m.label} className="border-0 shadow-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${m.color}`}>
                  <m.icon className="w-4 h-4" />
                </div>
                <Badge className="bg-secondary/15 text-secondary border-0 text-[10px] gap-0.5">
                  <TrendingUp className="w-3 h-3" />{m.change}
                </Badge>
              </div>
              <p className="text-2xl font-display font-bold">{m.value}</p>
              <p className="text-xs text-muted-foreground">{m.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Regions */}
        <Card className="border-0 shadow-card">
          <CardHeader>
            <CardTitle className="font-display text-base flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-primary" />Top régions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {topRegions.map((r, i) => (
              <div key={r.name} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary shrink-0">{i + 1}</span>
                <span className="flex-1 text-sm font-medium">{r.name}</span>
                <div className="w-24 h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${r.score}%` }} />
                </div>
                <span className="text-xs font-semibold w-8 text-right">{r.score}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Top Ambassadors */}
        <Card className="border-0 shadow-card">
          <CardHeader>
            <CardTitle className="font-display text-base flex items-center gap-2">
              <Users className="w-4 h-4 text-secondary" />Top ambassadeurs
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {topAmbassadors.map((a, i) => (
              <div key={a.name} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-secondary/15 flex items-center justify-center text-xs font-bold text-secondary shrink-0">{i + 1}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{a.name}</p>
                  <p className="text-[10px] text-muted-foreground">{a.events} événements · {a.reports} rapports</p>
                </div>
                <Badge className="bg-secondary/15 text-secondary border-0 text-[10px]">{a.score}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminAnalyticsPage;
