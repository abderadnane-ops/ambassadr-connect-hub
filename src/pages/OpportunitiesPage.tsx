import { useState } from "react";
import { MapPin, Clock, CheckCircle, AlertTriangle, Filter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { opportunities } from "@/data/mock-data";
import type { Opportunity } from "@/data/mock-data";

const categories = ["Tous", "Training", "Conference", "Grant", "Project"] as const;
const categoryLabels: Record<string, string> = {
  Tous: "Tous",
  Training: "Formation",
  Conference: "Conférence",
  Grant: "Subvention",
  Project: "Projet",
};
const categoryColors: Record<string, string> = {
  Training: "bg-secondary/20 text-secondary",
  Conference: "bg-accent/20 text-accent",
  Grant: "bg-highlight/20 text-highlight",
  Project: "bg-primary/20 text-primary",
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
            className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              activeFilter === cat
                ? "bg-primary text-primary-foreground shadow-card"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {categoryLabels[cat]}
          </button>
        ))}
      </div>

      {/* Opportunities List */}
      <div className="space-y-3">
        {filtered.map((opp, i) => (
          <Card
            key={opp.id}
            className="border-0 shadow-card animate-fade-in"
            style={{ animationDelay: `${0.15 + i * 0.05}s`, opacity: 0 }}
          >
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <Badge className={`${categoryColors[opp.category]} border-0 text-[10px] px-2 py-0.5`}>
                  {categoryLabels[opp.category]}
                </Badge>
                {opp.status === "urgent" && (
                  <Badge className="bg-destructive/15 text-destructive border-0 text-[10px] px-2 py-0.5 flex items-center gap-1">
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
              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{opp.description}</p>

              <div className="flex items-center gap-3 mt-3 text-[10px] text-muted-foreground">
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{opp.location}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{opp.deadline}</span>
              </div>

              {opp.requirements.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-3">
                  {opp.requirements.map((req) => (
                    <span key={req} className="text-[10px] bg-muted px-2 py-0.5 rounded-full text-muted-foreground">
                      {req}
                    </span>
                  ))}
                </div>
              )}

              <Button size="sm" className="mt-3 w-full h-9 text-xs font-semibold">
                Postuler maintenant
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OpportunitiesPage;
