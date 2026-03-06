import { Users, MapPin, Globe, ArrowRight, Leaf, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import aminaPhoto from "@/assets/landing-amina.jpg";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8f5ee] text-[#1a1a1a] font-body overflow-x-hidden">
      {/* Header — Glassmorphism */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-[#f8f5ee]/60 border-b border-[#2d6a4f]/8">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-5 h-14">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#2d6a4f] flex items-center justify-center shadow-[0_2px_8px_rgba(45,106,79,0.3)]">
              <Leaf className="w-4.5 h-4.5 text-[#a7f3d0]" />
            </div>
            <span className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#2d6a4f] tracking-tight">Les Citoyens</span>
          </div>
          <div className="flex items-center gap-5">
            <nav className="hidden sm:flex items-center gap-5 text-[13px] text-[#2d6a4f]/60 font-medium">
              <a href="#about" className="hover:text-[#2d6a4f] transition-colors">À propos</a>
              <a href="#projects" className="hover:text-[#2d6a4f] transition-colors">Projets</a>
            </nav>
            <Button
              onClick={() => navigate("/dashboard")}
              className="bg-[#2d6a4f] text-white hover:bg-[#245a42] font-medium text-sm px-5 h-9 rounded-full shadow-[0_4px_15px_rgba(45,106,79,0.25)]"
            >
              Se connecter <ArrowRight className="w-3.5 h-3.5 ml-1" />
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
          {/* Dark radial overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1f15]/50 via-[#0a1f15]/40 to-[#0a1f15]/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,31,21,0.4)_100%)]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-5 text-center space-y-5 py-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/80 text-[11px] font-medium tracking-[0.15em] uppercase">
            Maroc · Réseau Ambassadeurs · 190+ Membres
          </div>

          {/* Main Title */}
          <h1 className="font-['Cormorant_Garamond'] text-6xl sm:text-8xl font-semibold tracking-tight leading-[0.9] text-white">
            Mieux Vivre
          </h1>
          <p className="font-['Cormorant_Garamond'] text-5xl sm:text-7xl italic font-normal text-[#52b788] -mt-2 leading-[0.9]">
            Ensemble
          </p>

          <p className="text-base sm:text-lg text-white/70 font-light max-w-lg mx-auto leading-relaxed mt-4">
            Un réseau d'ambassadeurs engagés qui transforme la société civile marocaine — région par région, action par action.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <Button
              onClick={() => {
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
              }}
              size="lg"
              className="bg-[#52b788] text-[#0a1f15] hover:bg-[#6ec898] font-semibold text-base px-8 h-12 rounded-full shadow-[0_6px_25px_rgba(82,183,136,0.35)] hover:shadow-[0_8px_35px_rgba(82,183,136,0.5)] transition-all duration-300"
            >
              Découvrir <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button
              onClick={() => navigate("/dashboard")}
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 font-medium text-base px-8 h-12 rounded-full backdrop-blur-sm bg-transparent"
            >
              Se connecter
            </Button>
          </div>

          {/* CITZEN Platform subtitle */}
          <div className="pt-6 space-y-1">
            <p className="text-[11px] text-white/30 tracking-wide uppercase">
              Plateforme numérique
            </p>
            <p className="font-['Cormorant_Garamond'] text-2xl font-semibold text-white/60 tracking-wide">
              CIT<span className="text-[#52b788]">I</span>ZEN
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/30">
          <span className="text-[10px] tracking-[0.2em] uppercase">Défiler</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </section>

      {/* Impact Indicators — Floating Cards */}
      <section className="relative z-10 -mt-14 px-4 pb-16">
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-3 sm:gap-4">
          {[
            { value: "190+", label: "Ambassadeurs Citoyens", icon: Users, color: "#2d6a4f" },
            { value: "12", label: "Régions actives", icon: MapPin, color: "#52b788" },
            { value: "1", label: "Réseau national", icon: Globe, color: "#2d6a4f" },
          ].map((stat, i) => (
            <div
              key={i}
              className="group rounded-2xl bg-white border border-[#2d6a4f]/8 p-5 text-center shadow-[0_4px_20px_rgba(45,106,79,0.06)] hover:shadow-[0_8px_30px_rgba(45,106,79,0.12)] hover:-translate-y-1 transition-all duration-300"
            >
              <stat.icon className="w-5 h-5 mx-auto mb-3 opacity-40" style={{ color: stat.color }} />
              <div className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl font-bold mb-1" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-xs text-[#1a1a1a]/45 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* À propos Section */}
      <section id="about" className="relative z-10 px-4 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left — Photo */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-[0_15px_50px_rgba(45,106,79,0.12)]">
              <img
                src={aminaPhoto}
                alt="Ambassadrice citoyenne lors d'une réunion communautaire"
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-4 -right-2 sm:right-4 bg-white rounded-2xl shadow-[0_8px_30px_rgba(45,106,79,0.15)] p-4 border border-[#2d6a4f]/8">
              <div className="font-['Cormorant_Garamond'] text-4xl font-bold text-[#2d6a4f]">12</div>
              <div className="text-xs text-[#1a1a1a]/50">Régions actives</div>
            </div>
          </div>

          {/* Right — Mission */}
          <div className="space-y-6">
            <span className="text-sm font-medium text-[#52b788] tracking-wider uppercase">Notre mission</span>
            <h2 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl font-semibold text-[#2d6a4f] leading-tight">
              Citoyens engagés,<br />impact réel
            </h2>
            <p className="text-sm text-[#1a1a1a]/60 leading-relaxed">
              CITZEN connecte 190+ ambassadeurs citoyens à travers les 12 régions du Maroc afin de coordonner les initiatives citoyennes, partager les projets et amplifier l'impact territorial.
            </p>

            {/* Mission Items */}
            <div className="space-y-4 pt-2">
              {[
                { icon: "🕊️", title: "Médiation & dialogue", desc: "Renforcer le dialogue intercommunautaire" },
                { icon: "🌱", title: "Impact local", desc: "Des actions concrètes dans chaque région" },
                { icon: "🤝", title: "Intelligence collective", desc: "Collaborer pour un changement durable" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#52b788]/10 flex items-center justify-center text-lg shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-[#2d6a4f]">{item.title}</h4>
                    <p className="text-xs text-[#1a1a1a]/45 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards — Projects Section */}
      <section id="projects" className="relative z-10 px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-sm font-medium text-[#52b788] tracking-wider uppercase">Écosystème</span>
            <h2 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl font-semibold text-[#2d6a4f] mt-2">
              Un réseau, trois piliers
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                icon: "🌿",
                title: "Les Citoyens",
                desc: "Un mouvement engagé pour renforcer la participation citoyenne et accompagner une nouvelle génération de leaders au Maroc.",
                accent: "#2d6a4f",
              },
              {
                icon: "⭐",
                title: "Les Ambassadeurs Citoyens",
                desc: "Des jeunes leaders engagés dans leurs régions pour mobiliser leurs communautés et porter des initiatives à impact.",
                accent: "#52b788",
              },
              {
                icon: "🔗",
                title: "La plateforme CITZEN",
                desc: "Connecter les ambassadeurs, partager les initiatives, accéder à des ressources et coordonner les actions à l'échelle nationale.",
                accent: "#2d6a4f",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white border border-[#2d6a4f]/8 p-6 space-y-4 shadow-[0_4px_20px_rgba(45,106,79,0.05)] hover:shadow-[0_8px_30px_rgba(45,106,79,0.1)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-2xl">{card.icon}</div>
                <h3 className="font-['Cormorant_Garamond'] text-lg font-semibold" style={{ color: card.accent }}>{card.title}</h3>
                <p className="text-xs text-[#1a1a1a]/50 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-4 pb-20">
        <div className="max-w-3xl mx-auto rounded-3xl bg-[#2d6a4f] p-8 sm:p-12 text-center shadow-[0_15px_50px_rgba(45,106,79,0.25)]">
          <h2 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl font-semibold text-white mb-3">
            Rejoignez le mouvement
          </h2>
          <p className="text-sm text-white/60 mb-6 max-w-md mx-auto">
            Plateforme réservée aux Ambassadeurs Citoyens, Mentors et Administrateurs du réseau Les Citoyens.
          </p>
          <Button
            onClick={() => navigate("/dashboard")}
            size="lg"
            className="bg-[#52b788] text-[#0a1f15] hover:bg-[#6ec898] font-bold text-base px-10 h-12 rounded-full shadow-[0_6px_25px_rgba(82,183,136,0.4)]"
          >
            Connexion <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#2d6a4f]/8 py-8 text-center bg-[#f0ede5]">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-md bg-[#2d6a4f] flex items-center justify-center">
            <Leaf className="w-3.5 h-3.5 text-[#a7f3d0]" />
          </div>
          <span className="font-['Cormorant_Garamond'] text-base font-semibold text-[#2d6a4f]">Les Citoyens</span>
        </div>
        <p className="text-[11px] text-[#2d6a4f]/30">
          © 2026 CITZEN — Réseau des Ambassadeurs Citoyens · Mieux vivre ensemble
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
