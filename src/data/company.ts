export interface ProductItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  status: "available" | "coming_soon";
  playStoreUrl?: string; // To be provided officially by client
  placeholderNote: string;
}

export interface CompanyConfig {
  name: string;
  legalName: string;
  domain: string;
  url: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  address: {
    line1: string;
    city: string;
    pin: string;
    state: string;
    country: string;
    formatted: string;
  };
  copyrightYear: number;
  mission: string;
  vision: string;
  aboutSummary: string;
  focusPillars: {
    number: string;
    title: string;
    description: string;
  }[];
  capabilities: {
    title: string;
    description: string;
  }[];
}

export const COMPANY_DATA: CompanyConfig = {
  name: "YASNARGLOBAL",
  legalName: "YASNARGLOBAL PRIVATE LIMITED",
  domain: "yasnarglobal.com",
  url: "https://yasnarglobal.com",
  email: "admin@yasnarglobal.com",
  phone: "+919931957903",
  phoneDisplay: "+91 9931957903",
  address: {
    line1: "01, Romi, Azad Nagar",
    city: "Hazaribagh",
    pin: "825301",
    state: "Jharkhand",
    country: "India",
    formatted: "01, Romi, Hazaribagh, Azad Nagar, Hazaribagh, Hazaribag - 825301, Jharkhand, India",
  },
  copyrightYear: 2026,
  mission: "Create useful, accessible, and practical digital products.",
  vision: "Build technology products that make digital experiences more useful and accessible.",
  aboutSummary:
    "YASNARGLOBAL PRIVATE LIMITED is a technology company focused on developing mobile applications, web applications, and digital products. We aim to create practical and accessible technology solutions that address real-world needs.",
  focusPillars: [
    {
      number: "01",
      title: "Practical Solutions",
      description: "We focus on building technology around real-world needs.",
    },
    {
      number: "02",
      title: "User Focused",
      description: "Our products are designed with simplicity and accessibility in mind.",
    },
    {
      number: "03",
      title: "Continuous Improvement",
      description: "We continuously improve our digital products and experiences.",
    },
  ],
  capabilities: [
    {
      title: "Mobile Applications",
      description:
        "Building practical mobile experiences engineered for accessibility, simplicity, and reliable performance across everyday devices.",
    },
    {
      title: "Digital Products",
      description:
        "Developing purposeful digital solutions focused on solving real-world challenges for learners, professionals, and communities.",
    },
    {
      title: "Web Applications",
      description:
        "Creating responsive, structured, and performant web platforms designed for seamless usability across modern browsers.",
    },
  ],
};

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "gyan-master",
    name: "Gyan Master",
    category: "Educational Application",
    tagline: "Education through a simple digital experience.",
    description:
      "Gyan Master is an educational application designed to help learners access useful learning resources through an accessible digital experience.",
    status: "available",
    // Note: Official Play Store URL and app screenshots to be configured upon official release.
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.nextlearn.gyanmaster",
    placeholderNote:
      "Neutral device presentation. Official application screenshots and Play Store link will be updated upon client distribution.",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
];
