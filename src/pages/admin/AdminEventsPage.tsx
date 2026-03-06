import { Calendar, MapPin, Users, Clock, CheckCircle, XCircle, Edit, Eye, MoreHorizontal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const events = [
  { id: "1", title: "Café Citoyen Casablanca", type: "Café Citoyen", date: "15 Mars 2026", time: "14:00", location: "Centre Culturel Casablanca", attendees: 24, max: 30, status: "confirmed", organizer: "Amina El Fassi" },
  { id: "2", title: "Lab Citoyens Rabat", type: "Lab Citoyens", date: "22 Mars 2026", time: "09:00", location: "Université Mohammed V", attendees: 12, max: 20, status: "pending", organizer: "Fatima Zahra Ouali" },
  { id: "3", title: "Forum Régional Marrakech", type: "Forum", date: "5 Avril 2026", time: "10:00", location: "Palais des Congrès", attendees: 45, max: 100, status: "confirmed", organizer: "Karim Tazi" },
  { id: "4", title: "Atelier Leadership Fès", type: "Atelier", date: "12 Avril 2026", time: "15:00", location: "Espace Associatif Fès", attendees: 8, max: 15, status: "pending", organizer: "Hassan Alaoui" },
  { id: "5", title: "Café Citoyen Tanger", type: "Café Citoyen", date: "20 Avril 2026", time: "16:00", location: "Médiathèque Tanger", attendees: 0, max: 25, status: "cancelled", organizer: "Nadia Chraibi" },
];

const statusConfig: Record<string, { label: string; className: string }> = {
  confirmed: { label: "Confirmé", className: "bg-secondary/15 text-secondary" },
  pending: { label: "En attente", className: "bg-highlight/15 text-highlight" },
  cancelled: { label: "Annulé", className: "bg-destructive/15 text-destructive" },
};

const AdminEventsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-bold">Événements</h2>
        <p className="text-sm text-muted-foreground mt-1">Gérer et valider les événements du réseau</p>
      </div>

      <div className="space-y-3">
        {events.map((event) => {
          const sc = statusConfig[event.status];
          return (
            <Card key={event.id} className="border-0 shadow-card hover:shadow-elevated transition-all">
              <CardContent className="p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-display font-semibold text-sm">{event.title}</h3>
                    <Badge className={`${sc.className} border-0 text-[10px]`}>{sc.label}</Badge>
                  </div>
                  <div className="flex items-center gap-4 mt-1.5 text-xs text-muted-foreground flex-wrap">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{event.date} · {event.time}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{event.location}</span>
                    <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{event.attendees}/{event.max}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Organisé par <span className="font-medium text-foreground">{event.organizer}</span></p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {event.status === "pending" && (
                    <>
                      <Button size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-1 h-8">
                        <CheckCircle className="w-3.5 h-3.5" />Valider
                      </Button>
                      <Button size="sm" variant="outline" className="text-destructive border-destructive/30 h-8 gap-1">
                        <XCircle className="w-3.5 h-3.5" />Refuser
                      </Button>
                    </>
                  )}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontal className="w-4 h-4" /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem><Eye className="w-4 h-4 mr-2" />Voir détails</DropdownMenuItem>
                      <DropdownMenuItem><Edit className="w-4 h-4 mr-2" />Modifier</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive"><XCircle className="w-4 h-4 mr-2" />Annuler</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default AdminEventsPage;
