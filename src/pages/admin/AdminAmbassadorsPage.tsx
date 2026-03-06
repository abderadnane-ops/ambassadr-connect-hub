import { useState } from "react";
import { Search, Filter, MoreHorizontal, UserCheck, UserX, Eye, GraduationCap, Plus, KeyRound, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

const ambassadors = [
  { id: "1", name: "Amina El Fassi", region: "Casablanca-Settat", role: "Coordinatrice régionale", status: "active", initials: "AE", mentor: "Youssef Bennani", points: 950, activityLevel: 92 },
  { id: "2", name: "Karim Tazi", region: "Marrakech-Safi", role: "Ambassadeur", status: "active", initials: "KT", mentor: null, points: 720, activityLevel: 75 },
  { id: "3", name: "Fatima Zahra Ouali", region: "Rabat-Salé-Kénitra", role: "Ambassadrice", status: "active", initials: "FZ", mentor: "Leila Mansouri", points: 880, activityLevel: 88 },
  { id: "4", name: "Omar Idrissi", region: "Fès-Meknès", role: "Ambassadeur", status: "inactive", initials: "OI", mentor: null, points: 320, activityLevel: 25 },
  { id: "5", name: "Nadia Chraibi", region: "Tanger-Tétouan", role: "Coordinatrice régionale", status: "active", initials: "NC", mentor: "Hassan Alaoui", points: 810, activityLevel: 82 },
  { id: "6", name: "Hassan Alaoui", region: "Fès-Meknès", role: "Ambassadeur", status: "active", initials: "HA", mentor: null, points: 680, activityLevel: 70 },
  { id: "7", name: "Youssef Bennani", region: "Casablanca-Settat", role: "Ambassadeur", status: "active", initials: "YB", mentor: null, points: 590, activityLevel: 62 },
  { id: "8", name: "Leila Mansouri", region: "Rabat-Salé-Kénitra", role: "Ambassadrice", status: "pending", initials: "LM", mentor: null, points: 150, activityLevel: 15 },
];

const statusConfig: Record<string, { label: string; className: string }> = {
  active: { label: "Actif", className: "bg-secondary/15 text-secondary" },
  inactive: { label: "Inactif", className: "bg-muted text-muted-foreground" },
  pending: { label: "En attente", className: "bg-highlight/15 text-highlight" },
};

const AdminAmbassadorsPage = () => {
  const [search, setSearch] = useState("");
  const [regionFilter, setRegionFilter] = useState("all");

  const filtered = ambassadors.filter((a) => {
    const matchSearch = a.name.toLowerCase().includes(search.toLowerCase());
    const matchRegion = regionFilter === "all" || a.region === regionFilter;
    return matchSearch && matchRegion;
  });

  const regions = [...new Set(ambassadors.map((a) => a.region))];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-2xl font-bold">Ambassadeurs</h2>
          <p className="text-sm text-muted-foreground mt-1">Gestion des {ambassadors.length} ambassadeurs du réseau</p>
        </div>
        <Button className="bg-primary text-primary-foreground gap-1.5">
          <Plus className="w-4 h-4" />Créer un compte
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Rechercher un ambassadeur..." className="pl-9" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <Select value={regionFilter} onValueChange={setRegionFilter}>
          <SelectTrigger className="w-full sm:w-56">
            <Filter className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Toutes les régions" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Toutes les régions</SelectItem>
            {regions.map((r) => <SelectItem key={r} value={r}>{r}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <Card className="border-0 shadow-card">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ambassadeur</TableHead>
                <TableHead>Région</TableHead>
                <TableHead>Rôle</TableHead>
                <TableHead>Mentor</TableHead>
                <TableHead>Activité</TableHead>
                <TableHead>Points</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((amb) => {
                const sc = statusConfig[amb.status];
                return (
                  <TableRow key={amb.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="text-xs font-bold bg-primary/10 text-primary">{amb.initials}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium text-sm">{amb.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{amb.region}</TableCell>
                    <TableCell>{amb.role}</TableCell>
                    <TableCell className="text-muted-foreground">{amb.mentor || "—"}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={amb.activityLevel} className="w-16 h-1.5" />
                        <span className="text-xs text-muted-foreground">{amb.activityLevel}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm font-semibold">{amb.points}</span>
                    </TableCell>
                    <TableCell>
                      <Badge className={`${sc.className} border-0 text-[10px]`}>{sc.label}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontal className="w-4 h-4" /></Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem><Eye className="w-4 h-4 mr-2" />Voir le profil</DropdownMenuItem>
                          <DropdownMenuItem><GraduationCap className="w-4 h-4 mr-2" />Assigner un mentor</DropdownMenuItem>
                          <DropdownMenuItem><KeyRound className="w-4 h-4 mr-2" />Réinitialiser mot de passe</DropdownMenuItem>
                          {amb.status === "active" ? (
                            <DropdownMenuItem className="text-destructive"><UserX className="w-4 h-4 mr-2" />Désactiver</DropdownMenuItem>
                          ) : (
                            <DropdownMenuItem className="text-secondary"><UserCheck className="w-4 h-4 mr-2" />Activer</DropdownMenuItem>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminAmbassadorsPage;
