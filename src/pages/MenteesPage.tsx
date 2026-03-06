import { useState } from "react";
import { Users, Search, MapPin, Clock, FileText, ChevronRight, TrendingUp, Star, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const mentees = [
  { id: "1", name: "Youssef Bennani", initials: "YB", region: "Casablanca-Settat", points: 420, goal: 600, reports: 8, approved: 6, lastActivity: "Il y a 2h", activities: 12 },
  { id: "2", name: "Nadia Chraibi", initials: "NC", region: "Tanger-Tétouan", points: 380, goal: 600, reports: 6, approved: 5, lastActivity: "Il y a 5h", activities: 9 },
  { id: "3", name: "Omar Idrissi", initials: "OI", region: "Fès-Meknès", points: 290, goal: 600, reports: 5, approved: 3, lastActivity: "Hier", activities: 7 },
  { id: "4", name: "Leila Mansouri", initials: "LM", region: "Marrakech-Safi", points: 510, goal: 600, reports: 10, approved: 9, lastActivity: "Il y a 1j", activities: 15 },
  { id: "5", name: "Hassan Alaoui", initials: "HA", region: "Rabat-Salé-Kénitra", points: 180, goal: 600, reports: 3, approved: 2, lastActivity: "Il y a 3j", activities: 4 },
  { id: "6", name: "Karim Tazi", initials: "KT", region: "Fès-Meknès", points: 340, goal: 600, reports: 7, approved: 6, lastActivity: "Il y a 1j", activities: 11 },
];

const MenteesPage = () => {
  const [search, setSearch] = useState("");
  const filtered = mentees.filter((m) => m.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="px-4 py-4 space-y-4">
      <div className="animate-fade-in">
        <h2 className="font-display text-xl font-bold flex items-center gap-2">
          <Users className="w-5 h-5 text-accent" /> Mes mentorés
        </h2>
        <p className="text-sm text-muted-foreground mt-1">Suivez la progression de vos ambassadeurs assignés</p>
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-3 gap-2 animate-fade-in" style={{ animationDelay: "0.05s", opacity: 0 }}>
        <Card className="border-0 shadow-card">
          <CardContent className="p-3 text-center">
            <p className="font-display font-bold text-lg text-accent">{mentees.length}</p>
            <p className="text-[9px] text-muted-foreground">Mentorés</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-card">
          <CardContent className="p-3 text-center">
            <p className="font-display font-bold text-lg text-secondary">{mentees.reduce((a, m) => a + m.approved, 0)}</p>
            <p className="text-[9px] text-muted-foreground">Approuvés</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-card">
          <CardContent className="p-3 text-center">
            <p className="font-display font-bold text-lg text-highlight">{mentees.reduce((a, m) => a + (m.reports - m.approved), 0)}</p>
            <p className="text-[9px] text-muted-foreground">En attente</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="relative animate-fade-in" style={{ animationDelay: "0.08s", opacity: 0 }}>
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Rechercher un mentoré..."
          className="pl-9 h-9 bg-muted/50 border-0 text-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Mentee list */}
      <div className="space-y-3">
        {filtered.map((m, i) => (
          <Card key={m.id} className="border-0 shadow-card hover:shadow-elevated transition-all animate-fade-in" style={{ animationDelay: `${0.1 + i * 0.04}s`, opacity: 0 }}>
            <CardContent className="p-4 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center text-white font-display font-bold text-xs shrink-0">
                  {m.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm">{m.name}</p>
                  <p className="text-[10px] text-muted-foreground flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {m.region}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xs font-semibold text-highlight flex items-center gap-1">
                    <Star className="w-3 h-3 fill-highlight" /> {m.points} pts
                  </p>
                  <p className="text-[9px] text-muted-foreground">{m.lastActivity}</p>
                </div>
              </div>

              {/* Progress */}
              <div>
                <div className="flex items-center justify-between text-[10px] text-muted-foreground mb-1">
                  <span>Objectif mensuel</span>
                  <span className="font-semibold">{Math.round((m.points / m.goal) * 100)}%</span>
                </div>
                <Progress value={(m.points / m.goal) * 100} className="h-1.5" />
              </div>

              {/* Activity stats */}
              <div className="flex items-center gap-4 text-[10px] text-muted-foreground">
                <span className="flex items-center gap-1"><FileText className="w-3 h-3" /> {m.reports} rapports</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-secondary" /> {m.approved} approuvés</span>
                <span className="flex items-center gap-1"><TrendingUp className="w-3 h-3" /> {m.activities} activités</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MenteesPage;
