export const siteStructure = [
  "Hero",
  "About",
  "Services",
  "Testimonials",
  "Gallery",
  "Contact",
];

export const navStructure = ["About", "Services", "Contact"];

export const siteConfig = {
  visualMood: "clean, minimal, modern",
  toneKeywords: ["trustworthy", "earthy", "local", "inviting"],
  visualPrompt: `Generate a set of 6 images for a landscaping business website. The layout is minimal and earthy, using sunshine yellow, earthy green, and burnt orange. Include:
  • Hero image (full-width, welcoming backyard garden)
  • 4 service icon images (Lawn Mowing, Tree Trimming, Garden Design, Seasonal Cleanup)
  • Testimonial background with soft texture
  • Before/after landscaping transformation collage
Style: clean, consistent lighting, modern framing, slight editorial look. Do not include any text in the images.`,
  industry: "Landscaping",
  name: "Evergreen Landscapes",
  tagline: "Bringing Nature to Your Doorstep",
  description:
    "Evergreen Landscapes provides professional landscaping services for homes and businesses. We specialize in sustainable, elegant outdoor transformations tailored to your needs.",
  callToAction: {
    label: "Get a Free Estimate",
    href: "#contact",
  },
  hours: {
    monFri: "8:00 AM – 6:00 PM",
    sat: "9:00 AM – 3:00 PM",
    sun: "Closed",
  },
  hero: {
    heading: { before: "Transform Your", highlight: "Outdoor Space" },
    subheading:
      "Professional landscaping services to beautify your property year-round.",
    backgroundImage: "/images/hero.png",
  },
  about: {
    heading: { before: "Why Choose", highlight: "Evergreen" },
    text: "With over 10 years of experience, Evergreen Landscapes delivers expert craftsmanship, reliable service, and stunning results.",
    quote:
      "Landscaping is the art of sculpting nature to reflect your lifestyle.",
    image: "/images/about.png",
  },
  services: [
    {
      title: "Lawn Mowing",
      description:
        "Keep your property looking pristine with our expert lawn mowing services. We ensure consistent, even cuts that promote healthy growth, enhance curb appeal, and maintain the beauty of your outdoor space all season long.",
      image: "/images/mowing.png",
    },
    {
      title: "Tree Trimming",
      description:
        "Protect the health and structure of your trees with our professional trimming services. We safely remove dead or overgrown branches, improve sunlight penetration, and shape trees to boost the overall aesthetic of your landscape.",
      image: "/images/trim.jpeg",
    },
    {
      title: "Garden Design",
      description:
        "Transform your yard into a stunning, functional oasis with our tailored garden designs. We combine expert horticultural knowledge with artistic flair to create lush gardens that reflect your style and enhance your outdoor living experience.",
      image: "/images/design.png",
    },
    {
      title: "Seasonal Cleanup",
      description:
        "Prepare your property for the changing seasons with our comprehensive cleanup services. From leaf removal to storm debris clearing and mulching, we refresh and restore your landscape to keep it healthy, clean, and ready for what's next.",
      image: "/images/clean.png",
    },
  ],
  testimonials: [
    {
      name: "Jessica M.",
      quote: "They transformed my backyard into a paradise. Highly recommend!",
      rating: 5,
    },
    {
      name: "Daniel S.",
      quote: "Great service, on time, and very professional. Will hire again!",
      rating: 5,
    },
    {
      name: "Laura G.",
      quote: "Our garden has never looked better. Beautiful work!",
      rating: 4,
    },
    {
      name: "Mike R.",
      quote: "Reliable and affordable. Best landscaping team in town.",
      rating: 5,
    },
  ],
  gallery: [
    {
      before: "/images/before1.png",
      after: "/images/after1.png",
    },
    {
      before: "/images/before2.png",
      after: "/images/after2.png",
    },
  ],
  contact: {
    heading: { before: "Request Your", highlight: "Free Quote" },
    subtext: "Reach out today and let’s bring your outdoor vision to life.",
    email: "contact@evergreenlandscapes.com",
    phone: "(555) 123-4567",
    image: "/images/contact.jpg",
  },
  social: {
    facebook: "https://facebook.com/evergreenlandscapes",
    instagram: "https://instagram.com/evergreenlandscapes",
    website: "https://www.evergreenlandscapes.com",
  },
  formSettings: {
    method: "POST",
    action: "https://hooks.zapier.com/hooks/catch/123456/abcde",
    provider: "zapier",
  },
  themeOptions: {
    borderRadius: "2xl",
    shadow: "md",
    fontWeightHeading: "semibold",
    maxWidth: "7xl",
  },
};

