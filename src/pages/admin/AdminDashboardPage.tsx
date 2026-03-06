import { Users, GraduationCap, Activity, FileText, Calendar, BookOpen, Clock, ArrowUpRight, TrendingUp, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, AreaChart, Area } from "recharts";

const stats = [
  { label: "Total ambassadeurs", value: "188", icon: Users, change: "+12", color: "bg-primary/15 text-primary" },
  { label: "Total mentors", value: "24", icon: GraduationCap, change: "+3", color: "bg-accent/15 text-accent" },
  { label: "Utilisateurs actifs (mois)", value: "142", icon: Activity, change: "+18", color: "bg-secondary/15 text-secondary" },
  { label: "Activités soumises", value: "37", icon: FileText, change: "+8", color: "bg-highlight/15 text-highlight" },
  { label: "Événements organisés", value: "12", icon: Calendar, change: "+2", color: "bg-primary/15 text-primary" },
  { label: "Ressources partagées", value: "56", icon: BookOpen, change: "+5", color: "bg-accent/15 text-accent" },
];

const weeklyEngagement = [
  { name: "Lun", ambassadeurs: 45, mentors: 12 },
  { name: "Mar", ambassadeurs: 52, mentors: 15 },
  { name: "Mer", ambassadeurs: 61, mentors: 18 },
  { name: "Jeu", ambassadeurs: 48, mentors: 14 },
  { name: "Ven", ambassadeurs: 55, mentors: 16 },
  { name: "Sam", ambassadeurs: 32, mentors: 8 },
  { name: "Dim", ambassadeurs: 28, mentors: 6 },
];

const monthlyGrowth = [
  { name: "Oct", value: 145 },
  { name: "Nov", value: 152 },
  { name: "Déc", value: 160 },
  { name: "Jan", value: 168 },
  { name: "Fév", value: 178 },
  { name: "Mar", value: 188 },
];

const regionActivity = [
  { name: "Casablanca-Settat", ambassadors: 42, activities: 12, score: 92 },
  { name: "Rabat-Salé-Kénitra", ambassadors: 38, activities: 10, score: 85 },
  { name: "Marrakech-Safi", ambassadors: 31, activities: 8, score: 72 },
  { name: "Fès-Meknès", ambassadors: 28, activities: 7, score: 68 },
  { name: "Tanger-Tétouan", ambassadors: 25, activities: 6, score: 61 },
  { name: "Souss-Massa", ambassadors: 22, activities: 5, score: 48 },
];

const recentActivity = [
  { user: "Hassan Alaoui", initials: "HA", action: "a organisé un atelier", target: "Casablanca", time: "Il y a 1h", type: "event" },
  { user: "Sara Benmoussa", initials: "SB", action: "a téléchargé une ressource de formation", target: "", time: "Il y a 2h", type: "resource" },
  { user: "Amina El Fassi", initials: "AE", action: "a complété la validation mentorat", target: "", time: "Il y a 3h", type: "validation" },
  { user: "Karim Tazi", initials: "KT", action: "a soumis un rapport d'activité", target: "Café Citoyen Marrakech", time: "Il y a 4h", type: "report" },
  { user: "Fatima Zahra Ouali", initials: "FZ", action: "a proposé un événement", target: "Lab Citoyens Rabat", time: "Il y a 5h", type: "event" },
  { user: "Omar Idrissi", initials: "OI", action: "a rejoint le réseau", target: "Fès-Meknès", time: "Il y a 6h", type: "join" },
  { user: "Nadia Chraibi", initials: "NC", action: "a complété sa formation", target: "Module Leadership", time: "Il y a 8h", type: "training" },
];

const typeColors: Record<string, string> = {
  event: "bg-accent/15 text-accent",
  resource: "bg-secondary/15 text-secondary",
  validation: "bg-highlight/15 text-highlight",
  report: "bg-primary/15 text-primary",
  join: "bg-secondary/15 text-secondary",
  training: "bg-accent/15 text-accent",
};

const typeLabels: Record<string, string> = {
  event: "Événement",
  resource: "Ressource",
  validation: "Validation",
  report: "Rapport",
  join: "Inscription",
  training: "Formation",
};

const AdminDashboardPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-bold">Tableau de bord</h2>
        <p className="text-sm text-muted-foreground mt-1">Vue d'ensemble du réseau ambassadeur CITZEN</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="border-0 shadow-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <Badge className="bg-secondary/15 text-secondary border-0 text-[10px] gap-0.5">
                  <TrendingUp className="w-3 h-3" />{stat.change}
                </Badge>
              </div>
              <p className="text-2xl font-display font-bold">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Engagement */}
        <Card className="border-0 shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="font-display text-base flex items-center gap-2">
              <Activity className="w-4 h-4 text-primary" />
              Engagement hebdomadaire
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={weeklyEngagement}>
                <XAxis dataKey="name" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ borderRadius: 12, border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", fontSize: 12 }}
                />
                <Bar dataKey="ambassadeurs" fill="hsl(330, 43%, 31%)" radius={[4, 4, 0, 0]} name="Ambassadeurs" />
                <Bar dataKey="mentors" fill="hsl(260, 50%, 55%)" radius={[4, 4, 0, 0]} name="Mentors" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Growth */}
        <Card className="border-0 shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="font-display text-base flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-secondary" />
              Croissance du réseau
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={monthlyGrowth}>
                <XAxis dataKey="name" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ borderRadius: 12, border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", fontSize: 12 }}
                />
                <defs>
                  <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(80, 62%, 52%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(80, 62%, 52%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="value" stroke="hsl(80, 62%, 52%)" fill="url(#growthGradient)" strokeWidth={2} name="Ambassadeurs" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Map + Activity Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Regional Impact */}
        <Card className="border-0 shadow-card lg:col-span-2">
          <CardHeader className="pb-3">
            <CardTitle className="font-display text-base flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              Carte d'impact civique national
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {regionActivity.map((region, i) => (
              <div key={region.name} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary shrink-0">{i + 1}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{region.name}</p>
                  <p className="text-[10px] text-muted-foreground">{region.ambassadors} amb. · {region.activities} act.</p>
                </div>
                <div className="w-20 h-2 rounded-full bg-muted overflow-hidden shrink-0">
                  <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${region.score}%` }} />
                </div>
                <span className="text-xs font-semibold w-8 text-right shrink-0">{region.score}</span>
              </div>
            ))}
            <p className="text-[10px] text-muted-foreground text-center pt-2">12 régions couvertes · 188 ambassadeurs actifs</p>
          </CardContent>
        </Card>

        {/* Recent Activity Feed */}
        <Card className="border-0 shadow-card lg:col-span-3">
          <CardHeader className="pb-3">
            <CardTitle className="font-display text-base flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              Activité récente de la plateforme
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
                        <> <span className="font-medium text-primary">{activity.target}</span></>
                      )}
                    </p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">{activity.time}</p>
                  </div>
                  <Badge className={`${typeColors[activity.type]} border-0 text-[10px] shrink-0`}>
                    {typeLabels[activity.type]}
                  </Badge>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground shrink-0" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
