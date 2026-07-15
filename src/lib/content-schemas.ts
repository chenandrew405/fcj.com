import { z } from 'zod';

import type {
  AboutContent,
  FooterContent,
  GalleryContent,
  GalleryEvent,
  GalleryImage,
  GalleryVideo,
  HeroContent,
  LinkItem,
  NavigationContent,
  Program,
  ProgramsContent,
  ScheduleContent,
  ScheduleItem,
  SiteConfig,
  TeamMember,
  Testimonial,
  TestimonialsContent,
} from '@/types/content';

const linkSchema: z.ZodType<LinkItem> = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
  external: z.boolean().optional(),
});

const imageSchema = z.object({
  src: z.string().min(1),
  alt: z.string().min(1),
});

const sectionIntroSchema = z.object({
  eyebrow: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
});

const teamMemberSchema: z.ZodType<TeamMember> = z.object({
  name: z.string().min(1),
  role: z.string().min(1),
  bio: z.string().min(1),
  image: z.string().min(1).nullable().optional(),
  email: z.string().min(1).nullable().optional(),
  phone: z.string().min(1).nullable().optional(),
});

const programSchema: z.ZodType<Program> = z.object({
  id: z.string().min(1),
  icon: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  recommendedAge: z.string().min(1),
  duration: z.string().min(1),
  skillLevel: z.string().min(1),
  image: z.string().min(1),
  badgeImage: z.string().min(1),
  imagePlaceholderText: z.string().min(1).nullable().optional(),
});

const scheduleItemSchema: z.ZodType<ScheduleItem> = z.object({
  program: z.string().min(1),
  day: z.string().min(1),
  time: z.string().min(1),
  place: z.string().min(1),
  instructor: z.string().min(1),
  availability: z.string().min(1),
  availabilityHref: z.string().min(1).nullable().optional(),
});

const galleryImageSchema: z.ZodType<GalleryImage> = z.object({
  src: z.string().min(1),
  alt: z.string().min(1),
  caption: z.string().optional(),
});

const galleryVideoSchema: z.ZodType<GalleryVideo> = z.object({
  src: z.string().min(1),
  title: z.string().min(1),
  caption: z.string().optional(),
});

const galleryEventSchema: z.ZodType<GalleryEvent> = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  date: z.string().min(1),
  location: z.string().optional(),
  coverImage: z.string().min(1),
  images: z.array(galleryImageSchema).min(1),
  videos: z.array(galleryVideoSchema).optional(),
});

const testimonialSchema: z.ZodType<Testimonial> = z.object({
  name: z.string().min(1),
  role: z.string().min(1),
  quote: z.string().min(1),
  type: z.string().min(1),
});

export const siteSchema: z.ZodType<SiteConfig> = z.object({
  name: z.string().min(1),
  shortName: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  url: z.string().url(),
  missionStatement: z.string().min(1),
  organization: z.object({
    legalName: z.string().min(1),
    tagline: z.string().min(1),
    email: z.string().email(),
    location: z.string().min(1),
    nonprofitStatement: z.string().min(1),
    socialLinks: z
      .array(
        z.object({
          label: z.string().min(1),
          href: z.string().min(1),
          icon: z.string().min(1),
          external: z.boolean().optional(),
        }),
      )
      .min(1),
  }),
  sectionLabels: z.object({
    about: z.string().min(1),
    programs: z.string().min(1),
    schedule: z.string().min(1),
    gallery: z.string().min(1),
    testimonials: z.string().min(1),
    volunteer: z.string().min(1),
    contact: z.string().min(1),
  }),
  volunteer: z.object({
    eyebrow: z.string().min(1),
    title: z.string().min(1),
    description: z.string().min(1),
    reasons: z.array(z.string().min(1)).min(1),
    cta: linkSchema,
  }),
  contact: z.object({
    eyebrow: z.string().min(1),
    title: z.string().min(1),
    description: z.string().min(1),
    details: z
      .array(
        z.object({
          label: z.string().min(1),
          value: z.string().min(1),
          href: z.string().nullable(),
        }),
      )
      .min(1),
    form: z.object({
      nameLabel: z.string().min(1),
      emailLabel: z.string().min(1),
      messageLabel: z.string().min(1),
      submitLabel: z.string().min(1),
      disclaimer: z.string().min(1),
    }),
  }),
});

export const heroSchema: z.ZodType<HeroContent> = z.object({
  eyebrow: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  primaryCta: linkSchema,
  secondaryCta: linkSchema,
  stats: z
    .array(
      z.object({
        value: z.string().min(1),
        label: z.string().min(1),
        description: z.string().min(1),
      }),
    )
    .min(1),
  heroImages: z.object({
    primary: imageSchema,
    secondary: imageSchema,
    tertiary: imageSchema,
  }),
  floatingCards: z
    .array(
      z.object({
        title: z.string().min(1),
        description: z.string().min(1),
      }),
    )
    .min(1),
});

export const aboutSchema: z.ZodType<AboutContent> = z.object({
  pageIntro: sectionIntroSchema,
  mission: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
  }),
  vision: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
  }),
  whyCoding: z.object({
    title: z.string().min(1),
    paragraphs: z.array(z.string().min(1)).min(1),
  }),
  whyNonprofit: z.object({
    title: z.string().min(1),
    paragraphs: z.array(z.string().min(1)).min(1),
  }),
  storyImages: z.array(imageSchema).min(1),
  team: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    members: z.array(teamMemberSchema).min(1),
  }),
});

export const programsSchema: z.ZodType<ProgramsContent> = z.object({
  pageIntro: sectionIntroSchema,
  sectionIntro: sectionIntroSchema,
  programs: z.array(programSchema).min(1),
});

export const scheduleSchema: z.ZodType<ScheduleContent> = z.object({
  pageIntro: sectionIntroSchema,
  sectionIntro: sectionIntroSchema,
  items: z.array(scheduleItemSchema).min(1),
  callout: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    cta: linkSchema,
  }),
});

export const gallerySchema: z.ZodType<GalleryContent> = z.object({
  pageIntro: sectionIntroSchema,
  sectionIntro: sectionIntroSchema,
  events: z.array(galleryEventSchema).min(1),
});

export const testimonialsSchema: z.ZodType<TestimonialsContent> = z.object({
  sectionIntro: sectionIntroSchema,
  items: z.array(testimonialSchema).min(1),
});

export const navigationSchema: z.ZodType<NavigationContent> = z.object({
  items: z.array(linkSchema).min(1),
  primaryCta: linkSchema,
});

export const footerSchema: z.ZodType<FooterContent> = z.object({
  columns: z
    .array(
      z.object({
        title: z.string().min(1),
        links: z.array(linkSchema).min(1),
      }),
    )
    .min(1),
  copyright: z.string().min(1),
  nonprofitStatement: z.string().min(1),
});
