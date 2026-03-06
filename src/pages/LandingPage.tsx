import { Users, MapPin, Globe, Sparkles, Shield, Network, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import citizinLogo from "@/assets/citizin-logo.png";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-body overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/90 border-b border-[#722D50]/8">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 h-14">
          <img src={citizinLogo} alt="CITZEN" className="h-8 w-auto" style={{ filter: "brightness(0) saturate(100%) invert(18%) sepia(30%) saturate(2000%) hue-rotate(290deg)" }} />
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-xs text-[#722D50]/50 tracking-wide font-medium">Accès réservé aux membres</span>
            <Button
              onClick={() => navigate("/login")}
              className="bg-[#722D50] text-white hover:bg-[#5a2240] font-semibold text-sm px-5 h-9 rounded-full shadow-[0_4px_15px_rgba(114,45,80,0.25)]"
            >
              Connexion
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section — Dark Video Container */}
      <section className="pt-20 px-4 sm:px-6">
        <div className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden min-h-[85vh] flex items-center justify-center">
          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/45" />

          {/* Hero Content */}
          <div className="relative z-10 max-w-3xl mx-auto px-6 py-16 text-center text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A6CE39]/15 border border-[#A6CE39]/40 text-[#A6CE39] text-sm font-medium tracking-wider uppercase mb-8">
              <Sparkles className="w-4 h-4" />
              Réseau des Ambassadeurs Citoyens
            </div>

            <h1 className="text-7xl sm:text-9xl font-bold tracking-tight leading-none mb-6">
              CIT<span className="text-[#A6CE39]">I</span>ZEN
            </h1>

            <p className="text-xl sm:text-2xl font-light text-white/90 max-w-2xl mx-auto leading-relaxed mb-3">
              La plateforme numérique du réseau des Ambassadeurs Citoyens
            </p>

            <p className="text-base sm:text-lg text-white/60 italic mb-6">
              One Network. Twelve Regions. A New Generation of Civic Leadership.
            </p>

            <p className="text-base text-white/75 max-w-xl mx-auto leading-relaxed mb-4">
              CITZEN connecte 188 ambassadeurs citoyens dans les 12 régions du Maroc pour coordonner les initiatives, partager les projets et amplifier l'impact citoyen.
            </p>

            <p className="text-sm text-white/40 tracking-wide mb-8">
              Une initiative du mouvement <span className="text-[#A6CE39] font-semibold">Les Citoyens</span> — Mieux vivre ensemble
            </p>

            {/* Stats badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              {[
                { value: "188", label: "Ambassadeurs Citoyens", icon: Users },
                { value: "12", label: "Régions du Maroc", icon: MapPin },
                { value: "1", label: "Réseau national", icon: Globe },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15"
                >
                  <stat.icon className="w-4 h-4 text-[#A6CE39]" />
                  <span className="text-xl font-bold text-[#A6CE39]">{stat.value}</span>
                  <span className="text-xs text-white/70 font-medium">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button
              onClick={() => navigate("/login")}
              size="lg"
              className="bg-[#A6CE39] text-[#1a1a1a] hover:bg-[#95ba30] font-bold text-base px-12 h-13 rounded-full shadow-[0_6px_25px_rgba(166,206,57,0.35)] hover:shadow-[0_8px_35px_rgba(166,206,57,0.5)] transition-all duration-300 mb-4"
            >
              Connexion
            </Button>
            <p className="text-xs text-white/40">
              Accès réservé aux Ambassadeurs Citoyens, Mentors et Administrateurs du réseau.
            </p>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="relative z-10 px-4 py-20">
        <div className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-4">
          {[
            {
              icon: Shield,
              title: "Les Citoyens",
              desc: "Un mouvement engagé pour renforcer la participation citoyenne et former une nouvelle génération de leaders au Maroc.",
              accent: "#A6CE39",
            },
            {
              icon: Users,
              title: "Les Ambassadeurs",
              desc: "188 jeunes leaders mobilisés dans 12 régions pour porter des initiatives citoyennes à fort impact.",
              accent: "#722D50",
            },
            {
              icon: Network,
              title: "La plateforme CITZEN",
              desc: "Connecter, coordonner et amplifier les actions citoyennes à l'échelle nationale.",
              accent: "#A6CE39",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#722D50]/10 bg-white p-6 space-y-3 shadow-[0_2px_15px_rgba(114,45,80,0.06)] hover:shadow-[0_4px_20px_rgba(114,45,80,0.12)] transition-all duration-300"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${card.accent}15` }}
              >
                <card.icon className="w-5 h-5" style={{ color: card.accent }} />
              </div>
              <h3 className="text-sm font-semibold text-[#2a1020]">{card.title}</h3>
              <p className="text-xs text-[#2a1020]/50 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#722D50]/10 py-6 text-center bg-[#faf8f9]">
        <p className="text-[11px] text-[#722D50]/30 font-medium">
          © 2026 CITZEN — Réseau des Ambassadeurs Citoyens · Les Citoyens
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
