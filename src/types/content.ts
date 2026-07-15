export interface LinkItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface IconLink extends LinkItem {
  icon: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
}

export interface HeroStat {
  value: string;
  label: string;
  description: string;
}

export interface FloatingCard {
  title: string;
  description: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: LinkItem;
  secondaryCta: LinkItem;
  stats: HeroStat[];
  heroImages: {
    primary: ImageAsset;
    secondary: ImageAsset;
    tertiary: ImageAsset;
  };
  floatingCards: FloatingCard[];
}

export interface SectionIntro {
  eyebrow: string;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string | null;
  email?: string | null;
  phone?: string | null;
}

export interface AboutContent {
  pageIntro: SectionIntro;
  mission: {
    title: string;
    description: string;
  };
  vision: {
    title: string;
    description: string;
  };
  whyCoding: {
    title: string;
    paragraphs: string[];
  };
  whyNonprofit: {
    title: string;
    paragraphs: string[];
  };
  storyImages: ImageAsset[];
  team: {
    title: string;
    description: string;
    members: TeamMember[];
  };
}

export interface Program {
  id: string;
  icon: string;
  title: string;
  description: string;
  recommendedAge: string;
  duration: string;
  skillLevel: string;
  image: string;
  badgeImage: string;
  imagePlaceholderText?: string | null;
}

export interface ProgramsContent {
  pageIntro: SectionIntro;
  sectionIntro: SectionIntro;
  programs: Program[];
}

export interface ScheduleItem {
  program: string;
  day: string;
  time: string;
  place: string;
  instructor: string;
  availability: string;
  availabilityHref?: string | null;
}

export interface ScheduleContent {
  pageIntro: SectionIntro;
  sectionIntro: SectionIntro;
  items: ScheduleItem[];
  callout: {
    title: string;
    description: string;
    cta: LinkItem;
  };
}

export interface GalleryImage extends ImageAsset {
  caption?: string;
}

export interface GalleryVideo {
  src: string;
  title: string;
  caption?: string;
}

export interface GalleryEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  location?: string;
  coverImage: string;
  images: GalleryImage[];
  videos?: GalleryVideo[];
}

export interface GalleryContent {
  pageIntro: SectionIntro;
  sectionIntro: SectionIntro;
  events: GalleryEvent[];
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  type: string;
}

export interface TestimonialsContent {
  sectionIntro: SectionIntro;
  items: Testimonial[];
}

export type NavigationItem = LinkItem;

export interface NavigationContent {
  items: NavigationItem[];
  primaryCta: LinkItem;
}

export type FooterLink = LinkItem;

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterContent {
  columns: FooterColumn[];
  copyright: string;
  nonprofitStatement: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  title: string;
  description: string;
  url: string;
  missionStatement: string;
  organization: {
    legalName: string;
    tagline: string;
    email: string;
    location: string;
    nonprofitStatement: string;
    socialLinks: IconLink[];
  };
  sectionLabels: {
    about: string;
    programs: string;
    schedule: string;
    gallery: string;
    testimonials: string;
    volunteer: string;
    contact: string;
  };
  volunteer: {
    eyebrow: string;
    title: string;
    description: string;
    reasons: string[];
    cta: LinkItem;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    details: Array<{
      label: string;
      value: string;
      href: string | null;
    }>;
    form: {
      nameLabel: string;
      emailLabel: string;
      messageLabel: string;
      submitLabel: string;
      disclaimer: string;
    };
  };
}

export interface AllContent {
  site: SiteConfig;
  hero: HeroContent;
  about: AboutContent;
  programs: ProgramsContent;
  schedule: ScheduleContent;
  gallery: GalleryContent;
  testimonials: TestimonialsContent;
  navigation: NavigationContent;
  footer: FooterContent;
}
