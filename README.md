# Skynet v2 — Internet Service Provider Website

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

### Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Starts Vite dev server with HMR (Hot Module Replacement) |
| `npm run build` | Production build → outputs to `dist/` |
| `npm run preview` | Serves the production build locally for testing |

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

## File Descriptions

### Root Config

| File | Description |
|---|---|
| `index.html` | The single HTML page. Loads Inter and Space Grotesk from Google Fonts, sets meta tags, and mounts the React app at `<div id="root">`. |
| `vite.config.js` | Configures Vite with two plugins: `@vitejs/plugin-react` (JSX transform, fast refresh) and `@tailwindcss/vite` (processes Tailwind at build time). |
| `package.json` | Project metadata, three scripts (`dev`, `build`, `preview`), and all dependency versions. |

### Source Entry

| File | Description |
|---|---|
| `src/main.jsx` | Creates the React root and wraps the app in: `StrictMode` → `BrowserRouter` → `ThemeProvider` → `App`. Imports `globals.css` and Swiper CSS globally (`swiper/css`, `swiper/css/pagination`, `swiper/css/navigation`) — centralized here so individual components don't need separate Swiper CSS imports. |
| `src/App.jsx` | Defines the app shell: `UtilityBar` + `Navbar` at the top, `<Routes>` in the middle (with `AnimatePresence` for page transitions), `Footer` + `MobileBottomBar` at the bottom. Contains all 5 route definitions. Includes a `scrollToAvailability` function that uses `useNavigate` for SPA-aware cross-page scroll — if the user clicks "Check Availability" from any page, it navigates to `/` first, then scrolls to the `#availability-checker` section after a short delay. |

### Context & Hooks

| File | Description |
|---|---|
| `src/context/ThemeContext.jsx` | Creates a React context for theme state. On mount, reads from `localStorage` (`skynet-theme` key) or falls back to OS `prefers-color-scheme`. Toggles `.dark` class on `document.documentElement`. Exposes `isDark` boolean and `toggleTheme` function. |
| `src/hooks/useTheme.js` | Convenience hook that calls `useContext(ThemeContext)` and throws if used outside the provider. |

### Styles

| File | Description |
|---|---|
| `src/styles/globals.css` | Imports Tailwind CSS 4 and `animations.css`. Defines CSS custom properties for both light (`:root`) and dark (`.dark`) themes — backgrounds, text colors, primary/accent colors, borders, glows. Sets base typography, scrollbar styling, `.container-custom` responsive widths (max-width 1280px with responsive padding), `.section-padding` responsive spacing, card shadows (light/dark variants), `.nav-bg` with backdrop blur, `.page-header` gradient for inner pages, `.glow-border` for popular plan cards, global `focus-visible` outline styles for form inputs, global `cursor: pointer` on buttons, and Swiper pagination/navigation/carousel overrides. |
| `src/styles/animations.css` | `@keyframes` definitions: `marquee` (OTT scroll, 30s linear infinite), `float` (gentle bob), `shimmer` (loading shine), `pulse-glow` (glowing border), `fiber-glow` (SVG path glow), `data-flow` (offset-distance animation), `spin-slow` (8s rotation), `bounce-subtle` (5px bob), `fade-in-up` (entrance). Corresponding `.animate-*` utility classes for each. |

### Data

| File | Description |
|---|---|
| `src/data/features.js` | Array of 6 feature objects (`id`, `icon` component, `title`, `description`). Features: High Speed (FaBolt), 24/7 Support (FaHeadset), No Data Limit (FaInfinity), Easy Setup (FaTools), Secure Connection (FaShieldAlt), Affordable Plans (FaRupeeSign). Renders as a clean 3-column × 2-row grid. |
| `src/data/plans.js` | Array of 4 plan objects (Basic 40 Mbps/Standard 100 Mbps/Premium 200 Mbps/Ultra 500 Mbps) with pricing for each billing cycle (`monthly`, `quarterly`, `yearly`), `features` list, `popular` flag (Standard), and `color`. Also exports the `billingCycles` array. Used by `PlansPreview`, `Plans`, and `PlanFinderQuiz`. |
| `src/data/quizQuestions.js` | 3 quiz questions with multiple-choice options. Exports `getRecommendedPlan(answers)` which scores answers (0-9) and maps to a plan ID (1-4). Used by `PlanFinderQuiz`. |
| `src/data/team.js` | Array of 3 team members (`name`, `role`, `quote`, `initials`). Used by `TeamSection`. |
| `src/data/testimonials.js` | Array of 6 customer reviews (`name`, `rating`, `review`, `location`). Used by `Testimonials`. |

### Pages

