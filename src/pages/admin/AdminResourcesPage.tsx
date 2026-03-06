import { useState } from "react";
import { Plus, BookOpen, FileText, Briefcase, Wrench, Edit, Archive, Eye, MoreHorizontal, Clock, MapPin, Globe, Upload, Search, Filter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const resources = [
  { id: "1", title: "Guide de l'ambassadeur CITZEN 2026", category: "Document", type: "library", date: "1 Mars 2026", status: "published", featured: true },
  { id: "2", title: "Toolkit Animation Café Citoyen", category: "Toolkit", type: "library", date: "25 Fév 2026", status: "published", featured: false },
  { id: "3", title: "Rapport d'impact annuel 2025", category: "Rapport", type: "library", date: "15 Jan 2026", status: "published", featured: true },
  { id: "4", title: "Module Formation Leadership", category: "Formation", type: "library", date: "10 Fév 2026", status: "published", featured: false },
  { id: "5", title: "Vidéo : Techniques de facilitation", category: "Média", type: "library", date: "20 Fév 2026", status: "draft", featured: false },
];

const opportunities = [
  { id: "6", title: "Programme de formation Leadership 2026", category: "Formation", type: "opportunity", deadline: "30 Mars 2026", location: "National", status: "published" },
  { id: "7", title: "Subvention projets communautaires", category: "Subvention", type: "opportunity", deadline: "15 Avril 2026", location: "Toutes régions", status: "published" },
  { id: "8", title: "Conférence internationale Gouvernance", category: "Conférence", type: "opportunity", deadline: "1 Mai 2026", location: "Rabat", status: "draft" },
  { id: "9", title: "Appel à projets Innovation Sociale", category: "Projet", type: "opportunity", deadline: "20 Juin 2026", location: "National", status: "published" },
  { id: "10", title: "Bourse d'études Politique Publique", category: "Formation", type: "opportunity", deadline: "Terminé", location: "International", status: "archived" },
];

const statusConfig: Record<string, { label: string; className: string }> = {
  published: { label: "Publié", className: "bg-secondary/15 text-secondary" },
  draft: { label: "Brouillon", className: "bg-highlight/15 text-highlight" },
  archived: { label: "Archivé", className: "bg-muted text-muted-foreground" },
};

const categoryIcons: Record<string, typeof BookOpen> = {
  Document: FileText,
  Toolkit: Wrench,
  Rapport: FileText,
  Formation: BookOpen,
  Média: BookOpen,
  Subvention: Briefcase,
  Conférence: Briefcase,
  Projet: Briefcase,
};

const AdminResourcesPage = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-2xl font-bold">Ressources</h2>
          <p className="text-sm text-muted-foreground mt-1">Gérer la bibliothèque et les opportunités</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-1.5"><Upload className="w-4 h-4" />Importer</Button>
          <Button className="bg-primary text-primary-foreground gap-1.5"><Plus className="w-4 h-4" />Ajouter</Button>
        </div>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input placeholder="Rechercher une ressource..." className="pl-9" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      <Tabs defaultValue="library">
        <TabsList>
          <TabsTrigger value="library">Bibliothèque</TabsTrigger>
          <TabsTrigger value="opportunities">Opportunités</TabsTrigger>
        </TabsList>

        <TabsContent value="library" className="space-y-3 mt-4">
          {resources.filter((r) => r.title.toLowerCase().includes(search.toLowerCase())).map((res) => {
            const sc = statusConfig[res.status];
            const Icon = categoryIcons[res.category] || BookOpen;
            return (
              <Card key={res.id} className="border-0 shadow-card hover:shadow-elevated transition-all">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-display font-semibold text-sm">{res.title}</h3>
                      <Badge className={`${sc.className} border-0 text-[10px]`}>{sc.label}</Badge>
                      <Badge className="bg-muted text-muted-foreground border-0 text-[10px]">{res.category}</Badge>
                      {res.featured && <Badge className="bg-highlight/15 text-highlight border-0 text-[10px]">⭐ En vedette</Badge>}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1"><Clock className="w-3 h-3" />{res.date}</p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontal className="w-4 h-4" /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem><Eye className="w-4 h-4 mr-2" />Voir</DropdownMenuItem>
                      <DropdownMenuItem><Edit className="w-4 h-4 mr-2" />Modifier</DropdownMenuItem>
                      <DropdownMenuItem><Archive className="w-4 h-4 mr-2" />Archiver</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardContent>
              </Card>
            );
          })}
        </TabsContent>

        <TabsContent value="opportunities" className="space-y-3 mt-4">
          {opportunities.filter((o) => o.title.toLowerCase().includes(search.toLowerCase())).map((opp) => {
            const sc = statusConfig[opp.status];
            const Icon = categoryIcons[opp.category] || Briefcase;
            return (
              <Card key={opp.id} className="border-0 shadow-card hover:shadow-elevated transition-all">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-display font-semibold text-sm">{opp.title}</h3>
                      <Badge className={`${sc.className} border-0 text-[10px]`}>{sc.label}</Badge>
                      <Badge className="bg-muted text-muted-foreground border-0 text-[10px]">{opp.category}</Badge>
                    </div>
                    <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{opp.deadline}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{opp.location}</span>
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
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminResourcesPage;
