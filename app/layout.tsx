import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: "Ankara Resort | Your Nature Escape, Just Outside Nairobi",
    template: "%s | Ankara Resort",
  },
  description:
    "Ankara Resort is a premium family-friendly nature resort in Ongata Rongai, Kajiado County. Cottages, garden dining, picnics, team building and events — minutes from Nairobi. Book your stay today.",
  keywords: [
    "resort in Rongai",
    "nature retreat Nairobi",
    "team building venue Ongata Rongai",
    "garden wedding venue Rongai",
    "Ankara Resort",
    "cottages near Nairobi",
    "picnic venue Kajiado",
  ],
  authors: [{ name: "RN Studio" }],
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: `https://${site.domain}`,
    siteName: "Ankara Resort",
    title: "Ankara Resort | Your Nature Escape, Just Outside Nairobi",
    description:
      "A premium family-friendly nature resort in Ongata Rongai. Cottages, dining, picnics, events and team building — minutes from Nairobi.",
    images: [
      {
        url: "/images/ankara-sign.jpg",
        width: 2000,
        height: 1501,
        alt: "The gardens and dining area at Ankara Resort",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankara Resort | Your Nature Escape, Just Outside Nairobi",
    description: "Cottages, dining, picnics and events in Ongata Rongai — minutes from Nairobi.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Resort",
  name: "Ankara Resort",
  description:
    "Family-oriented nature resort with cottages, restaurant & bar, gardens and event spaces in Ongata Rongai, Kenya.",
  url: `https://${site.domain}`,
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Merisho Road",
    addressLocality: "Ongata Rongai",
    addressRegion: "Kajiado County",
    addressCountry: "KE",
  },
  geo: { "@type": "GeoCoordinates", latitude: -1.3953, longitude: 36.7619 },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.rating,
    reviewCount: site.reviewCount,
  },
  priceRange: "KES 7,500 – 16,500",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Free parking", value: true },
    { "@type": "LocationFeatureSpecification", name: "Restaurant & Bar", value: true },
    { "@type": "LocationFeatureSpecification", name: "Garden", value: true },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
