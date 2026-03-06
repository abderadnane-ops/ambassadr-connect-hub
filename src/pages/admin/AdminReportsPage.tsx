import { FileText, Eye, CheckCircle, RotateCcw, Archive, Clock, MoreHorizontal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const reports = [
  { id: "1", title: "Café Citoyen Casablanca - Mars 2026", author: "Amina El Fassi", initials: "AE", date: "10 Mars 2026", participants: 28, status: "pending" },
  { id: "2", title: "Lab Citoyens Rabat - Février 2026", author: "Fatima Zahra Ouali", initials: "FZ", date: "28 Fév 2026", participants: 18, status: "approved" },
  { id: "3", title: "Café Citoyen Fès - Février 2026", author: "Hassan Alaoui", initials: "HA", date: "25 Fév 2026", participants: 22, status: "revision" },
  { id: "4", title: "Atelier Engagement Tanger", author: "Nadia Chraibi", initials: "NC", date: "20 Fév 2026", participants: 15, status: "approved" },
  { id: "5", title: "Forum Marrakech - Janvier 2026", author: "Karim Tazi", initials: "KT", date: "15 Jan 2026", participants: 45, status: "archived" },
];

const statusConfig: Record<string, { label: string; className: string }> = {
  pending: { label: "En attente", className: "bg-highlight/15 text-highlight" },
  approved: { label: "Approuvé", className: "bg-secondary/15 text-secondary" },
  revision: { label: "Révision", className: "bg-accent/15 text-accent" },
  archived: { label: "Archivé", className: "bg-muted text-muted-foreground" },
};

const AdminReportsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-bold">Rapports</h2>
        <p className="text-sm text-muted-foreground mt-1">Examiner les rapports soumis par les ambassadeurs</p>
      </div>

      <div className="space-y-3">
        {reports.map((report) => {
          const sc = statusConfig[report.status];
          return (
            <Card key={report.id} className="border-0 shadow-card hover:shadow-elevated transition-all">
              <CardContent className="p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <Avatar className="w-8 h-8 shrink-0">
                  <AvatarFallback className="text-xs font-bold bg-primary/10 text-primary">{report.initials}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-display font-semibold text-sm">{report.title}</h3>
                    <Badge className={`${sc.className} border-0 text-[10px]`}>{sc.label}</Badge>
                  </div>
                  <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                    <span>{report.author}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{report.date}</span>
                    <span>{report.participants} participants</span>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontal className="w-4 h-4" /></Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem><Eye className="w-4 h-4 mr-2" />Voir le rapport</DropdownMenuItem>
                    <DropdownMenuItem><CheckCircle className="w-4 h-4 mr-2" />Approuver</DropdownMenuItem>
                    <DropdownMenuItem><RotateCcw className="w-4 h-4 mr-2" />Demander révision</DropdownMenuItem>
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

export default AdminReportsPage;
