import { MapPin, Users, FileText, TrendingUp, Calendar, Coffee, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const regions = [
  {
    name: "Casablanca-Settat",
    mentees: 2,
    totalActivities: 21,
    reports: 14,
    approved: 11,
    events: 5,
    points: 800,
    trend: "+12%",
  },
  {
    name: "Fès-Meknès",
    mentees: 2,
    totalActivities: 18,
    reports: 12,
    approved: 9,
    events: 4,
    points: 630,
    trend: "+8%",
  },
  {
    name: "Tanger-Tétouan-Al Hoceïma",
    mentees: 1,
    totalActivities: 9,
    reports: 6,
    approved: 5,
    events: 3,
    points: 380,
    trend: "+15%",
  },
  {
    name: "Marrakech-Safi",
    mentees: 1,
    totalActivities: 15,
    reports: 10,
    approved: 9,
    events: 4,
    points: 510,
    trend: "+20%",
  },
  {
    name: "Rabat-Salé-Kénitra",
    mentees: 1,
    totalActivities: 4,
    reports: 3,
    approved: 2,
    events: 1,
    points: 180,
    trend: "-5%",
  },
];

const totalActivities = regions.reduce((a, r) => a + r.totalActivities, 0);

const RegionalActivityPage = () => {
  return (
    <div className="px-4 py-4 space-y-4">
      <div className="animate-fade-in">
        <h2 className="font-display text-xl font-bold flex items-center gap-2">
          <MapPin className="w-5 h-5 text-secondary" /> Activité régionale
        </h2>
        <p className="text-sm text-muted-foreground mt-1">Vue d'ensemble de l'activité de vos mentorés par région</p>
      </div>

      {/* Global stats */}
      <div className="grid grid-cols-2 gap-2 animate-fade-in" style={{ animationDelay: "0.05s", opacity: 0 }}>
        <Card className="border-0 shadow-card">
          <CardContent className="p-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="font-display font-bold text-lg">{regions.length}</p>
              <p className="text-[9px] text-muted-foreground">Régions couvertes</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-card">
          <CardContent className="p-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center shrink-0">
              <TrendingUp className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <p className="font-display font-bold text-lg">{totalActivities}</p>
              <p className="text-[9px] text-muted-foreground">Activités totales</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Region cards */}
      <div className="space-y-3">
        {regions.map((region, i) => (
          <Card key={region.name} className="border-0 shadow-card animate-fade-in" style={{ animationDelay: `${0.1 + i * 0.04}s`, opacity: 0 }}>
            <CardContent className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  <h4 className="font-display font-semibold text-sm">{region.name}</h4>
                </div>
                <Badge className={`border-0 text-[9px] px-1.5 ${region.trend.startsWith("+") ? "bg-secondary/15 text-secondary" : "bg-destructive/15 text-destructive"}`}>
                  <TrendingUp className="w-2.5 h-2.5 mr-0.5" /> {region.trend}
                </Badge>
              </div>

              <div className="grid grid-cols-4 gap-2 text-center">
                <div>
                  <p className="font-bold text-sm">{region.mentees}</p>
                  <p className="text-[8px] text-muted-foreground flex items-center justify-center gap-0.5"><Users className="w-2.5 h-2.5" /> Mentorés</p>
                </div>
                <div>
                  <p className="font-bold text-sm">{region.reports}</p>
                  <p className="text-[8px] text-muted-foreground flex items-center justify-center gap-0.5"><FileText className="w-2.5 h-2.5" /> Rapports</p>
                </div>
                <div>
                  <p className="font-bold text-sm">{region.events}</p>
                  <p className="text-[8px] text-muted-foreground flex items-center justify-center gap-0.5"><Coffee className="w-2.5 h-2.5" /> Événements</p>
                </div>
                <div>
                  <p className="font-bold text-sm text-highlight">{region.points}</p>
                  <p className="text-[8px] text-muted-foreground">Points</p>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-[10px] text-muted-foreground mb-1">
                  <span>Taux d'approbation</span>
                  <span className="font-semibold">{Math.round((region.approved / region.reports) * 100)}%</span>
                </div>
                <Progress value={(region.approved / region.reports) * 100} className="h-1.5" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RegionalActivityPage;
