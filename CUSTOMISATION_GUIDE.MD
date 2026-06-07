# Customisation Guide

> Read PROJECT.md first for the full file map and how things connect.
> This file is purely "what to change and where" for each client.

---

## The One Rule

**Only edit `client.config.js`.** Nothing else for a standard client.

---

## Quick Reference — Config Sections

| Section | What it controls |
|---|---|
| `business` | Name, phone, email, address, WhatsApp number |
| `brand` | Logo, colours, font |
| `pages` | Which pages appear in the navbar |
| `home` | Hero title/subtitle/image, stats bar, CTA button |
| `about` | Paragraphs, photo, feature checklist |
| `services` | Service cards (icon, title, description) |
| `gallery` | Photo grid images |
| `contact` | Map embed, Formspree ID, which contact items show |
| `social` | Facebook, Instagram, TikTok, Twitter links |
| `seo` | Google search title, description, keywords |

---

## BUSINESS DETAILS

```js
business: {
  name: "Joe's Plumbing",
  tagline: "Fast & reliable",
  phone: "071 234 5678",
  email: "joe@joesplumbing.co.za",
  address: "45 Rooihuiskraal Rd, Centurion, 0157",
  whatsappNumber: "27712345678",   // 27 + number, no leading 0
}
```

WhatsApp format: `0712345678` → `27712345678` (replace leading 0 with 27)

---

## BRANDING

**Logo:**
```js
logoImage: "/images/logo.png",   // Put file in /public/images/logo.png
logoImage: null,                 // Shows business name as text if no logo
logoWidth: 140,                  // Adjust between 100–200 until it fits
logoPosition: "left",            // "left" or "center"
```

**Colours:**
```js
primaryColor:   "#1a1a2e",   // Navbar, hero, dark sections, footer
secondaryColor: "#e94560",   // Buttons, highlights, card accents
```

Industry colour suggestions:
- Trades (plumber, electrician, mechanic): dark navy `#0d1b2a` + orange `#f4721e`
- Beauty (salon, nails, spa): charcoal `#2d2d2d` + rose `#e8a0a0` or teal `#4a9b8e`
- Food / catering: dark `#1c1c1c` + warm red `#c0392b`
- Professional services: navy `#1a2744` + gold `#c9a84c`
- Health / fitness: dark green `#1b3a2d` + lime `#7ab648`
- General / safe default: `#1a1a2e` + `#e94560`

**Font:** Any Google Font name. Good safe choices:
- Modern clean: `"Poppins"`, `"Nunito"`, `"DM Sans"`
- More formal: `"Raleway"`, `"Montserrat"`
- Elegant: `"Playfair Display"`, `"Cormorant Garamond"`

---

## PAGES (on/off)

```js
pages: {
  home: true,       // Always true
  about: true,
  services: true,
  gallery: false,   // true only if client has real photos
  contact: true,    // Always true
}
```

Pages set to `false` vanish from navbar and footer automatically.

---

## HOME PAGE

```js
heroTitle: "Johannesburg's Best\nHair Salon",  // \n = line break
heroSubtitle: "Walk-ins welcome. Book via WhatsApp.",
heroImage: "/images/hero.jpg",    // null = solid primary colour background
heroOverlayOpacity: 0.55,         // 0–1. Higher = darker image overlay.

showStats: true,
stats: [
  { number: "8+",   label: "Years Experience" },
  { number: "500+", label: "Happy Clients" },
  { number: "5★",   label: "Google Rating" },
],
```

---

## ABOUT PAGE

```js
paragraphs: [
  "First paragraph.",
  "Second paragraph.",
  // Add or remove paragraphs freely
],
image: "/images/about.jpg",    // null = placeholder shown
showFeatures: true,
features: [
  "10 years experience",
  "Fully qualified and insured",
  // Add or remove freely
],
```

---

## SERVICES PAGE

```js
items: [
  {
    icon: "🔧",                 // Any emoji, or "" for none
    title: "Geyser Repair",
    description: "We fix all geyser brands same day.",
  },
  // Add or remove items freely — the grid adjusts automatically
],
```

---

## GALLERY PAGE

Enable the page first: `pages.gallery: true`

Then add images:
```js
images: [
  { src: "/images/gallery/job1.jpg", caption: "Geyser replacement" },
  { src: "/images/gallery/job2.jpg", caption: "New bathroom" },
],
```

Put files in `/public/images/gallery/`. Resize large photos to max 1400px wide
before adding (free tool: squoosh.app).

---

## CONTACT PAGE

**Google Maps embed:**
1. Go to maps.google.com → search the address
2. Share → Embed a map → copy only the `src="..."` URL
3. Paste into `mapEmbedUrl`

**Formspree (contact form):**
1. formspree.io → sign up free → New Form
2. Copy the ID from the form URL (e.g. `xabcxyz`)
3. Set `formspreeId: "xabcxyz"`
4. Submissions arrive in the client's email inbox

**Toggle what shows:**
```js
showWhatsApp: true,
showPhone: true,
showEmail: true,
showAddress: true,
showMap: true,
showForm: true,
```

---

## SOCIAL LINKS

```js
social: {
  facebook:  "https://facebook.com/yourbusiness",
  instagram: "https://instagram.com/yourbusiness",
  tiktok:    "",   // "" = icon hidden
  twitter:   "",
}
```

---

## SEO

```js
seo: {
  title: "Joe's Plumbing | Emergency Plumber in Johannesburg",
  description: "Fast, affordable plumbing in Johannesburg. Available 24/7.",
  keywords: "plumber johannesburg, emergency plumber, affordable plumber jhb",
}
```

Keep `description` under 160 characters.
Use: [Business type] + [area] in both title and description.

---

## Images — Where They Go

All images live in `/public/images/`. Create this folder if it doesn't exist.

| File | Config key | Purpose |
|---|---|---|
| `/public/images/logo.png` | `brand.logoImage` | Navbar logo |
| `/public/images/hero.jpg` | `home.heroImage` | Hero background |
| `/public/images/about.jpg` | `about.image` | About page photo |
| `/public/images/gallery/*.jpg` | `gallery.images[].src` | Gallery grid |

Image tips:
- Logo: PNG with transparent background preferred
- Photos: JPG, max 1400px wide (compress at squoosh.app before adding)
- Get photos from client via WhatsApp or email

---

## Local Dev and Deploy

```bash
npm install        # First time only
npm run dev        # http://localhost:3000 — check all pages before deploying
npm run build      # Verify no errors before pushing to GitHub
```

Push to GitHub → Vercel auto-deploys.

**Per-client DNS (domains.co.za → Vercel):**

Add these two records in domains.co.za DNS management:
```
Type: A      Name: @    Value: 76.76.21.21
Type: CNAME  Name: www  Value: cname.vercel-dns.com
```
Wait 5–30 minutes. Site goes live at the .co.za domain.

---

## Pricing Reference

| Deliverable | Your price |
|---|---|
| Standard site (up to 5 pages) | R1,800 once-off |
| Monthly maintenance | R150/month |
| Domain purchase + DNS setup | R80–R150 markup |
| Gallery page (if client has photos) | Included |
| Additional page | R300–R500 |
| Booking system / calendar | R3,000+ (quote) |
| E-commerce / online store | R5,000+ (quote) |