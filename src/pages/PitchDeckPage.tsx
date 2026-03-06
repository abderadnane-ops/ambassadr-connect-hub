import { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Users, AlertTriangle, Lightbulb, Target, Shield, TrendingUp, MapPin, Layers, ArrowRight } from "lucide-react";


const slides = [
  // Slide 1: Title
  {
    id: 1,
    render: () => (
      <div className="w-full h-full bg-gradient-to-br from-[#1a0a14] via-[#2a1020] to-[#1a0a14] flex flex-col items-center justify-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="absolute rounded-full bg-[#A6CE39]" style={{
              width: `${Math.random() * 300 + 50}px`, height: `${Math.random() * 300 + 50}px`,
              left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
              filter: "blur(80px)", opacity: Math.random() * 0.3
            }} />
          ))}
        </div>
        <div className="relative z-10 text-center px-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#A6CE39]/10 border border-[#A6CE39]/30 mb-12">
            <Shield className="w-5 h-5 text-[#A6CE39]" />
            <span className="text-[#A6CE39] text-lg tracking-widest uppercase font-medium">Les Citoyens</span>
          </div>
          <h1 className="text-[120px] font-black tracking-tight leading-none mb-8">
            CIT<span className="text-[#A6CE39]">I</span>ZEN
          </h1>
          <p className="text-3xl font-light text-white/70 max-w-3xl mx-auto leading-relaxed mb-6">
            La plateforme numérique du réseau des Ambassadeurs Citoyens du Maroc
          </p>
          <div className="w-24 h-1 bg-[#A6CE39] mx-auto rounded-full mb-6" />
          <p className="text-lg text-white/40 italic">
            From multichannel confusion to one coordinated civic network
          </p>
        </div>
      </div>
    ),
  },
  // Slide 2: Problem
  {
    id: 2,
    render: () => (
      <div className="w-full h-full bg-white flex flex-col px-20 py-16">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center">
            <AlertTriangle className="w-7 h-7 text-red-500" />
          </div>
          <h2 className="text-5xl font-bold text-[#2a1020]">Le Problème</h2>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-2xl text-[#2a1020]/70 leading-relaxed">
              188 ambassadeurs citoyens répartis dans 12 régions du Maroc coordonnent leurs actions via des canaux fragmentés et inadaptés.
            </p>
            <div className="space-y-4">
              {[
                "Communication dispersée entre WhatsApp, email et téléphone",
                "Aucune visibilité centralisée sur les projets et leur impact",
                "Suivi manuel des activités et des rapports via Excel",
                "Perte de données et de mémoire institutionnelle",
                "Impossible de mesurer l'impact réel du réseau"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-3 shrink-0" />
                  <p className="text-xl text-[#2a1020]/60">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {["WhatsApp", "Email", "Excel", "Téléphone", "Facebook"].map((tool, i) => (
                <div key={i} className="absolute rounded-2xl border-2 border-dashed border-red-300 bg-red-50 px-6 py-4 text-lg font-medium text-red-400 shadow-sm"
                  style={{
                    left: `${[10, 45, 5, 50, 25][i]}%`,
                    top: `${[5, 15, 45, 55, 80][i]}%`,
                    transform: `rotate(${[-5, 3, -3, 5, -2][i]}deg)`
                  }}>
                  {tool}
                </div>
              ))}
              <div className="w-full h-80" />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  // Slide 3: Solution
  {
    id: 3,
    render: () => (
      <div className="w-full h-full bg-gradient-to-br from-[#faf8f9] to-white flex flex-col px-20 py-16">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-14 h-14 rounded-2xl bg-[#A6CE39]/15 flex items-center justify-center">
            <Lightbulb className="w-7 h-7 text-[#A6CE39]" />
          </div>
          <h2 className="text-5xl font-bold text-[#2a1020]">La Solution : CITZEN</h2>
        </div>
        <p className="text-2xl text-[#2a1020]/60 mb-10 max-w-4xl">
          Une plateforme numérique unifiée qui centralise la coordination, le suivi et la communication du réseau des Ambassadeurs Citoyens.
        </p>
        <div className="flex-1 grid grid-cols-3 gap-6">
          {[
            { icon: "🔗", title: "Hub Social", desc: "Fil d'actualité, partage de projets et communication en temps réel entre ambassadeurs" },
            { icon: "📊", title: "Tableau de bord", desc: "Suivi des activités, points de gamification, tâches et indicateurs personnalisés" },
            { icon: "🗺️", title: "Carte territoriale", desc: "Visualisation des 12 régions avec ambassadeurs, projets et impact par territoire" },
            { icon: "📝", title: "Rapports d'activité", desc: "Soumission structurée des rapports avec workflow de validation mentor/admin" },
            { icon: "🎓", title: "Ressources & Formation", desc: "Bibliothèque de guides, formations et opportunités pour le développement des compétences" },
            { icon: "🏆", title: "Gamification", desc: "Système de points, badges et reconnaissance pour motiver l'engagement citoyen" },
          ].map((item, i) => (
            <div key={i} className="rounded-2xl border border-[#722D50]/10 bg-white p-8 space-y-4 shadow-sm">
              <span className="text-4xl">{item.icon}</span>
              <h3 className="text-xl font-bold text-[#2a1020]">{item.title}</h3>
              <p className="text-base text-[#2a1020]/50 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  // Slide 4: Value Proposition
  {
    id: 4,
    render: () => (
      <div className="w-full h-full bg-[#2a1020] text-white flex flex-col px-20 py-16">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-14 h-14 rounded-2xl bg-[#A6CE39]/15 flex items-center justify-center">
            <Target className="w-7 h-7 text-[#A6CE39]" />
          </div>
          <h2 className="text-5xl font-bold">Proposition de valeur</h2>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {[
              { title: "Pour les Ambassadeurs", desc: "Un espace personnel pour suivre leur impact, se connecter avec le réseau et accéder aux opportunités de développement.", color: "#A6CE39" },
              { title: "Pour les Mentors", desc: "Un tableau de validation des rapports et un suivi direct des mentorés pour un accompagnement efficace.", color: "#A6CE39" },
              { title: "Pour les Administrateurs", desc: "Une vue macro du réseau avec analytics, gestion des utilisateurs et pilotage stratégique du programme.", color: "#A6CE39" },
            ].map((item, i) => (
              <div key={i} className="flex gap-5">
                <div className="w-1.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                <div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-lg text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center justify-center text-center space-y-8">
            <div className="text-8xl font-black text-[#A6CE39]">3</div>
            <p className="text-3xl font-light text-white/70">Rôles, un seul écosystème</p>
            <div className="flex gap-4">
              {["Agir", "Valider", "Piloter"].map((role, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="px-5 py-3 rounded-full bg-[#A6CE39]/15 text-[#A6CE39] text-lg font-semibold">{role}</span>
                  {i < 2 && <ArrowRight className="w-5 h-5 text-white/30" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  // Slide 5: User Roles & Features
  {
    id: 5,
    render: () => (
      <div className="w-full h-full bg-white flex flex-col px-20 py-16">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 rounded-2xl bg-[#722D50]/10 flex items-center justify-center">
            <Users className="w-7 h-7 text-[#722D50]" />
          </div>
          <h2 className="text-5xl font-bold text-[#2a1020]">Fonctionnalités par rôle</h2>
        </div>
        <div className="flex-1 grid grid-cols-3 gap-8">
          {[
            {
              role: "Ambassadeur", color: "#A6CE39", emoji: "🌱",
              features: ["Dashboard personnalisé", "Hub social & fil d'actualité", "Annuaire du réseau", "Inscription aux événements", "Soumission de rapports", "Gamification & badges", "Bibliothèque de ressources"]
            },
            {
              role: "Mentor", color: "#722D50", emoji: "🎓",
              features: ["Validation des rapports", "Suivi des mentorés", "Commentaires & feedback", "Vue des activités régionales", "Historique des validations"]
            },
            {
              role: "Administrateur", color: "#2a1020", emoji: "⚙️",
              features: ["Dashboard macro & KPIs", "Gestion des ambassadeurs", "Gestion des mentors", "Analytics & graphiques", "Impact territorial (carte)", "Gestion des événements", "Annonces & communication", "Paramètres système"]
            },
          ].map((item, i) => (
            <div key={i} className="rounded-2xl border-2 p-8 space-y-5" style={{ borderColor: `${item.color}30` }}>
              <div className="flex items-center gap-3">
                <span className="text-3xl">{item.emoji}</span>
                <h3 className="text-2xl font-bold" style={{ color: item.color }}>{item.role}</h3>
              </div>
              <div className="space-y-3">
                {item.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                    <span className="text-base text-[#2a1020]/70">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  // Slide 6: Impact & Numbers
  {
    id: 6,
    render: () => (
      <div className="w-full h-full bg-gradient-to-br from-[#A6CE39]/5 to-white flex flex-col px-20 py-16">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-14 h-14 rounded-2xl bg-[#A6CE39]/15 flex items-center justify-center">
            <TrendingUp className="w-7 h-7 text-[#A6CE39]" />
          </div>
          <h2 className="text-5xl font-bold text-[#2a1020]">Impact & Chiffres clés</h2>
        </div>
        <div className="flex-1 grid grid-cols-4 gap-6 mb-10">
          {[
            { value: "188", label: "Ambassadeurs citoyens", icon: Users },
            { value: "12", label: "Régions couvertes", icon: MapPin },
            { value: "38", label: "Projets réalisés", icon: Layers },
            { value: "12 500+", label: "Bénéficiaires directs", icon: TrendingUp },
          ].map((stat, i) => (
            <div key={i} className="rounded-2xl bg-white border border-[#722D50]/10 p-8 text-center space-y-4 shadow-sm">
              <stat.icon className="w-8 h-8 text-[#A6CE39] mx-auto" />
              <p className="text-5xl font-black text-[#722D50]">{stat.value}</p>
              <p className="text-base text-[#2a1020]/50 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-6">
          {[
            { title: "Éducation civique", desc: "Sensibilisation et engagement des jeunes dans les territoires" },
            { title: "Capacitation citoyenne", desc: "Renforcement des capacités des citoyens pour participer aux décisions" },
            { title: "Appui aux coopératives", desc: "Accompagnement des initiatives locales et coopératives" },
          ].map((item, i) => (
            <div key={i} className="rounded-xl bg-[#A6CE39]/10 p-6 space-y-2">
              <h4 className="text-lg font-bold text-[#2a1020]">{item.title}</h4>
              <p className="text-sm text-[#2a1020]/50">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  // Slide 7: Tech Stack & Architecture
  {
    id: 7,
    render: () => (
      <div className="w-full h-full bg-[#faf8f9] flex flex-col px-20 py-16">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-14 h-14 rounded-2xl bg-[#722D50]/10 flex items-center justify-center">
            <Layers className="w-7 h-7 text-[#722D50]" />
          </div>
          <h2 className="text-5xl font-bold text-[#2a1020]">Architecture & Technologies</h2>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {[
              { layer: "Frontend", tech: "React + TypeScript + Tailwind CSS", detail: "Application mobile-first, responsive, PWA-ready" },
              { layer: "UI Framework", tech: "shadcn/ui + Radix UI", detail: "Composants accessibles et design system cohérent" },
              { layer: "Backend", tech: "Lovable Cloud (Supabase)", detail: "Base de données PostgreSQL, Auth, Edge Functions, Storage" },
              { layer: "Temps réel", tech: "Supabase Realtime", detail: "Notifications et mises à jour instantanées" },
              { layer: "Visualisation", tech: "Recharts + Carte SVG", detail: "Graphiques analytiques et carte interactive du Maroc" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-3 h-3 rounded-full bg-[#A6CE39] mt-2 shrink-0" />
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-xl font-bold text-[#2a1020]">{item.layer}</span>
                    <span className="text-base text-[#722D50] font-medium">{item.tech}</span>
                  </div>
                  <p className="text-base text-[#2a1020]/50">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <div className="space-y-4 w-full max-w-sm">
              {["Ambassadeur", "Mentor", "Administrateur"].map((role, i) => (
                <div key={i} className="rounded-xl bg-white border border-[#722D50]/10 p-5 flex items-center gap-4 shadow-sm">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg" style={{
                    backgroundColor: ["#A6CE39", "#722D50", "#2a1020"][i] + "20",
                  }}>
                    {["🌱", "🎓", "⚙️"][i]}
                  </div>
                  <div>
                    <p className="font-bold text-[#2a1020]">{role}</p>
                    <p className="text-sm text-[#2a1020]/40">{["Agir & Reporter", "Valider & Accompagner", "Piloter & Analyser"][i]}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#2a1020]/20 ml-auto" />
                </div>
              ))}
              <div className="rounded-xl bg-[#A6CE39]/10 border border-[#A6CE39]/20 p-5 text-center">
                <p className="font-bold text-[#2a1020]">Lovable Cloud</p>
                <p className="text-sm text-[#2a1020]/40">Base de données · Auth · API · Storage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  // Slide 8: Call to Action
  {
    id: 8,
    render: () => (
      <div className="w-full h-full bg-gradient-to-br from-[#1a0a14] via-[#2a1020] to-[#1a0a14] flex flex-col items-center justify-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#A6CE39]/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#722D50]/20 blur-[120px]" />
        <div className="relative z-10 text-center px-16 space-y-10">
          <h2 className="text-7xl font-black leading-tight">
            Prêts à transformer<br />l'engagement citoyen<br />au <span className="text-[#A6CE39]">Maroc</span> ?
          </h2>
          <p className="text-2xl text-white/50 max-w-2xl mx-auto leading-relaxed">
            CITZEN est la brique numérique qui manquait au réseau des Ambassadeurs Citoyens pour passer à l'échelle.
          </p>
          <div className="flex items-center justify-center gap-6 pt-4">
            <div className="px-8 py-4 rounded-full bg-[#A6CE39] text-[#1a1a1a] text-xl font-bold">
              Demander une démo
            </div>
            <div className="px-8 py-4 rounded-full border-2 border-white/20 text-white text-xl font-medium">
              En savoir plus
            </div>
          </div>
          <div className="pt-8">
            <p className="text-lg text-white/30">
              Une initiative du mouvement <span className="text-[#A6CE39] font-semibold">Les Citoyens</span>
            </p>
            <p className="text-base text-white/20 mt-2">Mieux vivre ensemble</p>
          </div>
        </div>
      </div>
    ),
  },
];

const PitchDeckPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const goTo = (index: number) => {
    if (index >= 0 && index < slides.length) setCurrentSlide(index);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === " ") goTo(currentSlide + 1);
    if (e.key === "ArrowLeft") goTo(currentSlide - 1);
    if (e.key === "Escape" && isFullscreen) {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const Slide = slides[currentSlide].render;

  return (
    <div
      className="w-screen h-screen bg-black flex flex-col items-center justify-center outline-none"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      autoFocus
    >
      {/* Slide container - 16:9 */}
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <div className="relative w-full h-full max-w-[1920px] max-h-[1080px]" style={{ aspectRatio: "16/9" }}>
          <div className="absolute inset-0 rounded-lg overflow-hidden shadow-2xl">
            <Slide />
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/60 backdrop-blur-md rounded-full px-6 py-3">
        <button onClick={() => goTo(currentSlide - 1)} disabled={currentSlide === 0}
          className="text-white/60 hover:text-white disabled:text-white/20 transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => goTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentSlide ? "bg-[#A6CE39] scale-125" : "bg-white/30 hover:bg-white/50"}`}
            />
          ))}
        </div>

        <button onClick={() => goTo(currentSlide + 1)} disabled={currentSlide === slides.length - 1}
          className="text-white/60 hover:text-white disabled:text-white/20 transition-colors">
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="w-px h-5 bg-white/20" />

        <span className="text-white/40 text-sm font-medium">{currentSlide + 1}/{slides.length}</span>

        <button onClick={toggleFullscreen} className="text-white/60 hover:text-white transition-colors">
          {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
};

export default PitchDeckPage;
