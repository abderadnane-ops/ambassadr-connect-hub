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
import { ArrowLeft, CheckCircle, Send, FileText, Users, TrendingUp, MessageSquare, Star } from "lucide-react";

const satisfactionLevels = [
  { value: "5", label: "Excellent", emoji: "🌟" },
  { value: "4", label: "Très bien", emoji: "😊" },
  { value: "3", label: "Bien", emoji: "👍" },
  { value: "2", label: "Moyen", emoji: "😐" },
  { value: "1", label: "À améliorer", emoji: "🔧" },
];

const EventReportPage = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    eventTitle: "",
    eventType: "",
    eventDate: "",
    region: "",
    actualAttendees: "",
    womenPercentage: "",
    youthPercentage: "",
    summary: "",
    keyDiscussions: "",
    outcomes: "",
    recommendations: "",
    challenges: "",
    satisfaction: "",
    participantFeedback: "",
    mediaLinks: "",
    followUpActions: "",
  });

  const isValid = form.eventTitle.trim() && form.eventType && form.eventDate && form.actualAttendees && form.summary.trim();

  const handleSubmit = () => {
    if (!isValid) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-5">
        <div className="text-center space-y-5 animate-fade-in">
          <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto">
            <CheckCircle className="w-10 h-10 text-secondary" />
          </div>
          <h2 className="font-display text-xl font-bold">Rapport soumis!</h2>
          <p className="text-sm text-muted-foreground max-w-sm">
            Merci pour votre rapport détaillé. Ces données contribuent à l'intelligence collective du réseau.
          </p>
          <div className="flex gap-3 justify-center">
            <Button variant="outline" onClick={() => navigate("/")}>Accueil</Button>
            <Button onClick={() => { setSubmitted(false); setForm({ eventTitle: "", eventType: "", eventDate: "", region: "", actualAttendees: "", womenPercentage: "", youthPercentage: "", summary: "", keyDiscussions: "", outcomes: "", recommendations: "", challenges: "", satisfaction: "", participantFeedback: "", mediaLinks: "", followUpActions: "" }); }}>
              Nouveau rapport
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
        <h1 className="font-display font-bold text-base">Rapport post-événement</h1>
      </div>

      <div className="pt-18 px-4 py-6 space-y-6">
        {/* Section: Event Info */}
        <section className="space-y-4 animate-fade-in">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-primary" />
            <h3 className="font-display font-semibold text-sm">Informations de l'événement</h3>
          </div>
          <div className="space-y-3">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-foreground">Titre de l'événement *</label>
              <Input
                value={form.eventTitle}
                onChange={(e) => setForm({ ...form, eventTitle: e.target.value })}
                placeholder="Ex: Café Citoyen - Jeunesse & emploi"
                maxLength={100}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-foreground">Type *</label>
                <Select value={form.eventType} onValueChange={(v) => setForm({ ...form, eventType: v })}>
                  <SelectTrigger><SelectValue placeholder="Type" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cafe-citoyen">Café Citoyen</SelectItem>
                    <SelectItem value="lab-citoyen">Lab Citoyen</SelectItem>
                    <SelectItem value="autre">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-foreground">Date *</label>
                <Input
                  type="date"
                  value={form.eventDate}
                  onChange={(e) => setForm({ ...form, eventDate: e.target.value })}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section: Participation */}
        <section className="space-y-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-secondary" />
            <h3 className="font-display font-semibold text-sm">Participation</h3>
          </div>
          <div className="space-y-3">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-foreground">Nombre de participants *</label>
              <Input
                type="number"
                value={form.actualAttendees}
                onChange={(e) => setForm({ ...form, actualAttendees: e.target.value })}
                placeholder="Ex: 45"
                min={0}
                max={10000}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-foreground">% Femmes</label>
                <Input
                  type="number"
                  value={form.womenPercentage}
                  onChange={(e) => setForm({ ...form, womenPercentage: e.target.value })}
                  placeholder="Ex: 40"
                  min={0}
                  max={100}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-foreground">% Jeunes (&lt;30 ans)</label>
                <Input
                  type="number"
                  value={form.youthPercentage}
                  onChange={(e) => setForm({ ...form, youthPercentage: e.target.value })}
                  placeholder="Ex: 60"
                  min={0}
                  max={100}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section: Content & Outcomes */}
        <section className="space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-accent" />
            <h3 className="font-display font-semibold text-sm">Contenu & Résultats</h3>
          </div>
          <div className="space-y-3">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-foreground">Résumé de l'événement *</label>
              <Textarea
                value={form.summary}
                onChange={(e) => setForm({ ...form, summary: e.target.value })}
                placeholder="Décrivez le déroulé général de l'événement..."
                rows={4}
                maxLength={2000}
              />
              <span className="text-[10px] text-muted-foreground">{form.summary.length}/2000</span>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-foreground">Points clés des discussions</label>
              <Textarea
                value={form.keyDiscussions}
                onChange={(e) => setForm({ ...form, keyDiscussions: e.target.value })}
                placeholder="Quels thèmes ont été abordés? Quelles idées marquantes?"
                rows={3}
                maxLength={1500}
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-foreground">Résultats & décisions</label>
              <Textarea
                value={form.outcomes}
                onChange={(e) => setForm({ ...form, outcomes: e.target.value })}
                placeholder="Quelles décisions ont été prises? Quels engagements?"
                rows={3}
                maxLength={1500}
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-foreground">Recommandations</label>
              <Textarea
                value={form.recommendations}
                onChange={(e) => setForm({ ...form, recommendations: e.target.value })}
                placeholder="Suggestions pour les prochains événements..."
                rows={2}
                maxLength={1000}
              />
            </div>
          </div>
        </section>

        {/* Section: Feedback */}
        <section className="space-y-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-primary" />
            <h3 className="font-display font-semibold text-sm">Évaluation</h3>
          </div>
          <div className="space-y-3">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-foreground">Satisfaction globale</label>
              <div className="flex gap-2 flex-wrap">
                {satisfactionLevels.map((level) => (
                  <button
                    key={level.value}
                    onClick={() => setForm({ ...form, satisfaction: level.value })}
                    className={`px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 ${
                      form.satisfaction === level.value
                        ? "bg-primary text-primary-foreground shadow-card"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <span>{level.emoji}</span> {level.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-foreground">Défis rencontrés</label>
              <Textarea
                value={form.challenges}
                onChange={(e) => setForm({ ...form, challenges: e.target.value })}
                placeholder="Logistique, participation, contenu..."
                rows={2}
                maxLength={500}
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-foreground">Retours des participants</label>
              <Textarea
                value={form.participantFeedback}
                onChange={(e) => setForm({ ...form, participantFeedback: e.target.value })}
                placeholder="Témoignages ou retours marquants..."
                rows={2}
                maxLength={1000}
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-foreground">Actions de suivi</label>
              <Textarea
                value={form.followUpActions}
                onChange={(e) => setForm({ ...form, followUpActions: e.target.value })}
                placeholder="Prochaines étapes, personnes responsables..."
                rows={2}
                maxLength={500}
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-foreground">Liens médias (photos, vidéos)</label>
              <Input
                value={form.mediaLinks}
                onChange={(e) => setForm({ ...form, mediaLinks: e.target.value })}
                placeholder="Liens Drive, album photos..."
                maxLength={500}
              />
            </div>
          </div>
        </section>
      </div>

      {/* Submit */}
      <div className="fixed bottom-0 left-0 right-0 glass border-t border-border/50 p-4">
        <Button onClick={handleSubmit} disabled={!isValid} className="w-full">
          <Send className="w-4 h-4 mr-2" /> Soumettre le rapport
        </Button>
      </div>
    </div>
  );
};

export default EventReportPage;
