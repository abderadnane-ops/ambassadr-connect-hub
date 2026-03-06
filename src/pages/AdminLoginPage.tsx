import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { LogIn, Eye, EyeOff, ShieldCheck, KeyRound, RefreshCw } from "lucide-react";
import citizinLogo from "@/assets/citizin-logo.png";

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<"login" | "verify">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [resending, setResending] = useState(false);
  const [maskedEmail, setMaskedEmail] = useState("");

  const maskEmail = (email: string) => {
    const [user, domain] = email.split("@");
    if (user.length <= 2) return `${user[0]}***@${domain}`;
    return `${user.slice(0, 2)}***@${domain}`;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      toast.error("Veuillez remplir tous les champs");
      return;
    }
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });
    if (error) {
      setLoading(false);
      toast.error(error.message);
      return;
    }

    // Send 2FA code
    const { error: fnError } = await supabase.functions.invoke("send-admin-2fa", {
      headers: { Authorization: `Bearer ${data.session?.access_token}` },
    });

    setLoading(false);
    if (fnError) {
      toast.error("Erreur lors de l'envoi du code de vérification");
      await supabase.auth.signOut();
      return;
    }

    setMaskedEmail(maskEmail(email.trim()));
    setStep("verify");
    toast.success("Code de vérification envoyé");
  };

  const handleVerify = async () => {
    if (otpCode.length !== 6) {
      toast.error("Veuillez entrer le code à 6 chiffres");
      return;
    }
    setVerifying(true);

    const { data: { session } } = await supabase.auth.getSession();
    const { data, error } = await supabase.functions.invoke("verify-admin-2fa", {
      body: { code: otpCode },
      headers: { Authorization: `Bearer ${session?.access_token}` },
    });

    setVerifying(false);

    if (error || data?.error) {
      toast.error(data?.error || "Code invalide ou expiré");
      setOtpCode("");
      return;
    }

    toast.success("Vérification réussie !");
    navigate("/admin/dashboard");
  };

  const handleResend = async () => {
    setResending(true);
    const { data: { session } } = await supabase.auth.getSession();
    const { error } = await supabase.functions.invoke("send-admin-2fa", {
      headers: { Authorization: `Bearer ${session?.access_token}` },
    });
    setResending(false);
    if (error) {
      toast.error("Erreur lors du renvoi du code");
    } else {
      toast.success("Nouveau code envoyé");
      setOtpCode("");
    }
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
            {step === "login" ? (
              <>
                <ShieldCheck className="w-3.5 h-3.5" />
                Espace Administration
              </>
            ) : (
              <>
                <KeyRound className="w-3.5 h-3.5" />
                Vérification de sécurité
              </>
            )}
          </div>
          <p className="text-sm text-muted-foreground">
            {step === "login"
              ? "Connectez-vous à l'espace d'administration"
              : "Un code de vérification a été envoyé à votre adresse email."}
          </p>
        </div>

        <Card className="border-0 shadow-elevated">
          <CardContent className="p-6">
            {step === "login" ? (
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@email.com"
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
                  {loading ? "Connexion..." : "Connexion"}
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate("/admin/dashboard")}
                  className="w-full h-11 rounded-xl font-semibold"
                >
                  Accès démo Admin
                </Button>
              </form>
            ) : (
              <div className="space-y-5">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">
                    Code envoyé à <span className="font-medium text-foreground">{maskedEmail}</span>
                  </p>
                </div>

                <div className="flex justify-center">
                  <InputOTP
                    maxLength={6}
                    value={otpCode}
                    onChange={setOtpCode}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>

                <Button
                  onClick={handleVerify}
                  disabled={verifying || otpCode.length !== 6}
                  className="w-full h-11 rounded-xl font-semibold"
                >
                  <ShieldCheck className="w-4 h-4 mr-2" />
                  {verifying ? "Vérification..." : "Valider"}
                </Button>

                <div className="text-center space-y-2">
                  <button
                    onClick={handleResend}
                    disabled={resending}
                    className="text-sm text-primary hover:underline font-medium inline-flex items-center gap-1.5"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${resending ? "animate-spin" : ""}`} />
                    {resending ? "Envoi..." : "Renvoyer le code"}
                  </button>
                  <p className="text-xs text-muted-foreground italic">Le code expire dans 5 minutes.</p>
                </div>
              </div>
            )}

            <p className="text-xs text-muted-foreground text-center mt-5 italic">
              Accès réservé à l'équipe d'administration du réseau
            </p>
          </CardContent>
        </Card>

        <p className="text-center">
          <Link to="/" className="text-xs text-muted-foreground hover:text-foreground">
            ← Retour à l'accueil
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AdminLoginPage;
