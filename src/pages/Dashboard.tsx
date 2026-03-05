import { Users, Briefcase, FolderOpen, MapPin, AlertTriangle, ArrowRight, Star, Newspaper, ChevronRight, Zap, BookOpen, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ambassadors, announcements, opportunities, projects } from "@/data/mock-data";

const stats = [
  { label: "Ambassadeurs", value: "190", icon: Users, gradient: "gradient-card-purple" },
  { label: "Opportunités", value: "24", icon: Briefcase, gradient: "gradient-card-green" },
  { label: "Projets Actifs", value: "38", icon: FolderOpen, gradient: "gradient-card-blue" },
  { label: "Régions Actives", value: "12", icon: MapPin, gradient: "gradient-card-purple" },
];

const quickActions = [
  { label: "Postuler", icon: Zap, color: "bg-secondary text-secondary-foreground" },
  { label: "Ressources", icon: BookOpen, color: "bg-primary text-primary-foreground" },
  { label: "Événements", icon: Calendar, color: "bg-accent text-accent-foreground" },
  { label: "Projets", icon: FolderOpen, color: "bg-highlight text-highlight-foreground" },
];

const Dashboard = () => {
  const urgentAnnouncement = announcements.find((a) => a.urgent);
  const topAmbassadors = [...ambassadors].sort((a, b) => b.points - a.points).slice(0, 6);
  const upcomingOpps = opportunities.filter((o) => o.status !== "closed").slice(0, 3);

  return (
    <div className="space-y-6 px-4 py-4">
      {/* Hero */}
      <div className="gradient-hero rounded-2xl p-5 text-white shadow-elevated animate-fade-in">
        <p className="text-sm opacity-80 font-medium">Bienvenue 👋</p>
        <h2 className="font-display text-xl font-bold mt-1">Les Ambassadeurs Citoyens</h2>
        <p className="text-sm mt-2 opacity-90 leading-relaxed">
          Ensemble, construisons une société civile forte et engagée au Maroc.
        </p>
        <Button size="sm" className="mt-3 bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm">
          Explorer <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </div>

      {/* Urgent Banner */}
      {urgentAnnouncement && (
        <Card className="border-secondary/30 bg-secondary/5 shadow-card animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <CardContent className="p-3 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-secondary/20 shrink-0">
              <AlertTriangle className="w-4 h-4 text-secondary" />
            </div>
            <div className="min-w-0">
              <p className="font-display font-semibold text-sm">{urgentAnnouncement.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{urgentAnnouncement.content}</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat, i) => (
          <Card
            key={stat.label}
            className={`${stat.gradient} border-0 shadow-card animate-fade-in`}
            style={{ animationDelay: `${0.1 + i * 0.05}s`, opacity: 0 }}
          >
            <CardContent className="p-4 flex flex-col">
              <stat.icon className="w-5 h-5 text-primary/70 mb-2" />
              <span className="font-display text-2xl font-bold">{stat.value}</span>
              <span className="text-xs text-muted-foreground mt-0.5">{stat.label}</span>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-4 gap-2">
        {quickActions.map((action, i) => (
          <button
            key={action.label}
            className="flex flex-col items-center gap-1.5 animate-fade-in"
            style={{ animationDelay: `${0.3 + i * 0.05}s`, opacity: 0 }}
          >
            <div className={`w-12 h-12 rounded-2xl ${action.color} flex items-center justify-center shadow-card`}>
              <action.icon className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-medium text-muted-foreground">{action.label}</span>
          </button>
        ))}
      </div>

      {/* Top Ambassadors Carousel */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-display font-semibold text-base">Top Ambassadeurs</h3>
          <button className="text-xs text-primary flex items-center gap-0.5 font-medium">
            Voir tout <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
          {topAmbassadors.map((amb, i) => (
            <Card
              key={amb.id}
              className="shrink-0 w-32 border-0 shadow-card animate-fade-in"
              style={{ animationDelay: `${0.4 + i * 0.05}s`, opacity: 0 }}
            >
              <CardContent className="p-3 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center text-white font-display font-bold text-sm mb-2">
                  {amb.avatar}
                </div>
                <span className="text-xs font-semibold line-clamp-1">{amb.name}</span>
                <span className="text-[10px] text-muted-foreground line-clamp-1">{amb.region.split("-")[0]}</span>
                <div className="flex items-center gap-1 mt-1.5">
                  <Star className="w-3 h-3 text-highlight fill-highlight" />
                  <span className="text-[10px] font-bold text-highlight">{amb.points}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* News Feed */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-display font-semibold text-base flex items-center gap-2">
            <Newspaper className="w-4 h-4" /> Actualités
          </h3>
        </div>
        <div className="space-y-3">
          {announcements.map((news, i) => (
            <Card
              key={news.id}
              className="border-0 shadow-card animate-fade-in"
              style={{ animationDelay: `${0.5 + i * 0.05}s`, opacity: 0 }}
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      {news.urgent && <Badge className="bg-destructive text-destructive-foreground text-[10px] px-1.5 py-0">Urgent</Badge>}
                      <span className="text-[10px] text-muted-foreground">{news.date}</span>
                    </div>
                    <h4 className="font-display font-semibold text-sm">{news.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{news.content}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Upcoming Opportunities */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-display font-semibold text-base">Opportunités à venir</h3>
          <button className="text-xs text-primary flex items-center gap-0.5 font-medium">
            Voir tout <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <div className="space-y-3">
          {upcomingOpps.map((opp, i) => (
            <Card
              key={opp.id}
              className="border-0 shadow-card animate-fade-in"
              style={{ animationDelay: `${0.6 + i * 0.05}s`, opacity: 0 }}
            >
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
      <section>
        <h3 className="font-display font-semibold text-base mb-3">Inspirez-nous 💡</h3>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
          {projects.slice(0, 4).map((proj, i) => (
            <Card
              key={proj.id}
              className="shrink-0 w-64 border-0 shadow-card animate-fade-in"
              style={{ animationDelay: `${0.7 + i * 0.05}s`, opacity: 0 }}
            >
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
    </div>
  );
};

export default Dashboard;
