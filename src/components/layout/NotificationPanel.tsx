import { X, CheckCircle, AlertTriangle, Calendar, Briefcase, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Notification {
  id: string;
  type: "success" | "warning" | "event" | "opportunity";
  title: string;
  message: string;
  time: string;
  read: boolean;
}

const notifications: Notification[] = [
  { id: "1", type: "success", title: "Rapport approuvé", message: "Votre rapport Café Citoyen a été validé par votre mentor.", time: "Il y a 2h", read: false },
  { id: "2", type: "warning", title: "Deadline proche", message: "Inscription à la Conférence Nationale clôture dans 2 jours.", time: "Il y a 5h", read: false },
  { id: "3", type: "event", title: "Rappel événement", message: "Café Citoyen Rabat — demain à 14:00.", time: "Hier", read: false },
  { id: "4", type: "opportunity", title: "Nouvelle opportunité", message: "Subvention Projets Communautaires — jusqu'à 50,000 MAD.", time: "Il y a 2j", read: true },
  { id: "5", type: "success", title: "Badge débloqué! 🏆", message: "Vous avez obtenu le badge « Champion Régional ».", time: "Il y a 3j", read: true },
];

const typeConfig = {
  success: { icon: CheckCircle, color: "text-secondary", bg: "bg-secondary/15" },
  warning: { icon: AlertTriangle, color: "text-highlight", bg: "bg-highlight/15" },
  event: { icon: Calendar, color: "text-accent", bg: "bg-accent/15" },
  opportunity: { icon: Briefcase, color: "text-primary", bg: "bg-primary/15" },
};

interface NotificationPanelProps {
  open: boolean;
  onClose: () => void;
}

const NotificationPanel = ({ open, onClose }: NotificationPanelProps) => {
  const unreadCount = notifications.filter((n) => !n.read).length;

  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm animate-fade-in" onClick={onClose} />
      <div className="fixed top-0 right-0 bottom-0 z-50 w-80 bg-card border-l border-border shadow-elevated animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <h2 className="font-display font-semibold text-base">Notifications</h2>
            {unreadCount > 0 && (
              <Badge className="bg-destructive/15 text-destructive border-0 text-[10px] px-1.5">
                {unreadCount}
              </Badge>
            )}
          </div>
          <button onClick={onClose} className="p-1.5 rounded-full hover:bg-muted transition-colors">
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>

        {/* Notifications list */}
        <div className="flex-1 overflow-y-auto">
          {notifications.map((notif, i) => {
            const config = typeConfig[notif.type];
            const Icon = config.icon;
            return (
              <div
                key={notif.id}
                className={`p-4 border-b border-border/50 flex gap-3 transition-colors hover:bg-muted/50 animate-fade-in ${!notif.read ? "bg-primary/5" : ""}`}
                style={{ animationDelay: `${i * 0.05}s`, opacity: 0, animationFillMode: "forwards" }}
              >
                <div className={`w-8 h-8 rounded-lg ${config.bg} flex items-center justify-center shrink-0`}>
                  <Icon className={`w-4 h-4 ${config.color}`} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-sm line-clamp-1">{notif.title}</p>
                    {!notif.read && <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />}
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{notif.message}</p>
                  <span className="text-[10px] text-muted-foreground/70 flex items-center gap-1 mt-1">
                    <Clock className="w-2.5 h-2.5" /> {notif.time}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-border">
          <button className="w-full text-center text-xs font-medium text-primary hover:text-primary/80 transition-colors py-2">
            Marquer tout comme lu
          </button>
        </div>
      </div>
    </>
  );
};

export default NotificationPanel;
