import { useState } from "react";
import { Plus, X, Coffee, Share2, MessageSquarePlus, ClipboardList } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const actions = [
  { label: "Créer un événement", icon: Coffee, path: "/event-application" },
  { label: "Partager une ressource", icon: Share2, path: "/resources" },
  { label: "Poster une mise à jour", icon: MessageSquarePlus, path: "/hub" },
  { label: "Soumettre une activité", icon: ClipboardList, path: "/event-report" },
];

const FloatingActionButton = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleAction = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setOpen(false)}
        />
      )}

      <div className="fixed bottom-20 right-4 z-50 flex flex-col items-end gap-2">
        {/* Action items */}
        {open && actions.map((action, i) => (
          <button
            key={action.label}
            onClick={() => handleAction(action.path)}
            className="flex items-center gap-2.5 animate-fade-in"
            style={{ animationDelay: `${i * 0.04}s`, opacity: 0, animationFillMode: "forwards" }}
          >
            <span className="text-xs font-medium bg-card text-card-foreground shadow-elevated rounded-lg px-3 py-1.5 whitespace-nowrap">
              {action.label}
            </span>
            <div className="w-10 h-10 rounded-full bg-muted shadow-card flex items-center justify-center shrink-0">
              <action.icon className="w-4 h-4 text-foreground" />
            </div>
          </button>
        ))}

        {/* Main FAB */}
        <button
          onClick={() => setOpen(!open)}
          className={cn(
            "w-14 h-14 rounded-full shadow-elevated flex items-center justify-center transition-all duration-200",
            open
              ? "bg-muted text-foreground rotate-0"
              : "gradient-hero text-white"
          )}
        >
          {open ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
        </button>
      </div>
    </>
  );
};

export default FloatingActionButton;
