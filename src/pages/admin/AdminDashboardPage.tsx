import { Link } from "react-router-dom";
import {
  Users, GraduationCap, Activity, FileText, Calendar, BookOpen, ArrowUpRight, TrendingUp, MapPin,
  ChevronRight, AlertTriangle, CheckSquare, Megaphone, Bell, UserPlus, Plus
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, AreaChart, Area } from "recharts";
import AdminDashboardHero from "@/components/admin/AdminDashboardHero";

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

const adminTasks = [
  { label: "Demandes d'accès", count: 4, icon: Users, path: "/admin/validations" },
  { label: "Rapports à valider", count: 3, icon: FileText, path: "/admin/reports" },
  { label: "Événements à approuver", count: 2, icon: Calendar, path: "/admin/events" },
];

const quickActions = [
  { label: "Ajouter un ambassadeur", icon: UserPlus, path: "/admin/ambassadors", color: "bg-primary/15 text-primary" },
  { label: "Publier une annonce", icon: Megaphone, path: "/admin/announcements", color: "bg-accent/15 text-accent" },
  { label: "Créer un événement", icon: Calendar, path: "/admin/events", color: "bg-secondary/15 text-secondary" },
  { label: "Ajouter une ressource", icon: BookOpen, path: "/admin/resources", color: "bg-highlight/15 text-highlight" },
];

