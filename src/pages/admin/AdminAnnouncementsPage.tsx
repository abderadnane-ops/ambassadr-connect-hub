import { useState } from "react";
import { Send, Users, MapPin, Megaphone, GraduationCap, Bell, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

const regions = [
  "Casablanca-Settat", "Rabat-Salé-Kénitra", "Marrakech-Safi",
  "Fès-Meknès", "Tanger-Tétouan", "Souss-Massa", "Oriental",
  "Drâa-Tafilalet", "Béni Mellal-Khénifra", "Laâyoune-Sakia El Hamra",
  "Dakhla-Oued Ed-Dahab", "Guelmim-Oued Noun"
];

const recentAnnouncements = [
  { id: "1", title: "Nouvelle opportunité de financement disponible", target: "Tous les ambassadeurs", date: "5 Mars 2026", type: "opportunity" },
  { id: "2", title: "Nouvelle session de formation Leadership", target: "Casablanca-Settat", date: "3 Mars 2026", type: "training" },
  { id: "3", title: "Rappel : soumission des rapports mensuels", target: "Tous les ambassadeurs", date: "1 Mars 2026", type: "reminder" },
  { id: "4", title: "Événement national CITZEN - Save the date", target: "Tous les ambassadeurs", date: "28 Fév 2026", type: "event" },
  { id: "5", title: "Mise à jour du guide ambassadeur", target: "Mentors", date: "25 Fév 2026", type: "update" },
];

const typeColors: Record<string, string> = {
  opportunity: "bg-secondary/15 text-secondary",
  training: "bg-accent/15 text-accent",
  reminder: "bg-highlight/15 text-highlight",
  event: "bg-primary/15 text-primary",
  update: "bg-muted text-muted-foreground",
};

const typeLabels: Record<string, string> = {
  opportunity: "Opportunité",
  training: "Formation",
  reminder: "Rappel",
  event: "Événement",
  update: "Mise à jour",
};

const AdminAnnouncementsPage = () => {
  const [audience, setAudience] = useState("all");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!title.trim() || !message.trim()) return;
    toast({ title: "Annonce envoyée", description: `L'annonce a été envoyée à ${audience === "all" ? "tous les ambassadeurs" : audience === "mentors" ? "tous les mentors" : audience}.` });
    setTitle("");
    setMessage("");
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-bold">Annonces</h2>
        <p className="text-sm text-muted-foreground mt-1">Publier des annonces au réseau</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Compose */}
        <Card className="border-0 shadow-card lg:col-span-2">
          <CardHeader>
            <CardTitle className="font-display text-base flex items-center gap-2">
              <Send className="w-4 h-4 text-primary" />Nouvelle annonce
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Audience</label>
              <Select value={audience} onValueChange={setAudience}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all"><div className="flex items-center gap-2"><Users className="w-4 h-4" />Tous les ambassadeurs</div></SelectItem>
                  <SelectItem value="mentors"><div className="flex items-center gap-2"><GraduationCap className="w-4 h-4" />Tous les mentors</div></SelectItem>
                  {regions.map((r) => (
                    <SelectItem key={r} value={r}><div className="flex items-center gap-2"><MapPin className="w-4 h-4" />{r}</div></SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Titre</label>
              <Input placeholder="Titre de l'annonce" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Message</label>
              <Textarea placeholder="Rédigez votre annonce..." rows={5} value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>
            <Button className="bg-primary text-primary-foreground gap-1.5" onClick={handleSend} disabled={!title.trim() || !message.trim()}>
              <Send className="w-4 h-4" />Envoyer l'annonce
            </Button>
          </CardContent>
        </Card>

        {/* Recent */}
        <Card className="border-0 shadow-card">
          <CardHeader>
            <CardTitle className="font-display text-base flex items-center gap-2">
              <Megaphone className="w-4 h-4 text-accent" />Annonces récentes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentAnnouncements.map((a) => (
              <div key={a.id} className="p-3 rounded-lg bg-muted/50">
                <p className="text-sm font-medium">{a.title}</p>
                <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                  <Badge className={`${typeColors[a.type]} border-0 text-[10px]`}>{typeLabels[a.type]}</Badge>
                  <Badge className="bg-primary/10 text-primary border-0 text-[10px]">{a.target}</Badge>
                  <span className="text-[10px] text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" />{a.date}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminAnnouncementsPage;
