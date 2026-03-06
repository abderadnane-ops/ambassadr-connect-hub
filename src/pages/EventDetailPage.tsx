import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Calendar, Clock, MapPin, Users, ChevronLeft, CalendarPlus, CheckCircle, Loader2, Ban } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { toast } from "@/hooks/use-toast";

import sommetCitoyenGroup from "@/assets/events/sommet-citoyen-group.jpeg";
import labCitoyensOujda from "@/assets/events/lab-citoyens-oujda.jpeg";
import ambassadeursCitoyens from "@/assets/events/ambassadeurs-citoyens.png";
import { Calendar, Clock, MapPin, Users, ChevronLeft, CalendarPlus, CheckCircle, Loader2, Ban } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { toast } from "@/hooks/use-toast";

export type ParticipationStatus = "participer" | "en_attente" | "confirme" | "complet";

export interface EventData {
  id: string;
  title: string;
  date: string;
  time: string;
  type: string;
  location: string;
  attendees: number;
  maxAttendees: number;
  color: "secondary" | "accent" | "primary";
  participationStatus: ParticipationStatus;
  description: string;
  participants: { initials: string; name: string }[];
  image?: string;
}

export const eventsData: EventData[] = [
  {
    id: "1",
    title: "Café Citoyen Rabat",
    date: "12 Mars",
    time: "14:00",
    type: "Café Citoyen",
    location: "Rabat",
    attendees: 12,
    maxAttendees: 20,
    color: "secondary",
    participationStatus: "participer",
    description: "Rencontre citoyenne pour discuter des enjeux locaux de la ville de Rabat. Échange ouvert entre ambassadeurs et citoyens sur les projets communautaires en cours.",
    image: sommetCitoyenGroup,
    participants: [
      { initials: "AE", name: "Amina El Fassi" },
      { initials: "YB", name: "Youssef Bennani" },
      { initials: "FZ", name: "Fatima Zahra Ouali" },
      { initials: "KT", name: "Karim Tazi" },
      { initials: "NC", name: "Nadia Chraibi" },
    ],
  },
  {
    id: "2",
    title: "Lab Citoyens - Éducation",
    date: "18 Mars",
    time: "10:00",
    type: "Lab Citoyens",
    location: "Casablanca",
    attendees: 8,
    maxAttendees: 15,
    color: "accent",
    participationStatus: "en_attente",
    description: "Atelier collaboratif sur l'éducation civique et les méthodes innovantes pour engager les jeunes dans la vie citoyenne.",
    image: labCitoyensOujda,
    participants: [
      { initials: "HA", name: "Hassan Alaoui" },
      { initials: "LM", name: "Leila Mansouri" },
      { initials: "OI", name: "Omar Idrissi" },
    ],
  },
  {
    id: "3",
    title: "Forum Régional",
    date: "25 Mars",
    time: "09:00",
    type: "Conférence",
    location: "Fès",
    attendees: 45,
    maxAttendees: 45,
    color: "primary",
    participationStatus: "complet",
    description: "Grand forum régional réunissant les ambassadeurs de la région Fès-Meknès pour planifier les actions du prochain trimestre.",
    image: ambassadeursCitoyens,
    participants: [
      { initials: "KT", name: "Karim Tazi" },
      { initials: "AE", name: "Amina El Fassi" },
      { initials: "YB", name: "Youssef Bennani" },
      { initials: "FZ", name: "Fatima Zahra Ouali" },
      { initials: "NC", name: "Nadia Chraibi" },
      { initials: "HA", name: "Hassan Alaoui" },
    ],
  },
];

const statusConfig: Record<ParticipationStatus, { label: string; variant: string; icon: typeof CheckCircle; disabled: boolean }> = {
  participer: { label: "Participer", variant: "default", icon: CalendarPlus, disabled: false },
  en_attente: { label: "En attente de validation", variant: "outline", icon: Loader2, disabled: true },
  confirme: { label: "Confirmé", variant: "secondary", icon: CheckCircle, disabled: true },
  complet: { label: "Complet", variant: "destructive", icon: Ban, disabled: true },
};

