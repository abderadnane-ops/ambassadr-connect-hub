import { useState } from "react";
import { Search, MoreHorizontal, Eye, UserPlus, BarChart3, GraduationCap, MapPin, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";

const mentors = [
  { id: "1", name: "Youssef Bennani", initials: "YB", region: "Casablanca-Settat", expertise: "Leadership & Gouvernance", assignedAmbassadors: 5, validationsCompleted: 18, performance: 92 },
  { id: "2", name: "Leila Mansouri", initials: "LM", region: "Rabat-Salé-Kénitra", expertise: "Engagement communautaire", assignedAmbassadors: 4, validationsCompleted: 14, performance: 85 },
  { id: "3", name: "Hassan Alaoui", initials: "HA", region: "Fès-Meknès", expertise: "Plaidoyer & Politique publique", assignedAmbassadors: 6, validationsCompleted: 22, performance: 95 },
  { id: "4", name: "Samira Bouazza", initials: "SB", region: "Marrakech-Safi", expertise: "Développement durable", assignedAmbassadors: 3, validationsCompleted: 10, performance: 78 },
  { id: "5", name: "Rachid El Amrani", initials: "RE", region: "Souss-Massa", expertise: "Innovation sociale", assignedAmbassadors: 4, validationsCompleted: 12, performance: 80 },
  { id: "6", name: "Khadija Benkirane", initials: "KB", region: "Tanger-Tétouan", expertise: "Formation & Éducation", assignedAmbassadors: 2, validationsCompleted: 8, performance: 72 },
];

const AdminMentorsPage = () => {
  const [search, setSearch] = useState("");

  const filtered = mentors.filter((m) => m.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-2xl font-bold">Mentors</h2>
          <p className="text-sm text-muted-foreground mt-1">Gestion des {mentors.length} mentors du réseau</p>
        </div>
        <Button className="bg-primary text-primary-foreground gap-1.5">
          <UserPlus className="w-4 h-4" />Ajouter un mentor
        </Button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="border-0 shadow-card">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center"><GraduationCap className="w-5 h-5 text-accent" /></div>
            <div><p className="text-2xl font-display font-bold">{mentors.length}</p><p className="text-xs text-muted-foreground">Mentors actifs</p></div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-card">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center"><CheckCircle className="w-5 h-5 text-secondary" /></div>
            <div><p className="text-2xl font-display font-bold">{mentors.reduce((s, m) => s + m.validationsCompleted, 0)}</p><p className="text-xs text-muted-foreground">Validations complétées</p></div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-card">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center"><BarChart3 className="w-5 h-5 text-primary" /></div>
            <div><p className="text-2xl font-display font-bold">{Math.round(mentors.reduce((s, m) => s + m.performance, 0) / mentors.length)}%</p><p className="text-xs text-muted-foreground">Performance moyenne</p></div>
          </CardContent>
        </Card>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input placeholder="Rechercher un mentor..." className="pl-9" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      {/* Mentor Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((mentor) => (
          <Card key={mentor.id} className="border-0 shadow-card hover:shadow-elevated transition-all">
            <CardContent className="p-5 space-y-4">
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="font-bold bg-accent/15 text-accent">{mentor.initials}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-semibold text-sm">{mentor.name}</h3>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                    <MapPin className="w-3 h-3" />{mentor.region}
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontal className="w-4 h-4" /></Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem><Eye className="w-4 h-4 mr-2" />Voir le profil</DropdownMenuItem>
                    <DropdownMenuItem><UserPlus className="w-4 h-4 mr-2" />Assigner des ambassadeurs</DropdownMenuItem>
                    <DropdownMenuItem><BarChart3 className="w-4 h-4 mr-2" />Performance détaillée</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <Badge className="bg-muted text-muted-foreground border-0 text-[10px]">{mentor.expertise}</Badge>

              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="p-2 rounded-lg bg-muted/50">
                  <p className="text-lg font-bold">{mentor.assignedAmbassadors}</p>
                  <p className="text-[10px] text-muted-foreground">Ambassadeurs</p>
                </div>
                <div className="p-2 rounded-lg bg-muted/50">
                  <p className="text-lg font-bold">{mentor.validationsCompleted}</p>
                  <p className="text-[10px] text-muted-foreground">Validations</p>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-muted-foreground">Performance</span>
                  <span className="font-semibold">{mentor.performance}%</span>
                </div>
                <Progress value={mentor.performance} className="h-1.5" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminMentorsPage;
