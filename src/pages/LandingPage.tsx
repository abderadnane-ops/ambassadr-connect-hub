import { Users, MapPin, Globe, Sparkles, Shield, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import citizinLogo from "@/assets/citizin-logo.png";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#4a1a33] text-white font-body overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#722D50]/80 border-b border-white/10">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 h-14">
          <img src={citizinLogo} alt="CITZEN" className="h-8 w-auto" />
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-xs text-white/50 tracking-wide">Accès réservé aux membres</span>
            <Button
              onClick={() => navigate("/dashboard")}
              className="bg-[#A6CE39] text-[#2a1020] hover:bg-[#b8d84f] font-semibold text-sm px-5 h-9 rounded-full shadow-[0_0_20px_rgba(166,206,57,0.3)]"
            >
              Connexion
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-14">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
          {/* Mauve overlay for contrast */}
          <div className="absolute inset-0 bg-[#722D50]/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#722D50]/40 via-[#5a2240]/30 to-[#4a1a33]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-5 text-center space-y-6 py-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#A6CE39]/15 border border-[#A6CE39]/25 text-[#A6CE39] text-xs font-medium tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Réseau des Ambassadeurs Citoyens
          </div>

          <h1 className="font-display text-5xl sm:text-7xl font-bold tracking-tight leading-[0.95]">
            CIT<span className="text-[#A6CE39]">I</span>ZEN
          </h1>

          <p className="text-lg sm:text-xl text-white/80 font-light max-w-xl mx-auto leading-relaxed">
            La plateforme numérique du réseau des Ambassadeurs Citoyens
          </p>

          <p className="text-sm sm:text-base text-white/50 italic max-w-lg mx-auto">
            One Network. Twelve Regions. A New Generation of Civic Leadership.
          </p>

          <p className="text-sm text-white/60 max-w-md mx-auto leading-relaxed">
            CITZEN connecte 188 ambassadeurs citoyens à travers les 12 régions du Maroc afin de coordonner les initiatives citoyennes, partager les projets et amplifier l'impact territorial.
          </p>

          <p className="text-xs text-white/35 tracking-wide">
            Une initiative du mouvement <span className="text-[#A6CE39]/70">Les Citoyens</span> — Mieux vivre ensemble
          </p>

          {/* CTA */}
          <div className="pt-4 space-y-3">
            <Button
              onClick={() => navigate("/dashboard")}
              size="lg"
              className="bg-[#A6CE39] text-[#2a1020] hover:bg-[#b8d84f] font-bold text-base px-10 h-12 rounded-full shadow-[0_0_30px_rgba(166,206,57,0.35)] hover:shadow-[0_0_40px_rgba(166,206,57,0.55)] transition-all duration-300"
            >
              Connexion
            </Button>
            <p className="text-[11px] text-white/35">
              Plateforme réservée aux Ambassadeurs Citoyens, Mentors et Administrateurs
            </p>
          </div>
        </div>
      </section>

      {/* Impact Indicators */}
      <section className="relative z-10 -mt-16 px-4 pb-16">
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-3">
          {[
            { value: "188", label: "Ambassadeurs Citoyens", icon: Users, color: "#A6CE39" },
            { value: "12", label: "Régions du Maroc", icon: MapPin, color: "#d4a0c0" },
            { value: "1", label: "Réseau national d'initiatives citoyennes", icon: Globe, color: "#A6CE39" },
          ].map((stat, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-md p-5 text-center hover:border-white/15 hover:bg-white/[0.1] transition-all duration-300"
            >
              <stat.icon className="w-5 h-5 mx-auto mb-3 opacity-50" style={{ color: stat.color }} />
              <div className="font-display text-3xl sm:text-4xl font-bold mb-1" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-xs text-white/50 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Info Cards */}
      <section className="relative z-10 px-4 pb-20">
        <div className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-3">
          {[
            {
              icon: Shield,
              title: "Les Citoyens",
              desc: "Les Citoyens est un mouvement engagé pour renforcer la participation citoyenne et accompagner une nouvelle génération de leaders au Maroc.",
              accent: "#A6CE39",
            },
            {
              icon: Users,
              title: "Les Ambassadeurs Citoyens",
              desc: "Les Ambassadeurs Citoyens sont des jeunes leaders engagés dans leurs régions pour mobiliser leurs communautés et porter des initiatives à impact.",
              accent: "#d4a0c0",
            },
            {
              icon: Network,
              title: "La plateforme CITZEN",
              desc: "CITZEN permet de connecter les ambassadeurs, partager les initiatives, accéder à des ressources et coordonner les actions à l'échelle nationale.",
              accent: "#A6CE39",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 space-y-3 hover:border-white/15 hover:bg-white/[0.1] transition-all duration-300"
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${card.accent}20` }}
              >
                <card.icon className="w-4.5 h-4.5" style={{ color: card.accent }} />
              </div>
              <h3 className="font-display text-sm font-semibold text-white/90">{card.title}</h3>
              <p className="text-xs text-white/50 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 text-center">
        <p className="text-[11px] text-white/30">
          © 2026 CITZEN — Réseau des Ambassadeurs Citoyens · Les Citoyens
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
