# Gadisa Amenu — Portfolio

A single-page, macOS-inspired portfolio for **Gadisa Amenu**, a full stack developer based in Ethiopia. The UI mimics a desktop: a menu bar, floating nav, glass windows, traffic-light chrome, and light/dark themes.

Built with **Angular 22**, standalone components, signals, SCSS, and Tailwind CSS 4.

## Features

- Sticky macOS menu bar (Apple, Finder, File, Edit, View, Go, Window, Help) with working dropdowns
- Overlay windows: Finder (projects), Project detail, Resume, Availability
- Scroll-spy section nav (Home, About, Work, Skills, Experience, Contact)
- Light/dark theme persisted in `localStorage`
- Contact form that opens a pre-filled `mailto:` (no backend)
- Resume download from `public/GadisaAmenuCV.pdf`

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Angular 22 (standalone, signals) |
| Styling | SCSS + CSS custom properties, Tailwind 4 |
| Icons | `@ng-icons/lucide` (UI) and `@ng-icons/ionicons` (brand marks) |
| Font | [Inter](https://fonts.google.com/specimen/Inter) |
| Tests | Vitest via `ng test` |
| Package manager | Yarn 1 |

## Getting started

```bash
yarn install
yarn start
```

Open [http://localhost:4200/](http://localhost:4200/). The app reloads on file changes.

| Script | Command |
|---|---|
| Dev server | `yarn start` (`ng serve`) |
| Production build | `yarn build` (`ng build`) |
| Unit tests | `yarn test` (`ng test`) |

Build output lands in `dist/`.

## Project structure

```
src/app/
  core/                 PortfolioStateService, ThemeService, profile data
  layout/
    menu-bar/           macOS menu bar + dropdowns
    portfolio-nav/      floating section nav
  sections/             hero, about, projects, skills, experience, contact
  windows/              finder, project, resume, availability overlays
public/
  GadisaAmenuCV.pdf     resume file served at /GadisaAmenuCV.pdf
```

Content (name, links, projects, skills, experience) lives in `src/app/core/portfolio-state.service.ts` as `PROFILE`, `PROJECTS`, and related constants. Edit that file to update the site.

This is a single-page app. Windows are signal-driven overlays (`activeWindow`), not routed pages — `src/app/app.routes.ts` is empty on purpose.

## How the desktop metaphor works

`PortfolioStateService` holds `activeWindow` (`'finder' | 'project' | 'resume' | 'availability' | null`). `App` renders the matching overlay with `@if`. Each window:

- closes on `Escape`
- closes on backdrop click (clicks inside the window do not bubble)
- uses the same traffic-light chrome for a consistent macOS look

Typical triggers:

| Action | Opens |
|---|---|
| Hero “View my work” / Projects “View all” / menu search | Finder |
| A project card | Project window |
| Hero “Download resume” / File → Download Resume | Resume |
| “Available for work” pill / Help → Availability | Availability |

The menu bar is functional, not decorative: theme switching, copy email, section jumps, Finder, resume, and availability are all wired up.

## Theming

`ThemeService` sets `data-theme="light" | "dark"` on `<html>` and saves the choice to `localStorage`. Colors (including the hero sky) are CSS variables in `src/styles.scss`. Components use `var(--token)` so they re-theme without hardcoded colors.

`--section-scroll-offset` (in `styles.scss`) is applied as `scroll-margin-top` on each section so in-page links land below the sticky menu bar and nav.

## Notes

- Hero scenery is layered CSS gradients, not a photo. Swap `.hero__scenery` for a `background-image` if you add a licensed asset; keep using `--hero-*` tokens so light/dark still work.
- Project thumbnails are CSS-gradient mockups keyed by `project.image`. Replace `.mock` / `.finder-file__thumb` / `.project-window__preview` with real screenshots when you have them.
- The contact form has no server. Submit builds a `mailto:` link. Hook `onSubmit()` in `sections/contact/contact.ts` to an API if you add one.
- Icons are registered per component with `provideIcons({...})` so unused icons stay tree-shaken.
