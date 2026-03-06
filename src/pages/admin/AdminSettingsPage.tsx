import { Settings, Shield, Bell, Globe, Database } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

const AdminSettingsPage = () => {
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h2 className="font-display text-2xl font-bold">Paramètres</h2>
        <p className="text-sm text-muted-foreground mt-1">Configuration de la plateforme</p>
      </div>

      <Card className="border-0 shadow-card">
        <CardHeader>
          <CardTitle className="font-display text-base flex items-center gap-2">
            <Shield className="w-4 h-4 text-primary" />Sécurité
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Authentification 2FA</p>
              <p className="text-xs text-muted-foreground">Exiger la vérification en deux étapes pour les administrateurs</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Approbation manuelle des inscriptions</p>
              <p className="text-xs text-muted-foreground">Les nouvelles demandes d'accès nécessitent une validation</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-card">
        <CardHeader>
          <CardTitle className="font-display text-base flex items-center gap-2">
            <Bell className="w-4 h-4 text-accent" />Notifications
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Nouvelles demandes d'accès</p>
              <p className="text-xs text-muted-foreground">Recevoir une notification pour chaque nouvelle demande</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Rapports soumis</p>
              <p className="text-xs text-muted-foreground">Notification lors de la soumission d'un rapport</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Propositions d'événements</p>
              <p className="text-xs text-muted-foreground">Notification pour chaque nouvelle proposition d'événement</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-card">
        <CardHeader>
          <CardTitle className="font-display text-base flex items-center gap-2">
            <Globe className="w-4 h-4 text-secondary" />Plateforme
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Mode maintenance</p>
              <p className="text-xs text-muted-foreground">Désactiver temporairement l'accès à la plateforme</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminSettingsPage;
