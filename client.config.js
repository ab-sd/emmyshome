// client.config.js

const clientConfig = {
  business: {
    name: "Emmy Home Helpers Service",
    tagline:
      "Your Trusted Partner for Reliable, Professional, and Caring Home Support.",
    phone: "068 048 2315",
    // Multiple emails: separate with a comma (no spaces around it)
    email:
      "emmyhomehelpers@protonmail.com,emmyhomehelpers@gmail.com",
    address: "Cape Town, Western Cape, South Africa",
    // Primary WhatsApp number – international format, no spaces or symbols
    whatsappNumber: "27680482315",
  },

  brand: {
    logoImage: "/images/logo.png",
    logoPosition: "left",
    logoWidth: 160,
    primaryColor: "#096028",
    secondaryColor: "#156730",
    textOnPrimary: "#ffffff",
    lightBg: "#E7EEE7",
    darkBg: "#074A21",
    bodyText: "#2C3E50",
    fontFamily: "Inter",
  },

  pages: {
    home: true,
    about: true,
    services: true,
    gallery: true,   // enabled – add worker photos to /public/images/gallery/
    contact: true,
  },

  home: {
    heroTitle: "Tailored Home Services\nfor Your Comfort",
    heroSubtitle:
      "Professional cleaning, care, and home support across Cape Town and all suburbs. Available 24/7.",
     heroImage: "/images/hero.jpg",          // ✅ set to hero image
    heroOverlayOpacity: 0.55,               // dark overlay for readability
    ctaText: "WhatsApp Us Now",
    ctaLink: "",

    showStats: true,
    stats: [
      { number: "24/7", label: "Always Available" },
      { number: "Trained", label: "Verified Staff" },
      { number: "All Areas", label: "Western Cape" },
      { number: "100%", label: "Satisfaction Priority" },
    ],

    cinematicSection: {
      enabled: false,
    },
  },

  about: {
    heading: "About Emmy Home Helpers Service",
    subheading:
      "Your Trusted Partner for Reliable, Professional, and Caring Home Support.",
    paragraphs: [
      "At Emmy Home Helpers Service, we are dedicated to making everyday living easier. Whether you need regular cleaning, laundry assistance, meal preparation, elderly care, or general home maintenance, our trained team is ready to deliver with excellence and attention to detail.",
      "We understand that your home is your comfort space. That’s why we focus on creating a clean, safe, and welcoming environment. Our staff are carefully selected, trustworthy, and committed to high standards of service and respect in every home.",
      "Based in Cape Town, we serve all suburbs – from the CBD to the Southern Suburbs, Northern Suburbs, and surrounding areas. Choose us for peace of mind, convenience, and dependable home care solutions you can count on.",
    ],
    image: "/images/about.jpg", 
    imageAlt: "Emmy Home Helpers staff at work",

    showFeatures: true,
    features: [
      "Trained, verified and background‑checked staff",
      "Tailored home services to fit your needs",
      "Flexible scheduling: daily, weekly, or once‑off",
      "Compassionate elderly and companion care",
      "Affordable pricing with no hidden fees",
      "Serving all Cape Town suburbs and Western Cape",
    ],
  },

  services: {
    heading: "Our Services",
    subheading:
      "From housekeeping to elderly care – we make your home run smoothly.",
    imageFit: "contain",
      items: [
      {
        icon: null,
        title: "Home Cleaning (Indoor & Outdoor)",
        description:
          "Thorough house cleaning, organising, and outdoor upkeep. Your home will always feel fresh and welcoming.",
        image: "/images/services/home-cleaning.jpg",   // add path like "/images/services/cleaning.jpg" later
      },
      {
        icon: "👕",
        title: "Laundry & Ironing",
        description:
          "Washing, drying, ironing and folding – handled with care so you never have to worry about piles of laundry.",
        image: "/images/services/laundry.jpg",
      },
      {
        icon: "🍳",
        title: "Meal Preparation & Cooking",
        description:
          "Nutritious, tasty meals prepared to your dietary needs and preferences. Enjoy delicious food without the effort.",
        image: "/images/services/meal-prep.jpg",
      },
      {
        icon: "👴",
        title: "Elderly & Companion Care",
        description:
          "Compassionate support and companionship for seniors. We treat your loved ones with dignity and respect.",
        image: "/images/services/elderly.jpg",
      },
      {
        icon: "👶",
        title: "Childcare & Babysitting",
        description:
          "Trustworthy, nurturing childcare for infants and young children. Your little ones are in safe hands.",
        image: "/images/services/childcare.jpg",
      },
      {
        icon: "🐾",
        title: "Pet Walking & Care",
        description:
          "Reliable walks, feeding, and basic pet care. We keep your furry friends happy and active.",
        image: "/images/services/pet-walking.jpg",
      },
      {
        icon: "🌿",
        title: "Gardening & Handyman Services",
        description:
          "Garden maintenance, minor repairs, and general handyman tasks to keep your property in top shape.",
        image: "/images/services/handyman.jpg",
      },
      {
        icon: "🛒",
        title: "Errands & Daily Assistance",
        description:
          "Grocery runs, prescription pick‑ups, and other everyday errands. We free up your time so you can focus on what matters.",
        image: "/images/services/errands.jpg",
      },
    ],

    showCTA: true,
    ctaHeading: "Not Sure What You Need?",
    ctaText: "Chat on WhatsApp",
    ctaLink: "",
  },

  gallery: {
    heading: "Our Team in Action",
    subheading:
      "See our dedicated, caring staff at work across Cape Town.",
    images: [
      // Add your images like:
      { src: "/images/gallery/gallery1.jpg", caption: "" },
      { src: "/images/gallery/gallery2.jpg", caption: "" },
      { src: "/images/gallery/gallery3.jpg", caption: "" },
    ],
  },

  contact: {
    heading: "Get in Touch",
    subheading:
      "Call, WhatsApp, or email us. We’re available 24/7 across Cape Town.",

    showWhatsApp: true,
    showPhone: true,
    showEmail: true,
    showAddress: true,
    showMap: false,

    mapEmbedUrl: "",
    showForm: false,
    formspreeId: "",   // Add your Formspree form ID here
  },

  social: {
    facebook: "https://www.facebook.com/share/1HPF1gnLzh/",
    instagram: "",
    tiktok: "",
    twitter: "",
  },

  seo: {
    title:
      "Emmy Home Helpers Service | Home Cleaning, Care & Support in Cape Town",
    description:
      "Reliable, professional home helpers across Cape Town. Cleaning, childcare, elderly care & more. 24/7 availability. Call or WhatsApp 068 048 2315.",
    keywords:
      "home cleaning Cape Town, domestic worker Cape Town, elderly care Cape Town, babysitter Cape Town, housekeeper Western Cape, home help, affordable cleaning service, Emmy Home Helpers",
  },
};

export default clientConfig;