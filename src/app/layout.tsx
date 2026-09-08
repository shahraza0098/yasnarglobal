import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { COMPANY_DATA } from "@/data/company";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY_DATA.url),
  title: {
    default: `${COMPANY_DATA.legalName} | Technology & Digital Products`,
    template: `%s | ${COMPANY_DATA.name}`,
  },
  description:
    "YASNARGLOBAL PRIVATE LIMITED develops practical digital products, mobile applications, web applications, and software solutions.",
  keywords: [
    "YASNARGLOBAL",
    "YASNARGLOBAL PRIVATE LIMITED",
    "Gyan Master",
    "Technology Company",
    "Mobile Applications",
    "Digital Products",
    "Educational Software",
    "Web Applications",
    "Jharkhand Technology",
    "India Software",
  ],
  authors: [{ name: COMPANY_DATA.legalName }],
  creator: COMPANY_DATA.legalName,
  publisher: COMPANY_DATA.legalName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${COMPANY_DATA.legalName} | Technology & Digital Products`,
    description:
      "YASNARGLOBAL PRIVATE LIMITED develops practical digital products, mobile applications, web applications, and software solutions.",
    url: COMPANY_DATA.url,
    siteName: COMPANY_DATA.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero-wave.jpg",
        width: 1200,
        height: 630,
        alt: `${COMPANY_DATA.name} - Technology & Digital Products`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_DATA.legalName} | Technology & Digital Products`,
    description:
      "Developing practical digital products and software solutions designed to make technology more accessible and useful.",
    images: ["/images/hero-wave.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#0b1528] selection:bg-[#165dfc] selection:text-white">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