| File | Route | Description |
|---|---|---|
| `src/pages/Home.jsx` | `/` | Composes 7 sections in order: HeroSection → FeaturesSection → OTTScrollBar → OffersCarousel → PlansPreview → Testimonials → AvailabilityChecker. Passes `scrollToAvailability` callback to HeroSection for the "Check Availability" CTA button. |
| `src/pages/About.jsx` | `/about` | Page header with `.page-header` class → CompanyStory → Image carousel (Swiper with 5 gradient placeholder slides: Our Office, Team at Work, Network Operations Center, Community Event, Customer Support Team — each with icon, title, subtitle, dot pattern overlay, and glass-morphism icon box) → TeamSection. |
| `src/pages/Services.jsx` | `/services` | Page header → 6 animated service cards in a responsive 3-column grid (Fiber Broadband, Business Internet, OTT Bundles, Network Solutions, Security Solutions, 24/7 Support). Each card has an icon, description, feature bullets, and a "Learn More" CTA link that navigates to `/contact`. |
| `src/pages/Plans.jsx` | `/plans` | Page header → billing cycle toggle (monthly/quarterly/yearly with "SAVE 15%" badge on yearly) → 4 plan cards (flex column layout with bottom-aligned "Get Started" buttons so all buttons sit at the same row regardless of feature count) → comparison table (8 features × 4 plans with mobile scroll indicator gradient) → PlanFinderQuiz → FAQ accordion (9 questions with animated expand/collapse, `aria-expanded` and `aria-controls` for accessibility). |
| `src/pages/Contact.jsx` | `/contact` | Page header → two-column layout: contact form (react-hook-form with name, email, phone, message — includes validation and success feedback) + contact info sidebar (phone, WhatsApp, email, address, business hours, map placeholder). |

### Layout Components (rendered on every page)

| File | Description |
|---|---|
| `components/layout/UtilityBar.jsx` | Thin top bar showing phone number, email address, a green network status indicator ("Network: Operational"), and the theme toggle. Hidden on mobile (`hidden md:block`). |
| `components/layout/Navbar.jsx` | Sticky navigation bar with backdrop blur (`.nav-bg`). Contains: Skynet logo image (`BgRemove_SkynetLogo_Generated.png`) with "Skynet / Internet Services" text, 5 nav links (Home, About, Services, Plans, Contact) with active state highlighting, "Login / Signup" button (triggers Modal), "Check Availability" CTA button. On mobile: hamburger menu with `aria-label` and `aria-expanded`, slide-down drawer with Framer Motion. Detects scroll position to add shadow. |
| `components/layout/Footer.jsx` | 4-column footer: company description with Skynet logo image + social icons (Facebook, Instagram, Twitter, YouTube, LinkedIn), quick links column (`<Link>` for SPA navigation), services column (`<Link to="/services">`), contact info column (phone, email, address). Bottom row with dynamic copyright year. Has `pb-16 md:pb-0` to accommodate MobileBottomBar. |
| `components/layout/MobileBottomBar.jsx` | Fixed bottom bar visible only on small screens (`md:hidden`). Three action buttons: Call (phone link), WhatsApp (external link), Check Availability (calls `onCheckAvailability` for SPA scroll). |

### UI Components (reusable primitives)

| File | Description |
|---|---|
| `components/ui/Button.jsx` | Polymorphic button with 4 visual variants (`primary`, `secondary`, `accent`, `ghost`), 3 sizes (`sm`, `md`, `lg`), and Framer Motion hover/tap animations. Accepts all standard button props. |
| `components/ui/Card.jsx` | Wrapper component with border, background, and hover lift animation. Used across multiple pages. |
| `components/ui/Modal.jsx` | Overlay modal for Login/Sign Up. Two tabs switch between forms. Full form state management with client-side validation (email format, password min 6 characters, required fields). Error messages displayed per-field. Success feedback ("Login successful!" / "Account created successfully!"). Closes on backdrop click, close button, or Escape key. ARIA attributes: `role="dialog"`, `aria-modal="true"`, `aria-label` (dynamic based on active tab). Auto-focuses modal on open via `useRef`. |
| `components/ui/SectionHeading.jsx` | Reusable heading block: title, subtitle, and an animated gradient underline bar. Used to introduce major sections. |
| `components/ui/ThemeToggle.jsx` | Animated toggle button that switches between sun (light) and moon (dark) icons using Framer Motion layout animations. |

### Home Page Sections

