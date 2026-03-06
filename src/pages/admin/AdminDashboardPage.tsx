import { Link } from "react-router-dom";
import {
  Users, GraduationCap, Activity, FileText, Calendar, BookOpen, Clock, ArrowUpRight, TrendingUp, MapPin,
  ChevronRight, AlertTriangle, CheckSquare, Target, Briefcase, Megaphone, Bell
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, AreaChart, Area } from "recharts";
import AdminDashboardHero from "@/components/admin/AdminDashboardHero";

const stats = [
  { label: "Total ambassadeurs", value: "188", icon: Users, change: "+12", color: "bg-primary/15 text-primary" },
  { label: "Total mentors", value: "24", icon: GraduationCap, change: "+3", color: "bg-accent/15 text-accent" },
  { label: "Utilisateurs actifs", value: "142", icon: Activity, change: "+18", color: "bg-secondary/15 text-secondary" },
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

const pendingActions = [
  { label: "Demandes d'accès", count: 4, icon: Users, path: "/admin/validations", color: "bg-highlight/15 text-highlight", border: "border-l-highlight" },
  { label: "Rapports à valider", count: 3, icon: FileText, path: "/admin/reports", color: "bg-primary/15 text-primary", border: "border-l-primary" },
  { label: "Événements en attente", count: 2, icon: Calendar, path: "/admin/events", color: "bg-accent/15 text-accent", border: "border-l-accent" },
];

const quickActions = [
  { label: "Validations", icon: CheckSquare, color: "bg-highlight text-highlight-foreground", path: "/admin/validations", desc: "Demandes en attente" },
  { label: "Annonces", icon: Megaphone, color: "bg-accent text-accent-foreground", path: "/admin/announcements", desc: "Publier une annonce" },
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
];

const typeColors: Record<string, string> = {
  event: "bg-accent/15 text-accent",
  resource: "bg-secondary/15 text-secondary",
  validation: "bg-highlight/15 text-highlight",
  report: "bg-primary/15 text-primary",
  join: "bg-secondary/15 text-secondary",
};

const typeLabels: Record<string, string> = {
  event: "Événement",
  resource: "Ressource",
  validation: "Validation",
  report: "Rapport",
  join: "Inscription",
};

const AdminDashboardPage = () => {
  return (
    <div className="space-y-5">
      {/* Hero */}
      <AdminDashboardHero />

      {/* Pending Actions - Urgent cards like ambassador dashboard */}
      {pendingActions.some((a) => a.count > 0) && (
        <div className="animate-fade-in" style={{ animationDelay: "0.05s", opacity: 0 }}>
          <div className="space-y-2">
            {pendingActions.filter((a) => a.count > 0).map((action) => (
              <Link key={action.label} to={action.path}>
                <Card className={`border-0 border-l-4 ${action.border} shadow-card hover:shadow-elevated transition-all duration-200 group overflow-hidden`}>
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${action.color} transition-transform duration-200 group-hover:scale-110`}>
                      <action.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm">{action.label}</p>
                      <p className="text-[10px] text-muted-foreground">{action.count} éléments en attente</p>
                    </div>
                    <Badge className={`${action.color} border-0 text-xs font-bold`}>{action.count}</Badge>
                    <ChevronRight className="w-4 h-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3 animate-fade-in" style={{ animationDelay: "0.08s", opacity: 0 }}>
        {quickActions.map((action) => (
          <Link key={action.label} to={action.path}>
            <Card className="border-0 shadow-card hover:shadow-elevated transition-all duration-200 group">
              <CardContent className="p-4 flex items-center gap-3">
                <div className={`w-11 h-11 rounded-xl ${action.color} flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110 group-hover:rotate-3`}>
                  <action.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{action.label}</p>
                  <p className="text-[10px] text-muted-foreground">{action.desc}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Stats Grid */}
      <section className="animate-fade-in" style={{ animationDelay: "0.12s", opacity: 0 }}>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-display font-semibold text-base flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-secondary" /> Indicateurs clés
          </h3>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
          {stats.map((stat) => (
            <Card key={stat.label} className="border-0 shadow-card hover:shadow-elevated transition-all duration-200 group">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.color} transition-transform duration-200 group-hover:scale-110`}>
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
      </section>

      {/* Charts Row */}
      <section className="animate-fade-in" style={{ animationDelay: "0.18s", opacity: 0 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Weekly Engagement */}
          <Card className="border-0 shadow-card hover:shadow-elevated transition-all duration-200">
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
                  <Tooltip contentStyle={{ borderRadius: 12, border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", fontSize: 12 }} />
                  <Bar dataKey="ambassadeurs" fill="hsl(330, 43%, 31%)" radius={[4, 4, 0, 0]} name="Ambassadeurs" />
                  <Bar dataKey="mentors" fill="hsl(260, 50%, 55%)" radius={[4, 4, 0, 0]} name="Mentors" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Growth */}
          <Card className="border-0 shadow-card hover:shadow-elevated transition-all duration-200">
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
                  <Tooltip contentStyle={{ borderRadius: 12, border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", fontSize: 12 }} />
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
      </section>

      {/* Regional Map + Activity Feed — Horizontal scroll cards for regions */}
      <section className="animate-fade-in" style={{ animationDelay: "0.24s", opacity: 0 }}>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-display font-semibold text-base flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" /> Impact par région
          </h3>
          <Link to="/admin/analytics" className="text-xs text-primary flex items-center gap-0.5 font-medium hover:gap-1.5 transition-all duration-200">
            Voir tout <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {regionActivity.map((region, i) => (
            <Card key={region.name} className={`shrink-0 w-56 border-0 border-l-4 ${i % 3 === 0 ? "border-l-primary" : i % 3 === 1 ? "border-l-secondary" : "border-l-accent"} shadow-card hover:shadow-elevated transition-all duration-200 group`}>
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${i < 3 ? "bg-secondary/15 text-secondary" : "bg-muted text-muted-foreground"}`}>{i + 1}</div>
                  <h4 className="font-display font-semibold text-xs truncate">{region.name}</h4>
                </div>
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="p-1.5 rounded-lg bg-muted/50">
                    <p className="text-sm font-bold">{region.ambassadors}</p>
                    <p className="text-[9px] text-muted-foreground">Amb.</p>
                  </div>
                  <div className="p-1.5 rounded-lg bg-muted/50">
                    <p className="text-sm font-bold">{region.activities}</p>
                    <p className="text-[9px] text-muted-foreground">Act.</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-[10px] mb-1">
                    <span className="text-muted-foreground">Score</span>
                    <span className="font-semibold">{region.score}%</span>
                  </div>
                  <Progress value={region.score} className="h-1.5" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Activity Feed */}
      <section className="animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-display font-semibold text-base flex items-center gap-2">
            <Bell className="w-4 h-4 text-primary" /> Activité récente
          </h3>
        </div>
        <div className="space-y-2">
          {recentActivity.map((activity, i) => (
            <Card key={i} className="border-0 shadow-card hover:shadow-elevated transition-all duration-200 group overflow-hidden">
              <CardContent className="p-4 flex items-center gap-3">
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
                <ArrowUpRight className="w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AdminDashboardPage;
