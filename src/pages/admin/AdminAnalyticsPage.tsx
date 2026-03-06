import { BarChart3, TrendingUp, Users, Calendar, FileText, Activity, MapPin, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, LineChart, Line, PieChart, Pie, Cell } from "recharts";

const metrics = [
  { label: "Taux d'engagement", value: "78%", change: "+5%", icon: Activity, color: "bg-secondary/15 text-secondary" },
  { label: "Nouveaux ambassadeurs (mois)", value: "12", change: "+3", icon: Users, color: "bg-primary/15 text-primary" },
  { label: "Événements ce mois", value: "8", change: "+2", icon: Calendar, color: "bg-accent/15 text-accent" },
  { label: "Rapports soumis (mois)", value: "15", change: "+4", icon: FileText, color: "bg-highlight/15 text-highlight" },
];

const monthlyTrend = [
  { name: "Oct", activités: 28, événements: 6, participants: 180 },
  { name: "Nov", activités: 32, événements: 8, participants: 220 },
  { name: "Déc", activités: 25, événements: 5, participants: 150 },
  { name: "Jan", activités: 35, événements: 9, participants: 260 },
  { name: "Fév", activités: 38, événements: 10, participants: 290 },
  { name: "Mar", activités: 37, événements: 12, participants: 342 },
];

const activityTypes = [
  { name: "Ateliers", value: 35, color: "hsl(330, 43%, 31%)" },
  { name: "Formations", value: 25, color: "hsl(260, 50%, 55%)" },
  { name: "Initiatives", value: 20, color: "hsl(80, 62%, 52%)" },
  { name: "Plaidoyer", value: 12, color: "hsl(45, 100%, 55%)" },
  { name: "Autres", value: 8, color: "hsl(260, 10%, 70%)" },
];

const topRegions = [
  { name: "Casablanca-Settat", ambassadors: 42, activities: 12, participation: 92 },
  { name: "Rabat-Salé-Kénitra", ambassadors: 38, activities: 10, participation: 85 },
  { name: "Marrakech-Safi", ambassadors: 31, activities: 8, participation: 72 },
  { name: "Fès-Meknès", ambassadors: 28, activities: 7, participation: 68 },
  { name: "Tanger-Tétouan", ambassadors: 25, activities: 6, participation: 61 },
  { name: "Souss-Massa", ambassadors: 22, activities: 5, participation: 48 },
];

const topAmbassadors = [
  { name: "Amina El Fassi", events: 8, reports: 6, score: 95 },
  { name: "Fatima Zahra Ouali", events: 6, reports: 5, score: 88 },
  { name: "Hassan Alaoui", events: 5, reports: 7, score: 85 },
  { name: "Nadia Chraibi", events: 7, reports: 4, score: 82 },
  { name: "Karim Tazi", events: 4, reports: 3, score: 75 },
];

const growthMetrics = [
  { label: "Croissance réseau (mois)", value: "+6.8%", trend: "up" },
  { label: "Rétention ambassadeurs", value: "94%", trend: "up" },
  { label: "Activités / ambassadeur", value: "1.8", trend: "up" },
  { label: "Temps moyen de validation", value: "2.3j", trend: "down" },
];

const AdminAnalyticsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-bold">Analytiques</h2>
        <p className="text-sm text-muted-foreground mt-1">Indicateurs stratégiques du réseau CITZEN</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m) => (
          <Card key={m.label} className="border-0 shadow-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${m.color}`}><m.icon className="w-4 h-4" /></div>
                <Badge className="bg-secondary/15 text-secondary border-0 text-[10px] gap-0.5"><TrendingUp className="w-3 h-3" />{m.change}</Badge>
              </div>
              <p className="text-2xl font-display font-bold">{m.value}</p>
              <p className="text-xs text-muted-foreground">{m.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Growth Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {growthMetrics.map((g) => (
          <Card key={g.label} className="border-0 shadow-card">
            <CardContent className="p-4 text-center">
              <p className="text-xl font-display font-bold text-primary">{g.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{g.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activity Trends */}
        <Card className="border-0 shadow-card lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="font-display text-base flex items-center gap-2"><TrendingUp className="w-4 h-4 text-primary" />Tendances d'activité</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={240}>
              <LineChart data={monthlyTrend}>
                <XAxis dataKey="name" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: 12, border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", fontSize: 12 }} />
                <Line type="monotone" dataKey="activités" stroke="hsl(330, 43%, 31%)" strokeWidth={2} dot={{ r: 3 }} name="Activités" />
                <Line type="monotone" dataKey="événements" stroke="hsl(260, 50%, 55%)" strokeWidth={2} dot={{ r: 3 }} name="Événements" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Activity Types */}
        <Card className="border-0 shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="font-display text-base flex items-center gap-2"><Target className="w-4 h-4 text-accent" />Types d'activités</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie data={activityTypes} cx="50%" cy="50%" innerRadius={45} outerRadius={70} paddingAngle={3} dataKey="value">
                  {activityTypes.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: 12, border: "none", fontSize: 12 }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap gap-2 justify-center mt-2">
              {activityTypes.map((t) => (
                <div key={t.name} className="flex items-center gap-1.5 text-[10px]">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: t.color }} />
                  {t.name}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Rankings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-0 shadow-card">
          <CardHeader>
            <CardTitle className="font-display text-base flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" />Carte d'activité régionale</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {topRegions.map((r, i) => (
              <div key={r.name} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary shrink-0">{i + 1}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{r.name}</p>
                  <p className="text-[10px] text-muted-foreground">{r.ambassadors} amb. · {r.activities} act.</p>
                </div>
                <div className="w-20 h-2 rounded-full bg-muted overflow-hidden"><div className="h-full rounded-full bg-primary" style={{ width: `${r.participation}%` }} /></div>
                <span className="text-xs font-semibold w-8 text-right">{r.participation}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-0 shadow-card">
          <CardHeader>
            <CardTitle className="font-display text-base flex items-center gap-2"><Users className="w-4 h-4 text-secondary" />Top ambassadeurs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {topAmbassadors.map((a, i) => (
              <div key={a.name} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-secondary/15 flex items-center justify-center text-xs font-bold text-secondary shrink-0">{i + 1}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{a.name}</p>
                  <p className="text-[10px] text-muted-foreground">{a.events} événements · {a.reports} rapports</p>
                </div>
                <Badge className="bg-secondary/15 text-secondary border-0 text-[10px]">{a.score}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminAnalyticsPage;
