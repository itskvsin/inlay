export const allServices = [
  { n: "01", icon: "🛋️", title: "Living Room Design", desc: "Harmonising social dynamics with private comfort through bespoke furniture, layered lighting, and considered colour palettes." },
  { n: "02", icon: "🛏️", title: "Bedroom Design", desc: "Intimate sanctuaries crafted through tactile materiality, sound-dampening textures, and serene palettes for every room type." },
  { n: "03", icon: "🍳", title: "Kitchen Design", desc: "Where culinary precision meets architectural elegance. Modular kitchens, open concepts, and custom islands built to last." },
  { n: "04", icon: "🍽️", title: "Dining Room", desc: "Curated settings for connection — custom tables, statement lighting, and feature walls that elevate every meal." },
  { n: "05", icon: "🚿", title: "Bathroom Design", desc: "Spa-inspired retreats utilising artisanal hardware, thoughtful tiling, and therapeutic layouts." },
  { n: "06", icon: "💼", title: "Office & Commercial", desc: "Ergonomic design and integrated solutions for corporate offices, clinics, and retail spaces across Gujarat." },
  { n: "07", icon: "🏠", title: "Full Home Interiors", desc: "A holistic, end-to-end turnkey approach ensuring a seamless flow of style and purpose across your entire residence." },
  { n: "08", icon: "🗄️", title: "Wardrobe & Storage", desc: "Custom wardrobes, walk-in closets, and built-in storage solutions that treat your belongings as a curated exhibition." },
] as const;

export const processSteps = [
  { n: "01", title: "Consultation", desc: "A complimentary session where we explore your lifestyle, preferences, functional needs, and project budget in depth." },
  { n: "02", title: "Concept", desc: "Development of mood boards, spatial layouts, and material palettes — presented for your review and refinement." },
  { n: "03", title: "Execution", desc: "Site work, procurement, and installation managed end-to-end, with a dedicated point of contact throughout." },
  { n: "04", title: "Handover", desc: "A final walkthrough with you. Every detail checked. Every finish inspected. Backed by a 1-month workmanship warranty." },
] as const;

export const pricingPackages = [
  {
    label: "Starter",
    from: "₹25,000",
    unit: "per room",
    highlight: false,
    features: ["Mood board & concept", "Furniture sourcing guide", "Colour palette selection", "One revision round"],
    cta: "Book a Consultation",
    href: "/contact",
  },
  {
    label: "Standard",
    from: "₹60,000",
    unit: "2–3 rooms",
    highlight: true,
    features: ["Everything in Starter", "3D layout visualisation", "Custom lighting plan", "Contractor liaison", "Two revision rounds"],
    cta: "Book a Consultation",
    href: "/contact",
  },
  {
    label: "Full Home",
    from: "₹1,20,000",
    unit: "complete interior",
    highlight: false,
    features: ["Everything in Standard", "Dedicated project manager", "Procurement & vendor management", "Final styling & installation", "Post-project support"],
    cta: "Enquire Now",
    href: "/contact",
  },
] as const;

export const servicesFaqs = [
  { question: "How long does a full home interior take?", answer: "Single room refreshes typically span 4–8 weeks. Full residence projects take 3 to 12 months depending on scope, structural work, and custom furniture lead times." },
  { question: "Do you work outside Ahmedabad?", answer: "Our primary studio is in Satellite, Ahmedabad. We also handle projects in Surat, Vadodara, and other Gujarat cities. Contact us to discuss your location." },
  { question: "What is included in the free consultation?", answer: "A complimentary 30-minute session — in-person or virtual — where we define the project scope, budget range, and aesthetic direction. No obligation." },
  { question: "Can I see past projects before deciding?", answer: "Absolutely. Visit our Portfolio page to browse completed projects, or request a curated presentation of work most relevant to your brief." },
  { question: "What does the 1-month warranty cover?", answer: "All workmanship defects — loose fixtures, finishing issues, or installation problems. It does not cover general wear or structural changes made after handover." },
] as const;
