import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Coffee, FlaskConical, Calendar, MapPin, Users, Clock, CheckCircle, Send } from "lucide-react";
import { regions } from "@/data/mock-data";

type EventType = "cafe-citoyen" | "lab-citoyen" | "";

const eventTypeInfo = {
  "cafe-citoyen": {
    label: "Café Citoyen",
    icon: Coffee,
    description: "Un espace de dialogue ouvert entre citoyens et acteurs locaux autour d'un thème civique.",
    color: "bg-primary/10 text-primary",
    gradient: "gradient-card-purple",
  },
  "lab-citoyen": {
    label: "Lab Citoyen",
    icon: FlaskConical,
    description: "Un atelier collaboratif pour co-créer des solutions innovantes à des problématiques locales.",
    color: "bg-secondary/10 text-secondary",
    gradient: "gradient-card-green",
  },
};

const themes = [
  "Gouvernance locale", "Jeunesse & emploi", "Environnement", "Éducation",
  "Santé publique", "Numérique", "Culture & patrimoine", "Inclusion sociale",
  "Développement économique", "Droits des femmes",
];

const EventApplicationPage = () => {
  const navigate = useNavigate();
  const [eventType, setEventType] = useState<EventType>("");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    title: "",
    theme: "",
    description: "",
    objectives: "",
    region: "",
    city: "",
    venue: "",
    date: "",
    time: "",
    duration: "",
    expectedAttendees: "",
    targetAudience: "",
    partners: "",
    needsSupport: "",
  });

  const isValid = eventType && form.title.trim() && form.theme && form.region && form.date && form.description.trim();

  const handleSubmit = () => {
    if (!isValid) return;
    setSubmitted(true);
  };

  if (submitted) {
    const info = eventTypeInfo[eventType as keyof typeof eventTypeInfo];
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-5">
        <div className="text-center space-y-5 animate-fade-in">
          <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto">
            <CheckCircle className="w-10 h-10 text-secondary" />
          </div>
          <h2 className="font-display text-xl font-bold">Demande envoyée!</h2>
          <p className="text-sm text-muted-foreground max-w-sm">
            Votre demande pour organiser un <strong>{info?.label}</strong> a été soumise.
            Vous recevrez une confirmation dans les 48h.
          </p>
          <Card className="border-0 shadow-card max-w-sm">
            <CardContent className="p-4 text-left space-y-2">
              <p className="font-semibold text-sm">{form.title}</p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="w-3.5 h-3.5" /> {form.date} {form.time && `· ${form.time}`}
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin className="w-3.5 h-3.5" /> {form.city}, {form.region}
              </div>
            </CardContent>
          </Card>
          <div className="flex gap-3 justify-center">
            <Button variant="outline" onClick={() => navigate("/")}>Accueil</Button>
            <Button onClick={() => { setSubmitted(false); setEventType(""); setForm({ title: "", theme: "", description: "", objectives: "", region: "", city: "", venue: "", date: "", time: "", duration: "", expectedAttendees: "", targetAudience: "", partners: "", needsSupport: "" }); }}>
              Nouvelle demande
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50 px-4 h-14 flex items-center gap-3">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="font-display font-bold text-base">Organiser un événement</h1>
      </div>

      <div className="pt-18 px-4 py-6 space-y-6">
        {/* Event type selection */}
        {!eventType ? (
          <div className="space-y-5 animate-fade-in">
            <div>
              <h2 className="font-display text-xl font-bold">Quel type d'événement?</h2>
              <p className="text-sm text-muted-foreground mt-1">Choisissez le format qui convient</p>
            </div>
            {(Object.entries(eventTypeInfo) as [string, typeof eventTypeInfo["cafe-citoyen"]][]).map(([key, info]) => (
              <Card
                key={key}
                className={`border-0 shadow-card cursor-pointer hover:shadow-elevated transition-all ${info.gradient}`}
                onClick={() => setEventType(key as EventType)}
              >
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-2xl ${info.color} flex items-center justify-center shrink-0`}>
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base">{info.label}</h3>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{info.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-5 animate-fade-in">
            {/* Selected type badge */}
            <div className="flex items-center gap-2">
              <button onClick={() => setEventType("")} className="text-xs text-primary font-medium">← Changer le type</button>
              <Badge className={`${eventTypeInfo[eventType].color} border-0 text-xs`}>
                {eventTypeInfo[eventType].label}
              </Badge>
            </div>

            {/* Form */}
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-foreground">Titre de l'événement *</label>
                <Input
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  placeholder={eventType === "cafe-citoyen" ? "Ex: Café Citoyen - La jeunesse et l'emploi" : "Ex: Lab Citoyen - Solutions pour la mobilité urbaine"}
                  maxLength={100}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-foreground">Thématique *</label>
                <Select value={form.theme} onValueChange={(v) => setForm({ ...form, theme: v })}>
                  <SelectTrigger><SelectValue placeholder="Choisir un thème" /></SelectTrigger>
                  <SelectContent>
                    {themes.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-foreground">Description & contexte *</label>
                <Textarea
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  placeholder="Décrivez le contexte, les enjeux et le déroulé prévu..."
                  rows={4}
                  maxLength={1000}
                />
                <span className="text-[10px] text-muted-foreground">{form.description.length}/1000</span>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-foreground">Objectifs</label>
                <Textarea
                  value={form.objectives}
                  onChange={(e) => setForm({ ...form, objectives: e.target.value })}
                  placeholder="Quels résultats attendez-vous?"
                  rows={2}
                  maxLength={500}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-foreground">Région *</label>
                  <Select value={form.region} onValueChange={(v) => setForm({ ...form, region: v })}>
                    <SelectTrigger><SelectValue placeholder="Région" /></SelectTrigger>
                    <SelectContent>
                      {regions.map((r) => <SelectItem key={r.id} value={r.name}>{r.name}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-foreground">Ville</label>
                  <Input
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    placeholder="Ville"
                    maxLength={100}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-foreground">Lieu / Adresse</label>
                <Input
                  value={form.venue}
                  onChange={(e) => setForm({ ...form, venue: e.target.value })}
                  placeholder="Ex: Centre culturel, Salle municipale..."
                  maxLength={200}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-foreground">Date *</label>
                  <Input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-foreground">Heure</label>
                  <Input
                    type="time"
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-foreground">Durée estimée</label>
                  <Select value={form.duration} onValueChange={(v) => setForm({ ...form, duration: v })}>
                    <SelectTrigger><SelectValue placeholder="Durée" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1h">1 heure</SelectItem>
                      <SelectItem value="2h">2 heures</SelectItem>
                      <SelectItem value="3h">3 heures</SelectItem>
                      <SelectItem value="half-day">Demi-journée</SelectItem>
                      <SelectItem value="full-day">Journée complète</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-foreground">Participants prévus</label>
                  <Input
                    type="number"
                    value={form.expectedAttendees}
                    onChange={(e) => setForm({ ...form, expectedAttendees: e.target.value })}
                    placeholder="Ex: 30"
                    min={1}
                    max={10000}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-foreground">Public cible</label>
                <Input
                  value={form.targetAudience}
                  onChange={(e) => setForm({ ...form, targetAudience: e.target.value })}
                  placeholder="Ex: Jeunes 18-30 ans, élus locaux..."
                  maxLength={200}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-foreground">Partenaires locaux</label>
                <Input
                  value={form.partners}
                  onChange={(e) => setForm({ ...form, partners: e.target.value })}
                  placeholder="Associations, institutions partenaires..."
                  maxLength={300}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-foreground">Besoins de soutien</label>
                <Textarea
                  value={form.needsSupport}
                  onChange={(e) => setForm({ ...form, needsSupport: e.target.value })}
                  placeholder="Logistique, financement, matériel, intervenants..."
                  rows={2}
                  maxLength={500}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Submit button */}
      {eventType && (
        <div className="fixed bottom-0 left-0 right-0 glass border-t border-border/50 p-4">
          <Button onClick={handleSubmit} disabled={!isValid} className="w-full">
            <Send className="w-4 h-4 mr-2" /> Soumettre la demande
          </Button>
        </div>
      )}
    </div>
  );
};

export default EventApplicationPage;
