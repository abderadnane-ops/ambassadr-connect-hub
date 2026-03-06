import { Users, MapPin, Globe, Sparkles, Shield, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import citizinLogo from "@/assets/citizin-logo.png";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-[#2a1020] font-body overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 border-b border-[#722D50]/10">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 h-14">
          <img src={citizinLogo} alt="CITZEN" className="h-8 w-auto brightness-0" style={{ filter: "brightness(0) saturate(100%) invert(18%) sepia(30%) saturate(2000%) hue-rotate(290deg)" }} />
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-xs text-[#722D50]/50 tracking-wide">Accès réservé aux membres</span>
            <Button
              onClick={() => navigate("/dashboard")}
              className="bg-[#722D50] text-white hover:bg-[#5a2240] font-semibold text-sm px-5 h-9 rounded-full shadow-[0_4px_15px_rgba(114,45,80,0.25)]"
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
          {/* White overlay for contrast */}
          <div className="absolute inset-0 bg-white/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/50 to-white" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-5 text-center space-y-6 py-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#A6CE39]/10 border border-[#A6CE39]/30 text-[#5a8a10] text-xs font-medium tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Réseau des Ambassadeurs Citoyens
          </div>

          <h1 className="font-display text-5xl sm:text-7xl font-bold tracking-tight leading-[0.95] text-[#722D50]">
            CIT<span className="text-[#A6CE39]">I</span>ZEN
          </h1>

          <p className="text-lg sm:text-xl text-[#722D50]/70 font-light max-w-xl mx-auto leading-relaxed">
            La plateforme numérique du réseau des Ambassadeurs Citoyens
          </p>

          <p className="text-sm sm:text-base text-[#722D50]/40 italic max-w-lg mx-auto">
            One Network. Twelve Regions. A New Generation of Civic Leadership.
          </p>

          <p className="text-sm text-[#2a1020]/60 max-w-md mx-auto leading-relaxed">
            CITZEN connecte 188 ambassadeurs citoyens à travers les 12 régions du Maroc afin de coordonner les initiatives citoyennes, partager les projets et amplifier l'impact territorial.
          </p>

          <p className="text-xs text-[#722D50]/35 tracking-wide">
            Une initiative du mouvement <span className="text-[#A6CE39]">Les Citoyens</span> — Mieux vivre ensemble
          </p>

          {/* CTA */}
          <div className="pt-4 space-y-3">
            <Button
              onClick={() => navigate("/dashboard")}
              size="lg"
              className="bg-[#722D50] text-white hover:bg-[#5a2240] font-bold text-base px-10 h-12 rounded-full shadow-[0_6px_25px_rgba(114,45,80,0.3)] hover:shadow-[0_8px_35px_rgba(114,45,80,0.45)] transition-all duration-300"
            >
              Connexion
            </Button>
            <p className="text-[11px] text-[#722D50]/35">
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
            { value: "12", label: "Régions du Maroc", icon: MapPin, color: "#722D50" },
            { value: "1", label: "Réseau national d'initiatives citoyennes", icon: Globe, color: "#A6CE39" },
          ].map((stat, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-[#722D50]/10 bg-white p-5 text-center shadow-[0_2px_15px_rgba(114,45,80,0.06)] hover:shadow-[0_4px_20px_rgba(114,45,80,0.12)] transition-all duration-300"
            >
              <stat.icon className="w-5 h-5 mx-auto mb-3 opacity-50" style={{ color: stat.color }} />
              <div className="font-display text-3xl sm:text-4xl font-bold mb-1" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-xs text-[#2a1020]/50 leading-tight">{stat.label}</div>
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
              accent: "#722D50",
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
              className="rounded-2xl border border-[#722D50]/10 bg-white p-5 space-y-3 shadow-[0_2px_15px_rgba(114,45,80,0.06)] hover:shadow-[0_4px_20px_rgba(114,45,80,0.12)] transition-all duration-300"
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${card.accent}15` }}
              >
                <card.icon className="w-4.5 h-4.5" style={{ color: card.accent }} />
              </div>
              <h3 className="font-display text-sm font-semibold text-[#2a1020]">{card.title}</h3>
              <p className="text-xs text-[#2a1020]/50 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#722D50]/10 py-6 text-center bg-[#faf8f9]">
        <p className="text-[11px] text-[#722D50]/30">
          © 2026 CITZEN — Réseau des Ambassadeurs Citoyens · Les Citoyens
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
