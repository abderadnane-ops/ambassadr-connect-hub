export interface ValidationItem {
  id: string;
  type: "event_report" | "activity" | "event_application";
  title: string;
  ambassador: string;
  ambassadorAvatar: string;
  region: string;
  submittedDate: string;
  status: "pending" | "approved" | "rejected";
  details: string;
  points: number;
  feedback?: string;
}

export const validationItems: ValidationItem[] = [
  {
    id: "v1",
    type: "event_report",
    title: "Rapport - Café Citoyen Rabat",
    ambassador: "Amina El Fassi",
    ambassadorAvatar: "AE",
    region: "Rabat-Salé-Kénitra",
    submittedDate: "2026-03-04",
    status: "pending",
    details: "45 participants, 60% femmes, 40% jeunes. Thème : gouvernance locale.",
    points: 150,
  },
  {
    id: "v2",
    type: "event_application",
    title: "Demande - Lab Citoyens Éducation",
    ambassador: "Fatima Zahra Ouali",
    ambassadorAvatar: "FZ",
    region: "Marrakech-Safi",
    submittedDate: "2026-03-03",
    status: "pending",
    details: "Lab de 2 jours sur l'éducation civique, 30 participants prévus.",
    points: 100,
  },
  {
    id: "v3",
    type: "activity",
    title: "Formation en ligne complétée",
    ambassador: "Karim Tazi",
    ambassadorAvatar: "KT",
    region: "Fès-Meknès",
    submittedDate: "2026-03-02",
    status: "pending",
    details: "Communication Digitale - module complet avec certification.",
    points: 75,
  },
  {
    id: "v4",
    type: "event_report",
    title: "Rapport - Café Citoyen Tanger",
    ambassador: "Nadia Chraibi",
    ambassadorAvatar: "NC",
    region: "Tanger-Tétouan-Al Hoceïma",
    submittedDate: "2026-03-01",
    status: "approved",
    details: "38 participants, discussion sur le développement local.",
    points: 120,
    feedback: "Excellent rapport, bien structuré. Points accordés.",
  },
  {
    id: "v5",
    type: "event_report",
    title: "Rapport - Lab Citoyens Casablanca",
    ambassador: "Youssef Bennani",
    ambassadorAvatar: "YB",
    region: "Casablanca-Settat",
    submittedDate: "2026-02-28",
    status: "rejected",
    details: "Lab sur l'entrepreneuriat social.",
    points: 0,
    feedback: "Rapport incomplet. Merci d'ajouter les statistiques de participation et les photos.",
  },
];
