import { Star, FolderOpen, MapPin, Award, ChevronRight, Settings, LogOut, Coffee, FileText, Activity, Heart, Clock, Target, BarChart3, Flame, ClipboardCheck, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { badgeInfo } from "@/data/mock-data";
import profileAvatar from "@/assets/profile-avatar.jpg";

const myProfile = {
  name: "Amina El Fassi",
  region: "Rabat-Salé-Kénitra",
  role: "Coordinatrice Régionale",
  avatar: "AE",
  bio: "Engagée dans la société civile depuis 10 ans, spécialiste des droits de la femme.",
  skills: ["Leadership", "Communication", "Plaidoyer", "Gestion de projet"],
  points: 2450,
  rank: 1,
  totalAmbassadors: 190,
  monthlyGoal: 3000,
  projects: 12,
  eventsOrganized: 8,
  badges: ["Bâtisseur Communautaire", "Leader de Projet", "Champion Régional"],
  mentor: "Hassan Alaoui",
  joinDate: "Sept. 2024",
  streak: 12,
  beneficiaries: 500,
  volunteerHours: 320,
};

const activityData = [
  { day: "Lun", value: 65 },
  { day: "Mar", value: 80 },
  { day: "Mer", value: 45 },
  { day: "Jeu", value: 90 },
  { day: "Ven", value: 70 },
  { day: "Sam", value: 30 },
  { day: "Dim", value: 55 },
];

const monthlyHighlights = [
  { label: "Événements organisés", value: 3, icon: Coffee },
  { label: "Rapports soumis", value: 2, icon: FileText },
  { label: "Heures de bénévolat", value: 45, icon: Clock },
];

const achievements = [
  { title: "Premier Café Citoyen", desc: "Organiser votre premier événement", unlocked: true, icon: "☕" },
  { title: "Ambassadeur du Mois", desc: "Être #1 du classement mensuel", unlocked: true, icon: "🏆" },
  { title: "Mentor", desc: "Accompagner un nouvel ambassadeur", unlocked: false, icon: "🎓" },
  { title: "100 Bénéficiaires", desc: "Toucher 100 personnes", unlocked: true, icon: "💯" },
  { title: "Réseau National", desc: "Collaborer avec 5 régions", unlocked: false, icon: "🌍" },
];



const menuItems = [
  { label: "Validation mentor", icon: ClipboardCheck, path: "/validation" },
  { label: "Organiser un événement", icon: Coffee, path: "/event-application" },
  { label: "Soumettre un rapport", icon: FileText, path: "/event-report" },
  { label: "Paramètres", icon: Settings, path: "#" },
];

const ProfilePage = () => {
  const pointsProgress = Math.round((myProfile.points / myProfile.monthlyGoal) * 100);

  return (
    <div className="px-4 py-4 space-y-5">
      {/* Header */}
      <div className="flex flex-col items-center text-center animate-fade-in">
        <div className="relative">
          <img src={profileAvatar} alt={myProfile.name} className="w-20 h-20 rounded-full object-cover shadow-elevated" />
          <div className="absolute -bottom-1 -right-1 flex items-center gap-0.5 bg-highlight/15 rounded-full px-2 py-0.5">
            <Flame className="w-3 h-3 text-highlight" />
            <span className="text-[10px] font-bold text-highlight">{myProfile.streak}j</span>
          </div>
        </div>
        <h2 className="font-display font-bold text-lg mt-3">{myProfile.name}</h2>
        <p className="text-sm text-muted-foreground">{myProfile.role}</p>
        <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
          <MapPin className="w-3 h-3" /> {myProfile.region}
        </div>
      </div>

      {/* Points & Rank Card */}
      <Card className="border-0 shadow-elevated gradient-card-purple animate-fade-in" style={{ animationDelay: "0.05s", opacity: 0 }}>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-highlight fill-highlight" />
              <span className="font-display font-bold text-xl">{myProfile.points}</span>
              <span className="text-xs text-muted-foreground">points</span>
            </div>
            <Badge className="bg-highlight/15 text-highlight border-0 text-[10px]">
              <Trophy className="w-3 h-3 mr-1" /> Rang #{myProfile.rank}
            </Badge>
          </div>
          <div className="mt-3 space-y-1.5">
            <div className="flex items-center justify-between text-[10px] text-muted-foreground">
              <span>Objectif mensuel</span>
              <span className="font-semibold">{myProfile.points} / {myProfile.monthlyGoal}</span>
            </div>
            <Progress value={pointsProgress} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-2 animate-fade-in" style={{ animationDelay: "0.08s", opacity: 0 }}>
        {[
          { label: "Projets", value: myProfile.projects, icon: FolderOpen, color: "text-secondary" },
          { label: "Événements", value: myProfile.eventsOrganized, icon: Coffee, color: "text-accent" },
          { label: "Bénéficiaires", value: myProfile.beneficiaries, icon: Heart, color: "text-destructive" },
          { label: "Heures", value: myProfile.volunteerHours, icon: Clock, color: "text-primary" },
        ].map((s) => (
          <Card key={s.label} className="border-0 shadow-card">
            <CardContent className="p-2.5 text-center">
              <s.icon className={`w-3.5 h-3.5 mx-auto mb-1 ${s.color}`} />
              <p className="font-display font-bold text-sm">{s.value}</p>
              <p className="text-[9px] text-muted-foreground">{s.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Weekly Activity */}
      <section className="animate-fade-in" style={{ animationDelay: "0.12s", opacity: 0 }}>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-display font-semibold text-sm flex items-center gap-2">
            <Activity className="w-4 h-4 text-primary" /> Activité hebdomadaire
          </h3>
          <Badge className="bg-secondary/15 text-secondary border-0 text-[10px]">Cette semaine</Badge>
        </div>
        <Card className="border-0 shadow-card">
          <CardContent className="p-4">
            <div className="flex items-end justify-between gap-2 h-20">
              {activityData.map((d) => (
                <div key={d.day} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full flex flex-col justify-end" style={{ height: "60px" }}>
                    <div
                      className="w-full rounded-t-md transition-all duration-700"
                      style={{
                        height: `${d.value}%`,
                        background: d.value >= 80
                          ? "linear-gradient(to top, hsl(var(--secondary)), hsl(var(--secondary) / 0.6))"
                          : d.value >= 50
                          ? "linear-gradient(to top, hsl(var(--primary)), hsl(var(--primary) / 0.5))"
                          : "hsl(var(--muted))",
                      }}
                    />
                  </div>
                  <span className="text-[9px] text-muted-foreground font-medium">{d.day}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Monthly Highlights */}
      <section className="animate-fade-in" style={{ animationDelay: "0.16s", opacity: 0 }}>
        <h3 className="font-display font-semibold text-sm mb-2 flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-primary" /> Highlights du mois
        </h3>
        <div className="grid grid-cols-3 gap-2">
          {monthlyHighlights.map((h) => (
            <Card key={h.label} className="border-0 shadow-card">
              <CardContent className="p-3 text-center">
                <h.icon className="w-4 h-4 mx-auto mb-1 text-primary" />
                <p className="font-display font-bold text-lg">{h.value}</p>
                <p className="text-[9px] text-muted-foreground leading-tight">{h.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Badges */}
      <section className="animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
        <h3 className="font-display font-semibold text-sm mb-2 flex items-center gap-2">
          <Award className="w-4 h-4 text-primary" /> Badges
        </h3>
        <div className="flex flex-wrap gap-2">
          {myProfile.badges.map((badge) => (
            <Badge key={badge} className="bg-muted text-foreground border-0 text-xs">
              {badgeInfo[badge]?.icon} {badge}
            </Badge>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="animate-fade-in" style={{ animationDelay: "0.24s", opacity: 0 }}>
        <h3 className="font-display font-semibold text-sm mb-2 flex items-center gap-2">
          <Target className="w-4 h-4 text-secondary" /> Achievements
        </h3>
        <div className="space-y-2">
          {achievements.map((a) => (
            <Card key={a.title} className={`border-0 shadow-card ${!a.unlocked ? "opacity-50" : ""}`}>
              <CardContent className="p-3 flex items-center gap-3">
                <span className="text-xl">{a.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold">{a.title}</p>
                  <p className="text-[10px] text-muted-foreground">{a.desc}</p>
                </div>
                {a.unlocked ? (
                  <Badge className="bg-secondary/15 text-secondary border-0 text-[9px]">✓ Débloqué</Badge>
                ) : (
                  <Badge className="bg-muted text-muted-foreground border-0 text-[9px]">🔒 Verrouillé</Badge>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>


      {/* Skills */}
      <section className="animate-fade-in" style={{ animationDelay: "0.32s", opacity: 0 }}>
        <h3 className="font-display font-semibold text-sm mb-2">Compétences</h3>
        <div className="flex flex-wrap gap-2">
          {myProfile.skills.map((skill) => (
            <Badge key={skill} className="bg-primary/10 text-primary border-0 text-xs">{skill}</Badge>
          ))}
        </div>
      </section>

      {/* Mentor */}
      <Card className="border-0 shadow-card animate-fade-in" style={{ animationDelay: "0.36s", opacity: 0 }}>
        <CardContent className="p-4">
          <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">Mentor assigné</span>
          <p className="font-display font-semibold text-sm mt-1">{myProfile.mentor}</p>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="space-y-2 animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
        {menuItems.map((item) => (
          <Link key={item.label} to={item.path}>
            <Card className="border-0 shadow-card hover:shadow-elevated transition-shadow">
              <CardContent className="p-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-muted flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 text-foreground" />
                </div>
                <span className="text-sm font-medium flex-1">{item.label}</span>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Logout */}
      <button className="w-full flex items-center justify-center gap-2 text-sm text-destructive font-medium py-3 animate-fade-in" style={{ animationDelay: "0.44s", opacity: 0 }}>
        <LogOut className="w-4 h-4" /> Se déconnecter
      </button>
    </div>
  );
};

export default ProfilePage;
