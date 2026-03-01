# Skynet v2 

A modern, responsive website for **Skynet Internet Services**, built with React 19, Vite 7, and Tailwind CSS 4. Features a dark/light theme, animated UI with Framer Motion, and a mobile-first design.

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19.2.4 | UI framework |
| Vite | 7.3.1 | Build tool & dev server |
| Tailwind CSS | 4.2.0 | Utility-first styling (via Vite plugin) |
| Framer Motion | 12.34.3 | Animations & page transitions |
| React Router DOM | 7.13.0 | Client-side routing (SPA) |
| Swiper | 12.1.2 | Carousels (offers, testimonials, about gallery) |
| React Hook Form | 7.71.2 | Form handling (contact page) |
| React Icons | 5.5.0 | Icon library (Font Awesome set) |

---

## Build & Development Pipeline

```
┌─────────────┐     ┌───────────────┐     ┌──────────────┐     ┌──────────┐
│  index.html  │────>│  src/main.jsx  │────>│   App.jsx    │────>│  Pages   │
│  (entry)     │     │  (React root)  │     │  (router)    │     │          │
└─────────────┘     └───────────────┘     └──────────────┘     └──────────┘
                           │
                    ┌──────┴───────┐
                    │              │
              ThemeProvider   globals.css
              (context)      + animations.css
                                │
                          Tailwind CSS 4
                          (via @tailwindcss/vite plugin)
```


### How the pipeline works

1. **Entry point** — `index.html` loads Google Fonts (Inter + Space Grotesk) and bootstraps `src/main.jsx`.
2. **React root** — `main.jsx` wraps the app in `StrictMode` → `BrowserRouter` → `ThemeProvider` → `App`. Also imports Swiper CSS globally (`swiper/css`, `swiper/css/pagination`, `swiper/css/navigation`) so individual components don't need to.
3. **Global styles** — `globals.css` imports Tailwind CSS 4 (`@import "tailwindcss"`) and `animations.css`. The `@tailwindcss/vite` plugin processes Tailwind at build time — no `tailwind.config.js` or `postcss.config.js` needed.
4. **Theme system** — `ThemeContext` reads `localStorage` (key: `skynet-theme`) or the OS preference, toggles a `.dark` class on `<html>`, and CSS custom properties switch the entire color palette.
5. **Routing** — `App.jsx` renders `<Routes>` inside `<AnimatePresence>` for animated page transitions. `ScrollToTop` resets scroll on navigation. SPA-aware `scrollToAvailability` function uses `useNavigate` to handle cross-page scroll targeting.
6. **Build** — Vite bundles everything with Rollup, tree-shakes unused code, and outputs hashed assets to `dist/`.

---

## Routing

All routes are defined in `src/App.jsx`. Every page is wrapped by the shared layout (UtilityBar → Navbar → page content → Footer → MobileBottomBar).

| Path | Page Component | Description |
|---|---|---|
| `/` | `Home.jsx` | Landing page with hero, features, OTT partners, offers, plans preview, testimonials, availability checker |
| `/about` | `About.jsx` | Company story, image carousel, team section |
| `/services` | `Services.jsx` | 6 service cards with "Learn More" CTAs linking to contact |
| `/plans` | `Plans.jsx` | Pricing cards with billing toggle, comparison table, plan finder quiz, FAQs |
| `/contact` | `Contact.jsx` | Contact form (react-hook-form), company info, map placeholder |

---

## File Structure

