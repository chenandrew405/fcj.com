export interface ResponsiveLayoutValue {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface LayoutBoxConfig {
  paddingTop?: ResponsiveLayoutValue;
  paddingBottom?: ResponsiveLayoutValue;
  paddingX?: ResponsiveLayoutValue;
  paddingY?: ResponsiveLayoutValue;
  gap?: ResponsiveLayoutValue;
  columns?: ResponsiveLayoutValue;
  maxWidth?: ResponsiveLayoutValue;
  width?: ResponsiveLayoutValue;
  height?: ResponsiveLayoutValue;
  borderRadius?: ResponsiveLayoutValue;
  aspectRatio?: ResponsiveLayoutValue;
}

export interface LayoutTextConfig {
  fontSize?: ResponsiveLayoutValue;
  lineHeight?: ResponsiveLayoutValue;
  maxWidth?: ResponsiveLayoutValue;
}

export interface SectionLayout {
  section?: LayoutBoxConfig;
  container?: LayoutBoxConfig;
  stack?: LayoutBoxConfig;
  stackSecondary?: LayoutBoxConfig;
  grid?: LayoutBoxConfig;
  gridSecondary?: LayoutBoxConfig;
  card?: LayoutBoxConfig;
  cardSecondary?: LayoutBoxConfig;
  panel?: LayoutBoxConfig;
  eyebrow?: LayoutTextConfig;
  title?: LayoutTextConfig;
  description?: LayoutTextConfig;
  media?: LayoutBoxConfig;
  logoPrimary?: LayoutBoxConfig;
  logoSecondary?: LayoutBoxConfig;
}

export interface LayoutRegistry {
  container: SectionLayout;
  header: SectionLayout;
  footer: SectionLayout;
  pageIntro: SectionLayout;
  sectionHeader: SectionLayout;
  homeHero: SectionLayout;
  homeAboutPreview: SectionLayout;
  homeProgramsPreview: SectionLayout;
  homeSchedulePreview: SectionLayout;
  homeGalleryPreview: SectionLayout;
  homeTestimonials: SectionLayout;
  homeVolunteer: SectionLayout;
  homeContact: SectionLayout;
  aboutMissionVision: SectionLayout;
  aboutWhyCoding: SectionLayout;
  aboutWhyNonprofit: SectionLayout;
  aboutTeam: SectionLayout;
  programsList: SectionLayout;
  scheduleTable: SectionLayout;
  scheduleCallout: SectionLayout;
  galleryGrid: SectionLayout;
  galleryEvent: SectionLayout;
}
