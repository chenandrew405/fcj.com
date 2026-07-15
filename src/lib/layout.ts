import containerLayoutData from 'layout/container.json';
import headerLayoutData from 'layout/header.json';
import footerLayoutData from 'layout/footer.json';
import pageIntroLayoutData from 'layout/page-intro.json';
import sectionHeaderLayoutData from 'layout/section-header.json';
import homeHeroLayoutData from 'layout/home-hero.json';
import homeAboutPreviewLayoutData from 'layout/home-about-preview.json';
import homeProgramsPreviewLayoutData from 'layout/home-programs-preview.json';
import homeSchedulePreviewLayoutData from 'layout/home-schedule-preview.json';
import homeGalleryPreviewLayoutData from 'layout/home-gallery-preview.json';
import homeTestimonialsLayoutData from 'layout/home-testimonials.json';
import homeVolunteerLayoutData from 'layout/home-volunteer.json';
import homeContactLayoutData from 'layout/home-contact.json';
import aboutMissionVisionLayoutData from 'layout/about-mission-vision.json';
import aboutWhyCodingLayoutData from 'layout/about-why-coding.json';
import aboutWhyNonprofitLayoutData from 'layout/about-why-nonprofit.json';
import aboutTeamLayoutData from 'layout/about-team.json';
import programsListLayoutData from 'layout/programs-list.json';
import scheduleTableLayoutData from 'layout/schedule-table.json';
import scheduleCalloutLayoutData from 'layout/schedule-callout.json';
import galleryGridLayoutData from 'layout/gallery-grid.json';
import galleryEventLayoutData from 'layout/gallery-event.json';

import { layoutRegistrySchema } from '@/lib/layout-schemas';
import type { LayoutRegistry } from '@/types/layout';

export const layoutContent: LayoutRegistry = layoutRegistrySchema.parse({
  container: containerLayoutData,
  header: headerLayoutData,
  footer: footerLayoutData,
  pageIntro: pageIntroLayoutData,
  sectionHeader: sectionHeaderLayoutData,
  homeHero: homeHeroLayoutData,
  homeAboutPreview: homeAboutPreviewLayoutData,
  homeProgramsPreview: homeProgramsPreviewLayoutData,
  homeSchedulePreview: homeSchedulePreviewLayoutData,
  homeGalleryPreview: homeGalleryPreviewLayoutData,
  homeTestimonials: homeTestimonialsLayoutData,
  homeVolunteer: homeVolunteerLayoutData,
  homeContact: homeContactLayoutData,
  aboutMissionVision: aboutMissionVisionLayoutData,
  aboutWhyCoding: aboutWhyCodingLayoutData,
  aboutWhyNonprofit: aboutWhyNonprofitLayoutData,
  aboutTeam: aboutTeamLayoutData,
  programsList: programsListLayoutData,
  scheduleTable: scheduleTableLayoutData,
  scheduleCallout: scheduleCalloutLayoutData,
  galleryGrid: galleryGridLayoutData,
  galleryEvent: galleryEventLayoutData,
});

export const containerLayout = layoutContent.container;
export const headerLayout = layoutContent.header;
export const footerLayout = layoutContent.footer;
export const pageIntroLayout = layoutContent.pageIntro;
export const sectionHeaderLayout = layoutContent.sectionHeader;
export const homeHeroLayout = layoutContent.homeHero;
export const homeAboutPreviewLayout = layoutContent.homeAboutPreview;
export const homeProgramsPreviewLayout = layoutContent.homeProgramsPreview;
export const homeSchedulePreviewLayout = layoutContent.homeSchedulePreview;
export const homeGalleryPreviewLayout = layoutContent.homeGalleryPreview;
export const homeTestimonialsLayout = layoutContent.homeTestimonials;
export const homeVolunteerLayout = layoutContent.homeVolunteer;
export const homeContactLayout = layoutContent.homeContact;
export const aboutMissionVisionLayout = layoutContent.aboutMissionVision;
export const aboutWhyCodingLayout = layoutContent.aboutWhyCoding;
export const aboutWhyNonprofitLayout = layoutContent.aboutWhyNonprofit;
export const aboutTeamLayout = layoutContent.aboutTeam;
export const programsListLayout = layoutContent.programsList;
export const scheduleTableLayout = layoutContent.scheduleTable;
export const scheduleCalloutLayout = layoutContent.scheduleCallout;
export const galleryGridLayout = layoutContent.galleryGrid;
export const galleryEventLayout = layoutContent.galleryEvent;
