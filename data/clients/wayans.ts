import type { PressKitConfig } from "@/data/config";
import type { ClientConfig } from "@/data/clients/types";

const soundCloudUrl = "https://on.soundcloud.com/SF5EzbfoILUMNoD6DP";
const soundCloudEmbedUrl =
  "https://w.soundcloud.com/player/?url=https%3A%2F%2Fapi.soundcloud.com%2Fusers%2F1690531214&color=%23c8a448&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=false";
const instagramUrl = "https://www.instagram.com/wayansboy";
const bookingEmail = "wayans.pro@gmail.com";
const whatsappUrl = "https://wa.me/33633863568";

const heroImage = "/wayans/photos/hero-pic-retouche.jpeg";
const heroPosition = "center 20%";

const heroCtas: PressKitConfig["heroVariants"]["impact"]["ctas"] = [
  { label: "Booker WAYANS", href: "#contact", variant: "primary" },
  {
    label: "Écouter Wayans",
    href: soundCloudUrl,
    variant: "secondary",
    external: true,
  },
];

const heroStats: PressKitConfig["heroVariants"]["impact"]["stats"] = [
  { value: "30+", label: "Dates en 2026" },
  { value: "60K+", label: "Vues Instagram / 3 mois" },
  { value: "2022", label: "Début sur scène" },
  { value: "PARIS", label: "Base" },
];

