import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { Send, Upload } from "lucide-react";
import citizinLogo from "@/assets/citizin-logo.png";

const REGIONS = [
  "Tanger-Tétouan-Al Hoceïma",
  "L'Oriental",
  "Fès-Meknès",
  "Rabat-Salé-Kénitra",
  "Béni Mellal-Khénifra",
  "Casablanca-Settat",
  "Marrakech-Safi",
  "Drâa-Tafilalet",
  "Souss-Massa",
  "Guelmim-Oued Noun",
  "Laâyoune-Sakia El Hamra",
  "Dakhla-Oued Ed-Dahab",
];

const SignupPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [region, setRegion] = useState("");
  const [cohort, setCohort] = useState("");
  const [roleInNetwork, setRoleInNetwork] = useState("");
  const [coordinatorName, setCoordinatorName] = useState("");
  const [motivation, setMotivation] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !region) {
      toast.error("Veuillez remplir les champs obligatoires");
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("access_requests").insert({
      full_name: fullName.trim(),
      email: email.trim(),
      phone: phone.trim() || null,
      region,
      cohort: cohort.trim() || null,
      role_in_network: roleInNetwork.trim() || null,
      coordinator_name: coordinatorName.trim() || null,
      motivation: motivation.trim() || null,
    });
    setLoading(false);
    if (error) {
      toast.error("Erreur lors de l'envoi. Veuillez réessayer.");
    } else {
      setSubmitted(true);
      toast.success("Demande envoyée avec succès !");
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="w-full max-w-sm space-y-6 text-center">
          <img
            src={citizinLogo}
            alt="CITZEN"
            className="h-10 mx-auto"
            style={{ filter: "brightness(0) saturate(100%) invert(18%) sepia(30%) saturate(2000%) hue-rotate(290deg)" }}
          />
          <Card className="border-0 shadow-elevated">
            <CardContent className="p-6 space-y-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Send className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-lg font-semibold text-foreground">Demande envoyée</h2>
              <p className="text-sm text-muted-foreground">
                Votre demande sera examinée par l'administration.
                Vous recevrez un email une fois votre accès validé.
              </p>
            </CardContent>
          </Card>
          <p className="text-center">
            <Link to="/login" className="text-primary font-semibold hover:underline text-sm">
              Retour à la connexion
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center space-y-2">
          <img
            src={citizinLogo}
            alt="CITZEN"
            className="h-10 mx-auto"
            style={{ filter: "brightness(0) saturate(100%) invert(18%) sepia(30%) saturate(2000%) hue-rotate(290deg)" }}
          />
          <p className="text-sm font-semibold text-foreground">Demande d'accès à CITZEN</p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            L'accès à la plateforme CITZEN est réservé aux Ambassadeurs Citoyens validés par l'administration du réseau.
            Veuillez remplir ce formulaire pour soumettre votre demande d'accès.
          </p>
        </div>

        <Card className="border-0 shadow-elevated">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Nom complet *</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Prénom Nom"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="h-11"
                  maxLength={100}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-11"
                  maxLength={255}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+212 6XX XXX XXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-11"
                  maxLength={20}
                />
              </div>

              <div className="space-y-2">
                <Label>Région *</Label>
                <Select value={region} onValueChange={setRegion} required>
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Sélectionnez votre région" />
                  </SelectTrigger>
                  <SelectContent>
                    {REGIONS.map((r) => (
                      <SelectItem key={r} value={r}>{r}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cohort">Promotion / Cohorte</Label>
                <Input
                  id="cohort"
                  type="text"
                  placeholder="Ex: Cohorte 2024"
                  value={cohort}
                  onChange={(e) => setCohort(e.target.value)}
                  className="h-11"
                  maxLength={50}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="roleInNetwork">Fonction dans le réseau</Label>
                <Input
                  id="roleInNetwork"
                  type="text"
                  placeholder="Ex: Ambassadeur, Mentor, Coordinateur"
                  value={roleInNetwork}
                  onChange={(e) => setRoleInNetwork(e.target.value)}
                  className="h-11"
                  maxLength={100}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="coordinatorName">Nom du coordinateur ou référent</Label>
                <Input
                  id="coordinatorName"
                  type="text"
                  placeholder="Prénom Nom du référent"
                  value={coordinatorName}
                  onChange={(e) => setCoordinatorName(e.target.value)}
                  className="h-11"
                  maxLength={100}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="motivation">Motivation</Label>
                <Textarea
                  id="motivation"
                  placeholder="Pourquoi souhaitez-vous accéder à la plateforme CITZEN ?"
                  value={motivation}
                  onChange={(e) => setMotivation(e.target.value)}
                  className="min-h-[80px] resize-none"
                  maxLength={1000}
                />
              </div>

              <Button type="submit" disabled={loading} className="w-full h-11 rounded-xl font-semibold">
                <Send className="w-4 h-4 mr-2" />
                {loading ? "Envoi en cours..." : "Soumettre la demande"}
              </Button>

              <p className="text-[11px] text-muted-foreground text-center leading-relaxed">
                Votre demande sera examinée par l'administration.
                Vous recevrez un email une fois votre accès validé.
              </p>
            </form>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-muted-foreground">
          Déjà un compte ?{" "}
          <Link to="/login" className="text-primary font-semibold hover:underline">
            Se connecter
          </Link>
        </p>

        <p className="text-center">
          <Link to="/" className="text-xs text-muted-foreground hover:text-foreground">
            ← Retour à l'accueil
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
