import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  AlertTriangle, ChevronRight, Calendar, Target,
  Coffee, FileText, Briefcase, Clock, MapPin, Bell,
  Users, GraduationCap, Megaphone, Sparkles, CalendarPlus,
  CheckCircle, Loader2, Ban
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { announcements, opportunities } from "@/data/mock-data";
import DashboardHero from "@/components/dashboard/DashboardHero";

import { eventsData, type ParticipationStatus } from "@/pages/EventDetailPage";
import { toast } from "@/hooks/use-toast";

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

const statusButtonConfig: Record<ParticipationStatus, { label: string; icon: typeof CheckCircle; className: string; disabled: boolean }> = {
  participer: { label: "Participer", icon: CalendarPlus, className: "bg-primary text-primary-foreground hover:bg-primary/90", disabled: false },
  en_attente: { label: "En attente", icon: Loader2, className: "bg-highlight/15 text-highlight border border-highlight/30", disabled: true },
  confirme: { label: "Confirmé", icon: CheckCircle, className: "bg-secondary/15 text-secondary border border-secondary/30", disabled: true },
  complet: { label: "Complet", icon: Ban, className: "bg-destructive/15 text-destructive border border-destructive/30", disabled: true },
};

const quickActions = [
  { label: "Organiser", icon: Coffee, color: "bg-secondary text-secondary-foreground", path: "/event-application", desc: "Planifier un événement" },
  { label: "Rapport", icon: FileText, color: "bg-primary text-primary-foreground", path: "/event-report", desc: "Soumettre un rapport" },
];

const categoryColors: Record<string, string> = {
  Training: "bg-secondary/15 text-secondary border-l-secondary",
  Conference: "bg-accent/15 text-accent border-l-accent",
  Grant: "bg-highlight/15 text-highlight border-l-highlight",
  Project: "bg-primary/15 text-primary border-l-primary",
};

const categoryIcons: Record<string, typeof Briefcase> = {
  Training: GraduationCap,
  Conference: Users,
  Grant: Sparkles,
  Project: Briefcase,
};

const categoryLabels: Record<string, string> = {
  Training: "Formation",
  Conference: "Conférence",
  Grant: "Subvention",
  Project: "Projet",
};

const priorityConfig: Record<string, { bg: string; border: string; label: string }> = {
  high: { bg: "bg-destructive/15 text-destructive", border: "border-l-destructive", label: "Urgent" },
  medium: { bg: "bg-highlight/15 text-highlight", border: "border-l-highlight", label: "Moyen" },
  low: { bg: "bg-muted text-muted-foreground", border: "border-l-muted-foreground/30", label: "Bas" },
};