```
Skynet_v2/
├── index.html                          # HTML shell, loads fonts & mounts React
├── package.json                        # Dependencies & scripts
├── vite.config.js                      # Vite config (React + Tailwind plugins)
│
├── public/
│   ├── favicon.svg                     # Browser tab icon
│   └── images/
│       └── Scroll_bar/                 # OTT partner logos & Skynet branding
│           ├── Prime video.png         # Amazon Prime Video logo
│           ├── JioHotstar.jpg          # JioHotstar logo
│           ├── Voot.jpg               # Voot logo
│           ├── Shemaroo.jpg           # Shemaroo logo
│           ├── EkTV_.png              # EkTV logo
│           ├── OTTPlay.png            # OTTplay logo
│           ├── PlayBoxTV.jpg          # Playbox TV logo
│           ├── SonyLIV_2020.png       # Sony Liv logo
│           ├── Z5.png                 # Zee5 logo
│           ├── BgRemove_SkynetLogo_Generated.png  # Skynet logo (used in navbar & footer)
│           └── SkynetLogo_noText - Edited.png     # Alternate Skynet logo
│
└── src/
    ├── main.jsx                        # React entry — StrictMode, BrowserRouter, ThemeProvider, Swiper CSS imports
    ├── App.jsx                         # Route definitions, shared layout shell, SPA scroll-to-availability handler
    │
    ├── context/
    │   └── ThemeContext.jsx             # Dark/light theme context (localStorage + OS preference)
    │
    ├── hooks/
    │   └── useTheme.js                 # Custom hook to consume ThemeContext
    │
    ├── styles/
    │   ├── globals.css                 # Tailwind import, CSS custom properties (light & dark), base styles, focus-visible rules, page-header utility, Swiper overrides
    │   └── animations.css              # @keyframes (marquee, float, shimmer, pulse-glow, fiber-glow, data-flow, spin-slow, bounce-subtle, fade-in-up)
    │
    ├── data/                           # Static data (no API calls — all data is local)
    │   ├── features.js                 # 6 feature cards (High Speed, 24/7 Support, No Data Limit, Easy Setup, Secure Connection, Affordable Plans)
    │   ├── plans.js                    # 4 plans (Basic/Standard/Premium/Ultra) + billing cycles
    │   ├── quizQuestions.js            # 3 quiz questions + recommendation algorithm
    │   ├── team.js                     # 3 team members (name, role, quote)
    │   └── testimonials.js             # 6 customer reviews (name, rating, review, location)
    │
    ├── pages/
    │   ├── Home.jsx                    # Composes: HeroSection, FeaturesSection, OTTScrollBar, OffersCarousel, PlansPreview, Testimonials, AvailabilityChecker
    │   ├── About.jsx                   # Composes: CompanyStory, image carousel (Swiper), TeamSection
    │   ├── Services.jsx                # 6 service cards with icons, features, and "Learn More" CTA links
    │   ├── Plans.jsx                   # Pricing cards, comparison table, PlanFinderQuiz, FAQ accordion (9 questions)
    │   └── Contact.jsx                 # Contact form (react-hook-form), contact info, map placeholder
    │
    └── components/
        ├── common/
        │   └── ScrollToTop.jsx         # Scrolls to top on route change (useEffect + useLocation)
        │
        ├── layout/                     # Persistent layout — rendered on every page
        │   ├── UtilityBar.jsx          # Top bar: phone, email, network status, theme toggle (hidden on mobile)
        │   ├── Navbar.jsx              # Sticky header: Skynet logo image, nav links, mobile hamburger (with ARIA), login modal trigger, CTA
        │   ├── Footer.jsx              # Footer: Skynet logo image, quick links (<Link>), services (<Link> to /services), contact info, social icons, copyright
        │   └── MobileBottomBar.jsx     # Fixed bottom bar (mobile only): Call, WhatsApp, Check Availability
        │
        ├── ui/                         # Reusable, generic UI primitives
        │   ├── Button.jsx              # Variants: primary, secondary, accent, ghost — Sizes: sm, md, lg
        │   ├── Card.jsx                # Animated card wrapper with hover effects
        │   ├── Modal.jsx               # Login/Signup modal with tab switching, form validation, Escape key dismiss, ARIA dialog
        │   ├── SectionHeading.jsx      # Section title + subtitle + animated underline bar
        │   └── ThemeToggle.jsx         # Animated sun/moon toggle (Framer Motion)
        │
        ├── home/                       # Home page sections (each is a standalone section)
        │   ├── HeroSection.jsx         # Clean hero with subtle gradient orbs, badge with pulse dot, gradient headline, CTAs, and stat pills
        │   ├── FeaturesSection.jsx     # 3x2 grid of 6 feature cards from data/features.js
        │   ├── OTTScrollBar.jsx        # Infinite CSS marquee of 9 OTT partner logo images (100x100px, 50px gap, seamless loop)
        │   ├── OffersCarousel.jsx      # Swiper carousel with 6 promotional offer cards, each with "Claim Offer" CTA
        │   ├── PlansPreview.jsx        # Billing toggle + 4 plan cards with "Choose Plan" CTA (links to /plans)
        │   ├── Testimonials.jsx        # Swiper carousel of 6 customer reviews with star ratings
        │   ├── AvailabilityChecker.jsx # Pincode input → checks against valid Pune-area codes
        │   ├── PlanFinderQuiz.jsx      # 3-step quiz → recommends a plan (used on /plans page, not home)
        │   └── GetInTouch.jsx          # CTA section with phone/email/contact links (currently unused, kept for reuse)
        │
        └── about/                      # About page sections
            ├── CompanyStory.jsx        # Founding narrative + Mission/Vision/Values cards
            └── TeamSection.jsx         # 3 team member cards with initials, role, quote
```