| File | Description |
|---|---|
| `components/home/HeroSection.jsx` | Clean, professional full-viewport hero section. Background: three subtle, static radial gradient orbs (primary + accent colors at very low opacity). Content (center-aligned): status badge ("Fiber Optic Network — Now Live" with green pulse dot), bold headline ("Blazing-Fast Internet / Built for You" with gradient text, `tracking-tight`, responsive sizing up to `7xl`), subtitle with pricing info, two CTA buttons (Call Now with phone icon, Check Availability with wifi icon), and a stats row — three bordered pill cards (500+ Mbps Max Speed, 99.9% Uptime, 5,000+ Happy Customers) each with an icon. All elements use staggered Framer Motion entrance animations. |
| `components/home/FeaturesSection.jsx` | Renders the 6 features from `data/features.js` in a responsive grid (1 col mobile, 2 col tablet, 3 col desktop). Each card has a tinted icon box, title, description, and staggered viewport-triggered entrance animation with hover lift. |
| `components/home/OTTScrollBar.jsx` | Infinite horizontal marquee of 9 OTT partner logos (actual images from `public/images/Scroll_bar/`). Each logo is 100×100px with `object-contain` and `rounded-xl`. The marquee uses two identical `<LogoSet />` components inside a `w-max` container animated with CSS `marquee` keyframe (`translateX(0)` to `translateX(-50%)` over 30s). The 50% translation precisely skips one set, creating a seamless loop. Each logo has exactly 50px gap (25px margin on each side). Gradient fade overlays on left and right edges. Centered within `container-custom`. |
| `components/home/OffersCarousel.jsx` | Swiper carousel with 6 promotional offer slides (New Connection, Refer & Earn, Student Special, Upgrade & Save, Family Bundle, Festival Bonanza). Each slide has a unique gradient background, badge, title, description, decorative circles, and a "Claim Offer" CTA button. Supports loop, auto-advance (4s), pagination dots, and navigation arrows. |
| `components/home/PlansPreview.jsx` | Billing cycle toggle (monthly/quarterly/yearly with "SAVE 15%" badge in `text-emerald-300` on yearly) and 4 plan cards showing name, speed, price, and top 4 features. "Choose Plan" button triggers phone call. Standard plan highlighted as "MOST POPULAR" with primary border and glow. "View All Plans" link navigates to `/plans`. |
| `components/home/Testimonials.jsx` | Swiper carousel of 6 customer reviews from `data/testimonials.js`. Each slide shows a quote icon, review text in quotes, customer name, location, and star rating (amber/gray stars). Background uses `bg-primary` for proper section color alternation. Auto-advances every 5s. |
| `components/home/AvailabilityChecker.jsx` | Pincode input field (6 digits, numeric only) with map marker icon. On submit, simulates a check against a hardcoded list of valid Pune-area pincodes (411001–412115). Shows animated spinner during "checking" state (1.5s), then success (green, "Service Available!") or error (red, "Not Available Yet") feedback. Section has `id="availability-checker"` for scroll targeting from anywhere in the app. Background uses `bg-tertiary`. |
| `components/home/PlanFinderQuiz.jsx` | 3-step interactive quiz. Start screen with emoji and "Start Quiz" CTA. Each step shows a question from `data/quizQuestions.js` with progress dots, radio-style options with hover effects, and a back button. After all answers, calls `getRecommendedPlan()` and displays the matched plan with name, speed, price, and CTAs ("Get This Plan" and "Retake Quiz"). Now mounted on the Plans page, not Home. |
| `components/home/GetInTouch.jsx` | CTA section with headline "Ready to Get Connected?", phone/email links in bordered cards, and a "Contact Us" button linking to `/contact`. Currently not mounted on any page but kept in the codebase for potential reuse. |

### About Page Sections

| File | Description |
|---|---|
| `components/about/CompanyStory.jsx` | Narrative section about Skynet's founding story. Below the text: three cards for Mission, Vision, and Values with icons and descriptions. |
| `components/about/TeamSection.jsx` | Displays 3 team members from `data/team.js`. Each card shows a colored circle with initials, name, role, and a quote. Staggered entrance animation. |

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

---

## OTT Partners

The OTT scroll bar displays logos for the following streaming platforms:

| Partner | Image File |
|---|---|
| Prime Video | `Prime video.png` |
| JioHotstar | `JioHotstar.jpg` |
| Voot | `Voot.jpg` |
| Shemaroo | `Shemaroo.jpg` |
| EkTV | `EkTV_.png` |
| OTTplay | `OTTPlay.png` |
| Playbox TV | `PlayBoxTV.jpg` |
| Sony Liv | `SonyLIV_2020.png` |
| Zee5 | `Z5.png` |

All images are stored in `public/images/Scroll_bar/` and referenced as `/images/Scroll_bar/...` in the code (Vite serves `public/` at root).

---

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
