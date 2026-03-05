// Types
export interface Region {
  id: string;
  name: string;
  ambassadorCount: number;
  description: string;
}

export interface Ambassador {
  id: string;
  name: string;
  region: string;
  role: string;
  bio: string;
  skills: string[];
  points: number;
  projects: number;
  badges: string[];
  avatar: string;
}

export interface Opportunity {
  id: string;
  title: string;
  description: string;
  category: "Training" | "Conference" | "Grant" | "Project";
  deadline: string;
  location: string;
  requirements: string[];
  status: "open" | "urgent" | "closed";
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  urgent: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  ambassador: string;
  region: string;
  impact: string;
  photos: string[];
}

export interface Channel {
  id: string;
  name: string;
  type: "regional" | "thematic" | "direct";
  lastMessage: string;
  unread: number;
  avatar: string;
}

// Mock Data
export const regions: Region[] = [
  { id: "1", name: "Tanger-Tétouan-Al Hoceïma", ambassadorCount: 18, description: "Région du nord avec un riche patrimoine culturel" },
  { id: "2", name: "L'Oriental", ambassadorCount: 12, description: "Région est bordant la Méditerranée et l'Algérie" },
  { id: "3", name: "Fès-Meknès", ambassadorCount: 22, description: "Cœur culturel et spirituel du Maroc" },
  { id: "4", name: "Rabat-Salé-Kénitra", ambassadorCount: 30, description: "Capitale administrative du Royaume" },
  { id: "5", name: "Béni Mellal-Khénifra", ambassadorCount: 10, description: "Région agricole du Maroc central" },
  { id: "6", name: "Casablanca-Settat", ambassadorCount: 35, description: "Capitale économique du Maroc" },
  { id: "7", name: "Marrakech-Safi", ambassadorCount: 25, description: "Perle du sud touristique" },
  { id: "8", name: "Drâa-Tafilalet", ambassadorCount: 8, description: "Portes du Sahara et oasis" },
  { id: "9", name: "Souss-Massa", ambassadorCount: 15, description: "Région d'Agadir et du tourisme balnéaire" },
  { id: "10", name: "Guelmim-Oued Noun", ambassadorCount: 6, description: "Porte du Sahara occidental" },
  { id: "11", name: "Laâyoune-Sakia El Hamra", ambassadorCount: 5, description: "Région des provinces du sud" },
  { id: "12", name: "Dakhla-Oued Ed-Dahab", ambassadorCount: 4, description: "Extrême sud et sports nautiques" },
];

export const ambassadors: Ambassador[] = [
  { id: "1", name: "Amina El Fassi", region: "Rabat-Salé-Kénitra", role: "Coordinatrice Régionale", bio: "Engagée dans la société civile depuis 10 ans, spécialiste des droits de la femme.", skills: ["Leadership", "Communication", "Plaidoyer", "Gestion de projet"], points: 2450, projects: 12, badges: ["Bâtisseur Communautaire", "Leader de Projet", "Champion Régional"], avatar: "AE" },
  { id: "2", name: "Youssef Bennani", region: "Casablanca-Settat", role: "Ambassadeur Senior", bio: "Expert en développement durable et gouvernance participative.", skills: ["Développement durable", "Advocacy", "Formation"], points: 2100, projects: 9, badges: ["Ambassadeur Actif", "Leader de Projet"], avatar: "YB" },
  { id: "3", name: "Fatima Zahra Ouali", region: "Marrakech-Safi", role: "Ambassadrice", bio: "Passionnée par l'éducation et l'engagement des jeunes.", skills: ["Éducation", "Communication", "Événementiel"], points: 1850, projects: 7, badges: ["Bâtisseur Communautaire", "Ambassadeur Actif"], avatar: "FZ" },
  { id: "4", name: "Karim Tazi", region: "Fès-Meknès", role: "Ambassadeur", bio: "Architecte de formation, engagé dans le développement urbain participatif.", skills: ["Urbanisme", "Leadership", "Innovation"], points: 1600, projects: 5, badges: ["Leader de Projet"], avatar: "KT" },
  { id: "5", name: "Nadia Chraibi", region: "Tanger-Tétouan-Al Hoceïma", role: "Coordinatrice", bio: "Spécialiste en coopération internationale et dialogue interculturel.", skills: ["Coopération internationale", "Dialogue", "Gestion"], points: 1950, projects: 8, badges: ["Champion Régional", "Ambassadeur Actif"], avatar: "NC" },
  { id: "6", name: "Omar Idrissi", region: "Souss-Massa", role: "Ambassadeur", bio: "Entrepreneur social, fondateur de plusieurs initiatives locales.", skills: ["Entrepreneuriat", "Innovation", "Communication"], points: 1400, projects: 6, badges: ["Bâtisseur Communautaire"], avatar: "OI" },
  { id: "7", name: "Leila Mansouri", region: "L'Oriental", role: "Ambassadrice", bio: "Journaliste et activiste pour les droits numériques.", skills: ["Médias", "Plaidoyer", "Formation"], points: 1700, projects: 4, badges: ["Ambassadeur Actif", "Leader de Projet"], avatar: "LM" },
  { id: "8", name: "Hassan Alaoui", region: "Rabat-Salé-Kénitra", role: "Ambassadeur Senior", bio: "Ancien fonctionnaire, mentor pour les jeunes ambassadeurs.", skills: ["Mentorat", "Gouvernance", "Stratégie"], points: 2300, projects: 11, badges: ["Champion Régional", "Leader de Projet", "Bâtisseur Communautaire"], avatar: "HA" },
];