---


## Theme System

The app supports **light** and **dark** themes using CSS custom properties.

| Property | Light | Dark |
|---|---|---|
| `--bg-primary` | `#f8fafc` | `#0a0e1a` |
| `--bg-secondary` | `#ffffff` | `#111827` |
| `--bg-tertiary` | `#f1f5f9` | `#1e293b` |
| `--text-primary` | `#1e293b` | `#f1f5f9` |
| `--text-secondary` | `#475569` | `#cbd5e1` |
| `--text-muted` | `#64748b` | `#64748b` |
| `--color-primary` | `#0066cc` (blue) | `#00d4ff` (cyan) |
| `--color-primary-light` | `#3b82f6` | `#38bdf8` |
| `--color-accent` | `#6d28d9` (purple) | `#7c3aed` (purple) |
| `--color-accent-light` | `#8b5cf6` | `#a78bfa` |
| `--border-color` | `#e2e8f0` | `#1e293b` |
| `--card-bg` | `#ffffff` | `#111827` |
| `--nav-bg` | `rgba(255,255,255,0.95)` | `rgba(17,24,39,0.95)` |
| `--glow` | `none` | `0 0 20px rgba(0,212,255,0.3)` |
| `--card-glow` | `none` | `0 0 15px rgba(0,212,255,0.1)` |

Theme preference is persisted in `localStorage` under the key `skynet-theme`. On first visit, it reads the OS preference via `prefers-color-scheme`. The `.dark` class is toggled on `<html>`.

---

## Typography

| Usage | Font |
|---|---|
| Headings (h1–h6) | Space Grotesk |
| Body text | Inter |

Both loaded from Google Fonts in `index.html`.

---

## Accessibility

- **Focus styles** — Global `focus-visible` outline on all form inputs (2px solid primary color with 1px offset). Only shows for keyboard navigation, not mouse clicks.
- **ARIA attributes** — Navbar hamburger has `aria-label` and `aria-expanded`. Modal has `role="dialog"`, `aria-modal`, and dynamic `aria-label`. FAQ accordion uses `aria-expanded` on triggers and `aria-controls`/`role="region"` on panels.
- **Keyboard navigation** — Modal dismisses on Escape key. All interactive elements are keyboard-accessible.
- **Color contrast** — `--text-muted` set to `#64748b` in both themes for WCAG 4.5:1+ contrast ratio against backgrounds.
- **Semantic HTML** — Proper heading hierarchy, form labels, and landmark elements throughout.

---

## Key Design Decisions

1. **No backend** — All data is static (plans, features, testimonials, quiz questions). Pincode checker uses a hardcoded array. Contact form simulates submission. Modal simulates auth.
2. **CSS custom properties over Tailwind config** — Theme colors are defined as CSS variables in `globals.css` rather than in a Tailwind config. This enables runtime theme switching without rebuilding.
3. **Swiper CSS centralized in `main.jsx`** — Instead of each carousel component importing Swiper CSS, all Swiper styles are imported once at the entry point.
4. **Section background alternation** — Sections alternate between `--bg-primary` and `--bg-tertiary` to create visual separation without heavy borders.
5. **Plan card flex layout** — Plan cards use `flex flex-col` with `mt-auto` on the CTA button, ensuring all "Get Started" buttons align at the same row regardless of differing feature counts.
6. **OTT marquee seamless loop** — Two identical `<LogoSet />` components rendered inside a `w-max` container. The CSS `marquee` animation translates by exactly -50%, which equals one set's width, creating a perfectly seamless infinite loop.
7. **SPA-aware scroll targeting** — "Check Availability" buttons across the app (navbar, mobile bottom bar, hero) use `useNavigate` to handle cross-page navigation — if on a different page, navigate to `/` first, then scroll to `#availability-checker` after a 500ms delay.


## Getting Started

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```