const kpiCards = [
  { label: "Ambassadeurs actifs ce mois", value: "142", change: "+12", icon: Users, color: "bg-primary/15 text-primary" },
  { label: "Événements organisés", value: "12", change: "+2", icon: Calendar, color: "bg-accent/15 text-accent" },
  { label: "Rapports validés", value: "34", change: "+8", icon: FileText, color: "bg-secondary/15 text-secondary" },
  { label: "Taux d'engagement", value: "78%", change: "+5%", icon: TrendingUp, color: "bg-highlight/15 text-highlight" },
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
  { user: "Sara Bennani", initials: "SB", action: "a publié une nouvelle ressource", target: "", time: "Il y a 2h", type: "resource" },
  { user: "Amina El Fassi", initials: "AE", action: "a soumis un rapport d'activité", target: "", time: "Il y a 3h", type: "report" },
  { user: "Karim Tazi", initials: "KT", action: "a complété la validation mentorat", target: "Marrakech", time: "Il y a 4h", type: "validation" },
  { user: "Fatima Zahra Ouali", initials: "FZ", action: "a proposé un événement", target: "Rabat", time: "Il y a 5h", type: "event" },
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
      {/* Compact Hero */}
      <AdminDashboardHero />

      {/* Priority Alert Card */}
      <Card className="border-0 border-l-4 border-l-highlight shadow-card animate-fade-in" style={{ animationDelay: "0.03s", opacity: 0 }}>
        <CardContent className="p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-highlight/15 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-5 h-5 text-highlight" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-highlight">⚠ Action requise</p>
            <p className="text-sm text-muted-foreground mt-0.5">
              <span className="font-medium text-foreground">4 rapports</span> à valider · <span className="font-medium text-foreground">3 demandes d'accès</span> en attente
            </p>
          </div>
          <Link to="/admin/validations">
            <Button size="sm" className="shrink-0 rounded-lg text-xs h-8">
              Voir les validations
            </Button>
          </Link>
        </CardContent>
      </Card>

      {/* Admin Task List */}
      <section className="animate-fade-in" style={{ animationDelay: "0.06s", opacity: 0 }}>
        <h3 className="font-display font-semibold text-sm mb-2 flex items-center gap-2">
          <CheckSquare className="w-4 h-4 text-primary" /> Actions administrateur
        </h3>
        <Card className="border-0 shadow-card overflow-hidden">
          {adminTasks.map((task, i) => (
            <Link key={task.label} to={task.path}>
              <div className={`flex items-center gap-3 px-4 py-3 hover:bg-muted/50 transition-colors group ${i < adminTasks.length - 1 ? "border-b border-border/50" : ""}`}>
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <task.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="flex-1 text-sm font-medium">{task.label}</span>
                <Badge variant="secondary" className="text-xs font-bold">{task.count}</Badge>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </Card>
      </section>

      {/* Quick Actions */}
      <section className="animate-fade-in" style={{ animationDelay: "0.09s", opacity: 0 }}>
        <h3 className="font-display font-semibold text-sm mb-2 flex items-center gap-2">
          <Plus className="w-4 h-4 text-secondary" /> Actions rapides
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {quickActions.map((action) => (
            <Link key={action.label} to={action.path}>
              <Card className="border-0 shadow-card hover:shadow-elevated transition-all duration-200 group">
                <CardContent className="p-3 flex items-center gap-2.5">
                  <div className={`w-9 h-9 rounded-lg ${action.color} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                    <action.icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-medium leading-tight">{action.label}</span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* KPI Cards */}
      <section className="animate-fade-in" style={{ animationDelay: "0.12s", opacity: 0 }}>
        <h3 className="font-display font-semibold text-sm mb-2 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-secondary" /> Indicateurs clés
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {kpiCards.map((kpi) => (
            <Card key={kpi.label} className="border-0 shadow-card hover:shadow-elevated transition-all duration-200 group">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${kpi.color} group-hover:scale-105 transition-transform`}>
                    <kpi.icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-secondary flex items-center gap-0.5">
                    <TrendingUp className="w-3 h-3" />{kpi.change}
                  </span>
                </div>
                <p className="text-xl font-display font-bold">{kpi.value}</p>
                <p className="text-[11px] text-muted-foreground mt-0.5">{kpi.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Charts Row */}
      <section className="animate-fade-in" style={{ animationDelay: "0.15s", opacity: 0 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <Card className="border-0 shadow-card">
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-sm flex items-center gap-2">
                <Activity className="w-4 h-4 text-primary" /> Engagement hebdomadaire
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={weeklyEngagement}>
                  <XAxis dataKey="name" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ borderRadius: 10, border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", fontSize: 11 }} />
                  <Bar dataKey="ambassadeurs" fill="hsl(330, 43%, 31%)" radius={[3, 3, 0, 0]} name="Ambassadeurs" />
                  <Bar dataKey="mentors" fill="hsl(260, 50%, 55%)" radius={[3, 3, 0, 0]} name="Mentors" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-card">
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-sm flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-secondary" /> Croissance du réseau
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={monthlyGrowth}>
                  <XAxis dataKey="name" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ borderRadius: 10, border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", fontSize: 11 }} />
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

      {/* Regional Impact */}
      <section className="animate-fade-in" style={{ animationDelay: "0.18s", opacity: 0 }}>
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-display font-semibold text-sm flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" /> Impact par région
          </h3>
          <Link to="/admin/analytics" className="text-xs text-primary flex items-center gap-0.5 font-medium hover:gap-1.5 transition-all">
            Voir tout <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {regionActivity.map((region, i) => (
            <Card key={region.name} className={`shrink-0 w-52 border-0 border-l-4 ${i % 3 === 0 ? "border-l-primary" : i % 3 === 1 ? "border-l-secondary" : "border-l-accent"} shadow-card hover:shadow-elevated transition-all group`}>
              <CardContent className="p-3 space-y-2">
                <div className="flex items-center gap-2">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${i < 3 ? "bg-secondary/15 text-secondary" : "bg-muted text-muted-foreground"}`}>{i + 1}</div>
                  <h4 className="font-display font-semibold text-[11px] truncate">{region.name}</h4>
                </div>
                <div className="grid grid-cols-2 gap-1.5 text-center">
                  <div className="p-1 rounded bg-muted/50">
                    <p className="text-xs font-bold">{region.ambassadors}</p>
                    <p className="text-[8px] text-muted-foreground">Amb.</p>
                  </div>
                  <div className="p-1 rounded bg-muted/50">
                    <p className="text-xs font-bold">{region.activities}</p>
                    <p className="text-[8px] text-muted-foreground">Act.</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-[9px] mb-0.5">
                    <span className="text-muted-foreground">Score</span>
                    <span className="font-semibold">{region.score}%</span>
                  </div>
                  <Progress value={region.score} className="h-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Activity Feed */}
      <section className="animate-fade-in" style={{ animationDelay: "0.21s", opacity: 0 }}>
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-display font-semibold text-sm flex items-center gap-2">
            <Bell className="w-4 h-4 text-primary" /> Activité récente du réseau
          </h3>
        </div>
        <Card className="border-0 shadow-card overflow-hidden">
          {recentActivity.map((activity, i) => (
            <div key={i} className={`flex items-center gap-3 px-4 py-3 hover:bg-muted/30 transition-colors group ${i < recentActivity.length - 1 ? "border-b border-border/30" : ""}`}>
              <Avatar className="w-8 h-8 shrink-0">
                <AvatarFallback className="text-[10px] font-bold bg-primary/10 text-primary">{activity.initials}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-xs">
                  <span className="font-semibold">{activity.user}</span>{" "}
                  <span className="text-muted-foreground">{activity.action}</span>
                  {activity.target && <> · <span className="font-medium text-primary">{activity.target}</span></>}
                </p>
                <p className="text-[10px] text-muted-foreground mt-0.5">{activity.time}</p>
              </div>
              <Badge className={`${typeColors[activity.type]} border-0 text-[9px] shrink-0`}>
                {typeLabels[activity.type]}
              </Badge>
            </div>
          ))}
        </Card>
      </section>
    </div>
  );
};

export default AdminDashboardPage;
