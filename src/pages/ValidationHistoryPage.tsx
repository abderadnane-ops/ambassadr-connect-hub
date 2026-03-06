import { useState } from "react";
import { History, CheckCircle, XCircle, FileText, Coffee, BookOpen, MapPin, Star, Clock, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const historyItems = [
  { id: "h1", type: "event_report" as const, title: "Rapport - Café Citoyen Tanger", ambassador: "Nadia Chraibi", region: "Tanger-Tétouan", date: "2026-03-01", action: "approved" as const, points: 120, feedback: "Excellent rapport, bien structuré." },
  { id: "h2", type: "event_report" as const, title: "Rapport - Lab Citoyens Casablanca", ambassador: "Youssef Bennani", region: "Casablanca-Settat", date: "2026-02-28", action: "rejected" as const, points: 0, feedback: "Rapport incomplet. Merci d'ajouter les photos." },
  { id: "h3", type: "activity" as const, title: "Formation Leadership complétée", ambassador: "Leila Mansouri", region: "Marrakech-Safi", date: "2026-02-25", action: "approved" as const, points: 75, feedback: "Validé." },
  { id: "h4", type: "event_application" as const, title: "Demande - Café Citoyen Fès", ambassador: "Karim Tazi", region: "Fès-Meknès", date: "2026-02-22", action: "approved" as const, points: 100, feedback: "Bonne initiative, approuvé." },
  { id: "h5", type: "event_report" as const, title: "Rapport - Conférence Rabat", ambassador: "Hassan Alaoui", region: "Rabat-Salé-Kénitra", date: "2026-02-20", action: "rejected" as const, points: 0, feedback: "Statistiques de participation manquantes." },
  { id: "h6", type: "activity" as const, title: "Module Communication Digitale", ambassador: "Omar Idrissi", region: "Fès-Meknès", date: "2026-02-18", action: "approved" as const, points: 50, feedback: "Bien complété." },
];

const typeConfig = {
  event_report: { label: "Rapport", icon: FileText, color: "gradient-card-blue text-accent" },
  event_application: { label: "Demande", icon: Coffee, color: "gradient-card-green text-secondary" },
  activity: { label: "Activité", icon: BookOpen, color: "gradient-card-purple text-primary" },
};

const actionConfig = {
  approved: { label: "Approuvé", color: "bg-secondary/15 text-secondary", icon: CheckCircle },
  rejected: { label: "Rejeté", color: "bg-destructive/15 text-destructive", icon: XCircle },
};

const ValidationHistoryPage = () => {
  const [filter, setFilter] = useState<"all" | "approved" | "rejected">("all");
  const filtered = filter === "all" ? historyItems : historyItems.filter((h) => h.action === filter);
  const approvedCount = historyItems.filter((h) => h.action === "approved").length;
  const rejectedCount = historyItems.filter((h) => h.action === "rejected").length;

  return (
    <div className="px-4 py-4 space-y-4">
      <div className="animate-fade-in">
        <h2 className="font-display text-xl font-bold flex items-center gap-2">
          <History className="w-5 h-5 text-primary" /> Historique de validation
        </h2>
        <p className="text-sm text-muted-foreground mt-1">Revoyez vos validations et feedbacks passés</p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-3 gap-2 animate-fade-in" style={{ animationDelay: "0.05s", opacity: 0 }}>
        <Card className="border-0 shadow-card">
          <CardContent className="p-3 text-center">
            <p className="font-display font-bold text-lg">{historyItems.length}</p>
            <p className="text-[9px] text-muted-foreground">Total</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-card">
          <CardContent className="p-3 text-center">
            <p className="font-display font-bold text-lg text-secondary">{approvedCount}</p>
            <p className="text-[9px] text-muted-foreground">Approuvés</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-card">
          <CardContent className="p-3 text-center">
            <p className="font-display font-bold text-lg text-destructive">{rejectedCount}</p>
            <p className="text-[9px] text-muted-foreground">Rejetés</p>
          </CardContent>
        </Card>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 animate-fade-in" style={{ animationDelay: "0.08s", opacity: 0 }}>
        {([["all", "Tous"], ["approved", "Approuvés"], ["rejected", "Rejetés"]] as const).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              filter === key ? "bg-primary text-primary-foreground shadow-card" : "bg-muted text-muted-foreground"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* History list */}
      <div className="space-y-2">
        {filtered.map((item, i) => {
          const type = typeConfig[item.type];
          const action = actionConfig[item.action];
          const ActionIcon = action.icon;
          const TypeIcon = type.icon;

          return (
            <Card key={item.id} className="border-0 shadow-card animate-fade-in" style={{ animationDelay: `${0.1 + i * 0.04}s`, opacity: 0 }}>
              <CardContent className="p-3 space-y-2">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${type.color}`}>
                    <TypeIcon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-sm line-clamp-1">{item.title}</h4>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[10px] text-muted-foreground">{item.ambassador}</span>
                      <span className="text-[10px] text-muted-foreground">·</span>
                      <span className="text-[10px] text-muted-foreground">{item.date}</span>
                    </div>
                  </div>
                  <Badge className={`${action.color} border-0 text-[9px] px-1.5 shrink-0`}>
                    <ActionIcon className="w-2.5 h-2.5 mr-0.5" /> {action.label}
                  </Badge>
                </div>
                {item.feedback && (
                  <div className="flex items-start gap-2 bg-muted/50 rounded-lg p-2">
                    <MessageSquare className="w-3 h-3 text-muted-foreground mt-0.5 shrink-0" />
                    <p className="text-[10px] text-muted-foreground">{item.feedback}</p>
                  </div>
                )}
                <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {item.region}</span>
                  {item.points > 0 && (
                    <span className="flex items-center gap-1 text-highlight font-semibold">
                      <Star className="w-3 h-3 fill-highlight" /> {item.points} pts
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ValidationHistoryPage;
