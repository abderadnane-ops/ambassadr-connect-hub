import { Link } from "react-router-dom";
import {
  Users, Briefcase, FolderOpen, MapPin, AlertTriangle, ArrowRight,
  Newspaper, ChevronRight, BookOpen, Calendar, TrendingUp,
  Target, Clock, BarChart3, Activity, Flame, Heart, Coffee, FileText
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { announcements, opportunities, projects, regions } from "@/data/mock-data";
import FeedPage from "./FeedPage";

// Personal mock data
const myProfile = {
  name: "Amina",
  region: "Rabat-Salé-Kénitra",
  points: 2450,
  rank: 1,
  totalAmbassadors: 190,
  streak: 12,
  tasksCompleted: 8,
  tasksTotal: 10,
  eventsThisMonth: 3,
  nextEvent: { title: "Café Citoyen", date: "12 Mars", time: "14:00" },
  monthlyGoal: 3000,
  badges: ["🏗️", "🎯", "🏆"],
};

const stats = [
  { label: "Ambassadeurs", value: "190", icon: Users, gradient: "gradient-card-purple", trend: "+15", trendUp: true },
  { label: "Opportunités", value: "24", icon: Briefcase, gradient: "gradient-card-green", trend: "+6", trendUp: true },
  { label: "Projets Actifs", value: "38", icon: FolderOpen, gradient: "gradient-card-blue", trend: "+3", trendUp: true },
  { label: "Régions Actives", value: "12", icon: MapPin, gradient: "gradient-card-purple", trend: "12/12", trendUp: true },
];

const quickActions = [
  { label: "Organiser", icon: Coffee, color: "bg-secondary text-secondary-foreground", path: "/event-application" },
  { label: "Rapport", icon: FileText, color: "bg-primary text-primary-foreground", path: "/event-report" },
  { label: "Ressources", icon: BookOpen, color: "bg-accent text-accent-foreground", path: "/resources" },
  { label: "Projets", icon: FolderOpen, color: "bg-highlight text-highlight-foreground", path: "/" },
];

const activityData = [
  { day: "Lun", value: 65 },
  { day: "Mar", value: 80 },
  { day: "Mer", value: 45 },
  { day: "Jeu", value: 90 },
  { day: "Ven", value: 70 },
  { day: "Sam", value: 30 },
  { day: "Dim", value: 55 },
];

const impactMetrics = [
  { label: "Bénéficiaires", value: "12,500+", icon: Heart, color: "text-destructive" },
  { label: "Heures de bénévolat", value: "3,200", icon: Clock, color: "text-primary" },
  { label: "Projets livrés", value: "28", icon: Target, color: "text-secondary" },
];

const topRegions = regions.sort((a, b) => b.ambassadorCount - a.ambassadorCount).slice(0, 5);

const Dashboard = () => {
  const urgentAnnouncement = announcements.find((a) => a.urgent);
  
  const upcomingOpps = opportunities.filter((o) => o.status !== "closed").slice(0, 3);
  const pointsProgress = Math.round((myProfile.points / myProfile.monthlyGoal) * 100);

  return (
    <div className="space-y-6 px-4 py-4">
      {/* Personalized Hero */}
      <div className="gradient-hero rounded-2xl p-5 text-white shadow-elevated animate-fade-in relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/5" />
        <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-white/5" />
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-80 font-medium">Bonjour, {myProfile.name} 👋</p>
              <h2 className="font-display text-xl font-bold mt-0.5">Votre tableau de bord</h2>
            </div>
            <div className="flex items-center gap-1 bg-white/15 backdrop-blur-sm rounded-full px-3 py-1.5">
              <Flame className="w-4 h-4 text-orange-300" />
              <span className="text-xs font-bold">{myProfile.streak}j</span>
            </div>
          </div>
          <p className="text-sm mt-2 opacity-90 leading-relaxed">
            Rang #{myProfile.rank} · {myProfile.region}
          </p>

          {/* Points progress bar */}
          <div className="mt-4 space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="opacity-80">Objectif mensuel</span>
              <span className="font-bold">{myProfile.points} / {myProfile.monthlyGoal} pts</span>
            </div>
            <div className="w-full h-2 rounded-full bg-white/20 overflow-hidden">
              <div
                className="h-full rounded-full bg-white/80 transition-all duration-1000 ease-out"
                style={{ width: `${pointsProgress}%` }}
              />
            </div>
          </div>

          <div className="flex gap-2 mt-4">
            <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm text-xs">
              Explorer <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>
            <div className="flex items-center gap-1 ml-auto">
              {myProfile.badges.map((b, i) => (
                <span key={i} className="text-lg">{b}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Urgent Banner */}
      {urgentAnnouncement && (
        <Card className="border-secondary/30 bg-secondary/5 shadow-card animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
          <CardContent className="p-3 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-secondary/20 shrink-0 animate-pulse-glow">
              <AlertTriangle className="w-4 h-4 text-secondary" />
            </div>
            <div className="min-w-0">
              <p className="font-display font-semibold text-sm">{urgentAnnouncement.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{urgentAnnouncement.content}</p>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0 mt-1" />
          </CardContent>
        </Card>
      )}

      {/* Personal Tasks & Next Event */}
      <div className="grid grid-cols-2 gap-3">
        <Card className="border-0 shadow-card animate-fade-in" style={{ animationDelay: "0.12s", opacity: 0 }}>
          <CardContent className="p-3">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-4 h-4 text-secondary" />
              <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">Mes tâches</span>
            </div>
            <div className="flex items-end gap-1">
              <span className="font-display text-2xl font-bold">{myProfile.tasksCompleted}</span>
              <span className="text-sm text-muted-foreground mb-0.5">/{myProfile.tasksTotal}</span>
            </div>
            <Progress value={(myProfile.tasksCompleted / myProfile.tasksTotal) * 100} className="mt-2 h-1.5" />
            <span className="text-[10px] text-secondary font-medium mt-1 block">{Math.round((myProfile.tasksCompleted / myProfile.tasksTotal) * 100)}% complété</span>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-card animate-fade-in" style={{ animationDelay: "0.14s", opacity: 0 }}>
          <CardContent className="p-3">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-4 h-4 text-accent" />
              <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">Prochain</span>
            </div>
            <p className="font-display font-semibold text-sm line-clamp-1">{myProfile.nextEvent.title}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{myProfile.nextEvent.date} · {myProfile.nextEvent.time}</p>
            <Badge className="mt-2 bg-accent/15 text-accent border-0 text-[10px]">{myProfile.eventsThisMonth} événements ce mois</Badge>
          </CardContent>
        </Card>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat, i) => (
          <Card
            key={stat.label}
            className={`${stat.gradient} border-0 shadow-card animate-fade-in`}
            style={{ animationDelay: `${0.16 + i * 0.04}s`, opacity: 0 }}
          >
            <CardContent className="p-4 flex flex-col">
              <div className="flex items-center justify-between">
                <stat.icon className="w-5 h-5 text-primary/70" />
                <span className={`text-[10px] font-bold flex items-center gap-0.5 ${stat.trendUp ? "text-secondary" : "text-destructive"}`}>
                  <TrendingUp className="w-3 h-3" />{stat.trend}
                </span>
              </div>
              <span className="font-display text-2xl font-bold mt-2">{stat.value}</span>
              <span className="text-xs text-muted-foreground mt-0.5">{stat.label}</span>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-4 gap-2">
        {quickActions.map((action, i) => (
          <Link
            to={action.path}
            key={action.label}
            className="flex flex-col items-center gap-1.5 animate-fade-in group"
            style={{ animationDelay: `${0.32 + i * 0.04}s`, opacity: 0 }}
          >
            <div className={`w-12 h-12 rounded-2xl ${action.color} flex items-center justify-center shadow-card transition-transform group-hover:scale-110 group-active:scale-95`}>
              <action.icon className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-medium text-muted-foreground">{action.label}</span>
          </Link>
        ))}
      </div>

      {/* Weekly Activity Chart */}
      <section className="animate-fade-in" style={{ animationDelay: "0.36s", opacity: 0 }}>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-display font-semibold text-base flex items-center gap-2">
            <Activity className="w-4 h-4 text-primary" /> Activité hebdomadaire
          </h3>
          <Badge className="bg-secondary/15 text-secondary border-0 text-[10px]">Cette semaine</Badge>
        </div>
        <Card className="border-0 shadow-card">
          <CardContent className="p-4">
            <div className="flex items-end justify-between gap-2 h-28">
              {activityData.map((d, i) => (
                <div key={d.day} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full flex flex-col justify-end" style={{ height: "80px" }}>
                    <div
                      className="w-full rounded-t-md transition-all duration-700 ease-out"
                      style={{
                        height: `${d.value}%`,
                        background: d.value >= 80
                          ? "linear-gradient(to top, hsl(var(--secondary)), hsl(var(--secondary) / 0.6))"
                          : d.value >= 50
                          ? "linear-gradient(to top, hsl(var(--primary)), hsl(var(--primary) / 0.5))"
                          : "hsl(var(--muted))",
                        animationDelay: `${0.4 + i * 0.05}s`,
                      }}
                    />
                  </div>
                  <span className="text-[9px] text-muted-foreground font-medium">{d.day}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Impact Metrics */}
      <section className="animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
        <h3 className="font-display font-semibold text-base mb-3 flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-primary" /> Impact collectif
        </h3>
        <div className="grid grid-cols-3 gap-2">
          {impactMetrics.map((metric) => (
            <Card key={metric.label} className="border-0 shadow-card">
              <CardContent className="p-3 text-center">
                <metric.icon className={`w-5 h-5 mx-auto mb-1.5 ${metric.color}`} />
                <p className="font-display font-bold text-base">{metric.value}</p>
                <p className="text-[9px] text-muted-foreground mt-0.5 leading-tight">{metric.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="animate-fade-in" style={{ animationDelay: "0.48s", opacity: 0 }}>
        <h3 className="font-display font-semibold text-base mb-3 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary" /> Régions les plus actives
        </h3>
        <Card className="border-0 shadow-card">
          <CardContent className="p-4 space-y-3">
            {topRegions.map((region, i) => (
              <div key={region.id} className="flex items-center gap-3">
                <span className="w-5 text-xs font-bold text-muted-foreground">{i + 1}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold line-clamp-1">{region.name}</p>
                  <div className="w-full h-1.5 rounded-full bg-muted mt-1 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${(region.ambassadorCount / 35) * 100}%`,
                        background: i === 0
                          ? "hsl(var(--secondary))"
                          : i === 1
                          ? "hsl(var(--primary))"
                          : "hsl(var(--accent))",
                      }}
                    />
                  </div>
                </div>
                <Badge className="bg-muted text-foreground border-0 text-[10px] font-bold">{region.ambassadorCount}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      {/* News Feed */}
      <section className="animate-fade-in" style={{ animationDelay: "0.52s", opacity: 0 }}>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-display font-semibold text-base flex items-center gap-2">
            <Newspaper className="w-4 h-4" /> Actualités
          </h3>
        </div>
        <div className="space-y-3">
          {announcements.map((news) => (
            <Card key={news.id} className="border-0 shadow-card hover:shadow-elevated transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-1">
                  {news.urgent && <Badge className="bg-destructive text-destructive-foreground text-[10px] px-1.5 py-0">Urgent</Badge>}
                  <span className="text-[10px] text-muted-foreground">{news.date}</span>
                </div>
                <h4 className="font-display font-semibold text-sm">{news.title}</h4>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{news.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Upcoming Opportunities */}
      <section className="animate-fade-in" style={{ animationDelay: "0.56s", opacity: 0 }}>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-display font-semibold text-base">Opportunités à venir</h3>
          <button className="text-xs text-primary flex items-center gap-0.5 font-medium">
            Voir tout <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <div className="space-y-3">
          {upcomingOpps.map((opp) => (
            <Card key={opp.id} className="border-0 shadow-card hover:shadow-elevated transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge
                    className={`text-[10px] px-1.5 py-0 ${
                      opp.category === "Training" ? "bg-secondary/20 text-secondary" :
                      opp.category === "Conference" ? "bg-accent/20 text-accent" :
                      opp.category === "Grant" ? "bg-highlight/20 text-highlight" :
                      "bg-primary/20 text-primary"
                    } border-0`}
                  >
                    {opp.category}
                  </Badge>
                  {opp.status === "urgent" && (
                    <Badge className="bg-destructive/20 text-destructive border-0 text-[10px] px-1.5 py-0">Urgent</Badge>
                  )}
                </div>
                <h4 className="font-display font-semibold text-sm">{opp.title}</h4>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{opp.description}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {opp.location}
                  </span>
                  <span className="text-[10px] text-muted-foreground">Échéance: {opp.deadline}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Inspire Section */}
      <section className="animate-fade-in" style={{ animationDelay: "0.6s", opacity: 0 }}>
        <h3 className="font-display font-semibold text-base mb-3">Inspirez-nous 💡</h3>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
          {projects.slice(0, 4).map((proj) => (
            <Card key={proj.id} className="shrink-0 w-64 border-0 shadow-card hover:shadow-elevated transition-shadow">
              <CardContent className="p-4">
                <div className="w-full h-24 rounded-xl gradient-card-green mb-3 flex items-center justify-center">
                  <FolderOpen className="w-8 h-8 text-secondary/50" />
                </div>
                <h4 className="font-display font-semibold text-sm">{proj.title}</h4>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{proj.description}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[10px] font-medium text-primary">{proj.ambassador}</span>
                  <Badge className="bg-secondary/20 text-secondary border-0 text-[10px]">{proj.impact}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Community Feed */}
      <section className="animate-fade-in" style={{ animationDelay: "0.64s", opacity: 0 }}>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-display font-semibold text-base flex items-center gap-2">
            <Newspaper className="w-4 h-4 text-primary" /> Communauté
          </h3>
        </div>
        <div className="-mx-4">
          <FeedPage />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
