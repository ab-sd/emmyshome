# How to Customise This Template for a New Client

This guide assumes you can copy a folder and edit one file.
No deep coding knowledge needed for standard customisations.

---

## The Golden Rule

**You only need to edit ONE file: `client.config.js`**

Everything — colours, logo, business name, phone number, services, map,
contact form, pages on/off — is controlled from that single file.

---

## Step-by-Step for Each New Client

### 1. Duplicate the Template Folder

Copy your template folder and rename it for the client:
```
business-template/          ← original (never touch this)
clients/
  joe-plumbing/             ← copy of template, renamed
  hair-salon-sandy/
  car-wash-jhb/
```

### 2. Open `client.config.js`

This is the only file you'll edit. It has 8 sections.
Work through them one at a time:

---

## Section-by-Section Guide

### BUSINESS DETAILS
```js
business: {
  name: "Joe's Plumbing",           ← Business name
  tagline: "Fast & reliable",       ← Short slogan
  phone: "071 234 5678",            ← Phone number shown on site
  email: "joe@joesplumbing.co.za",  ← Email address
  address: "45 Rooihuiskraal Rd, Centurion",
  whatsappNumber: "27712345678",    ← 27 + number WITHOUT the leading 0
}
```

> Tip: 0712345678 becomes 27712345678 (replace first 0 with 27)

---

### BRANDING (Logo & Colours)

**Logo:**
1. Get the logo file from the client (PNG or SVG with transparent background is best)
2. Put it in `/public/images/logo.png`
3. Set `logoImage: "/images/logo.png"`
4. Adjust `logoWidth` until it looks right (try 120–180)

**If no logo:** leave `logoImage: null` — the business name shows as text instead.

**Logo position:** `"left"` (standard) or `"center"` (more formal feel)

**Colours:**
```js
primaryColor: "#1a1a2e"   ← Navbar, hero, dark sections
secondaryColor: "#e94560" ← Buttons, accents, highlights
```

How to find a client's colours:
- Ask them: "What's your brand colour?"
- If they have a logo, use a colour picker (free at imagecolorpicker.com)
- If they don't care, pick something clean that fits their industry:
  - Trades (plumber, electrician): dark navy + orange
  - Health/beauty: soft pink + white or teal + white
  - Food: warm red/orange + dark
  - Professional services: dark navy + gold

**Font:** Change `fontFamily` to any Google Font name.
Popular choices: "Poppins", "Nunito", "Raleway", "Montserrat", "Lato"

---

### PAGES (Turn pages on/off)
```js
pages: {
  home: true,       ← Always true
  about: true,
  services: true,
  gallery: false,   ← Set true if client has photos
  contact: true,    ← Always true
}
```

Pages set to `false` disappear from the navbar automatically.

---

### HOME PAGE

**Hero title:** Use `\n` for a line break
```js
heroTitle: "Johannesburg's Best\nHair Salon"
```

**Hero image:** Put a photo in `/public/images/hero.jpg`
```js
heroImage: "/images/hero.jpg",
heroOverlayOpacity: 0.5,  ← 0 = no overlay, 1 = fully dark. 0.5 is usually good.
```

**Stats bar:** 3 numbers under the hero
```js
stats: [
  { number: "8+",   label: "Years Experience" },
  { number: "500+", label: "Happy Clients" },
  { number: "5★",   label: "Google Rating" },
],
```
Set `showStats: false` to hide completely.

---

### ABOUT PAGE

Edit the paragraphs array. Add or remove paragraphs freely:
```js
paragraphs: [
  "First paragraph about the business.",
  "Second paragraph.",
  "Third paragraph if needed.",
],
```

Edit the features (why choose us bullets):
```js
features: [
  "10 years experience",
  "Fully qualified and insured",
  "Same-day service",
],
```

Add an about photo:
```js
image: "/images/about.jpg",
```

---

### SERVICES PAGE

Add or remove services. You can have 2 or 12 — the grid adjusts automatically.
```js
items: [
  {
    icon: "🔧",           ← Any emoji, or "" for none
    title: "Geyser Repair",
    description: "We fix all geyser brands same day.",
  },
  {
    icon: "🚿",
    title: "Bathroom Installations",
    description: "Full bathroom fit-outs from start to finish.",
  },
],
```

---

### GALLERY PAGE (optional)

1. Set `pages.gallery: true`
2. Put photos in `/public/images/gallery/`
3. Add them to the config:
```js
images: [
  { src: "/images/gallery/job1.jpg", caption: "Geyser replacement" },
  { src: "/images/gallery/job2.jpg", caption: "New bathroom" },
],
```

---

### CONTACT PAGE

**Google Maps embed:**
1. Go to maps.google.com
2. Search the business address
3. Click Share → Embed a map → Copy the `src="..."` URL (just the URL, not the whole iframe)
4. Paste in `mapEmbedUrl`

**Contact form (Formspree):**
1. Go to formspree.io → Sign up (free)
2. Create a new form → copy the ID from the URL (looks like `xabcdefg`)
3. Set `formspreeId: "xabcdefg"`
4. Form submissions go to the client's email. Done.

Toggle what shows:
```js
showWhatsApp: true,
showPhone: true,
showEmail: true,
showAddress: true,
showMap: true,
showForm: true,
```

---

### SEO

This is what shows in Google search results:
```js
seo: {
  title: "Joe's Plumbing | Emergency Plumber in Johannesburg",
  description: "Fast, affordable plumbing services in Johannesburg. Available 24/7. Call Joe today.",
  keywords: "plumber johannesburg, emergency plumber, affordable plumber jhb",
}
```

Keep description under 160 characters.
Use the client's area name + service type in the title.

---

## Adding Images

Put all images in `/public/images/`.
- `logo.png` — client logo
- `hero.jpg` — big background photo
- `about.jpg` — photo for about page
- `gallery/` — folder for gallery images

Image tips:
- Ask the client to send you photos on WhatsApp
- Resize large images to max 1400px wide (use squoosh.app — free, drag and drop)
- JPG for photos, PNG for logos with transparent backgrounds

---

## Deploying to Vercel (New Client)

After editing `client.config.js` and testing locally:

1. Create a new GitHub repo for this client
2. Push the code
3. Go to vercel.com → New Project → Import the repo → Deploy
4. In Vercel project settings → Domains → Add their `.co.za` domain
5. Update DNS at domains.co.za (see main setup guide)

**Time per client once you have the process down: about 1.5–2 hours**

---

## Local Testing

Run locally to check before deploying:
```bash
npm run dev
```
Then open http://localhost:3000

---

## Things You Should NOT Need to Touch

Unless you're adding a completely new feature:
- `app/layout.js`
- `components/Navbar.js`
- `components/Footer.js`
- `components/WhatsAppButton.js`
- Any page files (`app/page.js`, `app/about/page.js`, etc.)

The config drives everything. If something looks off, the fix is almost always in `client.config.js`.

---

## Pricing Reminder

| What they get | Your price |
|---|---|
| Basic site (up to 5 pages) | R1,800 once-off |
| Monthly hosting management | R150/month |
| Domain purchase + setup | R80–R150 markup |
| Gallery page | Included |
| Contact form + WhatsApp button | Included |
| Booking system / payments | Quote separately (R3,000+) |
| E-commerce / online store | Quote separately (R5,000+) |
