import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { LogIn, Eye, EyeOff, ScanFace, Fingerprint } from "lucide-react";
import citizinLogo from "@/assets/citizin-logo.png";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      toast.error("Veuillez remplir tous les champs");
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
    setLoading(false);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Connexion réussie !");
      navigate("/dashboard");
    }
  };

  const handleBiometric = (type: "face" | "fingerprint") => {
    toast.info(
      type === "face"
        ? "La reconnaissance faciale sera disponible prochainement."
        : "L'empreinte digitale sera disponible prochainement."
    );
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center space-y-2">
          <img
            src={citizinLogo}
            alt="CITZEN"
            className="h-10 mx-auto"
            style={{ filter: "brightness(0) saturate(100%) invert(18%) sepia(30%) saturate(2000%) hue-rotate(290deg)" }}
          />
          <p className="text-sm text-muted-foreground">Connectez-vous à votre espace ambassadeur</p>
        </div>

        <Card className="border-0 shadow-elevated">
          <CardContent className="p-6">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-11"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Mot de passe</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-11 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <Button type="submit" disabled={loading} className="w-full h-11 rounded-xl font-semibold">
                <LogIn className="w-4 h-4 mr-2" />
                {loading ? "Connexion..." : "Se connecter"}
              </Button>
            </form>

            <div className="flex items-center gap-3 my-5">
              <Separator className="flex-1" />
              <span className="text-xs text-muted-foreground whitespace-nowrap">Ou continuer avec</span>
              <Separator className="flex-1" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleBiometric("face")}
                className="flex flex-col items-center gap-2 rounded-xl border border-border bg-background p-4 hover:bg-accent transition-colors"
              >
                <ScanFace className="w-6 h-6 text-primary" />
                <span className="text-xs font-medium text-foreground">Reconnaissance faciale</span>
                <span className="text-[10px] text-muted-foreground leading-tight text-center">
                  Connexion rapide avec reconnaissance faciale.
                </span>
              </button>
              <button
                onClick={() => handleBiometric("fingerprint")}
                className="flex flex-col items-center gap-2 rounded-xl border border-border bg-background p-4 hover:bg-accent transition-colors"
              >
                <Fingerprint className="w-6 h-6 text-primary" />
                <span className="text-xs font-medium text-foreground">Empreinte digitale</span>
                <span className="text-[10px] text-muted-foreground leading-tight text-center">
                  Connexion rapide avec empreinte digitale.
                </span>
              </button>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-muted-foreground">
          Première connexion ?{" "}
          <Link to="/signup" className="text-primary font-semibold hover:underline">
            Faire une demande d'accès
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

export default LoginPage;
