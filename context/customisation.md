# Client Customisation & Deployment Guide

This document describes how to configure, brand, customize, test, and deploy this landing page template for individual clients.

---

## 1. The Single Rule of Customisation

> [!IMPORTANT]
> **All text, contact, branding, and content customisations should be performed inside [`client.config.js`](file:///c:/Users/Abdul/Downloads/business-template/business-template/client.config.js).** 
> Try to avoid modifying the core components or pages unless the client requests layout variations, new components, or custom logic.

---

## 2. Configuration Settings Breakdown

Modify the sections of `clientConfig` as follows:

| Field Section | Configuration Properties | Details / Instructions |
| :--- | :--- | :--- |
| **`business`** | `name`, `tagline`, `phone`, `email`, `address`, `whatsappNumber` | Enter core client details. Ensure `whatsappNumber` has **no spaces, no symbols, and includes international prefix without 0** (e.g. South Africa: `27710000000`). |
| **`brand`** | `logoImage`, `logoPosition`, `logoWidth`, `primaryColor`, `secondaryColor`, `textOnPrimary`, `lightBg`, `darkBg`, `bodyText`, `fontFamily` | **Logo**: Add to `/public/images/logo.png`. Set `logoImage` to `null` to use typography fallback.<br>**Colors**: Hex color strings (e.g., `#1a2744`).<br>**Font**: Enter any Google Font name (e.g., `"Montserrat"`). |
| **`pages`** | `home`, `about`, `services`, `gallery`, `contact` | `true` or `false` booleans. Set `gallery: false` if the client does not have original project photos. Toggling a page to `false` automatically removes it from Navbar and Footer navigation menus. |
| **`home`** | `heroTitle`, `heroSubtitle`, `heroImage`, `heroOverlayOpacity`, `ctaText`, `ctaLink`, `showStats`, `stats` | Use `\n` to insert line breaks inside `heroTitle`. Leave `ctaLink` empty `""` to default to the business's WhatsApp link. Adjust overlay opacity (range `0.0` to `1.0`) to make white text readable. |
| **`about`** | `heading`, `subheading`, `paragraphs`, `image`, `imageAlt`, `showFeatures`, `features` | `paragraphs` and `features` are arrays of strings. Add/remove items as needed. Set `image: null` to render a dynamic placeholder. |
| **`services`** | `heading`, `subheading`, `items`, `showCTA`, `ctaHeading`, `ctaText`, `ctaLink` | Custom items are structured as `{ icon: "🔧", title: "Name", description: "Details" }`. The grid dynamically repositions layouts based on item counts. Use standard system emojis for icons. |
| **`gallery`** | `heading`, `subheading`, `images` | Add images to `/public/images/gallery/` and list them as objects: `{ src: "/images/gallery/filename.jpg", caption: "Caption text" }`. |
| **`contact`** | `heading`, `subheading`, `showWhatsApp` ... `showForm`, `mapEmbedUrl`, `formspreeId` | **Formspree**: Sign up at [formspree.io](https://formspree.io/), create a new form, and paste the hash ID (e.g., `"xxxxxyyy"`).<br>**Maps URL**: Paste the source parameter `src="..."` from Google Maps iframe HTML. |
| **`social`** | `facebook`, `instagram`, `tiktok`, `twitter` | Paste full URLs. Use an empty string `""` to automatically hide the social icon. |
| **`seo`** | `title`, `description`, `keywords` | Crucial for Google indexing. Keep `description` under 160 characters. Format title as: `[Business Name] | [Service] in [City/Location]`. |

---

## 3. Brand Styling Design Chart

Use this palette recommendation guide for local services:

*   **Plumbers, Mechanics, Electricians (Trades)**:
    *   Primary: `#0d1b2a` (Navy) | Secondary: `#f4721e` (Orange)
*   **Spas, Salons, Aesthetic Studios (Beauty)**:
    *   Primary: `#2d2d2d` (Charcoal) | Secondary: `#e8a0a0` (Rose Gold) or `#4a9b8e` (Teal)
*   **Restaurants, Caterers, Bakeries (Food)**:
    *   Primary: `#1c1c1c` (Dark Brown/Black) | Secondary: `#c0392b` (Warm Crimson)
*   **Lawyers, Accountants, Consultancies (Corporate)**:
    *   Primary: `#1a2744` (Oxford Navy) | Secondary: `#c9a84c` (Gold)
*   **Personal Trainers, Gyms (Fitness)**:
    *   Primary: `#1b3a2d` (Forest Green) | Secondary: `#7ab648` (Lime Green)

---

## 4. Image Preparation Instructions

All photos must be placed inside the `/public/` directory.

1.  **Create the Images Directory**:
    Create `/public/images/` and `/public/images/gallery/` folders first, as they do not exist by default.
2.  **Logo File**:
    *   Save client logo as `/public/images/logo.png` (transparent background PNG preferred).
3.  **Content Photos**:
    *   Save Hero Background as `/public/images/hero.jpg`.
    *   Save About Page Photo as `/public/images/about.jpg`.
4.  **Compression Guidelines**:
    *   Do **not** upload raw mobile photos (often 5MB to 10MB each), as they will cause poor page load performance.
    *   Scale images to a maximum width of `1400px` and run them through a compression utility (e.g., [squoosh.app](https://squoosh.app/)). Keep file sizes under `200KB` where possible.

---

## 5. Integrating External Services

### A. Google Maps Embed
1.  Navigate to [Google Maps](https://maps.google.com) and search for the client's business address.
2.  Click **Share** -> **Embed a Map**.
3.  Choose **Medium** size.
4.  Locate the HTML snippet (e.g., `<iframe src="https://www.google.com/maps/embed?..." ...></iframe>`).
5.  Extract and copy **only** the address within the `src="..."` double-quotes.
6.  Paste this URL into `contact.mapEmbedUrl` in [`client.config.js`](file:///c:/Users/Abdul/Downloads/business-template/business-template/client.config.js).

### B. Contact Form (Formspree)
1.  Sign up for a free developer account at [formspree.io](https://formspree.io/).
2.  Select **Create New Form**.
3.  Set the Form Name (e.g., "Client Name - Contact Form") and configure the destination email.
4.  Once created, locate the form target endpoint URL: `https://formspree.io/f/xabcxyz`.
5.  Copy the hash endpoint code at the end (`xabcxyz`).
6.  Paste it into `contact.formspreeId` in [`client.config.js`](file:///c:/Users/Abdul/Downloads/business-template/business-template/client.config.js).

---

## 6. Development, Quality Assurance, and Deployment

### A. Local Run and Verification
Before sending screenshots to the client, verify the code functions correctly:

```bash
# 1. Install required packages (run once)
npm install

# 2. Launch the developer local server
npm run dev
```

*   Open `http://localhost:3000` in your web browser.
*   Inspect the mobile menu view.
*   Click every navigation link.
*   Click the floating WhatsApp widget to verify the phone number is correctly formatted and routes to wa.me.

### B. Production Compiler Test
Run the compiler check to ensure everything is correct:
```bash
npm run build
```
Ensure there are no build, typescript, or file path errors.

### C. Deploying to Vercel
1.  Commit the local changes and push the repository to a new remote repository on GitHub.
2.  Sign in to [Vercel](https://vercel.com).
3.  Click **Add New** -> **Project**.
4.  Import the GitHub repository.
5.  Leave build settings as default (Vercel automatically detects Next.js configurations).
6.  Click **Deploy**.

### D. Custom Domains Setup (.co.za)
If the client bought a domain from a registrar like domains.co.za:
1.  In the Vercel Dashboard, go to **Settings** -> **Domains**.
2.  Add the custom domain (e.g. `clientbusiness.co.za`).
3.  Log in to the DNS administration panel of the domain registrar.
4.  Add these DNS records:
    *   **Type**: `A` | **Name**: `@` | **Value**: `76.76.21.21`
    *   **Type**: `CNAME` | **Name**: `www` | **Value**: `cname.vercel-dns.com`
5.  Wait for global DNS propagation (typically 5 to 30 minutes).
