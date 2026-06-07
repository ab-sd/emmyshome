# File Structure and Map

This document outlines the file tree structure of the landing page template and explains what each file and folder contains or does.

---

## Directory Tree

```text
├── client.config.js          # Central client customization file (Single source of truth)
├── package.json              # Project scripts and dependencies (Next.js 16, React 19)
├── next.config.ts            # Next.js configurations
├── tsconfig.json             # TypeScript configuration
├── postcss.config.mjs        # PostCSS configuration for Tailwind CSS v4
├── eslint.config.mjs         # ESLint rules configuration
├── README.md                 # Project quickstart guide
├── CUSTOMISATION_GUIDE.MD    # Original developer-centric customization guide
├── CUSTOMIZE.md              # Alternative customization overview
├── app/                      # Next.js App Router (pages and layouts)
│   ├── favicon.ico           # Browser shortcut icon
│   ├── layout.js             # Root layout (handles fonts, global CSS vars, metadata)
│   ├── page.js               # Home/Landing page component
│   ├── about/
│   │   └── page.js           # "About Us" page component
│   ├── services/
│   │   └── page.js           # "Services" page component
│   ├── gallery/
│   │   └── page.js           # "Gallery" page component (renders if enabled)
│   └── contact/
│       └── page.js           # "Contact Us" page component (with Formspree + Google Map)
├── components/               # Shared interface components
│   ├── Navbar.js             # Sticky navbar (responsive hamburger menu + active page toggles)
│   ├── Footer.js             # Site footer (brand, social links, contact info, developer credits)
│   └── WhatsAppButton.js     # Floating pulsing widget linked to client WhatsApp
└── public/                   # Static directory (logos, banner graphics, and user uploads)
    ├── next.svg              # Next.js asset
    ├── vercel.svg            # Vercel asset
    └── images/               # [CREATE THIS] Store logo.png, hero.jpg, about.jpg here
        └── gallery/          # [CREATE THIS] Store images for the gallery page here
```

---

## File Details and Responsibilities

### 1. Root Configuration Files

*   **[`client.config.js`](file:///c:/Users/Abdul/Downloads/business-template/business-template/client.config.js)**: 
    *   **Purpose**: The central file containing all business, branding, page activation, and content configurations. 
    *   **Usage**: Changing code in this file is the primary way to customize a website for a new client without touching pages or components. It defines colors, typography, WhatsApp numbers, services, about texts, SEO metadata, and Formspree keys.
*   **`package.json`**: 
    *   **Purpose**: Stores project dependencies and scripts.
    *   **Key Scripts**:
        *   `npm run dev`: Starts the local Next.js development server at `http://localhost:3000`.
        *   `npm run build`: Compiles the application into a production-ready bundle. Important for detecting TypeScript, ESLint, or runtime errors before deployment.
*   **`next.config.ts` / `next.config.mjs`**: 
    *   **Purpose**: Next.js core framework settings.

### 2. Next.js Routing and Views (`/app`)

*   **[`app/layout.js`](file:///c:/Users/Abdul/Downloads/business-template/business-template/app/layout.js)**: 
    *   **Purpose**: Wraps the entire website.
    *   **Functions**:
        1. Loads the configured Google Font dynamically from Google Fonts API.
        2. Sets up CSS custom properties (variables) on `:root` based on config hex colors (e.g. `--primary`, `--secondary`).
        3. Defines SEO metadata tags (`title`, `description`, `keywords`) dynamically for the head element.
        4. Contains global styling rules, CSS resets, button styles (`.btn`, `.btn--primary`), and page container grids (`.container`, `.section`).
*   **[`app/page.js`](file:///c:/Users/Abdul/Downloads/business-template/business-template/app/page.js)**:
    *   **Purpose**: Renders the core landing page.
    *   **Sections**:
        *   *Hero Section*: Main background image (or solid color), headline, sub-headline, and an instant WhatsApp call-to-action button.
        *   *Stats Bar*: Quick highlights like "5+ Years Experience" or "200+ Happy Clients" (optional).
        *   *Services Preview*: Displays the first 4 services with a link to "View All Services".
        *   *Why Choose Us*: Renders the first paragraph of the about text, a checklist of features, and an optional team/office photo.
        *   *Bottom CTA Banner*: A final prompt to contact the business via WhatsApp.
*   **[`app/about/page.js`](file:///c:/Users/Abdul/Downloads/business-template/business-template/app/about/page.js)**:
    *   **Purpose**: Displays the full business background. Renders an image, multiple paragraphs, and a dynamic grid of customer benefits/selling points.
*   **[`app/services/page.js`](file:///c:/Users/Abdul/Downloads/business-template/business-template/app/services/page.js)**:
    *   **Purpose**: Renders the complete list of offered services in an automated grid, complete with customizable titles, descriptions, and emojis.
*   **[`app/gallery/page.js`](file:///c:/Users/Abdul/Downloads/business-template/business-template/app/gallery/page.js)**:
    *   **Purpose**: Shows client work pictures. Renders a grid of caption-based photos, or a fallback warning if no images are specified in `client.config.js`.
*   **[`app/contact/page.js`](file:///c:/Users/Abdul/Downloads/business-template/business-template/app/contact/page.js)**:
    *   **Purpose**: Let clients reach the business.
    *   **Includes**:
        *   Contact items (Phone, Email, WhatsApp, Physical Address).
        *   An interactive AJAX form that sends inputs directly to Formspree, handling loading and success screens.
        *   An embedded responsive Google Maps iframe.

### 3. Shared Components (`/components`)

*   **[`components/Navbar.js`](file:///c:/Users/Abdul/Downloads/business-template/business-template/components/Navbar.js)**: 
    *   **Purpose**: Top sticky navigation menu.
    *   **Functions**: Displays the logo or text fallback, retrieves enabled page settings, and triggers a slide-out drawer on mobile screens.
*   **[`components/Footer.js`](file:///c:/Users/Abdul/Downloads/business-template/business-template/components/Footer.js)**:
    *   **Purpose**: Bottom information banner.
    *   **Functions**: Shows a summary of the business, active menu options, social media icons, and business contacts. Also features developer copyright info.
*   **[`components/WhatsAppButton.js`](file:///c:/Users/Abdul/Downloads/business-template/business-template/components/WhatsAppButton.js)**:
    *   **Purpose**: Floating action button.
    *   **Functions**: Fixed in the bottom-right corner, it pulses to draw attention and redirects users straight to a pre-filled WhatsApp conversation on click.

### 4. Assets (`/public`)

*   **`/public/images/`**:
    *   **Purpose**: Must be created by the developer. Used to save image assets such as `logo.png`, `hero.jpg`, and `about.jpg`.
*   **`/public/images/gallery/`**:
    *   **Purpose**: Subfolder where all the project gallery images are saved (e.g., `job1.jpg`, `job2.jpg`).
