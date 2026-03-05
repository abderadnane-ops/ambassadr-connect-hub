import { useState } from "react";
import { FileText, BookOpen, Video, Download, ChevronRight, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const tabs = [
  { key: "all", label: "Tout" },
  { key: "documents", label: "Documents" },
  { key: "toolkits", label: "Toolkits" },
  { key: "media", label: "Médias" },
] as const;

interface LibraryItem {
  id: string;
  title: string;
  description: string;
  type: "documents" | "toolkits" | "media";
  format: string;
  date: string;
  size: string;
}

const libraryItems: LibraryItem[] = [
  { id: "1", title: "Guide de l'Ambassadeur 2026", description: "Manuel complet pour les nouveaux ambassadeurs du réseau CitiZen.", type: "documents", format: "PDF", date: "2026-02-15", size: "2.4 MB" },
  { id: "2", title: "Rapport d'Impact 2025", description: "Bilan annuel des activités et résultats du programme.", type: "documents", format: "PDF", date: "2026-01-10", size: "5.1 MB" },
  { id: "3", title: "Toolkit Communication Digitale", description: "Outils et templates pour la communication sur les réseaux sociaux.", type: "toolkits", format: "ZIP", date: "2026-02-20", size: "12 MB" },
  { id: "4", title: "Kit de Plaidoyer Local", description: "Ressources pour mener des actions de plaidoyer auprès des élus.", type: "toolkits", format: "ZIP", date: "2026-01-25", size: "8.3 MB" },
  { id: "5", title: "Webinaire : Leadership Civique", description: "Enregistrement du webinaire sur le leadership et l'engagement.", type: "media", format: "MP4", date: "2026-03-01", size: "150 MB" },
  { id: "6", title: "Podcast : Voix Citoyennes #12", description: "Épisode sur la participation des jeunes dans la gouvernance locale.", type: "media", format: "MP3", date: "2026-02-28", size: "45 MB" },
  { id: "7", title: "Charte des Valeurs CitiZen", description: "Document fondateur décrivant les valeurs et principes du réseau.", type: "documents", format: "PDF", date: "2025-12-01", size: "1.2 MB" },
  { id: "8", title: "Toolkit Événementiel", description: "Check-lists, budgets types et guides pour organiser un événement.", type: "toolkits", format: "ZIP", date: "2026-02-05", size: "6.7 MB" },
];

const typeIcons: Record<string, typeof FileText> = {
  documents: FileText,
  toolkits: BookOpen,
  media: Video,
};

const typeColors: Record<string, string> = {
  documents: "gradient-card-blue text-accent",
  toolkits: "gradient-card-green text-secondary",
  media: "gradient-card-purple text-primary",
};

const LibraryPage = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [search, setSearch] = useState("");

  const filtered = libraryItems
    .filter((item) => activeTab === "all" || item.type === activeTab)
    .filter((item) =>
      search === "" ||
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="px-4 py-4 space-y-4">
      <div className="animate-fade-in">
        <div className="flex items-center gap-2">
          <h2 className="font-display text-xl font-bold">Bibliothèque</h2>
          <Badge className="bg-muted text-muted-foreground border-0 text-xs">
            {libraryItems.length} ressources
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground mt-1">Documents, toolkits & médias</p>
      </div>

      {/* Search */}
      <div className="relative animate-fade-in" style={{ animationDelay: "0.05s", opacity: 0 }}>
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Rechercher une ressource..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9 h-10 bg-muted/50 border-none text-sm"
        />
      </div>

      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4 scrollbar-hide animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              activeTab === tab.key
                ? "bg-primary text-primary-foreground shadow-card"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Items */}
      <div className="space-y-2">
        {filtered.map((item, i) => {
          const Icon = typeIcons[item.type] || FileText;
          return (
            <Card
              key={item.id}
              className="border-0 shadow-card animate-fade-in cursor-pointer hover:shadow-elevated transition-shadow"
              style={{ animationDelay: `${0.15 + i * 0.04}s`, opacity: 0 }}
            >
              <CardContent className="p-3 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${typeColors[item.type]}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-sm line-clamp-1">{item.title}</h4>
                    <span className="text-[10px] font-medium text-muted-foreground bg-muted px-1.5 py-0.5 rounded shrink-0">
                      {item.format}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">{item.description}</p>
                  <span className="text-[10px] text-muted-foreground">{item.size}</span>
                </div>
                <Download className="w-4 h-4 text-muted-foreground shrink-0" />
              </CardContent>
            </Card>
          );
        })}

        {filtered.length === 0 && (
          <div className="text-center py-8 text-muted-foreground text-sm">
            Aucune ressource trouvée
          </div>
        )}
      </div>
    </div>
  );
};

export default LibraryPage;
