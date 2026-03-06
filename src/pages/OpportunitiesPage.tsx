import { useState } from "react";
import { MapPin, Clock, CheckCircle, AlertTriangle, GraduationCap, Users, Sparkles, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { opportunities } from "@/data/mock-data";

const categories = ["Tous", "Training", "Conference", "Grant", "Project"] as const;
const categoryLabels: Record<string, string> = {
  Tous: "Tous",
  Training: "Formation",
  Conference: "Conférence",
  Grant: "Subvention",
  Project: "Projet",
};
const categoryColors: Record<string, { badge: string; icon: string; border: string; gradient: string }> = {
  Training: { badge: "bg-secondary/15 text-secondary", icon: "bg-secondary/20 text-secondary", border: "border-l-secondary", gradient: "gradient-card-green" },
  Conference: { badge: "bg-accent/15 text-accent", icon: "bg-accent/20 text-accent", border: "border-l-accent", gradient: "gradient-card-blue" },
  Grant: { badge: "bg-highlight/15 text-highlight", icon: "bg-highlight/20 text-highlight", border: "border-l-highlight", gradient: "" },
  Project: { badge: "bg-primary/15 text-primary", icon: "bg-primary/20 text-primary", border: "border-l-primary", gradient: "gradient-card-purple" },
};
const categoryIcons: Record<string, typeof Briefcase> = {
  Training: GraduationCap,
  Conference: Users,
  Grant: Sparkles,
  Project: Briefcase,
};

const OpportunitiesPage = () => {
  const [activeFilter, setActiveFilter] = useState<string>("Tous");

  const filtered = activeFilter === "Tous"
    ? opportunities
    : opportunities.filter((o) => o.category === activeFilter);

  return (
    <div className="px-4 py-4 space-y-4">
      <div className="animate-fade-in">
        <h2 className="font-display text-xl font-bold">Opportunités</h2>
        <p className="text-sm text-muted-foreground mt-1">{opportunities.length} opportunités disponibles</p>
      </div>

      {/* Filter Carousel */}
      <div className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4 scrollbar-hide animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
              activeFilter === cat
                ? "bg-primary text-primary-foreground shadow-card scale-105"
                : "bg-muted text-muted-foreground hover:bg-muted/80 hover:scale-105"
            }`}
          >
            {categoryLabels[cat]}
          </button>
        ))}
      </div>

      {/* Opportunities Cards */}
      <div className="space-y-3">
        {filtered.map((opp, i) => {
          const colors = categoryColors[opp.category];
          const CatIcon = categoryIcons[opp.category] || Briefcase;
          return (
            <Card
              key={opp.id}
              className={`border-0 border-l-4 ${colors.border} shadow-card hover:shadow-elevated transition-all duration-200 group animate-fade-in overflow-hidden`}
              style={{ animationDelay: `${0.15 + i * 0.05}s`, opacity: 0 }}
            >
              <CardContent className="p-0">
                {/* Gradient header */}
                <div className={`${colors.gradient} px-4 pt-4 pb-3`}>
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <div className={`w-8 h-8 rounded-lg ${colors.icon} flex items-center justify-center`}>
                      <CatIcon className="w-4 h-4" />
                    </div>
                    <Badge className={`${colors.badge} border-0 text-[10px] px-2 py-0.5`}>
                      {categoryLabels[opp.category]}
                    </Badge>
                    {opp.status === "urgent" && (
                      <Badge className="bg-destructive/15 text-destructive border-0 text-[10px] px-2 py-0.5 flex items-center gap-1 animate-pulse">
                        <AlertTriangle className="w-3 h-3" /> Urgent
                      </Badge>
                    )}
                    {opp.status === "open" && (
                      <Badge className="bg-secondary/15 text-secondary border-0 text-[10px] px-2 py-0.5 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" /> Ouvert
                      </Badge>
                    )}
                  </div>
                  <h4 className="font-display font-semibold text-sm">{opp.title}</h4>
                </div>

                {/* Content */}
                <div className="px-4 py-3 space-y-2">
                  <p className="text-xs text-muted-foreground line-clamp-2">{opp.description}</p>

                  <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{opp.location}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{opp.deadline}</span>
                  </div>

                  {opp.requirements.length > 0 && (
                    <div className="flex flex-wrap gap-1 pt-1">
                      {opp.requirements.map((req) => (
                        <span key={req} className="text-[10px] bg-muted px-2 py-0.5 rounded-full text-muted-foreground">
                          {req}
                        </span>
                      ))}
                    </div>
                  )}

                  <Button size="sm" className="w-full h-9 text-xs font-semibold mt-1 transition-transform duration-200 hover:scale-[1.02]">
                    Postuler maintenant
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default OpportunitiesPage;
