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
            The digital platform for Morocco's Citizen Ambassadors network
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
          <h2 className="text-5xl font-bold text-[#2a1020]">The Problem</h2>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-2xl text-[#2a1020]/70 leading-relaxed">
              188 citizen ambassadors spread across 12 regions of Morocco coordinate their actions through fragmented and inadequate channels.
            </p>
            <div className="space-y-4">
              {[
                "Communication scattered between WhatsApp, email and phone",
                "No centralized visibility on projects and their impact",
                "Manual tracking of activities and reports via Excel",
                "Loss of data and institutional memory",
                "Impossible to measure the network's real impact"
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
              {["WhatsApp", "Email", "Excel", "Phone", "Facebook"].map((tool, i) => (
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
          <h2 className="text-5xl font-bold text-[#2a1020]">The Solution: CITZEN</h2>
        </div>
        <p className="text-2xl text-[#2a1020]/60 mb-10 max-w-4xl">
          A unified digital platform that centralizes coordination, tracking and communication for the Citizen Ambassadors network.
        </p>
        <div className="flex-1 grid grid-cols-3 gap-6">
          {[
            { icon: "🔗", title: "Social Hub", desc: "News feed, project sharing and real-time communication between ambassadors" },
            { icon: "📊", title: "Dashboard", desc: "Activity tracking, gamification points, tasks and personalized indicators" },
            { icon: "🗺️", title: "Territorial Map", desc: "Visualization of 12 regions with ambassadors, projects and impact by territory" },
            { icon: "📝", title: "Activity Reports", desc: "Structured report submission with mentor/admin validation workflow" },
            { icon: "🎓", title: "Resources & Training", desc: "Library of guides, training and opportunities for skills development" },
            { icon: "🏆", title: "Gamification", desc: "Points system, badges and recognition to motivate civic engagement" },
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
          <h2 className="text-5xl font-bold">Value Proposition</h2>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {[
              { title: "For Ambassadors", desc: "A personal space to track their impact, connect with the network and access development opportunities.", color: "#A6CE39" },
              { title: "For Mentors", desc: "A report validation dashboard and direct mentee tracking for effective support.", color: "#A6CE39" },
              { title: "For Administrators", desc: "A macro view of the network with analytics, user management and strategic program steering.", color: "#A6CE39" },
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
            <p className="text-3xl font-light text-white/70">Roles, one ecosystem</p>
            <div className="flex gap-4">
              {["Act", "Validate", "Pilot"].map((role, i) => (
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
          <h2 className="text-5xl font-bold text-[#2a1020]">Features by Role</h2>
        </div>
        <div className="flex-1 grid grid-cols-3 gap-8">
          {[
            {
              role: "Ambassador", color: "#A6CE39", emoji: "🌱",
              features: ["Personalized dashboard", "Social hub & news feed", "Network directory", "Event registration", "Report submission", "Gamification & badges", "Resource library"]
            },
            {
              role: "Mentor", color: "#722D50", emoji: "🎓",
              features: ["Report validation", "Mentee tracking", "Comments & feedback", "Regional activity view", "Validation history"]
            },
            {
              role: "Administrator", color: "#2a1020", emoji: "⚙️",
              features: ["Macro dashboard & KPIs", "Ambassador management", "Mentor management", "Analytics & charts", "Territorial impact (map)", "Event management", "Announcements & communication", "System settings"]
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
          <h2 className="text-5xl font-bold text-[#2a1020]">Expected Impact</h2>
        </div>
        <p className="text-2xl text-[#2a1020]/60 mb-10 max-w-4xl">
          What CITZEN will change for the network and its stakeholders
        </p>
        <div className="flex-1 grid grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            {[
              { icon: "⚡", title: "80% faster coordination", desc: "Replace fragmented WhatsApp/email chains with a single real-time hub — reducing response time from days to minutes." },
              { icon: "📊", title: "100% report digitization", desc: "Move from Excel spreadsheets to structured digital reports with automated validation workflows." },
              { icon: "🔍", title: "Full impact visibility", desc: "Real-time dashboards and territorial maps give administrators instant insight into network-wide performance." },
              { icon: "📈", title: "Scalable to 1,000+ members", desc: "A digital-first infrastructure that grows with the network — ready for new cohorts, regions and partnerships." },
            ].map((item, i) => (
              <div key={i} className="flex gap-5 items-start rounded-2xl bg-white border border-[#722D50]/10 p-7 shadow-sm">
                <span className="text-4xl shrink-0">{item.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold text-[#2a1020] mb-2">{item.title}</h3>
                  <p className="text-lg text-[#2a1020]/50 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 gap-6 w-full max-w-md">
              {[
                { value: "80%", label: "Faster Response", color: "#A6CE39" },
                { value: "100%", label: "Digital Reports", color: "#722D50" },
                { value: "12", label: "Regions Connected", color: "#A6CE39" },
                { value: "1K+", label: "Ready to Scale", color: "#722D50" },
              ].map((stat, i) => (
                <div key={i} className="rounded-2xl bg-white border-2 p-8 text-center space-y-3 shadow-sm" style={{ borderColor: `${stat.color}30` }}>
                  <p className="text-5xl font-black" style={{ color: stat.color }}>{stat.value}</p>
                  <p className="text-sm text-[#2a1020]/50 font-semibold uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
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
              { layer: "Frontend", tech: "React + TypeScript + Tailwind CSS", detail: "Mobile-first, responsive, PWA-ready application" },
              { layer: "UI Framework", tech: "shadcn/ui + Radix UI", detail: "Accessible components and cohesive design system" },
              { layer: "Backend", tech: "Lovable Cloud (Supabase)", detail: "PostgreSQL database, Auth, Edge Functions, Storage" },
              { layer: "Realtime", tech: "Supabase Realtime", detail: "Instant notifications and live updates" },
              { layer: "Visualization", tech: "Recharts + SVG Map", detail: "Analytical charts and interactive map of Morocco" },
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
                    <p className="text-sm text-[#2a1020]/40">{["Act & Report", "Validate & Support", "Pilot & Analyze"][i]}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#2a1020]/20 ml-auto" />
                </div>
              ))}
              <div className="rounded-xl bg-[#A6CE39]/10 border border-[#A6CE39]/20 p-5 text-center">
                <p className="font-bold text-[#2a1020]">Lovable Cloud</p>
                <p className="text-sm text-[#2a1020]/40">Database · Auth · API · Storage</p>
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
            Ready to transform<br />civic engagement<br />in <span className="text-[#A6CE39]">Morocco</span>?
          </h2>
          <p className="text-2xl text-white/50 max-w-2xl mx-auto leading-relaxed">
            CITZEN is the missing digital building block for the Citizen Ambassadors network to scale.
          </p>
          <div className="flex items-center justify-center gap-6 pt-4">
            <div className="px-8 py-4 rounded-full bg-[#A6CE39] text-[#1a1a1a] text-xl font-bold">
              Request a Demo
            </div>
            <div className="px-8 py-4 rounded-full border-2 border-white/20 text-white text-xl font-medium">
              Learn More
            </div>
          </div>
          <div className="pt-8">
            <p className="text-lg text-white/30">
              An initiative of the <span className="text-[#A6CE39] font-semibold">Les Citoyens</span> movement
            </p>
            <p className="text-base text-white/20 mt-2">Living better together</p>
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
