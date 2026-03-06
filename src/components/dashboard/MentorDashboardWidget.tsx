import { Link } from "react-router-dom";
import { GraduationCap, Users, FileText, MessageSquare, ChevronRight, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useMentor } from "@/hooks/use-mentor";

const mentorStats = [
  { label: "Mentorés assignés", value: 6, icon: Users, color: "bg-accent/15 text-accent" },
  { label: "Rapports en attente", value: 3, icon: FileText, color: "bg-highlight/15 text-highlight" },
  { label: "Feedbacks à donner", value: 2, icon: MessageSquare, color: "bg-primary/15 text-primary" },
];

const recentMentees = [
  { name: "Youssef Bennani", initials: "YB", region: "Casablanca-Settat", lastActivity: "Il y a 2h", pending: 1 },
  { name: "Nadia Chraibi", initials: "NC", region: "Tanger-Tétouan", lastActivity: "Il y a 5h", pending: 0 },
  { name: "Omar Idrissi", initials: "OI", region: "Fès-Meknès", lastActivity: "Hier", pending: 2 },
];

const MentorDashboardWidget = () => {
  const { isMentor } = useMentor();
  if (!isMentor) return null;

  return (
    <section className="animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-display font-semibold text-base flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-accent" /> Suivi mentorat
        </h3>
        <Link to="/validation" className="text-xs text-primary flex items-center gap-0.5 font-medium hover:gap-1.5 transition-all duration-200">
          Validations <ChevronRight className="w-3 h-3" />
        </Link>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        {mentorStats.map((stat) => (
          <Card key={stat.label} className="border-0 shadow-card">
            <CardContent className="p-3 text-center">
              <div className={`w-9 h-9 rounded-xl ${stat.color} flex items-center justify-center mx-auto mb-1.5`}>
                <stat.icon className="w-4 h-4" />
              </div>
              <p className="font-display font-bold text-lg">{stat.value}</p>
              <p className="text-[9px] text-muted-foreground leading-tight">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent mentees */}
      <Card className="border-0 shadow-card">
        <CardContent className="p-3 space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Mentorés récents</p>
            <Link to="/mentees" className="text-[10px] text-primary font-medium">Voir tous</Link>
          </div>
          {recentMentees.map((m) => (
            <div key={m.name} className="flex items-center gap-3 py-1.5">
              <div className="w-8 h-8 rounded-full gradient-hero flex items-center justify-center text-white font-display font-bold text-[10px] shrink-0">
                {m.initials}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium line-clamp-1">{m.name}</p>
                <p className="text-[10px] text-muted-foreground">{m.region}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {m.pending > 0 && (
                  <Badge className="bg-highlight/15 text-highlight border-0 text-[9px] px-1.5">
                    {m.pending} <Clock className="w-2.5 h-2.5 ml-0.5" />
                  </Badge>
                )}
                <span className="text-[9px] text-muted-foreground">{m.lastActivity}</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
};

export default MentorDashboardWidget;
