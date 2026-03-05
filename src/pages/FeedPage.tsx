import { useState } from "react";
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, Play, Quote, Image as ImageIcon, Send, ThumbsUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ambassadors } from "@/data/mock-data";

type PostType = "photo" | "video" | "tweet" | "text";

interface Post {
  id: string;
  author: { name: string; role: string; avatar: string };
  type: PostType;
  content: string;
  media?: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  liked: boolean;
  saved: boolean;
  tags?: string[];
  commentList?: { author: string; avatar: string; text: string; time: string }[];
}

const feedPosts: Post[] = [
  {
    id: "1",
    author: { name: "Amina El Fassi", role: "Coordinatrice Régionale", avatar: "AE" },
    type: "photo",
    content: "Fière de partager les résultats de notre projet École Numérique Rurale 🎓 500 élèves ont désormais accès aux outils numériques dans 5 écoles de la région Rabat-Salé-Kénitra. Merci à tous les bénévoles !",
    media: "school",
    timestamp: "Il y a 2h",
    likes: 134,
    comments: 23,
    shares: 45,
    liked: false,
    saved: false,
    tags: ["#ÉcoleNumérique", "#ImpactLocal", "#Éducation"],
    commentList: [
      { author: "Youssef B.", avatar: "YB", text: "Bravo Amina ! Un exemple à suivre dans toutes les régions 👏", time: "1h" },
      { author: "Nadia C.", avatar: "NC", text: "On va répliquer ce modèle à Tanger inchallah", time: "45min" },
    ],
  },
  {
    id: "2",
    author: { name: "Youssef Bennani", role: "Ambassadeur Senior", avatar: "YB" },
    type: "video",
    content: "Revivez les moments forts du Café Citoyen de Casablanca — dialogue ouvert entre citoyens et élus locaux. La démocratie participative en action ! 🗣️",
    media: "cafe",
    timestamp: "Il y a 5h",
    likes: 89,
    comments: 15,
    shares: 32,
    liked: true,
    saved: false,
    tags: ["#CaféCitoyen", "#DémocratieParticipative"],
  },
  {
    id: "3",
    author: { name: "Karim Tazi", role: "Ambassadeur", avatar: "KT" },
    type: "tweet",
    content: "La vraie force d'une société civile, ce n'est pas le nombre de ses membres, mais la qualité de leur engagement. Chaque action locale est une brique pour un Maroc meilleur. 🇲🇦",
    timestamp: "Il y a 8h",
    likes: 215,
    comments: 41,
    shares: 78,
    liked: false,
    saved: true,
    tags: ["#SociétéCivile", "#Engagement"],
  },
  {
    id: "4",
    author: { name: "Fatima Zahra Ouali", role: "Ambassadrice", avatar: "FZ" },
    type: "photo",
    content: "Notre jardin communautaire de Guéliz prend forme ! 🌱 1 hectare d'espace vert créé par et pour les citoyens. Prochaine étape : l'atelier compostage le 15 mars.",
    media: "garden",
    timestamp: "Il y a 12h",
    likes: 167,
    comments: 29,
    shares: 51,
    liked: false,
    saved: false,
    tags: ["#JardinCommunautaire", "#Marrakech", "#Écologie"],
    commentList: [
      { author: "Omar I.", avatar: "OI", text: "Magnifique initiative ! On peut venir aider le weekend ?", time: "10h" },
    ],
  },
  {
    id: "5",
    author: { name: "Leila Mansouri", role: "Ambassadrice", avatar: "LM" },
    type: "video",
    content: "Formation sur les droits numériques à Oujda — 30 jeunes formés aux enjeux de la protection des données et de la liberté d'expression en ligne. Le savoir, c'est le pouvoir. 💡",
    media: "training",
    timestamp: "Il y a 1j",
    likes: 98,
    comments: 12,
    shares: 27,
    liked: false,
    saved: false,
    tags: ["#DroitsNumériques", "#Formation"],
  },
  {
    id: "6",
    author: { name: "Hassan Alaoui", role: "Ambassadeur Senior", avatar: "HA" },
    type: "text",
    content: "Rappel : L'assemblée générale annuelle se tiendra le 20 avril à Rabat. C'est le moment de valider ensemble notre feuille de route 2026-2027. Chaque voix compte. Inscrivez-vous via le lien dans la section Événements.\n\nOrdre du jour :\n• Bilan des actions 2025\n• Stratégie régionale 2026\n• Élection du nouveau bureau\n• Questions diverses",
    timestamp: "Il y a 1j",
    likes: 76,
    comments: 8,
    shares: 19,
    liked: false,
    saved: false,
    tags: ["#AG2026", "#Gouvernance"],
  },
];

