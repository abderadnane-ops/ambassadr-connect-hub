import { Star, Trophy, FolderOpen, MapPin, Award, ChevronRight, Settings, LogOut, Coffee, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { badgeInfo } from "@/data/mock-data";

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
};

const menuItems = [
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
        <div className="w-20 h-20 rounded-full gradient-hero flex items-center justify-center text-white font-display font-bold text-2xl shadow-elevated">
          {myProfile.avatar}
        </div>
        <h2 className="font-display font-bold text-lg mt-3">{myProfile.name}</h2>
        <p className="text-sm text-muted-foreground">{myProfile.role}</p>
        <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
          <MapPin className="w-3 h-3" /> {myProfile.region}
        </div>
        <p className="text-xs text-muted-foreground mt-0.5">Membre depuis {myProfile.joinDate}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 animate-fade-in" style={{ animationDelay: "0.05s", opacity: 0 }}>
        {[
          { label: "Points", value: myProfile.points, icon: Star, color: "text-highlight" },
          { label: "Projets", value: myProfile.projects, icon: FolderOpen, color: "text-secondary" },
          { label: "Événements", value: myProfile.eventsOrganized, icon: Coffee, color: "text-accent" },
        ].map((s) => (
          <Card key={s.label} className="border-0 shadow-card">
            <CardContent className="p-3 text-center">
              <s.icon className={`w-4 h-4 mx-auto mb-1 ${s.color}`} />
              <p className="font-display font-bold text-lg">{s.value}</p>
              <p className="text-[10px] text-muted-foreground">{s.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Points Progress */}
      <Card className="border-0 shadow-card animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold">Objectif mensuel</span>
            <span className="text-xs text-muted-foreground">{myProfile.points} / {myProfile.monthlyGoal} pts</span>
          </div>
          <Progress value={pointsProgress} className="h-2" />
          <div className="flex items-center justify-between mt-2">
            <span className="text-[10px] text-muted-foreground">Rang #{myProfile.rank} sur {myProfile.totalAmbassadors}</span>
            <Badge className="bg-highlight/15 text-highlight border-0 text-[10px]">
              <Trophy className="w-3 h-3 mr-1" /> Top {Math.round((myProfile.rank / myProfile.totalAmbassadors) * 100)}%
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Badges */}
      <div className="animate-fade-in" style={{ animationDelay: "0.15s", opacity: 0 }}>
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
      </div>

      {/* Skills */}
      <div className="animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
        <h3 className="font-display font-semibold text-sm mb-2">Compétences</h3>
        <div className="flex flex-wrap gap-2">
          {myProfile.skills.map((skill) => (
            <Badge key={skill} className="bg-primary/10 text-primary border-0 text-xs">{skill}</Badge>
          ))}
        </div>
      </div>

      {/* Mentor */}
      <Card className="border-0 shadow-card animate-fade-in" style={{ animationDelay: "0.25s", opacity: 0 }}>
        <CardContent className="p-4">
          <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">Mentor assigné</span>
          <p className="font-display font-semibold text-sm mt-1">{myProfile.mentor}</p>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="space-y-2 animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
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
      <button className="w-full flex items-center justify-center gap-2 text-sm text-destructive font-medium py-3 animate-fade-in" style={{ animationDelay: "0.35s", opacity: 0 }}>
        <LogOut className="w-4 h-4" /> Se déconnecter
      </button>
    </div>
  );
};

export default ProfilePage;
