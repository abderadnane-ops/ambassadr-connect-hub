import { useState } from "react";
import {
  CheckCircle, XCircle, Clock, FileText, Coffee, BookOpen,
  ChevronRight, ArrowLeft, Star, MapPin, Send, AlertTriangle
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { validationItems } from "@/data/validation-data";
import type { ValidationItem } from "@/data/validation-data";

const statusConfig = {
  pending: { label: "En attente", color: "bg-highlight/15 text-highlight", icon: Clock },
  approved: { label: "Approuvé", color: "bg-secondary/15 text-secondary", icon: CheckCircle },
  rejected: { label: "Rejeté", color: "bg-destructive/15 text-destructive", icon: XCircle },
};

const typeConfig = {
  event_report: { label: "Rapport", icon: FileText, color: "gradient-card-blue text-accent" },
  event_application: { label: "Demande", icon: Coffee, color: "gradient-card-green text-secondary" },
  activity: { label: "Activité", icon: BookOpen, color: "gradient-card-purple text-primary" },
};

const tabs = [
  { key: "pending", label: "En attente" },
  { key: "approved", label: "Approuvés" },
  { key: "rejected", label: "Rejetés" },
  { key: "all", label: "Tous" },
] as const;

const MentorValidationPage = () => {
  const [activeTab, setActiveTab] = useState<string>("pending");
  const [items, setItems] = useState(validationItems);
  const [selectedItem, setSelectedItem] = useState<ValidationItem | null>(null);
  const [feedback, setFeedback] = useState("");

  const filtered = activeTab === "all"
    ? items
    : items.filter((item) => item.status === activeTab);

  const pendingCount = items.filter((i) => i.status === "pending").length;

  const handleAction = (id: string, action: "approved" | "rejected") => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: action,
              feedback: feedback || (action === "approved" ? "Validé par le mentor." : "Rejeté — voir commentaires."),
              points: action === "approved" ? item.points : 0,
            }
          : item
      )
    );
    setFeedback("");
    setSelectedItem(null);
  };

  if (selectedItem) {
    const config = typeConfig[selectedItem.type];
    const status = statusConfig[selectedItem.status];
    const StatusIcon = status.icon;
    const TypeIcon = config.icon;

    return (
      <div className="px-4 py-4 space-y-4 animate-fade-in">
        <button
          onClick={() => { setSelectedItem(null); setFeedback(""); }}
          className="flex items-center gap-1 text-sm text-primary font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Retour
        </button>

        {/* Header */}
        <div className="flex items-start gap-3">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${config.color}`}>
            <TypeIcon className="w-6 h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="font-display font-bold text-base">{selectedItem.title}</h2>
            <Badge className={`${status.color} border-0 text-[10px] mt-1`}>
              <StatusIcon className="w-3 h-3 mr-1" /> {status.label}
            </Badge>
          </div>
        </div>

        {/* Ambassador Info */}
        <Card className="border-0 shadow-card">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center text-white font-display font-bold text-sm shrink-0">
              {selectedItem.ambassadorAvatar}
            </div>
            <div>
              <p className="font-semibold text-sm">{selectedItem.ambassador}</p>
              <p className="text-[10px] text-muted-foreground flex items-center gap-1">
                <MapPin className="w-3 h-3" /> {selectedItem.region}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Details */}
        <Card className="border-0 shadow-card">
          <CardContent className="p-4">
            <h3 className="font-display font-semibold text-sm mb-2">Détails</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{selectedItem.details}</p>
            <div className="flex items-center gap-4 mt-3 text-[10px] text-muted-foreground">
              <span>Soumis le {selectedItem.submittedDate}</span>
              <span className="flex items-center gap-1 font-semibold text-highlight">
                <Star className="w-3 h-3 fill-highlight" /> {selectedItem.points} pts
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Existing Feedback */}
        {selectedItem.feedback && (
          <Card className={`border-0 shadow-card ${selectedItem.status === "rejected" ? "bg-destructive/5" : "bg-secondary/5"}`}>
            <CardContent className="p-4">
              <h3 className="font-display font-semibold text-sm mb-1">Commentaire du mentor</h3>
              <p className="text-xs text-muted-foreground">{selectedItem.feedback}</p>
            </CardContent>
          </Card>
        )}

        {/* Action Area */}
        {selectedItem.status === "pending" && (
          <div className="space-y-3">
            <Textarea
              placeholder="Ajouter un commentaire (optionnel)..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="bg-muted/50 border-0 text-sm min-h-[80px]"
            />
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                className="border-destructive/30 text-destructive hover:bg-destructive/10"
                onClick={() => handleAction(selectedItem.id, "rejected")}
              >
                <XCircle className="w-4 h-4 mr-2" /> Rejeter
              </Button>
              <Button
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                onClick={() => handleAction(selectedItem.id, "approved")}
              >
                <CheckCircle className="w-4 h-4 mr-2" /> Approuver
              </Button>
            </div>
            <p className="text-[10px] text-muted-foreground text-center">
              L'approbation attribuera <strong>{selectedItem.points} points</strong> à l'ambassadeur
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="px-4 py-4 space-y-4">
      <div className="animate-fade-in">
        <div className="flex items-center gap-2">
          <h2 className="font-display text-xl font-bold">Validation</h2>
          {pendingCount > 0 && (
            <Badge className="bg-highlight/15 text-highlight border-0 text-xs">{pendingCount} en attente</Badge>
          )}
        </div>
        <p className="text-sm text-muted-foreground mt-1">Validez les rapports et activités des ambassadeurs</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4 scrollbar-hide animate-fade-in" style={{ animationDelay: "0.05s", opacity: 0 }}>
        {tabs.map((tab) => {
          const count = tab.key === "all" ? items.length : items.filter((i) => i.status === tab.key).length;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === tab.key
                  ? "bg-primary text-primary-foreground shadow-card"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {tab.label}
              <span className={`text-[10px] ${activeTab === tab.key ? "opacity-80" : "opacity-60"}`}>({count})</span>
            </button>
          );
        })}
      </div>

      {/* Items */}
      <div className="space-y-2">
        {filtered.map((item, i) => {
          const config = typeConfig[item.type];
          const status = statusConfig[item.status];
          const StatusIcon = status.icon;
          const TypeIcon = config.icon;

          return (
            <Card
              key={item.id}
              className="border-0 shadow-card animate-fade-in cursor-pointer hover:shadow-elevated transition-shadow"
              style={{ animationDelay: `${0.1 + i * 0.04}s`, opacity: 0 }}
              onClick={() => setSelectedItem(item)}
            >
              <CardContent className="p-3 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${config.color}`}>
                  <TypeIcon className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-sm line-clamp-1">{item.title}</h4>
                  </div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[10px] text-muted-foreground">{item.ambassador}</span>
                    <span className="text-[10px] text-muted-foreground">·</span>
                    <span className="text-[10px] text-muted-foreground">{item.submittedDate}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge className={`${status.color} border-0 text-[9px] px-1.5`}>
                      <StatusIcon className="w-2.5 h-2.5 mr-0.5" /> {status.label}
                    </Badge>
                    {item.points > 0 && (
                      <span className="text-[10px] text-highlight font-semibold flex items-center gap-0.5">
                        <Star className="w-3 h-3 fill-highlight" /> {item.points} pts
                      </span>
                    )}
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
              </CardContent>
            </Card>
          );
        })}
        {filtered.length === 0 && (
          <div className="text-center py-8 text-muted-foreground text-sm">
            Aucun élément dans cette catégorie
          </div>
        )}
      </div>
    </div>
  );
};

export default MentorValidationPage;