const mediaPlaceholders: Record<string, { gradient: string; icon: typeof ImageIcon }> = {
  school: { gradient: "from-blue-400 to-indigo-500", icon: ImageIcon },
  cafe: { gradient: "from-amber-400 to-orange-500", icon: Play },
  garden: { gradient: "from-green-400 to-emerald-500", icon: ImageIcon },
  training: { gradient: "from-purple-400 to-pink-500", icon: Play },
};

const FeedPage = () => {
  const [posts, setPosts] = useState(feedPosts);
  const [expandedComments, setExpandedComments] = useState<string | null>(null);

  const toggleLike = (postId: string) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId
          ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 }
          : p
      )
    );
  };

  const toggleSave = (postId: string) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === postId ? { ...p, saved: !p.saved } : p))
    );
  };

  return (
    <div className="space-y-4 px-4 py-4 max-w-lg mx-auto">
      {/* Header */}
      <div className="animate-fade-in">
        <h2 className="font-display text-xl font-bold">Communauté</h2>
        <p className="text-sm text-muted-foreground mt-0.5">Fil d'actualité des ambassadeurs</p>
      </div>

      {/* Stories-like top bar */}
      <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide animate-fade-in" style={{ animationDelay: "0.05s", opacity: 0 }}>
        {/* Create post */}
        <button className="shrink-0 flex flex-col items-center gap-1">
          <div className="w-14 h-14 rounded-full border-2 border-dashed border-primary/30 flex items-center justify-center bg-muted/50">
            <span className="text-xl text-primary/60">+</span>
          </div>
          <span className="text-[9px] text-muted-foreground font-medium">Publier</span>
        </button>
        {ambassadors.slice(0, 6).map((amb) => (
          <button key={amb.id} className="shrink-0 flex flex-col items-center gap-1">
            <div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-br from-primary via-accent to-secondary">
              <div className="w-full h-full rounded-full gradient-hero flex items-center justify-center text-white font-display font-bold text-xs">
                {amb.avatar}
              </div>
            </div>
            <span className="text-[9px] text-muted-foreground font-medium line-clamp-1 w-14 text-center">
              {amb.name.split(" ")[0]}
            </span>
          </button>
        ))}
      </div>

      {/* Feed Posts */}
      {posts.map((post, i) => (
        <Card
          key={post.id}
          className="border-0 shadow-card animate-fade-in overflow-hidden"
          style={{ animationDelay: `${0.1 + i * 0.06}s`, opacity: 0 }}
        >
          <CardContent className="p-0">
            {/* Post Header */}
            <div className="flex items-center justify-between p-3 pb-2">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full gradient-hero flex items-center justify-center text-white font-display font-bold text-xs">
                  {post.author.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold leading-tight">{post.author.name}</p>
                  <div className="flex items-center gap-1.5">
                    <p className="text-[10px] text-muted-foreground">{post.author.role}</p>
                    <span className="text-[10px] text-muted-foreground">•</span>
                    <p className="text-[10px] text-muted-foreground">{post.timestamp}</p>
                  </div>
                </div>
              </div>
              <button className="p-1 rounded-full hover:bg-muted transition-colors">
                <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>

            {/* Post Content */}
            <div className="px-3 pb-2">
              {post.type === "tweet" ? (
                <div className="relative pl-3 border-l-2 border-primary/30">
                  <Quote className="absolute -left-2.5 -top-0.5 w-4 h-4 text-primary/40 bg-card" />
                  <p className="text-sm leading-relaxed italic text-foreground/90">{post.content}</p>
                </div>
              ) : (
                <p className="text-sm leading-relaxed">{post.content}</p>
              )}

              {/* Tags */}
              {post.tags && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-[11px] text-primary font-medium">{tag}</span>
                  ))}
                </div>
              )}
            </div>

            {/* Media */}
            {post.media && post.type === "photo" && (
              <div className={`w-full aspect-[4/3] bg-gradient-to-br ${mediaPlaceholders[post.media]?.gradient || "from-gray-300 to-gray-400"} flex items-center justify-center relative`}>
                <ImageIcon className="w-12 h-12 text-white/40" />
                <div className="absolute bottom-2 left-2">
                  <Badge className="bg-black/40 text-white border-0 backdrop-blur-sm text-[10px]">📷 Photo</Badge>
                </div>
              </div>
            )}

            {post.media && post.type === "video" && (
              <div className={`w-full aspect-video bg-gradient-to-br ${mediaPlaceholders[post.media]?.gradient || "from-gray-300 to-gray-400"} flex items-center justify-center relative`}>
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                  <Play className="w-7 h-7 text-white fill-white ml-1" />
                </div>
                <div className="absolute bottom-2 left-2">
                  <Badge className="bg-black/40 text-white border-0 backdrop-blur-sm text-[10px]">▶ Vidéo</Badge>
                </div>
                <div className="absolute bottom-2 right-2">
                  <Badge className="bg-black/40 text-white border-0 backdrop-blur-sm text-[10px]">2:34</Badge>
                </div>
              </div>
            )}

            {/* Action Bar */}
            <div className="flex items-center justify-between px-3 py-2 border-t border-border/50 mt-1">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => toggleLike(post.id)}
                  className="flex items-center gap-1.5 group"
                >
                  <Heart
                    className={`w-[18px] h-[18px] transition-all ${
                      post.liked
                        ? "fill-red-500 text-red-500 scale-110"
                        : "text-muted-foreground group-hover:text-red-400"
                    }`}
                  />
                  <span className={`text-xs font-medium ${post.liked ? "text-red-500" : "text-muted-foreground"}`}>
                    {post.likes}
                  </span>
                </button>

                <button
                  onClick={() => setExpandedComments(expandedComments === post.id ? null : post.id)}
                  className="flex items-center gap-1.5 group"
                >
                  <MessageCircle className="w-[18px] h-[18px] text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-xs font-medium text-muted-foreground">{post.comments}</span>
                </button>

                <button className="flex items-center gap-1.5 group">
                  <Share2 className="w-[18px] h-[18px] text-muted-foreground group-hover:text-secondary transition-colors" />
                  <span className="text-xs font-medium text-muted-foreground">{post.shares}</span>
                </button>
              </div>

              <button onClick={() => toggleSave(post.id)}>
                <Bookmark
                  className={`w-[18px] h-[18px] transition-all ${
                    post.saved
                      ? "fill-primary text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                />
              </button>
            </div>

            {/* Comments Section */}
            {expandedComments === post.id && (
              <div className="px-3 pb-3 space-y-2 animate-fade-in border-t border-border/50">
                {post.commentList?.map((comment, ci) => (
                  <div key={ci} className="flex gap-2 pt-2">
                    <div className="w-6 h-6 rounded-full gradient-hero flex items-center justify-center text-white text-[7px] font-bold shrink-0 mt-0.5">
                      {comment.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="bg-muted/60 rounded-xl px-3 py-1.5">
                        <span className="text-xs font-semibold">{comment.author}</span>
                        <p className="text-xs text-foreground/80">{comment.text}</p>
                      </div>
                      <div className="flex items-center gap-3 mt-0.5 px-2">
                        <span className="text-[9px] text-muted-foreground">{comment.time}</span>
                        <button className="text-[9px] text-muted-foreground font-medium hover:text-primary">J'aime</button>
                        <button className="text-[9px] text-muted-foreground font-medium hover:text-primary">Répondre</button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Comment input */}
                <div className="flex items-center gap-2 pt-1">
                  <div className="w-7 h-7 rounded-full gradient-hero flex items-center justify-center text-white text-[8px] font-bold shrink-0">
                    Moi
                  </div>
                  <div className="flex-1 flex items-center gap-1.5 bg-muted/50 rounded-full px-3 py-1">
                    <Input
                      placeholder="Écrire un commentaire..."
                      className="border-0 bg-transparent h-7 text-xs p-0 focus-visible:ring-0"
                    />
                    <button className="shrink-0">
                      <Send className="w-3.5 h-3.5 text-primary" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FeedPage;