const wayansPressKit: PressKitConfig = {
  metadata: {
    title: "DJ Wayans Press Kit | Afro, Amapiano, Dancehall & Hip-Hop RnB à Paris",
    description:
      "DJ Wayans, DJ parisien depuis 2022 : Afro, Amapiano, Dancehall, Zouk, Hip-Hop RnB et open format pour clubs, marques et événements. Nike Mercurial Tour, Soft Szn (Malte). Booking.",
  },
  ui: {
    openMenuLabel: "Ouvrir le menu",
    closeMenuLabel: "Fermer le menu",
    galleryViewLabel: "Voir",
    galleryDownloadLabel: "Télécharger",
    galleryCloseLabel: "Fermer la galerie",
    galleryPreviousLabel: "Image précédente",
    galleryNextLabel: "Image suivante",
  },
  artist: {
    name: "DJ Wayans",
    stageLabel: "DJ • Paris • Afro, Amapiano, Dancehall & Hip-Hop RnB",
    logo: {
      src: "",
      alt: "DJ Wayans",
    },
  },
  navigation: {
    items: [
      { label: "À propos", href: "#about" },
      { label: "Références", href: "#clubs" },
      { label: "Galerie", href: "#gallery" },
      { label: "Vidéos", href: "#videos" },
      { label: "Son", href: "#sound" },
      { label: "Contact", href: "#contact" },
    ],
    cta: {
      label: "Booker WAYANS",
      href: "#contact",
      variant: "primary",
    },
  },
  heroSocials: [
    { label: "Instagram", href: instagramUrl, icon: "instagram", iconOnly: true },
    { label: "SoundCloud", href: soundCloudUrl, icon: "soundcloud", iconOnly: true },
  ],
  heroVariants: {
    impact: {
      eyebrow: "",
      title: "DJ WAYANS",
      accent: "AFROBEAT, URBAN FR & RNB",
      layout: "showcase",
      fullScreen: true,
      hideDesktopRightFade: true,
      description:
        "Un set est un échange d'énergie : DJ Wayans lit la salle, la transforme et la lui renvoie amplifiée, des soirées intimistes aux activations de marque.",
      image: {
        src: heroImage,
        alt: "Portrait en noir et blanc de DJ Wayans, de profil",
        badge: "DJ Wayans • Paris",
        caption: "L'énergie se partage, le DJ la renvoie",
        position: heroPosition,
      },
      ctas: heroCtas,
      stats: heroStats,
    },
    interactive: {
      eyebrow: "",
      title: "DJ WAYANS",
      accent: "AFROBEAT, URBAN FR & RNB",
      layout: "interactive",
      description:
        "Afro, Amapiano, Dancehall, Zouk, Hip-Hop RnB : des sets qui s'adaptent à chaque public, parce que chaque salle est différente.",
      image: {
        src: heroImage,
        alt: "Portrait en noir et blanc de DJ Wayans, de profil",
        badge: "DJ Wayans • Paris",
        caption: "Chaque public est différent, chaque set aussi",
        position: heroPosition,
      },
      ctas: heroCtas,
      stats: heroStats,
    },
    showcase: {
      eyebrow: "",
      title: "DJ WAYANS",
      accent: "AFROBEAT, URBAN FR & RNB",
      layout: "showcase",
      contentClassName: "pt-[42vh]! md:pt-16! lg:pt-32!",
      description:
        "Un set est un échange d'énergie : DJ Wayans lit la salle, la transforme et la lui renvoie amplifiée, des soirées intimistes aux activations de marque.",
      image: {
        src: heroImage,
        alt: "Portrait en noir et blanc de DJ Wayans, de profil",
        badge: "DJ Wayans • Paris",
        caption: "Basé à Paris, disponible en Europe",
        position: heroPosition,
      },
      ctas: heroCtas,
      stats: heroStats,
      footerNote: "Défiler pour explorer",
    },
  },
  about: {
    eyebrow: "À propos",
    title: "Le DJ ne dirige pas,\nil échange",
    signatureLabel: "Philosophie",
    signatureQuote:
      "Le mix est un échange d'énergie entre le public et le DJ. Le but est de la renvoyer, en l'appliquant.",
    supportingText:
      "Passion, travail, professionnalisme : polyvalence et envie de toujours proposer quelque chose de nouveau.",
    tags: [
      "Afro",
      "Amapiano",
      "Dancehall",
      "Shatta",
      "Zouk",
      "Kompa",
      "Hip-Hop",
      "RnB",
      "Open Format",
    ],
    paragraphs: [
      "Basé à Paris, DJ Wayans construit son nom depuis 2022 : d'abord dans des cadres intimistes, des événements privés et des nuits underground, puis sur des scènes plus grandes et des activations de marque. En quatre ans, il est passé de la lecture de petites salles à l'animation de foules de plus de 300 personnes lors d'événements institutionnels, de partenariats de marque et de soirées club à travers la ville.",
      "Son univers a évolué avec lui. Une affinité profonde pour l'Afrobeats et le RnB s'est élargie à une palette plus texturée : Afro House, Dancehall, French Urban, façonnée par les salles qu'il a jouées et les publics qu'il a étudiés. Chaque set est différent, parce que chaque public est différent.",
      "Sa philosophie tient en une conviction : le DJ ne dirige pas, il échange. Il lit l'énergie de la salle, la transforme et la renvoie amplifiée. Sur scène, cela se traduit par une présence concentrée, précise et entièrement engagée, que ce soit derrière une platine sur un rooftop parisien ou au pied de la tour Eiffel pour une campagne Nike.",
    ],
  },
  clubs: {
    eyebrow: "Références",
    title: "Clubs, marques et scènes.",
    description:
      "Des soirées parisiennes aux activations de marque, de Clermont-Ferrand au Ghana et à Malte.",
    regions: [
      {
        title: "Marques",
        icon: "globe",
        items: [
          "Nike Mercurial Tour — DJ officiel, Paris (tour Eiffel), Angers, Toulouse",
        ],
      },
      {
        title: "Clubs, lieux et soirées",
        icon: "map-pin",
        items: [
          "Wanderlust — Paris 12e",
          "Central Chapelle",
          "Le Bateau Phare",
          "La Rotonde",
          "211",
          "Folie Pigalle",
          "F.M.R",
          "Rimshot — Clermont-Ferrand",
          "Kalyhouse",
          "Afrikashine",
          "RnbShine",
          "Don Party",
          "Esengo",
          "WataVibe",
          "Love & Bowl",
          "H.E.C MBA Africa Club",
          "A.N.M",
          "Reemix Therapy",
          "Feelings",
        ],
      },
      {
        title: "International",
        icon: "globe",
        items: ["Purple Pub — Ghana", "Soft Szn — Malte"],
      },
      {
        title: "Formats",
        icon: "globe",
        items: [
          "Clubs",
          "Soirées privées",
          "Mariages",
          "Festivals",
          "Radio / live stream",
        ],
      },
    ],
  },
  sound: {
    eyebrow: "Son",
    title: "À l'écoute.",
    paragraphs: [
      "Afro, Amapiano, Dancehall, Shatta, Zouk, Kompa, Hip-Hop et RnB : une sélection pensée pour faire circuler le public d'une couleur à l'autre.",
      "Retrouvez les mixes de DJ Wayans sur SoundCloud.",
    ],
    cta: {
      label: "Écouter sur SoundCloud",
      href: soundCloudUrl,
      external: true,
    },
    embedTitle: "DJ Wayans sur SoundCloud",
    embedUrl: soundCloudEmbedUrl,
  },
  videos: {
    eyebrow: "Vidéos",
    title: "Son univers en images.",
    description: "Des extraits live pour découvrir DJ Wayans en situation.",
    items: [
      {
        id: "wayans-video-1",
        title: "Extrait live 01",
        description: "Un moment de set filmé en live.",
        src: "/wayans/videos/video-1.mp4",
        poster: "/wayans/videos/video-1-poster.jpg",
      },
      {
        id: "wayans-video-2",
        title: "Extrait live 02",
        description: "Un extrait de performance au contact du public.",
        src: "/wayans/videos/video-2.mp4",
        poster: "/wayans/videos/video-2-poster.jpg",
      },
      {
        id: "wayans-video-3",
        title: "Extrait live 03",
        description: "Une séquence vidéo de plus de l'univers live de DJ Wayans.",
        src: "/wayans/videos/video-3.mp4",
        poster: "/wayans/videos/video-3-poster.jpg",
      },
    ],
  },
  spotify: {
    eyebrow: "Spotify",
    title: "Spotify",
    description: "",
    playlists: [],
    badgeLabel: "Playlist",
  },
  brands: {
    eyebrow: "Marques",
    title: "Marques et partenaires.",
    intro: "",
    supportingText: "",
    categories: [],
    itemLabel: "Marque",
    items: [],
    fit: {
      eyebrow: "",
      title: "",
      points: [],
    },
  },
  contact: {
    eyebrow: "Contact",
    title: "Booking et demandes.",
    description:
      "Pour une date en club, un événement de marque, un mariage, un festival ou une soirée privée : DJ Wayans gère lui-même son booking.",
    methods: [
      {
        label: "Email",
        value: bookingEmail,
        href: `mailto:${bookingEmail}`,
        icon: "mail",
      },
      {
        label: "WhatsApp",
        value: "+33 6 33 86 35 68",
        href: whatsappUrl,
        icon: "whatsapp",
        external: true,
      },
      {
        label: "Instagram",
        value: "@wayansboy",
        href: instagramUrl,
        icon: "instagram",
        external: true,
      },
    ],
  },
  gallery: {
    eyebrow: "Galerie",
    title: "Galerie",
    description: "Portraits et moments de scène de DJ Wayans.",
    homepageTitle: "Univers visuel",
    homepageCtaLabel: "Ouvrir la galerie",
    images: [
      { src: "/wayans/photos/gallery-1.jpeg", alt: "DJ Wayans aux platines, casque sur les oreilles", size: "md:col-span-2" },
      { src: "/wayans/photos/gallery-8.jpeg", alt: "DJ Wayans aux platines sous une lumière rouge, au Bateau Phare" },
      { src: "/wayans/photos/gallery-16.jpeg", alt: "DJ Wayans en set, bonnet blanc et maillot, lumière rouge" },
      { src: "/wayans/photos/gallery-12.jpeg", alt: "DJ Wayans en set lors de la soirée Love & Bowl" },
      { src: "/wayans/photos/gallery-13.jpeg", alt: "DJ Wayans en set, son nom projeté sur l'écran de scène" },
      { src: "/wayans/photos/gallery-7.jpeg", alt: "DJ Wayans et un invité devant la tour Eiffel, Nike Mercurial Tour" },
      { src: "/wayans/photos/hero-pic-retouche.jpeg", alt: "Portrait noir et blanc de DJ Wayans, de profil" },
      { src: "/wayans/photos/gallery-4.jpeg", alt: "Portrait noir et blanc de DJ Wayans, de profil, yeux fermés" },
      { src: "/wayans/photos/gallery-5.jpeg", alt: "Portrait noir et blanc de DJ Wayans, de profil, tête baissée" },
      { src: "/wayans/photos/gallery-10.jpeg", alt: "DJ Wayans assis sur un tabouret, portrait noir et blanc" },
      { src: "/wayans/photos/gallery-2.jpeg", alt: "DJ Wayans debout contre un mur, portrait noir et blanc" },
      { src: "/wayans/photos/gallery-3.jpeg", alt: "Portrait noir et blanc de DJ Wayans, effet de flou de mouvement" },
      { src: "/wayans/photos/gallery-9.jpeg", alt: "DJ Wayans de face, pull tapisserie" },
      { src: "/wayans/photos/gallery-11.jpeg", alt: "DJ Wayans assis sur un tabouret, pull tapisserie" },
      { src: "/wayans/photos/IMG_9834.jpeg", alt: "DJ Wayans assis, portrait en pied" },
      { src: "/wayans/photos/gallery-14.jpeg", alt: "Portrait de DJ Wayans en chemise brune, lumière chaude" },
      { src: "/wayans/photos/gallery-15.jpeg", alt: "Portrait de DJ Wayans en pull rayé jaune dans un bar" },
    ],
  },
};

