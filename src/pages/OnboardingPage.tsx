import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, ArrowLeft, CheckCircle, User, MapPin, Briefcase, Sparkles } from "lucide-react";
import { regions } from "@/data/mock-data";
import citizinLogo from "@/assets/citizin-logo-dark.png";

const availableSkills = [
  "Leadership", "Communication", "Plaidoyer", "Gestion de projet",
  "Développement durable", "Formation", "Éducation", "Événementiel",
  "Innovation", "Urbanisme", "Entrepreneuriat", "Médias",
  "Gouvernance", "Droits numériques", "Coopération internationale",
];

const motivations = [
  "Engagement civique", "Impact social", "Développement personnel",
  "Réseautage", "Contribution à ma région", "Apprentissage",
];

const OnboardingPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    region: "",
    city: "",
    bio: "",
    skills: [] as string[],
    motivations: [] as string[],
    experience: "",
    availability: "",
  });

  const steps = [
    { label: "Bienvenue", icon: Sparkles },
    { label: "Identité", icon: User },
    { label: "Localisation", icon: MapPin },
    { label: "Profil", icon: Briefcase },
    { label: "Terminé", icon: CheckCircle },
  ];

  const totalSteps = steps.length;
  const progress = ((step + 1) / totalSteps) * 100;

  const toggleSkill = (skill: string) => {
    setForm((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill],
    }));
  };

  const toggleMotivation = (m: string) => {
    setForm((prev) => ({
      ...prev,
      motivations: prev.motivations.includes(m)
        ? prev.motivations.filter((x) => x !== m)
        : [...prev.motivations, m],
    }));
  };

  const canProceed = () => {
    switch (step) {
      case 0: return true;
      case 1: return form.firstName.trim() && form.lastName.trim() && form.email.trim();
      case 2: return form.region && form.city.trim();
      case 3: return form.skills.length > 0;
      default: return true;
    }
  };

  const handleFinish = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Progress */}
      {step > 0 && step < totalSteps - 1 && (
        <div className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50 px-4 py-3">
          <div className="flex items-center gap-3">
            <button onClick={() => setStep((s) => s - 1)} className="p-1">
              <ArrowLeft className="w-5 h-5 text-foreground" />
            </button>
            <div className="flex-1">
              <Progress value={progress} className="h-1.5" />
            </div>
            <span className="text-xs text-muted-foreground font-medium">
              {step}/{totalSteps - 2}
            </span>
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col justify-center px-5 py-20">
        {/* Step 0: Welcome */}
        {step === 0 && (
          <div className="text-center space-y-6 animate-fade-in">
            <img src={citizinLogo} alt="CitiZen" className="h-16 mx-auto" />
            <div className="space-y-3">
              <h1 className="font-display text-2xl font-bold">
                Bienvenue dans CitiZen
              </h1>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">
                Rejoignez un réseau d'ambassadeurs engagés pour transformer la société civile au Maroc.
                Complétez votre profil pour commencer.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 max-w-xs mx-auto">
              {[
                { emoji: "🤝", label: "Réseau" },
                { emoji: "🎯", label: "Impact" },
                { emoji: "💡", label: "Intelligence collective" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-muted/50">
                  <span className="text-2xl">{item.emoji}</span>
                  <span className="text-[10px] font-medium text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>
            <Button onClick={() => setStep(1)} className="w-full max-w-xs mx-auto">
              Commencer <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        )}

        {/* Step 1: Identity */}
        {step === 1 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="font-display text-xl font-bold">Qui êtes-vous?</h2>
              <p className="text-sm text-muted-foreground mt-1">Informations de base</p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-foreground">Prénom *</label>
                  <Input
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    placeholder="Amina"
                    maxLength={50}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-foreground">Nom *</label>
                  <Input
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    placeholder="El Fassi"
                    maxLength={50}
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-foreground">Email *</label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="amina@example.com"
                  maxLength={255}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-foreground">Téléphone</label>
                <Input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+212 6XX XXX XXX"
                  maxLength={20}
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Location */}
        {step === 2 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="font-display text-xl font-bold">Votre région</h2>
              <p className="text-sm text-muted-foreground mt-1">Où êtes-vous basé(e)?</p>
            </div>
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-foreground">Région *</label>
                <Select value={form.region} onValueChange={(v) => setForm({ ...form, region: v })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez votre région" />
                  </SelectTrigger>
                  <SelectContent>
                    {regions.map((r) => (
                      <SelectItem key={r.id} value={r.name}>{r.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-foreground">Ville *</label>
                <Input
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  placeholder="Ex: Rabat, Casablanca..."
                  maxLength={100}
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Profile & Skills */}
        {step === 3 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="font-display text-xl font-bold">Votre profil</h2>
              <p className="text-sm text-muted-foreground mt-1">Compétences & motivations</p>
            </div>
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-foreground">Compétences *</label>
                <div className="flex flex-wrap gap-2">
                  {availableSkills.map((skill) => (
                    <button
                      key={skill}
                      onClick={() => toggleSkill(skill)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                        form.skills.includes(skill)
                          ? "bg-primary text-primary-foreground shadow-card"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      }`}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-foreground">Motivations</label>
                <div className="flex flex-wrap gap-2">
                  {motivations.map((m) => (
                    <button
                      key={m}
                      onClick={() => toggleMotivation(m)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                        form.motivations.includes(m)
                          ? "bg-secondary text-secondary-foreground shadow-card"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-foreground">Bio courte</label>
                <Textarea
                  value={form.bio}
                  onChange={(e) => setForm({ ...form, bio: e.target.value })}
                  placeholder="Décrivez brièvement votre parcours et engagement..."
                  rows={3}
                  maxLength={500}
                />
                <span className="text-[10px] text-muted-foreground">{form.bio.length}/500</span>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-foreground">Expérience associative</label>
                <Select value={form.experience} onValueChange={(v) => setForm({ ...form, experience: v })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Années d'expérience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-1">Moins d'un an</SelectItem>
                    <SelectItem value="1-3">1 à 3 ans</SelectItem>
                    <SelectItem value="3-5">3 à 5 ans</SelectItem>
                    <SelectItem value="5+">Plus de 5 ans</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Complete */}
        {step === 4 && (
          <div className="text-center space-y-6 animate-fade-in">
            <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10 text-secondary" />
            </div>
            <div className="space-y-2">
              <h2 className="font-display text-xl font-bold">Bienvenue, {form.firstName}! 🎉</h2>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
                Votre profil ambassadeur est prêt. Explorez le tableau de bord, 
                organisez des événements et contribuez à l'intelligence collective.
              </p>
            </div>
            <Card className="border-0 shadow-card max-w-sm mx-auto">
              <CardContent className="p-4 text-left space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-display font-bold text-primary text-sm">
                    {form.firstName[0]}{form.lastName[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{form.firstName} {form.lastName}</p>
                    <p className="text-xs text-muted-foreground">{form.region}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 pt-1">
                  {form.skills.slice(0, 4).map((s) => (
                    <Badge key={s} className="bg-primary/10 text-primary border-0 text-[10px]">{s}</Badge>
                  ))}
                  {form.skills.length > 4 && (
                    <Badge className="bg-muted text-muted-foreground border-0 text-[10px]">+{form.skills.length - 4}</Badge>
                  )}
                </div>
              </CardContent>
            </Card>
            <Button onClick={handleFinish} className="w-full max-w-xs mx-auto">
              Accéder au tableau de bord <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        )}
      </div>

      {/* Navigation buttons (steps 1-3) */}
      {step >= 1 && step <= 3 && (
        <div className="fixed bottom-0 left-0 right-0 glass border-t border-border/50 p-4">
          <Button
            onClick={() => setStep((s) => s + 1)}
            disabled={!canProceed()}
            className="w-full"
          >
            {step === 3 ? "Terminer" : "Continuer"} <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default OnboardingPage;