const eventColorMap = {
  secondary: { badge: "bg-secondary/15 text-secondary", icon: "bg-secondary/20 text-secondary", border: "border-l-secondary", gradient: "gradient-card-green" },
  accent: { badge: "bg-accent/15 text-accent", icon: "bg-accent/20 text-accent", border: "border-l-accent", gradient: "gradient-card-blue" },
  primary: { badge: "bg-primary/15 text-primary", icon: "bg-primary/20 text-primary", border: "border-l-primary", gradient: "gradient-card-purple" },
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [participationStates, setParticipationStates] = useState<Record<string, ParticipationStatus>>(
    Object.fromEntries(eventsData.map((e) => [e.id, e.participationStatus]))
  );
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
        <Card className="border-l-4 border-l-destructive border-0 shadow-card bg-destructive/5 animate-fade-in overflow-hidden" style={{ animationDelay: "0.05s", opacity: 0 }}>
          <CardContent className="p-4 flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-destructive/15 shrink-0 animate-pulse-glow">
              <AlertTriangle className="w-5 h-5 text-destructive" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-display font-semibold text-sm">{urgentAnnouncement.title}</p>
              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{urgentAnnouncement.content}</p>
              <span className="text-[10px] text-destructive/70 mt-2 inline-block">{urgentAnnouncement.date}</span>
            </div>
          </CardContent>
        </Card>
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
          {pendingTasks.map((task, i) => {
            const config = priorityConfig[task.priority];
            return (
              <Card key={task.id} className={`border-0 border-l-4 ${config.border} shadow-card hover:shadow-elevated transition-all duration-200 group`}>
                <CardContent className="p-3.5 flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full border-2 shrink-0 transition-all duration-200 group-hover:scale-110 ${
                    task.priority === "high" ? "border-destructive/50" : task.priority === "medium" ? "border-highlight/50" : "border-muted-foreground/30"
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium line-clamp-1">{task.title}</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <Clock className="w-3 h-3 text-muted-foreground" />
                      <span className="text-[10px] text-muted-foreground">{task.due}</span>
                    </div>
                  </div>
                  <Badge className={`${config.bg} border-0 text-[9px] px-2 py-0.5`}>
                    {config.label}
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <Progress
          value={(myProfile.tasksCompleted / myProfile.tasksTotal) * 100}
          className="mt-3 h-2 [&>div]:transition-all [&>div]:duration-1000"
        />
      </section>

      {/* Upcoming Events — Rich Cards */}
      <section className="animate-fade-in" style={{ animationDelay: "0.18s", opacity: 0 }}>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-display font-semibold text-base flex items-center gap-2">
            <Calendar className="w-4 h-4 text-accent" /> Événements à venir
          </h3>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
          {eventsData.map((event) => {
            const colors = eventColorMap[event.color];
            const currentStatus = participationStates[event.id];
            const btnConfig = statusButtonConfig[currentStatus];
            const BtnIcon = btnConfig.icon;
            return (
              <Card
                key={event.id}
                className={`shrink-0 w-64 border-0 border-l-4 ${colors.border} shadow-card hover:shadow-elevated transition-all duration-200 group overflow-hidden cursor-pointer`}
                onClick={() => navigate(`/event/${event.id}`)}
              >
                <CardContent className="p-0">
                  <div className={`${colors.gradient} px-4 pt-4 pb-3`}>
                    <Badge className={`${colors.badge} border-0 text-[10px] mb-2`}>{event.type}</Badge>
                    <h4 className="font-display font-semibold text-sm group-hover:text-primary transition-colors">{event.title}</h4>
                  </div>
                  <div className="px-4 py-3 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{event.date} · {event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-muted-foreground" />
                        <span className="text-xs font-medium">{event.attendees}/{event.maxAttendees}</span>
                      </div>
                      <div className="flex -space-x-1.5">
                        {event.participants.slice(0, 3).map((p) => (
                          <Avatar key={p.initials} className="w-5 h-5 border border-card">
                            <AvatarFallback className="text-[8px] bg-muted font-bold">{p.initials}</AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                    </div>
                    <button
                      className={`w-full h-8 rounded-md text-[11px] font-semibold flex items-center justify-center gap-1.5 mt-1 transition-all ${btnConfig.className}`}
                      disabled={btnConfig.disabled}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (currentStatus === "participer") {
                          setParticipationStates((prev) => ({ ...prev, [event.id]: "en_attente" }));
                          toast({ title: "Demande envoyée", description: "Votre participation est en attente de validation." });
                        }
                      }}
                    >
                      <BtnIcon className={`w-3.5 h-3.5 ${currentStatus === "en_attente" ? "animate-spin" : ""}`} />
                      {btnConfig.label}
                    </button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* New Opportunities — Visual Cards */}
      <section className="animate-fade-in" style={{ animationDelay: "0.24s", opacity: 0 }}>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-display font-semibold text-base flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-primary" /> Nouvelles opportunités
          </h3>
          <Link to="/resources" className="text-xs text-primary flex items-center gap-0.5 font-medium hover:gap-1.5 transition-all duration-200">
            Voir tout <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="space-y-3">
          {upcomingOpps.map((opp) => {
            const catColor = categoryColors[opp.category];
            const CatIcon = categoryIcons[opp.category] || Briefcase;
            return (
              <Card key={opp.id} className={`border-0 border-l-4 ${catColor.split(" ")[2]} shadow-card hover:shadow-elevated transition-all duration-200 group overflow-hidden`}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${catColor.split(" ").slice(0, 2).join(" ")} transition-transform duration-200 group-hover:scale-110`}>
                      <CatIcon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge className={`${catColor.split(" ").slice(0, 2).join(" ")} border-0 text-[10px] px-2`}>
                          {categoryLabels[opp.category]}
                        </Badge>
                        {opp.status === "urgent" && (
                          <Badge className="bg-destructive/15 text-destructive border-0 text-[9px] px-1.5 shrink-0 animate-pulse">Urgent</Badge>
                        )}
                      </div>
                      <h4 className="font-display font-semibold text-sm mt-1.5 line-clamp-1">{opp.title}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{opp.description}</p>
                      <div className="flex items-center gap-3 mt-2 text-[10px] text-muted-foreground">
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{opp.location}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{opp.deadline}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Announcements — Visual Cards */}
      <section className="animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-display font-semibold text-base flex items-center gap-2">
            <Bell className="w-4 h-4 text-primary" /> Annonces
          </h3>
        </div>
        <div className="space-y-3">
          {otherAnnouncements.map((news, i) => (
            <Card key={news.id} className="border-0 shadow-card hover:shadow-elevated transition-all duration-200 group overflow-hidden">
              <CardContent className="p-4 flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110">
                  <Megaphone className="w-5 h-5 text-accent" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge className="bg-muted text-muted-foreground border-0 text-[10px]">{news.date}</Badge>
                  </div>
                  <h4 className="font-display font-semibold text-sm">{news.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{news.content}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0 mt-1 transition-transform duration-200 group-hover:translate-x-1" />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
