import { Shield, Bell, Globe, Tags, MapPin, Layers, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const activityTypes = ["Atelier", "Formation", "Initiative communautaire", "Plaidoyer", "Café Citoyen", "Lab Citoyens", "Forum"];
const regionsList = [
  "Casablanca-Settat", "Rabat-Salé-Kénitra", "Marrakech-Safi", "Fès-Meknès",
  "Tanger-Tétouan", "Souss-Massa", "Oriental", "Drâa-Tafilalet",
  "Béni Mellal-Khénifra", "Laâyoune-Sakia El Hamra", "Dakhla-Oued Ed-Dahab", "Guelmim-Oued Noun"
];
const categories = ["Leadership", "Gouvernance", "Environnement", "Éducation", "Santé", "Innovation sociale", "Droits humains"];

const AdminSettingsPage = () => {
  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h2 className="font-display text-2xl font-bold">Paramètres</h2>
        <p className="text-sm text-muted-foreground mt-1">Configuration de la plateforme CITZEN</p>
      </div>

      {/* Security */}
      <Card className="border-0 shadow-card">
        <CardHeader>
          <CardTitle className="font-display text-base flex items-center gap-2"><Shield className="w-4 h-4 text-primary" />Sécurité</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div><p className="text-sm font-medium">Authentification 2FA</p><p className="text-xs text-muted-foreground">Exiger la vérification en deux étapes pour les administrateurs</p></div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div><p className="text-sm font-medium">Approbation manuelle des inscriptions</p><p className="text-xs text-muted-foreground">Les nouvelles demandes d'accès nécessitent une validation</p></div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div><p className="text-sm font-medium">Validation mentorat obligatoire</p><p className="text-xs text-muted-foreground">Les activités doivent être validées par un mentor avant approbation admin</p></div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card className="border-0 shadow-card">
        <CardHeader>
          <CardTitle className="font-display text-base flex items-center gap-2"><Bell className="w-4 h-4 text-accent" />Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div><p className="text-sm font-medium">Nouvelles demandes d'accès</p><p className="text-xs text-muted-foreground">Recevoir une notification pour chaque nouvelle demande</p></div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div><p className="text-sm font-medium">Rapports soumis</p><p className="text-xs text-muted-foreground">Notification lors de la soumission d'un rapport</p></div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div><p className="text-sm font-medium">Propositions d'événements</p><p className="text-xs text-muted-foreground">Notification pour chaque nouvelle proposition d'événement</p></div>
            <Switch />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div><p className="text-sm font-medium">Alertes mentorat</p><p className="text-xs text-muted-foreground">Notification lorsqu'un mentor complète une validation</p></div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      {/* Activity Types */}
      <Card className="border-0 shadow-card">
        <CardHeader>
          <CardTitle className="font-display text-base flex items-center gap-2"><Layers className="w-4 h-4 text-secondary" />Types d'activités</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {activityTypes.map((type) => (
              <Badge key={type} className="bg-primary/10 text-primary border-0">{type}</Badge>
            ))}
          </div>
          <Button variant="outline" size="sm" className="mt-3">Gérer les types</Button>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card className="border-0 shadow-card">
        <CardHeader>
          <CardTitle className="font-display text-base flex items-center gap-2"><Tags className="w-4 h-4 text-highlight" />Catégories & Tags</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Badge key={cat} className="bg-accent/15 text-accent border-0">{cat}</Badge>
            ))}
          </div>
          <Button variant="outline" size="sm" className="mt-3">Gérer les catégories</Button>
        </CardContent>
      </Card>

      {/* Regions */}
      <Card className="border-0 shadow-card">
        <CardHeader>
          <CardTitle className="font-display text-base flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" />Régions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {regionsList.map((r) => (
              <Badge key={r} className="bg-muted text-muted-foreground border-0 text-xs">{r}</Badge>
            ))}
          </div>
          <Button variant="outline" size="sm" className="mt-3">Gérer les régions</Button>
        </CardContent>
      </Card>

      {/* Platform */}
      <Card className="border-0 shadow-card">
        <CardHeader>
          <CardTitle className="font-display text-base flex items-center gap-2"><Globe className="w-4 h-4 text-secondary" />Plateforme</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div><p className="text-sm font-medium">Mode maintenance</p><p className="text-xs text-muted-foreground">Désactiver temporairement l'accès à la plateforme</p></div>
            <Switch />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminSettingsPage;