const colorMap = {
  secondary: { badge: "bg-secondary/15 text-secondary", border: "border-l-secondary", gradient: "gradient-card-green", icon: "bg-secondary/20 text-secondary" },
  accent: { badge: "bg-accent/15 text-accent", border: "border-l-accent", gradient: "gradient-card-blue", icon: "bg-accent/20 text-accent" },
  primary: { badge: "bg-primary/15 text-primary", border: "border-l-primary", gradient: "gradient-card-purple", icon: "bg-primary/20 text-primary" },
};

const EventDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const eventBase = eventsData.find((e) => e.id === id);
  const [status, setStatus] = useState<ParticipationStatus>(eventBase?.participationStatus || "participer");

  if (!eventBase) {
    return (
      <div className="px-4 py-8 text-center">
        <p className="text-muted-foreground">Événement non trouvé</p>
        <Button variant="ghost" className="mt-4" onClick={() => navigate(-1)}>Retour</Button>
      </div>
    );
  }

  const event = { ...eventBase, participationStatus: status };
  const colors = colorMap[event.color];
  const config = statusConfig[status];
  const StatusIcon = config.icon;

  const handleParticiper = () => {
    setStatus("en_attente");
    toast({ title: "Demande envoyée", description: "Votre participation est en attente de validation." });
  };

  const handleAddToCalendar = () => {
    toast({ title: "Ajouté au calendrier", description: `${event.title} a été ajouté à votre calendrier.` });
  };

  return (
    <div className="px-4 py-4 space-y-4 animate-fade-in">
      {/* Back */}
      <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
        <ChevronLeft className="w-4 h-4" /> Retour
      </button>

      {/* Header Card */}
      <Card className={`border-0 border-l-4 ${colors.border} shadow-card overflow-hidden`}>
        <div className={`${colors.gradient} px-5 pt-5 pb-4`}>
          <Badge className={`${colors.badge} border-0 text-[10px] mb-2`}>{event.type}</Badge>
          <h1 className="font-display font-bold text-xl">{event.title}</h1>
        </div>
        <CardContent className="p-5 space-y-3">
          <p className="text-sm text-muted-foreground">{event.description}</p>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{event.date}</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{event.time}</span>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4" />{event.location}</span>
            <span className="flex items-center gap-2"><Users className="w-4 h-4" />{event.attendees}/{event.maxAttendees} participants</span>
          </div>
        </CardContent>
      </Card>

      {/* Participation Button */}
      <Button
        className={`w-full h-11 text-sm font-semibold gap-2 ${
          status === "en_attente" ? "bg-highlight/15 text-highlight border border-highlight/30 hover:bg-highlight/20" :
          status === "confirme" ? "bg-secondary/15 text-secondary border border-secondary/30 hover:bg-secondary/20" :
          status === "complet" ? "bg-destructive/15 text-destructive border border-destructive/30 hover:bg-destructive/20" : ""
        }`}
        variant={status === "participer" ? "default" : "outline"}
        disabled={config.disabled}
        onClick={handleParticiper}
      >
        <StatusIcon className={`w-4 h-4 ${status === "en_attente" ? "animate-spin" : ""}`} />
        {config.label}
      </Button>

      {/* Add to Calendar */}
      {(status === "confirme" || status === "en_attente") && (
        <Button variant="ghost" className="w-full h-10 text-sm gap-2 text-muted-foreground" onClick={handleAddToCalendar}>
          <CalendarPlus className="w-4 h-4" /> Ajouter au calendrier
        </Button>
      )}

      {/* Participants */}
      <Card className="border-0 shadow-card">
        <CardContent className="p-5">
          <h3 className="font-display font-semibold text-sm mb-3 flex items-center gap-2">
            <Users className="w-4 h-4 text-muted-foreground" /> Participants ({event.participants.length})
          </h3>
          <div className="space-y-2.5">
            {event.participants.map((p) => (
              <div key={p.initials} className="flex items-center gap-3">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-muted text-[10px] font-bold">{p.initials}</AvatarFallback>
                </Avatar>
                <span className="text-sm">{p.name}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EventDetailPage;
