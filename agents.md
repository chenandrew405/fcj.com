# Agents Notes

This file documents recent content changes and shows where site copy and layout sizing are managed.

## Recent Work

The following updates were made to the website source:

- Removed the homepage donate section.
- Removed the homepage impact metrics section.
- Removed related donate and impact content wiring from the app source.
- Removed source references to `501(c)(3)`.
- Added the `UStart Teaching x FCJ` logo lockup to the bottom of the footer.
- Added a separate `layout/` JSON system for device-specific sizing and spacing.

## Where To Edit Content

Most site text is controlled by JSON files in the `content/` folder.

These files are loaded in `src/lib/content.ts` and validated by `src/lib/content-schemas.ts`.

Edit these files for content changes:

- `content/site.json`
  Main site-wide content.
  Use this for organization name, SEO description, tagline, mission statement, volunteer section, contact section, and shared labels.

- `content/hero.json`
  Homepage hero section.
  Use this for the top headline, intro paragraph, hero buttons, hero stat cards, hero images, and floating callout cards.

- `content/about.json`
  About page content.
  Use this for mission, vision, story text, why coding, why the organization exists, team members, and about-page images.

- `content/programs.json`
  Programs page and homepage programs preview.
  Use this for each program's title, description, image, age range, duration, and skill level.

- `content/schedule.json`
  Schedule page and homepage schedule preview.
  Use this for class times, instructors, availability, and the schedule callout.

- `content/gallery.json`
  Gallery page and homepage gallery preview.
  Use this for event titles, dates, cover images, descriptions, and gallery image lists.

- `content/testimonials.json`
  Testimonials section.
  Use this for quotes, names, roles, and testimonial type labels.

- `content/navigation.json`
  Header navigation and header button.
  Use this for nav links and the main CTA shown in the site header.

- `content/footer.json`
  Footer columns and footer bottom text.
  Use this for footer links, copyright text, and footer summary text.

## Where To Edit Layout And Sizing

Layout sizing is separate from content.

Use the JSON files in the `layout/` folder for mobile, tablet, and desktop spacing, grid sizes, card padding, panel sizing, and some responsive typography.

These files are loaded in `src/lib/layout.ts`, validated in `src/lib/layout-schemas.ts`, and applied with helpers in `src/lib/layout-utils.ts`.

Main layout files:

- `layout/container.json`
  Shared container max width and horizontal padding.

- `layout/header.json`
  Header container, pill, and logo sizing.

- `layout/footer.json`
  Footer spacing, lockup panel spacing, and footer logo sizes.

- `layout/page-intro.json`
  Shared page intro spacing and text sizes.

- `layout/section-header.json`
  Shared section header spacing and text sizes.

Homepage section layout files:

- `layout/home-hero.json`
- `layout/home-about-preview.json`
- `layout/home-programs-preview.json`
- `layout/home-schedule-preview.json`
- `layout/home-gallery-preview.json`
- `layout/home-testimonials.json`
- `layout/home-volunteer.json`
- `layout/home-contact.json`

Other page layout files:

- `layout/about-mission-vision.json`
- `layout/about-why-coding.json`
- `layout/about-why-nonprofit.json`
- `layout/about-team.json`
- `layout/programs-list.json`
- `layout/schedule-table.json`
- `layout/schedule-callout.json`
- `layout/gallery-grid.json`
- `layout/gallery-event.json`

Use these files when you want to change layout without changing the copy.

## What Not To Edit For Normal Content Changes

- `src/lib/content.ts`
  This imports the JSON files and makes them available to the app. Usually do not edit this unless you add or remove an entire content file.

- `src/lib/content-schemas.ts`
  This defines the required shape for each JSON file. Edit this only if you change the structure of a JSON file.

- `src/lib/layout.ts`
  This imports the layout JSON files and makes them available to the app. Usually do not edit this unless you add or remove an entire layout file.

- `src/lib/layout-schemas.ts`
  This defines the required shape for the layout JSON files. Edit this only if you change the structure of the layout files.

- `src/app/*.tsx` and `src/components/**/*.tsx`
  These control layout and design. Usually do not edit them for normal text changes.

- `.next/` and `dist/`
  These are generated output folders. Do not hand-edit them.

## Quick Edit Guide

1. For text changes, edit the matching file under `content/`.
2. For responsive spacing or sizing changes, edit the matching file under `layout/`.
3. Keep the JSON syntax valid: commas, quotes, brackets, and braces must stay correct.
4. If you add new fields, the app may also need matching updates in `src/lib/content-schemas.ts`, `src/lib/layout-schemas.ts`, and the relevant React component.

## Current Homepage Source Map

- Hero: `content/hero.json`
- About preview: `content/about.json`
- Programs preview: `content/programs.json`
- Schedule preview: `content/schedule.json`
- Gallery preview: `content/gallery.json`
- Testimonials: `content/testimonials.json`
- Volunteer section: `content/site.json`
- Contact section: `content/site.json`

Note: the homepage no longer includes donate or impact sections.
