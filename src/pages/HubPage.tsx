import { useState } from "react";
import { MessageCircle, Users, User, Hash, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { channels } from "@/data/mock-data";

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

      {/* Channels — Rich Cards */}
      <div className="space-y-3">
        {filtered.map((channel, i) => {
          const Icon = typeIcons[channel.type] || MessageCircle;
          const typeStyle = channel.type === "regional" 
            ? { gradient: "gradient-card-green", text: "text-secondary", border: "border-l-secondary", avatarBg: "bg-secondary/20" }
            : channel.type === "thematic"
            ? { gradient: "gradient-card-blue", text: "text-accent", border: "border-l-accent", avatarBg: "bg-accent/20" }
            : { gradient: "gradient-card-purple", text: "text-primary", border: "border-l-primary", avatarBg: "bg-primary/20" };
          return (
            <Card
              key={channel.id}
              className={`border-0 border-l-4 ${typeStyle.border} shadow-card animate-fade-in cursor-pointer hover:shadow-elevated transition-all duration-200 group overflow-hidden`}
              style={{ animationDelay: `${0.15 + i * 0.04}s`, opacity: 0 }}
            >
              <CardContent className="p-4 flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 font-display font-bold text-sm ${typeStyle.avatarBg} ${typeStyle.text} transition-transform duration-200 group-hover:scale-110`}>
                  {channel.type === "direct" ? (
                    <span className="text-base">{channel.avatar}</span>
                  ) : (
                    <Icon className="w-5 h-5" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-display font-semibold text-sm line-clamp-1">{channel.name}</h4>
                    {channel.unread > 0 && (
                      <Badge className="bg-secondary text-secondary-foreground border-0 text-[9px] px-1.5 py-0 min-w-[18px] h-[18px] flex items-center justify-center shrink-0">
                        {channel.unread}
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-1 mt-1">{channel.lastMessage}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default HubPage;
