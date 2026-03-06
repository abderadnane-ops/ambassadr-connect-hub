import { useState } from "react";
import { Search, Star, Trophy, ArrowLeft, FolderOpen, Users, Map } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

import { ambassadors, badgeInfo, projects } from "@/data/mock-data";
import type { Ambassador } from "@/data/mock-data";
import { ambassadorAvatars } from "@/data/ambassador-avatars";
import MoroccoMap from "@/components/map/MoroccoMap";

const skillColors = [
  "bg-primary/10 text-primary",
  "bg-secondary/10 text-secondary",
  "bg-accent/10 text-accent",
  "bg-highlight/10 text-highlight",
];

const NetworkPage = () => {
  const [view, setView] = useState<"members" | "map">("members");
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [selectedProfile, setSelectedProfile] = useState<Ambassador | null>(null);
  const sorted = [...ambassadors].sort((a, b) => b.points - a.points);
  const filtered = sorted.filter(
    (a) =>
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.region.toLowerCase().includes(search.toLowerCase()) ||
      a.skills.some((s) => s.toLowerCase().includes(search.toLowerCase()))
  );

  if (selectedProfile) {
    const ambProjects = projects.filter((p) => p.ambassador === selectedProfile.name);
    return (
      <div className="px-4 py-4 space-y-4 animate-fade-in">
        <button onClick={() => setSelectedProfile(null)} className="flex items-center gap-1 text-sm text-primary font-medium">
          <ArrowLeft className="w-4 h-4" /> Retour
        </button>

        <div className="flex flex-col items-center text-center">
          <img src={ambassadorAvatars[selectedProfile.id]} alt={selectedProfile.name} className="w-20 h-20 rounded-full object-cover shadow-elevated" />
          <h2 className="font-display font-bold text-lg mt-3">{selectedProfile.name}</h2>
          <p className="text-sm text-muted-foreground">{selectedProfile.role}</p>
          <p className="text-xs text-muted-foreground">{selectedProfile.region}</p>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Points", value: selectedProfile.points, icon: Star },
            { label: "Projets", value: selectedProfile.projects, icon: FolderOpen },
            { label: "Badges", value: selectedProfile.badges.length, icon: Trophy },
          ].map((s) => (
            <Card key={s.label} className="border-0 shadow-card">
              <CardContent className="p-3 text-center">
                <s.icon className="w-4 h-4 mx-auto text-primary mb-1" />
                <p className="font-display font-bold text-lg">{s.value}</p>
                <p className="text-[10px] text-muted-foreground">{s.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-0 shadow-card">
          <CardContent className="p-4">
            <h3 className="font-display font-semibold text-sm mb-2">Bio</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{selectedProfile.bio}</p>
          </CardContent>
        </Card>

        <div>
          <h3 className="font-display font-semibold text-sm mb-2">Compétences</h3>
          <div className="flex flex-wrap gap-2">
            {selectedProfile.skills.map((skill, i) => (
              <Badge key={skill} className={`${skillColors[i % skillColors.length]} border-0 text-xs`}>{skill}</Badge>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display font-semibold text-sm mb-2">Badges</h3>
          <div className="flex flex-wrap gap-2">
            {selectedProfile.badges.map((badge) => (
              <Badge key={badge} className="bg-muted text-foreground border-0 text-xs">
                {badgeInfo[badge]?.icon} {badge}
              </Badge>
            ))}
          </div>
        </div>

        {ambProjects.length > 0 && (
          <div>
            <h3 className="font-display font-semibold text-sm mb-2">Projets - Inspirez-nous 💡</h3>
            {ambProjects.map((proj) => (
              <Card key={proj.id} className="border-0 shadow-card mb-2">
                <CardContent className="p-4">
                  <h4 className="font-display font-semibold text-sm">{proj.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{proj.description}</p>
                  <Badge className="bg-secondary/20 text-secondary border-0 text-[10px] mt-2">{proj.impact}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="px-4 py-4 space-y-4">
      <div className="animate-fade-in">
        <h2 className="font-display text-xl font-bold">Réseau</h2>
        <p className="text-sm text-muted-foreground mt-1">{ambassadors.length} ambassadeurs</p>
      </div>

      {/* View toggle */}
      <div className="flex gap-2 animate-fade-in" style={{ animationDelay: "0.05s" }}>
        <button
          onClick={() => setView("members")}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
            view === "members" ? "bg-primary text-primary-foreground shadow-card" : "bg-muted text-muted-foreground"
          }`}
        >
          <Users className="w-3.5 h-3.5" /> Membres
        </button>
        <button
          onClick={() => setView("map")}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
            view === "map" ? "bg-primary text-primary-foreground shadow-card" : "bg-muted text-muted-foreground"
          }`}
        >
          <Map className="w-3.5 h-3.5" /> Carte
        </button>
      </div>

      {view === "map" ? (
        <div className="animate-fade-in">
          <MoroccoMap selectedRegion={selectedRegion} onRegionSelect={setSelectedRegion} />
        </div>
      ) : (
        <>

      <div className="relative animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Rechercher un ambassadeur..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9 h-10 bg-muted/50 border-0 rounded-xl"
        />
      </div>

      {/* Leaderboard */}
      <Card className="border-0 shadow-elevated gradient-card-purple animate-fade-in" style={{ animationDelay: "0.15s", opacity: 0 }}>
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <Trophy className="w-4 h-4 text-highlight" />
            <h3 className="font-display font-semibold text-sm">Classement</h3>
          </div>
          <div className="space-y-2">
            {sorted.slice(0, 3).map((amb, i) => (
              <div key={amb.id} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <img src={ambassadorAvatars[amb.id]} alt={amb.name} className="w-7 h-7 rounded-full object-cover" />
                <span className="text-sm font-medium flex-1">{amb.name}</span>
                <span className="text-xs font-bold text-highlight flex items-center gap-1">
                  <Star className="w-3 h-3 fill-highlight" />{amb.points}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Directory */}
      <div className="space-y-2">
        {filtered.map((amb, i) => (
          <Card
            key={amb.id}
            className="border-0 shadow-card animate-fade-in cursor-pointer hover:shadow-elevated transition-shadow"
            style={{ animationDelay: `${0.2 + i * 0.04}s`, opacity: 0 }}
            onClick={() => setSelectedProfile(amb)}
          >
            <CardContent className="p-3 flex items-center gap-3">
              <img src={ambassadorAvatars[amb.id]} alt={amb.name} className="w-10 h-10 rounded-full object-cover shrink-0" />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-sm">{amb.name}</h4>
                  <span className="text-[10px] text-highlight flex items-center gap-0.5">
                    <Star className="w-3 h-3 fill-highlight" />{amb.points}
                  </span>
                </div>
                <p className="text-[10px] text-muted-foreground">{amb.role} • {amb.region.split("-")[0]}</p>
                <div className="flex gap-1 mt-1">
                  {amb.skills.slice(0, 2).map((s) => (
                    <span key={s} className="text-[9px] bg-muted px-1.5 py-0.5 rounded-full">{s}</span>
                  ))}
                  {amb.skills.length > 2 && (
                    <span className="text-[9px] text-muted-foreground">+{amb.skills.length - 2}</span>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      </>
      )}
    </div>
  );
};

export default NetworkPage;
