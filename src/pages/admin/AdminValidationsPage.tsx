import { CheckCircle, XCircle, MessageSquare, Clock, MapPin, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const requests = [
  { id: "1", name: "Sara Benmoussa", initials: "SB", region: "Souss-Massa", motivation: "Engagée dans le développement communautaire depuis 5 ans. Je souhaite contribuer au réseau citoyen.", experience: "Présidente d'association locale, formatrice en leadership.", date: "Il y a 2 jours" },
  { id: "2", name: "Mehdi Lahlou", initials: "ML", region: "Oriental", motivation: "Passionné par l'engagement civique et la gouvernance locale participative.", experience: "Élu local, membre du conseil communal.", date: "Il y a 3 jours" },
  { id: "3", name: "Zineb Kadiri", initials: "ZK", region: "Drâa-Tafilalet", motivation: "Je veux représenter ma région dans le réseau et porter la voix des citoyens ruraux.", experience: "Coordinatrice ONG, spécialiste développement rural.", date: "Il y a 5 jours" },
  { id: "4", name: "Rachid Ouazzani", initials: "RO", region: "Tanger-Tétouan", motivation: "Contribuer à la modernisation de la participation citoyenne dans le nord du Maroc.", experience: "Journaliste, animateur de débats publics.", date: "Il y a 1 semaine" },
];

const AdminValidationsPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-2xl font-bold">Centre de validation</h2>
          <p className="text-sm text-muted-foreground mt-1">Examiner les demandes d'accès des ambassadeurs</p>
        </div>
        <Badge className="bg-highlight/15 text-highlight border-0">{requests.length} en attente</Badge>
      </div>

      <div className="space-y-4">
        {requests.map((req) => (
          <Card key={req.id} className="border-0 shadow-card hover:shadow-elevated transition-all">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Avatar className="w-12 h-12 shrink-0">
                  <AvatarFallback className="font-bold bg-primary/10 text-primary">{req.initials}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0 space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div>
                      <h3 className="font-display font-semibold text-base">{req.name}</h3>
                      <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{req.region}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{req.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Motivation</p>
                      <p className="text-sm mt-1">{req.motivation}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Expérience</p>
                      <p className="text-sm mt-1">{req.experience}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pt-2">
                    <Button size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-1.5">
                      <CheckCircle className="w-4 h-4" />Approuver
                    </Button>
                    <Button size="sm" variant="outline" className="text-destructive border-destructive/30 hover:bg-destructive/10 gap-1.5">
                      <XCircle className="w-4 h-4" />Rejeter
                    </Button>
                    <Button size="sm" variant="outline" className="gap-1.5">
                      <MessageSquare className="w-4 h-4" />Demander plus d'infos
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminValidationsPage;
