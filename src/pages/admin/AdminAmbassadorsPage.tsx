import { useState } from "react";
import { Search, Filter, MoreHorizontal, UserCheck, UserX, Eye, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ambassadors = [
  { id: "1", name: "Amina El Fassi", region: "Casablanca-Settat", role: "Coordinatrice régionale", status: "active", initials: "AE", mentor: "Youssef Bennani" },
  { id: "2", name: "Karim Tazi", region: "Marrakech-Safi", role: "Ambassadeur", status: "active", initials: "KT", mentor: null },
  { id: "3", name: "Fatima Zahra Ouali", region: "Rabat-Salé-Kénitra", role: "Ambassadrice", status: "active", initials: "FZ", mentor: "Leila Mansouri" },
  { id: "4", name: "Omar Idrissi", region: "Fès-Meknès", role: "Ambassadeur", status: "inactive", initials: "OI", mentor: null },
  { id: "5", name: "Nadia Chraibi", region: "Tanger-Tétouan", role: "Coordinatrice régionale", status: "active", initials: "NC", mentor: "Hassan Alaoui" },
  { id: "6", name: "Hassan Alaoui", region: "Fès-Meknès", role: "Mentor", status: "active", initials: "HA", mentor: null },
  { id: "7", name: "Youssef Bennani", region: "Casablanca-Settat", role: "Mentor", status: "active", initials: "YB", mentor: null },
  { id: "8", name: "Leila Mansouri", region: "Rabat-Salé-Kénitra", role: "Mentor", status: "pending", initials: "LM", mentor: null },
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
      <div>
        <h2 className="font-display text-2xl font-bold">Ambassadeurs</h2>
        <p className="text-sm text-muted-foreground mt-1">Gestion des ambassadeurs du réseau</p>
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
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left text-xs font-semibold text-muted-foreground px-6 py-3">Ambassadeur</th>
                  <th className="text-left text-xs font-semibold text-muted-foreground px-4 py-3">Région</th>
                  <th className="text-left text-xs font-semibold text-muted-foreground px-4 py-3">Rôle</th>
                  <th className="text-left text-xs font-semibold text-muted-foreground px-4 py-3">Mentor</th>
                  <th className="text-left text-xs font-semibold text-muted-foreground px-4 py-3">Statut</th>
                  <th className="text-right text-xs font-semibold text-muted-foreground px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((amb) => {
                  const sc = statusConfig[amb.status];
                  return (
                    <tr key={amb.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                      <td className="px-6 py-3.5">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback className="text-xs font-bold bg-primary/10 text-primary">{amb.initials}</AvatarFallback>
                          </Avatar>
                          <span className="font-medium text-sm">{amb.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3.5 text-sm text-muted-foreground">{amb.region}</td>
                      <td className="px-4 py-3.5 text-sm">{amb.role}</td>
                      <td className="px-4 py-3.5 text-sm text-muted-foreground">{amb.mentor || "—"}</td>
                      <td className="px-4 py-3.5">
                        <Badge className={`${sc.className} border-0 text-[10px]`}>{sc.label}</Badge>
                      </td>
                      <td className="px-6 py-3.5 text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem><Eye className="w-4 h-4 mr-2" />Voir le profil</DropdownMenuItem>
                            <DropdownMenuItem><GraduationCap className="w-4 h-4 mr-2" />Assigner un mentor</DropdownMenuItem>
                            {amb.status === "active" ? (
                              <DropdownMenuItem className="text-destructive"><UserX className="w-4 h-4 mr-2" />Désactiver</DropdownMenuItem>
                            ) : (
                              <DropdownMenuItem className="text-secondary"><UserCheck className="w-4 h-4 mr-2" />Activer</DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminAmbassadorsPage;
