import { useState } from "react";
import { MapPin, ChevronDown, ChevronUp, Users, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { regions, ambassadors } from "@/data/mock-data";
import MoroccoMap from "@/components/map/MoroccoMap";

const MapPage = () => {
  const [expandedRegion, setExpandedRegion] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const totalAmbassadors = regions.reduce((s, r) => s + r.ambassadorCount, 0);

  const handleRegionSelect = (regionId: string) => {
    setSelectedRegion(regionId);
    setExpandedRegion(regionId);
    const el = document.getElementById(`region-${regionId}`);
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="px-4 py-4 space-y-4">
      <div className="animate-fade-in">
        <h2 className="font-display text-xl font-bold">Carte du Maroc</h2>
        <p className="text-sm text-muted-foreground mt-1">{totalAmbassadors} ambassadeurs dans 12 régions</p>
      </div>

      {/* Interactive Morocco Map */}
      <Card className="border-0 shadow-elevated rounded-2xl overflow-hidden animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
        <CardContent className="p-2">
          <MoroccoMap
            selectedRegion={selectedRegion}
            onRegionSelect={handleRegionSelect}
          />
        </CardContent>
      </Card>

      {/* Regions List */}
      <div className="space-y-2">
        {regions.map((region, i) => {
          const isExpanded = expandedRegion === region.id;
          const regionAmbassadors = ambassadors.filter((a) => a.region === region.name);

          return (
            <Card
              id={`region-${region.id}`}
              key={region.id}
              className={`border-0 shadow-card animate-fade-in overflow-hidden transition-all ${
                selectedRegion === region.id ? "ring-2 ring-secondary shadow-glow-green" : ""
              }`}
              style={{ animationDelay: `${0.15 + i * 0.04}s`, opacity: 0 }}
            >
              <button
                onClick={() => {
                  setExpandedRegion(isExpanded ? null : region.id);
                  setSelectedRegion(region.id);
                }}
                className="w-full text-left"
              >
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl gradient-card-green flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-secondary" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-display font-semibold text-sm line-clamp-1">{region.name}</h4>
                      <p className="text-[10px] text-muted-foreground line-clamp-1">{region.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Badge className="bg-primary/10 text-primary border-0 text-[10px]">
                      <Users className="w-3 h-3 mr-1" />{region.ambassadorCount}
                    </Badge>
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                  </div>
                </CardContent>
              </button>

              {isExpanded && (
                <div className="px-4 pb-4 space-y-2 animate-fade-in">
                  <div className="h-px bg-border" />
                  {regionAmbassadors.length > 0 ? (
                    regionAmbassadors.map((amb) => (
                      <div key={amb.id} className="flex items-center gap-3 p-2 rounded-xl hover:bg-muted/50 transition-colors">
                        <div className="w-8 h-8 rounded-full gradient-hero flex items-center justify-center text-white text-xs font-bold">
                          {amb.avatar}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium">{amb.name}</p>
                          <p className="text-[10px] text-muted-foreground">{amb.role}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-muted-foreground py-2 text-center">
                      {region.ambassadorCount} ambassadeurs dans cette région
                    </p>
                  )}
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default MapPage;
