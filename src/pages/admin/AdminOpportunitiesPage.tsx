import { useState } from "react";
import { Plus, Briefcase, Edit, Archive, Eye, MoreHorizontal, Clock, MapPin, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const opportunities = [
  { id: "1", title: "Programme de formation Leadership 2026", category: "Formation", deadline: "30 Mars 2026", location: "National", status: "published" },
  { id: "2", title: "Subvention projets communautaires", category: "Subvention", deadline: "15 Avril 2026", location: "Toutes régions", status: "published" },
  { id: "3", title: "Conférence internationale Gouvernance", category: "Conférence", deadline: "1 Mai 2026", location: "Rabat", status: "draft" },
  { id: "4", title: "Appel à projets Innovation Sociale", category: "Projet", deadline: "20 Juin 2026", location: "National", status: "published" },
  { id: "5", title: "Bourse d'études Politique Publique", category: "Formation", deadline: "Terminé", location: "International", status: "archived" },
];

const statusConfig: Record<string, { label: string; className: string }> = {
  published: { label: "Publié", className: "bg-secondary/15 text-secondary" },
  draft: { label: "Brouillon", className: "bg-highlight/15 text-highlight" },
  archived: { label: "Archivé", className: "bg-muted text-muted-foreground" },
};

const AdminOpportunitiesPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-2xl font-bold">Opportunités</h2>
          <p className="text-sm text-muted-foreground mt-1">Créer et gérer les opportunités du réseau</p>
        </div>
        <Button className="bg-primary text-primary-foreground gap-1.5">
          <Plus className="w-4 h-4" />Nouvelle opportunité
        </Button>
      </div>

      <div className="space-y-3">
        {opportunities.map((opp) => {
          const sc = statusConfig[opp.status];
          return (
            <Card key={opp.id} className="border-0 shadow-card hover:shadow-elevated transition-all">
              <CardContent className="p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-display font-semibold text-sm">{opp.title}</h3>
                    <Badge className={`${sc.className} border-0 text-[10px]`}>{sc.label}</Badge>
                    <Badge className="bg-muted text-muted-foreground border-0 text-[10px]">{opp.category}</Badge>
                  </div>
                  <div className="flex items-center gap-3 mt-1.5 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{opp.deadline}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{opp.location}</span>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontal className="w-4 h-4" /></Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem><Eye className="w-4 h-4 mr-2" />Voir</DropdownMenuItem>
                    <DropdownMenuItem><Edit className="w-4 h-4 mr-2" />Modifier</DropdownMenuItem>
                    {opp.status === "draft" && <DropdownMenuItem><Globe className="w-4 h-4 mr-2" />Publier</DropdownMenuItem>}
                    <DropdownMenuItem><Archive className="w-4 h-4 mr-2" />Archiver</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default AdminOpportunitiesPage;
