export interface HeroSlide {
  img: string;
  title: string;
  query: string;
}

export interface EditorialTile {
  img: string;
  badge: string | null;
  title: string | null;
  query: string;
  price?: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1400&q=85&fit=crop",
    title: "Repas de mariage",
    query: "Je prépare un repas pour un mariage ou un PACS",
  },
  {
    img: "https://images.unsplash.com/photo-1555244162-803834f70033?w=1400&q=85&fit=crop",
    title: "Buffet pour la\nfête des voisins",
    query: "Je prépare un buffet pour la fête des voisins",
  },
  {
    img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1400&q=85&fit=crop&crop=center",
    title: "Fête des mères,\nun repas d'exception",
    query: "Je prépare un repas pour la fête des mères",
  },
];

export const EDITORIAL_TILES: EditorialTile[] = [
  {
    img: "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=700&q=80&fit=crop",
    badge: "C'EST BIENTÔT",
    title: "Le repas de\nfête des mères",
    query: "Aidez-moi pour le repas de fête des mères",
  },
  {
    img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=700&q=80&fit=crop",
    badge: null,
    title: null,
    query: "Montrez-moi vos suggestions de buffet",
  },
  {
    img: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=500&q=80&fit=crop",
    badge: null,
    price: "12,90 €",
    title: "Mini-moricettes garnies",
    query: "Montrez-moi les mini-moricettes garnies",
  },
  {
    img: "https://images.unsplash.com/photo-1565299715199-866c917206bb?w=500&q=80&fit=crop",
    badge: "SUGGESTION DU MOMENT",
    price: "39,99 €",
    title: "Buffet pour la fête\ndes voisins",
    query: "Je cherche un buffet pour la fête des voisins",
  },
];
