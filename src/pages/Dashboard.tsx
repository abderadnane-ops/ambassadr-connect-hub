import { Link } from "react-router-dom";
import {
  AlertTriangle, ChevronRight, Calendar, Target,
  Coffee, FileText, Briefcase, Clock, MapPin, Bell
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { announcements, opportunities } from "@/data/mock-data";
import DashboardHero from "@/components/dashboard/DashboardHero";

const myProfile = {
  name: "Amina",
  streak: 12,
  tasksCompleted: 8,
  tasksTotal: 10,
};

const myTasks = [
  { id: "1", title: "Finaliser le rapport Café Citoyen", due: "Aujourd'hui", done: false, priority: "high" },
  { id: "2", title: "Confirmer le lieu pour Lab Citoyens", due: "Demain", done: false, priority: "medium" },
  { id: "3", title: "Envoyer invitations conférence", due: "14 Mars", done: false, priority: "low" },
  { id: "4", title: "Mettre à jour le profil", due: "Complété", done: true, priority: "low" },
];

const upcomingEvents = [
  { id: "1", title: "Café Citoyen Rabat", date: "12 Mars", time: "14:00", type: "Café Citoyen", location: "Rabat" },
  { id: "2", title: "Lab Citoyens - Éducation", date: "18 Mars", time: "10:00", type: "Lab Citoyens", location: "Casablanca" },
  { id: "3", title: "Forum Régional", date: "25 Mars", time: "09:00", type: "Conférence", location: "Fès" },
];

const quickActions = [
  { label: "Organiser", icon: Coffee, color: "bg-secondary text-secondary-foreground", path: "/event-application", desc: "Planifier un événement" },
  { label: "Rapport", icon: FileText, color: "bg-primary text-primary-foreground", path: "/event-report", desc: "Soumettre un rapport" },
];

const categoryColors: Record<string, string> = {
  Training: "bg-secondary/20 text-secondary",
  Conference: "bg-accent/20 text-accent",
  Grant: "bg-highlight/20 text-highlight",
  Project: "bg-primary/20 text-primary",
};

const categoryLabels: Record<string, string> = {
  Training: "Formation",
  Conference: "Conférence",
  Grant: "Subvention",
  Project: "Projet",
};

const priorityColors: Record<string, string> = {
  high: "bg-destructive/15 text-destructive",
  medium: "bg-highlight/15 text-highlight",
  low: "bg-muted text-muted-foreground",
};

const Dashboard = () => {
  const urgentAnnouncement = announcements.find((a) => a.urgent);
  const otherAnnouncements = announcements.filter((a) => !a.urgent);
  const upcomingOpps = opportunities.filter((o) => o.status !== "closed").slice(0, 3);
  const pendingTasks = myTasks.filter((t) => !t.done);

  return (
    <div className="space-y-5 px-4 py-4">
      {/* Hero Welcome */}
      <DashboardHero />

      {/* Urgent Announcement */}
      {urgentAnnouncement && (
        <Card className="border-destructive/30 bg-destructive/5 shadow-card animate-fade-in" style={{ animationDelay: "0.05s", opacity: 0 }}>
          <CardContent className="p-3 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-destructive/20 shrink-0 animate-pulse-glow">
              <AlertTriangle className="w-4 h-4 text-destructive" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-display font-semibold text-sm">{urgentAnnouncement.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{urgentAnnouncement.content}</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3 animate-fade-in" style={{ animationDelay: "0.08s", opacity: 0 }}>
        {quickActions.map((action) => (
          <Link key={action.label} to={action.path}>
            <Card className="border-0 shadow-card hover:shadow-elevated transition-all group">
              <CardContent className="p-4 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl ${action.color} flex items-center justify-center shrink-0 transition-transform group-hover:scale-110`}>
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

      {/* My Tasks */}
      <section className="animate-fade-in" style={{ animationDelay: "0.12s", opacity: 0 }}>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-display font-semibold text-base flex items-center gap-2">
            <Target className="w-4 h-4 text-secondary" /> Mes tâches
          </h3>
          <Badge className="bg-secondary/15 text-secondary border-0 text-[10px]">
            {myProfile.tasksCompleted}/{myProfile.tasksTotal}
          </Badge>
        </div>
        <div className="space-y-2">
          {pendingTasks.map((task) => (
            <Card key={task.id} className="border-0 shadow-card">
              <CardContent className="p-3 flex items-center gap-3">
                <div className="w-5 h-5 rounded-full border-2 border-muted-foreground/30 shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium line-clamp-1">{task.title}</p>
                  <span className="text-[10px] text-muted-foreground">{task.due}</span>
                </div>
                <Badge className={`${priorityColors[task.priority]} border-0 text-[9px] px-1.5`}>
                  {task.priority === "high" ? "Urgent" : task.priority === "medium" ? "Moyen" : "Bas"}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
        <Progress
          value={(myProfile.tasksCompleted / myProfile.tasksTotal) * 100}
          className="mt-3 h-1.5"
        />
      </section>

      {/* Upcoming Events */}
      <section className="animate-fade-in" style={{ animationDelay: "0.18s", opacity: 0 }}>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-display font-semibold text-base flex items-center gap-2">
            <Calendar className="w-4 h-4 text-accent" /> Événements à venir
          </h3>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="shrink-0 w-56 border-0 shadow-card">
              <CardContent className="p-4">
                <Badge className="bg-accent/15 text-accent border-0 text-[10px] mb-2">{event.type}</Badge>
                <h4 className="font-display font-semibold text-sm">{event.title}</h4>
                <div className="flex items-center gap-2 mt-2 text-[10px] text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{event.date} · {event.time}</span>
                </div>
                <div className="flex items-center gap-1 mt-1 text-[10px] text-muted-foreground">
                  <MapPin className="w-3 h-3" />{event.location}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* New Opportunities */}
      <section className="animate-fade-in" style={{ animationDelay: "0.24s", opacity: 0 }}>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-display font-semibold text-base flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-primary" /> Nouvelles opportunités
          </h3>
          <Link to="/resources" className="text-xs text-primary flex items-center gap-0.5 font-medium">
            Voir tout <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="space-y-2">
          {upcomingOpps.map((opp) => (
            <Card key={opp.id} className="border-0 shadow-card">
              <CardContent className="p-3 flex items-center gap-3">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${categoryColors[opp.category]}`}>
                  <Briefcase className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-sm line-clamp-1">{opp.title}</h4>
                    {opp.status === "urgent" && (
                      <Badge className="bg-destructive/15 text-destructive border-0 text-[9px] px-1.5 shrink-0">Urgent</Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-0.5 text-[10px] text-muted-foreground">
                    <span>{categoryLabels[opp.category]}</span>
                    <span>·</span>
                    <span>{opp.location}</span>
                    <span>·</span>
                    <span>{opp.deadline}</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Announcements */}
      <section className="animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-display font-semibold text-base flex items-center gap-2">
            <Bell className="w-4 h-4 text-primary" /> Annonces
          </h3>
        </div>
        <div className="space-y-2">
          {otherAnnouncements.map((news) => (
            <Card key={news.id} className="border-0 shadow-card">
              <CardContent className="p-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] text-muted-foreground">{news.date}</span>
                </div>
                <h4 className="font-display font-semibold text-sm">{news.title}</h4>
                <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{news.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
