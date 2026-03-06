import { Users, MapPin, Globe, Sparkles, Shield, Network, TrendingUp, Heart, Mail, Send, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import citizinLogo from "@/assets/citizin-logo.png";
import ConnexionMenu from "@/components/landing/ConnexionMenu";

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
            <ConnexionMenu>
              <Button
                className="bg-[#722D50] text-white hover:bg-[#5a2240] font-semibold text-sm px-5 h-9 rounded-full shadow-[0_4px_15px_rgba(114,45,80,0.25)]"
              >
                Connexion
              </Button>
            </ConnexionMenu>
          </div>
        </div>
      </header>

      {/* Hero Section — Dark Video Container */}
      <section className="pt-20 px-4 sm:px-6">
        <div className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden min-h-[85vh] flex items-center justify-center">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/45" />

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
              From multichannel confusion to one coordinated civic network
            </p>

            <p className="text-base text-white/75 max-w-xl mx-auto leading-relaxed mb-4">
              CITZEN connecte 188 ambassadeurs citoyens à travers les 12 régions du Maroc afin de coordonner les initiatives, partager les projets et amplifier l'impact citoyen à l'échelle nationale.
            </p>

            <p className="text-sm text-white/40 tracking-wide mb-8">
              Une initiative du mouvement <span className="text-[#A6CE39] font-semibold">Les Citoyens</span><br />Mieux vivre ensemble
            </p>

            <ConnexionMenu>
              <Button
                size="lg"
                className="bg-[#A6CE39] text-[#1a1a1a] hover:bg-[#95ba30] font-bold text-base px-12 h-13 rounded-full shadow-[0_6px_25px_rgba(166,206,57,0.35)] hover:shadow-[0_8px_35px_rgba(166,206,57,0.5)] transition-all duration-300 mb-4"
              >
                Connexion
              </Button>
            </ConnexionMenu>
            <p className="text-xs text-white/40">
              Accès réservé aux Ambassadeurs Citoyens, Mentors et Administrateurs
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystem Section — 3 Cards */}
      <section className="relative z-10 px-4 py-20">
        <div className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-4">
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
              desc: "188 jeunes leaders engagés dans 12 régions du Maroc pour porter des initiatives citoyennes à fort impact.",
              accent: "#722D50",
            },
            {
              icon: Network,
              title: "La plateforme CITZEN",
              desc: "Un espace numérique pour connecter les ambassadeurs, coordonner les initiatives et amplifier les actions citoyennes à l'échelle nationale.",
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

      {/* Initiatives Section */}
      <section className="relative z-10 px-4 py-16 bg-[#faf8f9]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold text-[#2a1020] mb-3">Initiatives citoyennes</h2>
            <p className="text-sm text-[#2a1020]/50 max-w-xl mx-auto">
              Des initiatives portées par les Ambassadeurs Citoyens au service des territoires du Maroc.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Éducation civique",
                desc: "Sensibilisation à la citoyenneté, à la participation et à l'engagement des jeunes dans les territoires.",
                icon: Lightbulb,
              },
              {
                title: "Capacitation citoyenne",
                desc: "Renforcement des capacités des jeunes, des femmes et des citoyens afin de porter leurs voix et participer aux espaces de décision.",
                icon: Globe,
              },
              {
                title: "Appui aux coopératives",
                desc: "Accompagnement des coopératives et des initiatives locales pour renforcer leur développement et leur impact dans les territoires.",
                icon: Heart,
              },
            ].map((project, i) => (
              <div
                key={i}
                className="rounded-2xl border border-[#722D50]/10 bg-white p-6 space-y-3 shadow-[0_2px_15px_rgba(114,45,80,0.06)] hover:shadow-[0_4px_20px_rgba(114,45,80,0.12)] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#A6CE39]/15">
                  <project.icon className="w-5 h-5 text-[#A6CE39]" />
                </div>
                <h3 className="text-sm font-semibold text-[#2a1020]">{project.title}</h3>
                <p className="text-xs text-[#2a1020]/50 leading-relaxed">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="relative z-10 px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold text-[#2a1020] mb-3">Notre impact</h2>
            <p className="text-sm text-[#2a1020]/50">Le réseau en chiffres.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: "188", label: "Ambassadeurs citoyens", icon: Users },
              { value: "38", label: "Projets réalisés", icon: TrendingUp },
              { value: "12,5k", label: "Bénéficiaires", icon: Heart },
              { value: "12", label: "Régions couvertes", icon: MapPin },
            ].map((stat, i) => (
              <div
                key={i}
                className="rounded-2xl border border-[#722D50]/10 bg-white p-5 text-center space-y-2 shadow-[0_2px_15px_rgba(114,45,80,0.06)]"
              >
                <stat.icon className="w-5 h-5 text-[#A6CE39] mx-auto" />
                <p className="text-2xl font-bold text-[#722D50]">{stat.value}</p>
                <p className="text-xs text-[#2a1020]/50 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 px-4 py-16 bg-[#faf8f9]">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#722D50]/10 mx-auto mb-4">
              <Mail className="w-6 h-6 text-[#722D50]" />
            </div>
            <h2 className="text-2xl font-semibold text-[#2a1020] mb-3">Nous contacter</h2>
            <p className="text-sm text-[#2a1020]/50 leading-relaxed">
              Vous souhaitez en savoir plus sur le réseau des Ambassadeurs Citoyens ou collaborer avec nous ?<br />Contactez-nous.
            </p>
          </div>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <Input
              placeholder="Votre nom"
              className="rounded-xl border-[#722D50]/15 focus:border-[#A6CE39] h-11"
            />
            <Input
              type="email"
              placeholder="Votre email"
              className="rounded-xl border-[#722D50]/15 focus:border-[#A6CE39] h-11"
            />
            <Textarea
              placeholder="Votre message"
              className="rounded-xl border-[#722D50]/15 focus:border-[#A6CE39] min-h-[120px] resize-none"
            />
            <Button
              type="submit"
              className="w-full bg-[#722D50] text-white hover:bg-[#5a2240] font-semibold h-11 rounded-xl shadow-[0_4px_15px_rgba(114,45,80,0.25)]"
            >
              <Send className="w-4 h-4 mr-2" />
              Envoyer
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#722D50]/10 py-6 text-center bg-[#faf8f9]">
        <p className="text-[11px] text-[#722D50]/30 font-medium">
          CITZEN — Plateforme du réseau des Ambassadeurs Citoyens<br />Une initiative du mouvement Les Citoyens
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
