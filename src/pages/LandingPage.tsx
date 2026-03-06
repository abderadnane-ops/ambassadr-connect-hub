import { Users, MapPin, Globe, Leaf, Shield, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import citizinLogo from "@/assets/citizin-logo.png";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8f5ee] text-[#2d6a4f] font-body overflow-x-hidden">
      {/* Header — Glassmorphism */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-[#f8f5ee]/40 border-b border-[#2d6a4f]/8 shadow-[0_1px_12px_rgba(45,106,79,0.04)]">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 h-14">
          <img src={citizinLogo} alt="CITZEN" className="h-8 w-auto" style={{ filter: "brightness(0) saturate(100%) invert(35%) sepia(20%) saturate(1200%) hue-rotate(100deg)" }} />
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-xs text-[#2d6a4f]/40 tracking-wide">Accès réservé aux membres</span>
            <Button
              onClick={() => navigate("/dashboard")}
              className="bg-[#2d6a4f] text-[#f8f5ee] hover:bg-[#1b4332] font-semibold text-sm px-5 h-9 rounded-full shadow-[0_4px_15px_rgba(45,106,79,0.2)]"
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
          <div className="absolute inset-0 bg-[#f8f5ee]/15" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f8f5ee]/10 via-[#f8f5ee]/20 to-[#f8f5ee]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-5 text-center space-y-6 py-20">
          <div className="absolute inset-0 -mx-2 rounded-3xl bg-[#f8f5ee]/55 backdrop-blur-sm" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2d6a4f]/8 border border-[#2d6a4f]/15 text-[#2d6a4f] text-xs font-medium tracking-wider uppercase">
              <Leaf className="w-3.5 h-3.5" />
              Mieux Vivre Ensemble
            </div>

            <h1 className="font-display text-5xl sm:text-7xl font-bold tracking-tight leading-[0.95] text-[#2d6a4f] mt-6">
              CIT<span className="text-[#52b788]">I</span>ZEN
            </h1>

            <p className="text-lg sm:text-xl text-[#2d6a4f]/75 font-light max-w-xl mx-auto leading-relaxed mt-6">
              La plateforme numérique du réseau des Ambassadeurs Citoyens
            </p>

            <p className="text-sm sm:text-base text-[#2d6a4f]/45 italic max-w-lg mx-auto mt-4">
              One Network. Twelve Regions. A New Generation of Civic Leadership.
            </p>

            <p className="text-sm text-[#2d6a4f]/60 max-w-md mx-auto leading-relaxed mt-4">
              CITZEN connecte 188 ambassadeurs citoyens à travers les 12 régions du Maroc afin de coordonner les initiatives citoyennes, partager les projets et amplifier l'impact territorial.
            </p>

            <p className="text-xs text-[#2d6a4f]/35 tracking-wide mt-4">
              Une initiative du mouvement <span className="text-[#52b788] font-medium">Les Citoyens</span> — Mieux vivre ensemble
            </p>

            {/* CTA */}
            <div className="pt-6 space-y-3">
              <Button
                onClick={() => navigate("/dashboard")}
                size="lg"
                className="bg-[#2d6a4f] text-[#f8f5ee] hover:bg-[#1b4332] font-bold text-base px-10 h-12 rounded-full shadow-[0_6px_25px_rgba(45,106,79,0.25)] hover:shadow-[0_8px_35px_rgba(45,106,79,0.4)] transition-all duration-300"
              >
                Connexion
              </Button>
              <p className="text-[11px] text-[#2d6a4f]/35">
                Plateforme réservée aux Ambassadeurs Citoyens, Mentors et Administrateurs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Indicators */}
      <section className="relative z-10 -mt-16 px-4 pb-16">
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-3">
          {[
            { value: "188", label: "Ambassadeurs Citoyens", icon: Users, color: "#2d6a4f" },
            { value: "12", label: "Régions du Maroc", icon: MapPin, color: "#52b788" },
            { value: "1", label: "Réseau national d'initiatives citoyennes", icon: Globe, color: "#2d6a4f" },
          ].map((stat, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-[#2d6a4f]/10 bg-[#f8f5ee] p-5 text-center shadow-[0_2px_15px_rgba(45,106,79,0.05)] hover:shadow-[0_4px_20px_rgba(45,106,79,0.1)] transition-all duration-300"
            >
              <stat.icon className="w-5 h-5 mx-auto mb-3 opacity-40" style={{ color: stat.color }} />
              <div className="font-display text-3xl sm:text-4xl font-bold mb-1" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-xs text-[#2d6a4f]/45 leading-tight">{stat.label}</div>
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
              accent: "#2d6a4f",
            },
            {
              icon: Users,
              title: "Les Ambassadeurs Citoyens",
              desc: "Les Ambassadeurs Citoyens sont des jeunes leaders engagés dans leurs régions pour mobiliser leurs communautés et porter des initiatives à impact.",
              accent: "#52b788",
            },
            {
              icon: Network,
              title: "La plateforme CITZEN",
              desc: "CITZEN permet de connecter les ambassadeurs, partager les initiatives, accéder à des ressources et coordonner les actions à l'échelle nationale.",
              accent: "#2d6a4f",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#2d6a4f]/10 bg-[#f8f5ee] p-5 space-y-3 shadow-[0_2px_15px_rgba(45,106,79,0.05)] hover:shadow-[0_4px_20px_rgba(45,106,79,0.1)] transition-all duration-300"
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${card.accent}10` }}
              >
                <card.icon className="w-4.5 h-4.5" style={{ color: card.accent }} />
              </div>
              <h3 className="font-display text-sm font-semibold text-[#2d6a4f]">{card.title}</h3>
              <p className="text-xs text-[#2d6a4f]/45 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#2d6a4f]/8 py-6 text-center bg-[#f3efe6]">
        <p className="text-[11px] text-[#2d6a4f]/30">
          © 2026 CITZEN — Réseau des Ambassadeurs Citoyens · Les Citoyens
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
