import { useState } from "react";
import { MessageCircle, Users, User, Hash, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { channels } from "@/data/mock-data";
import type { Channel } from "@/data/mock-data";

const tabs = [
  { key: "all", label: "Tous" },
  { key: "regional", label: "Régionaux" },
  { key: "thematic", label: "Thématiques" },
  { key: "direct", label: "Messages" },
] as const;

const typeIcons: Record<string, typeof Users> = {
  regional: Users,
  thematic: Hash,
  direct: User,
};

const HubPage = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const totalUnread = channels.reduce((s, c) => s + c.unread, 0);

  const filtered = activeTab === "all"
    ? channels
    : channels.filter((c) => c.type === activeTab);

  return (
    <div className="px-4 py-4 space-y-4">
      <div className="animate-fade-in">
        <div className="flex items-center gap-2">
          <h2 className="font-display text-xl font-bold">Hub</h2>
          {totalUnread > 0 && (
            <Badge className="bg-secondary text-secondary-foreground border-0 text-xs">{totalUnread} non lus</Badge>
          )}
        </div>
        <p className="text-sm text-muted-foreground mt-1">Communication & messagerie</p>
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

      {/* Channels */}
      <div className="space-y-2">
        {filtered.map((channel, i) => {
          const Icon = typeIcons[channel.type] || MessageCircle;
          return (
            <Card
              key={channel.id}
              className="border-0 shadow-card animate-fade-in cursor-pointer hover:shadow-elevated transition-shadow"
              style={{ animationDelay: `${0.15 + i * 0.04}s`, opacity: 0 }}
            >
              <CardContent className="p-3 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-display font-bold text-xs ${
                  channel.type === "regional" ? "gradient-card-green text-secondary" :
                  channel.type === "thematic" ? "gradient-card-blue text-accent" :
                  "gradient-card-purple text-primary"
                }`}>
                  {channel.type === "direct" ? channel.avatar : <Icon className="w-5 h-5" />}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-sm line-clamp-1">{channel.name}</h4>
                    {channel.unread > 0 && (
                      <span className="w-5 h-5 rounded-full bg-secondary text-secondary-foreground text-[10px] font-bold flex items-center justify-center shrink-0">
                        {channel.unread}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">{channel.lastMessage}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default HubPage;
