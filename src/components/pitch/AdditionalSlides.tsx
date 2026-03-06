import { ArrowRight, ArrowDown, GitBranch, Network, Layers } from "lucide-react";

// Slide: Sequence Diagram - Full Platform Workflow
export const SequenceDiagramSlide = {
  id: 9,
  render: () => {
    const actors = [
      { label: "Ambassador", color: "#A6CE39", emoji: "🌱" },
      { label: "CITZEN Platform", color: "#2a1020", emoji: "💻" },
      { label: "Mentor", color: "#722D50", emoji: "🎓" },
      { label: "Admin", color: "#2a1020", emoji: "⚙️" },
    ];
    const messages = [
      { from: 0, to: 1, label: "1. Sign up & complete onboarding profile", color: "#A6CE39" },
      { from: 1, to: 0, label: "2. Assign dashboard, region & mentor", color: "#A6CE39" },
      { from: 0, to: 1, label: "3. Submit activity report", color: "#A6CE39" },
      { from: 1, to: 2, label: "4. Notify mentor for validation", color: "#722D50" },
      { from: 2, to: 1, label: "5. Approve / Request revision", color: "#722D50" },
      { from: 1, to: 0, label: "6. Notify result + award points", color: "#A6CE39" },
      { from: 0, to: 1, label: "7. Post in social hub feed", color: "#A6CE39" },
      { from: 0, to: 1, label: "8. Register for event", color: "#A6CE39" },
      { from: 1, to: 3, label: "9. Aggregate data to analytics", color: "#2a1020" },
      { from: 3, to: 1, label: "10. Publish announcement", color: "#2a1020" },
      { from: 1, to: 0, label: "11. Push notification to all", color: "#A6CE39" },
    ];
    const colW = 25; // percentage per column
    return (
      <div className="w-full h-full bg-white flex flex-col px-16 py-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#722D50]/10 flex items-center justify-center">
            <GitBranch className="w-6 h-6 text-[#722D50]" />
          </div>
          <h2 className="text-4xl font-bold text-[#2a1020]">Sequence Diagram</h2>
        </div>
        <p className="text-lg text-[#2a1020]/50 mb-6">End-to-end platform workflow — from onboarding to impact tracking</p>

        {/* Actor headers */}
        <div className="grid grid-cols-4 gap-2 mb-1">
          {actors.map((actor, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl border-2 mb-1" style={{ borderColor: actor.color, backgroundColor: `${actor.color}15` }}>
                {actor.emoji}
              </div>
              <span className="text-sm font-bold" style={{ color: actor.color }}>{actor.label}</span>
            </div>
          ))}
        </div>

        {/* Sequence rows */}
        <div className="flex-1 relative">
          {/* Vertical lifelines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
            {actors.map((_, i) => (
              <line key={i} x1={`${i * colW + colW / 2}%`} y1="0" x2={`${i * colW + colW / 2}%`} y2="100%" stroke="#2a102015" strokeWidth="1.5" strokeDasharray="4 4" />
            ))}
          </svg>

          {/* Messages */}
          <div className="relative flex flex-col justify-evenly h-full py-1">
            {messages.map((msg, i) => {
              const leftCol = Math.min(msg.from, msg.to);
              const rightCol = Math.max(msg.from, msg.to);
              const isReverse = msg.to < msg.from;
              const leftPct = leftCol * colW + colW / 2;
              const widthPct = (rightCol - leftCol) * colW;
              return (
                <div key={i} className="relative flex items-center" style={{ height: 36, marginLeft: `${leftPct}%`, width: `${widthPct}%` }}>
                  <div className="absolute inset-x-0 top-1/2 h-[2px] rounded-full" style={{ backgroundColor: msg.color }} />
                  <div className={`absolute ${isReverse ? "left-0" : "right-0"} top-1/2 -translate-y-1/2`}>
                    <ArrowRight className="w-3.5 h-3.5" style={{ color: msg.color, transform: isReverse ? "rotate(180deg)" : "none" }} />
                  </div>
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-white shadow-sm border" style={{ color: msg.color, borderColor: `${msg.color}30` }}>
                      {msg.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  },
};

// Slide: Interaction Diagram - How roles interact
export const InteractionDiagramSlide = {
  id: 10,
  render: () => (
    <div className="w-full h-full bg-gradient-to-br from-[#2a1020] to-[#1a0a14] text-white flex flex-col px-20 py-16">
      <div className="flex items-center gap-4 mb-10">
        <div className="w-14 h-14 rounded-2xl bg-[#A6CE39]/15 flex items-center justify-center">
          <Network className="w-7 h-7 text-[#A6CE39]" />
        </div>
        <h2 className="text-5xl font-bold">Interaction Diagram</h2>
      </div>
      <p className="text-xl text-white/50 mb-8">How users and platform modules connect</p>

      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-full max-w-4xl h-[500px]">
          {/* Central hub */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full bg-[#A6CE39]/20 border-2 border-[#A6CE39] flex items-center justify-center z-10">
            <div className="text-center">
              <p className="text-2xl font-black">CITZEN</p>
              <p className="text-xs text-[#A6CE39]">Platform</p>
            </div>
          </div>

          {/* Role nodes */}
          {[
            { label: "Ambassador", emoji: "🌱", color: "#A6CE39", x: "10%", y: "15%", actions: ["Submit reports", "View feed", "Join events"] },
            { label: "Mentor", emoji: "🎓", color: "#722D50", x: "75%", y: "10%", actions: ["Validate reports", "Track mentees", "Give feedback"] },
            { label: "Admin", emoji: "⚙️", color: "#fff", x: "80%", y: "70%", actions: ["Manage users", "View analytics", "Send announcements"] },
          ].map((node, i) => (
            <div key={i} className="absolute z-10" style={{ left: node.x, top: node.y }}>
              <div className="rounded-2xl border p-6 space-y-3 w-56" style={{ borderColor: `${node.color}40`, backgroundColor: `${node.color}10` }}>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{node.emoji}</span>
                  <span className="text-lg font-bold" style={{ color: node.color }}>{node.label}</span>
                </div>
                {node.actions.map((a, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: node.color }} />
                    <span className="text-sm text-white/60">{a}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Module nodes */}
          {[
            { label: "Social Hub", x: "5%", y: "70%", color: "#A6CE39" },
            { label: "Reports", x: "35%", y: "85%", color: "#722D50" },
            { label: "Map", x: "55%", y: "85%", color: "#A6CE39" },
            { label: "Analytics", x: "40%", y: "5%", color: "#722D50" },
          ].map((mod, i) => (
            <div key={i} className="absolute z-10" style={{ left: mod.x, top: mod.y }}>
              <div className="px-5 py-3 rounded-xl border text-sm font-semibold" style={{ borderColor: `${mod.color}40`, color: mod.color, backgroundColor: `${mod.color}10` }}>
                {mod.label}
              </div>
            </div>
          ))}

          {/* Connection lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
            {/* Ambassador to center */}
            <line x1="22%" y1="30%" x2="43%" y2="45%" stroke="#A6CE39" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.4" />
            {/* Mentor to center */}
            <line x1="75%" y1="28%" x2="57%" y2="45%" stroke="#722D50" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.4" />
            {/* Admin to center */}
            <line x1="80%" y1="72%" x2="57%" y2="55%" stroke="#fff" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.3" />
            {/* Modules to center */}
            <line x1="15%" y1="72%" x2="43%" y2="55%" stroke="#A6CE39" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
            <line x1="42%" y1="87%" x2="48%" y2="58%" stroke="#722D50" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
            <line x1="60%" y1="87%" x2="52%" y2="58%" stroke="#A6CE39" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
            <line x1="48%" y1="10%" x2="50%" y2="42%" stroke="#722D50" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
          </svg>
        </div>
      </div>
    </div>
  ),
};

// Slide: Cloud Architecture Layers by Role
export const CloudLayersSlide = {
  id: 11,
  render: () => (
    <div className="w-full h-full bg-[#faf8f9] flex flex-col px-20 py-16">
      <div className="flex items-center gap-4 mb-10">
        <div className="w-14 h-14 rounded-2xl bg-[#722D50]/10 flex items-center justify-center">
          <Layers className="w-7 h-7 text-[#722D50]" />
        </div>
        <h2 className="text-5xl font-bold text-[#2a1020]">Cloud Architecture by Role</h2>
      </div>
      <p className="text-xl text-[#2a1020]/50 mb-8">How each role maps to platform layers and cloud services</p>

      <div className="flex-1 flex flex-col justify-center gap-0">
        {/* Layer rows */}
        {[
          {
            layer: "Presentation Layer",
            subtitle: "React + Tailwind + shadcn/ui",
            color: "#A6CE39",
            roles: [
              { role: "Ambassador", features: ["Dashboard", "Feed", "Events", "Reports form", "Profile"] },
              { role: "Mentor", features: ["Validation panel", "Mentee list", "Feedback UI"] },
              { role: "Admin", features: ["Admin dashboard", "User mgmt", "Analytics views", "Settings"] },
            ],
          },
          {
            layer: "Application Layer",
            subtitle: "Business Logic & API",
            color: "#722D50",
            roles: [
              { role: "Ambassador", features: ["Report submission", "Gamification engine", "Event RSVP"] },
              { role: "Mentor", features: ["Validation workflow", "Comment system", "Notification triggers"] },
              { role: "Admin", features: ["Role management", "Bulk operations", "Announcement dispatch"] },
            ],
          },
          {
            layer: "Data Layer",
            subtitle: "PostgreSQL + Auth + Storage",
            color: "#2a1020",
            roles: [
              { role: "Ambassador", features: ["Profile data", "Activity logs", "Points & badges"] },
              { role: "Mentor", features: ["Validation records", "Mentee assignments", "Feedback history"] },
              { role: "Admin", features: ["All user data", "Analytics aggregates", "System config", "Audit logs"] },
            ],
          },
          {
            layer: "Infrastructure",
            subtitle: "Lovable Cloud (Edge Functions, Realtime, CDN)",
            color: "#A6CE39",
            roles: [
              { role: "Ambassador", features: ["Realtime feed", "Push notifications"] },
              { role: "Mentor", features: ["Realtime alerts", "Email triggers"] },
              { role: "Admin", features: ["Scheduled jobs", "2FA edge functions", "Backup & monitoring"] },
            ],
          },
        ].map((row, i) => (
          <div key={i} className="flex items-stretch border-b last:border-b-0" style={{ borderColor: `${row.color}15` }}>
            {/* Layer label */}
            <div className="w-56 shrink-0 p-5 flex flex-col justify-center border-r" style={{ borderColor: `${row.color}15` }}>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: row.color }} />
                <span className="text-lg font-bold" style={{ color: row.color }}>{row.layer}</span>
              </div>
              <span className="text-xs text-[#2a1020]/40 pl-5">{row.subtitle}</span>
            </div>

            {/* Role columns */}
            <div className="flex-1 grid grid-cols-3 divide-x" style={{ borderColor: `${row.color}10` }}>
              {row.roles.map((r, j) => (
                <div key={j} className="p-4 space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: ["#A6CE39", "#722D50", "#2a1020"][j] }}>
                    {r.role}
                  </span>
                  {r.features.map((f, k) => (
                    <div key={k} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-[#2a1020]/30" />
                      <span className="text-sm text-[#2a1020]/60">{f}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};