export const opportunities: Opportunity[] = [
  { id: "1", title: "Formation en Leadership Civique", description: "Programme intensif de 5 jours sur le leadership et l'engagement civique pour les ambassadeurs.", category: "Training", deadline: "2026-04-15", location: "Rabat", requirements: ["Être ambassadeur actif", "Min. 6 mois d'expérience"], status: "open" },
  { id: "2", title: "Conférence Nationale sur la Jeunesse", description: "Participez à la conférence annuelle sur l'engagement civique des jeunes au Maroc.", category: "Conference", deadline: "2026-03-25", location: "Casablanca", requirements: ["Inscription obligatoire", "Présentation optionnelle"], status: "urgent" },
  { id: "3", title: "Subvention Projets Communautaires", description: "Financement jusqu'à 50,000 MAD pour des projets d'impact local.", category: "Grant", deadline: "2026-05-01", location: "National", requirements: ["Dossier complet", "Étude d'impact", "Budget détaillé"], status: "open" },
  { id: "4", title: "Projet Smart Medina", description: "Initiative de numérisation des services dans les médinas historiques.", category: "Project", deadline: "2026-06-30", location: "Fès", requirements: ["Compétences tech", "Connaissance du patrimoine"], status: "open" },
  { id: "5", title: "Atelier Communication Digitale", description: "Formation aux outils de communication digitale et réseaux sociaux pour la société civile.", category: "Training", deadline: "2026-03-20", location: "En ligne", requirements: ["Ordinateur requis", "Connexion stable"], status: "urgent" },
  { id: "6", title: "Forum Régional Souss-Massa", description: "Rencontre des ambassadeurs de la région pour planifier les actions 2026.", category: "Conference", deadline: "2026-04-10", location: "Agadir", requirements: ["Ambassadeurs région Souss-Massa"], status: "open" },
];

export const announcements: Announcement[] = [
  { id: "1", title: "Assemblée Générale 2026", content: "L'assemblée générale annuelle se tiendra le 20 avril à Rabat. Votre présence est essentielle pour valider la feuille de route 2026-2027.", date: "2026-03-04", urgent: true },
  { id: "2", title: "Nouveaux Ambassadeurs", content: "Bienvenue aux 15 nouveaux ambassadeurs qui rejoignent le réseau ce mois-ci!", date: "2026-03-03", urgent: false },
  { id: "3", title: "Rapport d'Impact 2025", content: "Le rapport annuel d'impact est maintenant disponible dans la bibliothèque de ressources.", date: "2026-03-01", urgent: false },
];

export const projects: Project[] = [
  { id: "1", title: "École Numérique Rurale", description: "Équipement de 5 écoles rurales en matériel informatique avec formation des enseignants.", ambassador: "Amina El Fassi", region: "Rabat-Salé-Kénitra", impact: "500 élèves bénéficiaires", photos: [] },
  { id: "2", title: "Café Citoyen Casablanca", description: "Espace de dialogue mensuel entre citoyens et élus locaux.", ambassador: "Youssef Bennani", region: "Casablanca-Settat", impact: "200 participants par session", photos: [] },
  { id: "3", title: "Jardin Communautaire Marrakech", description: "Création d'un espace vert participatif dans le quartier Guéliz.", ambassador: "Fatima Zahra Ouali", region: "Marrakech-Safi", impact: "1 hectare aménagé", photos: [] },
  { id: "4", title: "Plateforme de Doléances Digitale", description: "Application mobile pour faciliter les remontées citoyennes aux collectivités.", ambassador: "Karim Tazi", region: "Fès-Meknès", impact: "3000 utilisateurs actifs", photos: [] },
];

export const channels: Channel[] = [
  { id: "1", name: "Rabat-Salé-Kénitra", type: "regional", lastMessage: "Réunion confirmée pour vendredi 14h", unread: 3, avatar: "RSK" },
  { id: "2", name: "Casablanca-Settat", type: "regional", lastMessage: "Photos de l'événement partagées", unread: 0, avatar: "CS" },
  { id: "3", name: "Développement Durable", type: "thematic", lastMessage: "Nouveau guide disponible", unread: 5, avatar: "DD" },
  { id: "4", name: "Droits & Plaidoyer", type: "thematic", lastMessage: "Webinaire demain à 10h", unread: 1, avatar: "DP" },
  { id: "5", name: "Amina El Fassi", type: "direct", lastMessage: "Merci pour le rapport!", unread: 0, avatar: "AE" },
  { id: "6", name: "Youssef Bennani", type: "direct", lastMessage: "On se voit à la conférence?", unread: 2, avatar: "YB" },
  { id: "7", name: "Innovation & Tech", type: "thematic", lastMessage: "Hackathon prévu en mai", unread: 8, avatar: "IT" },
];

export const badgeInfo: Record<string, { color: string; icon: string }> = {
  "Bâtisseur Communautaire": { color: "secondary", icon: "🏗️" },
  "Leader de Projet": { color: "primary", icon: "🎯" },
  "Ambassadeur Actif": { color: "accent", icon: "⚡" },
  "Champion Régional": { color: "highlight", icon: "🏆" },
};
