import { ShieldCheck, Users, GraduationCap, Shield, CheckSquare, BookOpen, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

const roles = [
  {
    name: "Ambassadeur",
    icon: Users,
    color: "bg-primary/15 text-primary",
    count: 188,
    permissions: [
      { label: "Soumettre des rapports d'activité", key: "submit_reports", enabled: true },
      { label: "Proposer des événements", key: "propose_events", enabled: true },
      { label: "Accéder aux ressources", key: "access_resources", enabled: true },
      { label: "Publier des ressources", key: "publish_resources", enabled: false },
      { label: "Valider des activités", key: "validate_activities", enabled: false },
      { label: "Créer des événements directement", key: "create_events", enabled: false },
    ],
  },
  {
    name: "Mentor",
    icon: GraduationCap,
    color: "bg-accent/15 text-accent",
    count: 24,
    permissions: [
      { label: "Soumettre des rapports d'activité", key: "submit_reports", enabled: true },
      { label: "Proposer des événements", key: "propose_events", enabled: true },
      { label: "Accéder aux ressources", key: "access_resources", enabled: true },
      { label: "Publier des ressources", key: "publish_resources", enabled: true },
      { label: "Valider des activités", key: "validate_activities", enabled: true },
      { label: "Créer des événements directement", key: "create_events", enabled: false },
    ],
  },
  {
    name: "Administrateur",
    icon: Shield,
    color: "bg-highlight/15 text-highlight",
    count: 3,
    permissions: [
      { label: "Soumettre des rapports d'activité", key: "submit_reports", enabled: true },
      { label: "Proposer des événements", key: "propose_events", enabled: true },
      { label: "Accéder aux ressources", key: "access_resources", enabled: true },
      { label: "Publier des ressources", key: "publish_resources", enabled: true },
      { label: "Valider des activités", key: "validate_activities", enabled: true },
      { label: "Créer des événements directement", key: "create_events", enabled: true },
    ],
  },
];

const AdminRolesPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-bold">Rôles & Permissions</h2>
        <p className="text-sm text-muted-foreground mt-1">Gérer les rôles et définir les niveaux d'accès</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {roles.map((role) => (
          <Card key={role.name} className="border-0 shadow-card">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${role.color}`}>
                  <role.icon className="w-5 h-5" />
                </div>
                <div>
                  <CardTitle className="font-display text-base">{role.name}</CardTitle>
                  <p className="text-xs text-muted-foreground">{role.count} membres</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <Separator />
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Permissions</p>
              {role.permissions.map((perm, i) => (
                <div key={perm.key} className="flex items-center justify-between">
                  <span className="text-sm">{perm.label}</span>
                  <Switch defaultChecked={perm.enabled} />
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminRolesPage;
