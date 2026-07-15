import { z } from 'zod';

import type { LayoutBoxConfig, LayoutRegistry, LayoutTextConfig, ResponsiveLayoutValue, SectionLayout } from '@/types/layout';

const responsiveLayoutValueSchema: z.ZodType<ResponsiveLayoutValue> = z.object({
  mobile: z.string().min(1),
  tablet: z.string().min(1),
  desktop: z.string().min(1),
});

const layoutBoxSchema: z.ZodType<LayoutBoxConfig> = z
  .object({
    paddingTop: responsiveLayoutValueSchema.optional(),
    paddingBottom: responsiveLayoutValueSchema.optional(),
    paddingX: responsiveLayoutValueSchema.optional(),
    paddingY: responsiveLayoutValueSchema.optional(),
    gap: responsiveLayoutValueSchema.optional(),
    columns: responsiveLayoutValueSchema.optional(),
    maxWidth: responsiveLayoutValueSchema.optional(),
    width: responsiveLayoutValueSchema.optional(),
    height: responsiveLayoutValueSchema.optional(),
    borderRadius: responsiveLayoutValueSchema.optional(),
    aspectRatio: responsiveLayoutValueSchema.optional(),
  })
  .strict();

const layoutTextSchema: z.ZodType<LayoutTextConfig> = z
  .object({
    fontSize: responsiveLayoutValueSchema.optional(),
    lineHeight: responsiveLayoutValueSchema.optional(),
    maxWidth: responsiveLayoutValueSchema.optional(),
  })
  .strict();

export const sectionLayoutSchema: z.ZodType<SectionLayout> = z
  .object({
    section: layoutBoxSchema.optional(),
    container: layoutBoxSchema.optional(),
    stack: layoutBoxSchema.optional(),
    stackSecondary: layoutBoxSchema.optional(),
    grid: layoutBoxSchema.optional(),
    gridSecondary: layoutBoxSchema.optional(),
    card: layoutBoxSchema.optional(),
    cardSecondary: layoutBoxSchema.optional(),
    panel: layoutBoxSchema.optional(),
    eyebrow: layoutTextSchema.optional(),
    title: layoutTextSchema.optional(),
    description: layoutTextSchema.optional(),
    media: layoutBoxSchema.optional(),
    logoPrimary: layoutBoxSchema.optional(),
    logoSecondary: layoutBoxSchema.optional(),
  })
  .strict();

export const layoutRegistrySchema: z.ZodType<LayoutRegistry> = z.object({
  container: sectionLayoutSchema,
  header: sectionLayoutSchema,
  footer: sectionLayoutSchema,
  pageIntro: sectionLayoutSchema,
  sectionHeader: sectionLayoutSchema,
  homeHero: sectionLayoutSchema,
  homeAboutPreview: sectionLayoutSchema,
  homeProgramsPreview: sectionLayoutSchema,
  homeSchedulePreview: sectionLayoutSchema,
  homeGalleryPreview: sectionLayoutSchema,
  homeTestimonials: sectionLayoutSchema,
  homeVolunteer: sectionLayoutSchema,
  homeContact: sectionLayoutSchema,
  aboutMissionVision: sectionLayoutSchema,
  aboutWhyCoding: sectionLayoutSchema,
  aboutWhyNonprofit: sectionLayoutSchema,
  aboutTeam: sectionLayoutSchema,
  programsList: sectionLayoutSchema,
  scheduleTable: sectionLayoutSchema,
  scheduleCallout: sectionLayoutSchema,
  galleryGrid: sectionLayoutSchema,
  galleryEvent: sectionLayoutSchema,
});