export const wayansClient: ClientConfig = {
  slug: "wayans",
  domain: "wayans.presskit.fr",
  vercelSubdomain: "wayans.vercel.app",
  name: "DJ Wayans",
  tagline: "DJ • Paris • Afro, Amapiano, Dancehall & Hip-Hop RnB",
  city: "Paris",
  country: "France",
  category: "DJ afro / Amapiano / Dancehall / Hip-Hop RnB",
  description:
    "DJ parisien depuis 2022, DJ Wayans mixe Afro, Amapiano, Dancehall, Zouk et Hip-Hop RnB pour clubs, marques et événements.",
  longBio: wayansPressKit.about.paragraphs.join(" "),
  heroImage,
  gallery: wayansPressKit.gallery.images,
  socials: {
    instagram: instagramUrl,
    soundCloud: soundCloudUrl,
  },
  contact: {
    email: bookingEmail,
    phone: "+33633863568",
    city: "Paris",
    country: "France",
  },
  services: [
    {
      title: "Clubs",
      description: "Sets afro, amapiano, dancehall et hip-hop RnB pour dancefloors parisiens et européens.",
    },
    {
      title: "Événements de marque",
      description: "Activations et partenariats de marque, dont le Nike Mercurial Tour.",
    },
    {
      title: "Événements privés",
      description: "Soirées privées, mariages, festivals et radio / live stream.",
    },
  ],
  testimonials: [],
  bookingEmail,
  seo: {
    title: wayansPressKit.metadata.title,
    description: wayansPressKit.metadata.description,
    keywords: [
      "DJ Wayans",
      "DJ Paris",
      "DJ afro Paris",
      "DJ Amapiano",
      "DJ Dancehall",
      "DJ Hip-Hop RnB",
      "DJ open format",
      "DJ mariage Paris",
      "booking DJ Paris",
      "DJ press kit",
    ],
    ogImage: "/opengraph-image",
    canonical: "https://wayans.presskit.fr/",
  },
  defaultTheme: "gold",
  defaultVariant: "impact",
  pressKit: wayansPressKit,
};
