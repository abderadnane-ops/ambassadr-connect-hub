import { MapPin, Users, Calendar, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const regionsData = [
  { name: "Casablanca-Settat", ambassadors: 42, events: 12, reports: 18, coverage: 85 },
  { name: "Rabat-Salé-Kénitra", ambassadors: 38, events: 10, reports: 15, coverage: 78 },
  { name: "Marrakech-Safi", ambassadors: 31, events: 8, reports: 12, coverage: 65 },
  { name: "Fès-Meknès", ambassadors: 28, events: 7, reports: 10, coverage: 60 },
  { name: "Tanger-Tétouan", ambassadors: 25, events: 6, reports: 9, coverage: 55 },
  { name: "Souss-Massa", ambassadors: 22, events: 5, reports: 7, coverage: 48 },
  { name: "Oriental", ambassadors: 18, events: 4, reports: 5, coverage: 40 },
  { name: "Drâa-Tafilalet", ambassadors: 15, events: 3, reports: 4, coverage: 35 },
  { name: "Béni Mellal-Khénifra", ambassadors: 12, events: 3, reports: 3, coverage: 30 },
  { name: "Laâyoune-Sakia El Hamra", ambassadors: 8, events: 2, reports: 3, coverage: 22 },
  { name: "Guelmim-Oued Noun", ambassadors: 5, events: 1, reports: 2, coverage: 15 },
  { name: "Dakhla-Oued Ed-Dahab", ambassadors: 3, events: 1, reports: 1, coverage: 10 },
];

const AdminRegionsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-bold">Régions</h2>
        <p className="text-sm text-muted-foreground mt-1">Couverture et activité par région</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {regionsData.map((region) => (
          <Card key={region.name} className="border-0 shadow-card hover:shadow-elevated transition-all">
            <CardContent className="p-5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-sm">{region.name}</h3>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-lg bg-muted/50">
                  <Users className="w-3.5 h-3.5 text-primary mx-auto mb-1" />
                  <p className="text-sm font-bold">{region.ambassadors}</p>
                  <p className="text-[9px] text-muted-foreground">Ambassadeurs</p>
                </div>
                <div className="p-2 rounded-lg bg-muted/50">
                  <Calendar className="w-3.5 h-3.5 text-accent mx-auto mb-1" />
                  <p className="text-sm font-bold">{region.events}</p>
                  <p className="text-[9px] text-muted-foreground">Événements</p>
                </div>
                <div className="p-2 rounded-lg bg-muted/50">
                  <FileText className="w-3.5 h-3.5 text-secondary mx-auto mb-1" />
                  <p className="text-sm font-bold">{region.reports}</p>
                  <p className="text-[9px] text-muted-foreground">Rapports</p>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-muted-foreground">Couverture</span>
                  <span className="font-semibold">{region.coverage}%</span>
                </div>
                <Progress value={region.coverage} className="h-1.5" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminRegionsPage;
