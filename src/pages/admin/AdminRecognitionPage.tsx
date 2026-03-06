import { Award, Trophy, Star, Crown, TrendingUp, Medal, Users, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const programs = [
  { name: "Ambassadeur du mois", icon: Star, color: "bg-highlight/15 text-highlight", current: "Amina El Fassi", period: "Mars 2026" },
  { name: "Ambassadeur de l'année", icon: Crown, color: "bg-primary/15 text-primary", current: "Hassan Alaoui", period: "2025" },
  { name: "Top Région", icon: MapPin, color: "bg-secondary/15 text-secondary", current: "Casablanca-Settat", period: "T1 2026" },
];

const badges = [
  { name: "Leader émergent", description: "5 activités validées", icon: "🌟", holders: 42 },
  { name: "Mentor exemplaire", description: "10 validations complétées", icon: "🎓", holders: 8 },
  { name: "Organisateur d'exception", description: "3 événements organisés", icon: "🏆", holders: 15 },
  { name: "Citoyen engagé", description: "Actif pendant 6 mois consécutifs", icon: "💎", holders: 28 },
  { name: "Innovateur social", description: "Projet communautaire primé", icon: "🚀", holders: 6 },
  { name: "Ambassadeur vétéran", description: "1 an dans le réseau", icon: "⭐", holders: 35 },
];

const leaderboard = [
  { rank: 1, name: "Amina El Fassi", initials: "AE", points: 950, region: "Casablanca-Settat", events: 8, reports: 6 },
  { rank: 2, name: "Hassan Alaoui", initials: "HA", points: 920, region: "Fès-Meknès", events: 5, reports: 7 },
  { rank: 3, name: "Fatima Zahra Ouali", initials: "FZ", points: 880, region: "Rabat-Salé-Kénitra", events: 6, reports: 5 },
  { rank: 4, name: "Nadia Chraibi", initials: "NC", points: 810, region: "Tanger-Tétouan", events: 7, reports: 4 },
  { rank: 5, name: "Karim Tazi", initials: "KT", points: 720, region: "Marrakech-Safi", events: 4, reports: 3 },
  { rank: 6, name: "Youssef Bennani", initials: "YB", points: 680, region: "Casablanca-Settat", events: 3, reports: 4 },
  { rank: 7, name: "Omar Idrissi", initials: "OI", points: 590, region: "Fès-Meknès", events: 3, reports: 3 },
  { rank: 8, name: "Leila Mansouri", initials: "LM", points: 540, region: "Rabat-Salé-Kénitra", events: 2, reports: 4 },
];

const pointRules = [
  { action: "Organiser un événement", points: 100 },
  { action: "Soumettre un rapport", points: 50 },
  { action: "Compléter une formation", points: 30 },
  { action: "Participer à un événement", points: 20 },
  { action: "Mentorat (par validation)", points: 40 },
];

const AdminRecognitionPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-bold">Reconnaissance & Engagement</h2>
        <p className="text-sm text-muted-foreground mt-1">Gérer la gamification et les programmes de reconnaissance</p>
      </div>

      {/* Recognition Programs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {programs.map((prog) => (
          <Card key={prog.name} className="border-0 shadow-card">
            <CardContent className="p-5 text-center space-y-3">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto ${prog.color}`}>
                <prog.icon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-sm">{prog.name}</h3>
                <p className="text-xs text-muted-foreground">{prog.period}</p>
              </div>
              <p className="text-base font-bold text-primary">{prog.current}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Leaderboard */}
        <Card className="border-0 shadow-card lg:col-span-2">
          <CardHeader className="pb-3">
            <CardTitle className="font-display text-base flex items-center gap-2">
              <Trophy className="w-4 h-4 text-highlight" />
              Classement général
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {leaderboard.map((entry) => (
                <div key={entry.rank} className="px-6 py-3 flex items-center gap-3 hover:bg-muted/50 transition-colors">
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                    entry.rank <= 3 ? "bg-highlight/15 text-highlight" : "bg-muted text-muted-foreground"
                  }`}>{entry.rank}</span>
                  <Avatar className="w-8 h-8 shrink-0">
                    <AvatarFallback className="text-xs font-bold bg-primary/10 text-primary">{entry.initials}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold">{entry.name}</p>
                    <p className="text-[10px] text-muted-foreground">{entry.region} · {entry.events} évé. · {entry.reports} rap.</p>
                  </div>
                  <span className="text-sm font-bold text-primary">{entry.points} pts</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Point Rules */}
        <div className="space-y-6">
          <Card className="border-0 shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="font-display text-base flex items-center gap-2">
                <Award className="w-4 h-4 text-primary" />
                Règles de points
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {pointRules.map((rule) => (
                <div key={rule.action} className="flex items-center justify-between">
                  <span className="text-sm">{rule.action}</span>
                  <Badge className="bg-primary/10 text-primary border-0 text-xs">+{rule.points}</Badge>
                </div>
              ))}
              <Button variant="outline" size="sm" className="w-full mt-2">Modifier les règles</Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="font-display text-base flex items-center gap-2">
                <Medal className="w-4 h-4 text-accent" />
                Badges disponibles
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {badges.map((badge) => (
                <div key={badge.name} className="flex items-center gap-3">
                  <span className="text-xl">{badge.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{badge.name}</p>
                    <p className="text-[10px] text-muted-foreground">{badge.description}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{badge.holders}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminRecognitionPage;
