import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://arkbreeze.com.au'),
  title: "ArkBreeze | Solar Roof Ventilation QLD - Beat the Heat, $0 Running Costs",
  description:
    "Solar-powered roof ventilation for Queensland homes. Reduce roof temperatures by up to 30°C with zero running costs. Authorised SolarArk dealer. Free assessment and professional installation. 10-year warranty.",
  keywords: [
    "solar roof ventilation",
    "solar roof vent QLD",
    "SolarArk",
    "roof ventilation Queensland",
    "solar powered roof fan",
    "reduce roof temperature",
    "roof heat extraction",
    "mould prevention roof",
    "whirlybird alternative",
    "solar vent installation Brisbane",
    "ArkBreeze",
  ],
  authors: [{ name: "ArkBreeze" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_AU",
    title: "ArkBreeze | Solar Roof Ventilation QLD",
    description:
      "Drop your roof temperature by up to 30°C with 100% solar-powered ventilation. $0 running costs. Professional QLD installation. 10-year warranty.",
    siteName: "ArkBreeze",
  },
  twitter: {
    card: "summary_large_image",
    title: "ArkBreeze | Solar Roof Ventilation QLD",
    description:
      "Drop your roof temperature by up to 30°C with 100% solar-powered ventilation. $0 running costs. 10-year warranty.",
  },
  other: {
    "theme-color": "#0A0A0A",
    "color-scheme": "dark",
  },
};

// FAQ structured data for AEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does a SolarArk solar roof vent work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SolarArk vents use a rooftop solar panel to power a brushless DC motor that continuously extracts hot air from your roof cavity. As hot air is drawn out, cooler air is drawn in through your eave and soffit vents, keeping your roof space cool naturally with zero electricity costs.",
      },
    },
    {
      "@type": "Question",
      name: "Is a SolarArk roof vent noisy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not at all. SolarArk vents use brushless DC motors and polycarbonate fan blades specifically engineered for whisper-quiet operation. You won't hear it running, unlike traditional whirlybirds.",
      },
    },
    {
      "@type": "Question",
      name: "What warranty does a SolarArk vent come with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every SolarArk unit comes with a 10-year warranty on the solar PV panel and a 3-year warranty on the motor. The powder-coated steel shroud and stainless steel hardware are built to withstand harsh Australian conditions.",
      },
    },
    {
      "@type": "Question",
      name: "How many solar roof vents do I need for my home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on your roof area. As a guide: up to 111m² needs 1 × 20W unit, 148-185m² needs 1-2 × 20W or 1 × 30W unit, and 223m²+ needs 2 × 20W or 1-2 × 30W units.",
      },
    },
    {
      "@type": "Question",
      name: "Does a SolarArk vent work in winter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every SolarArk unit includes an automatic thermostat that shuts the fan off when the roof space drops below 24°C. This preserves warmth in winter while still preventing condensation build-up.",
      },
    },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ArkBreeze",
  description: "Authorised SolarArk dealer providing solar-powered roof ventilation installation across Queensland.",
  telephone: "0414 148 222",
  areaServed: {
    "@type": "State",
    name: "Queensland",
    containedInPlace: { "@type": "Country", name: "Australia" },
  },
  priceRange: "$$",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "SolarArk Solar Roof Ventilators",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "SolarArk SAV-20T Tilt Panel Solar Roof Vent",
          description: "20-watt tilt solar panel roof ventilator for non-north facing roofs. 2,718 m³/h airflow.",
          brand: { "@type": "Brand", name: "SolarArk" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "SolarArk SAV-20 Flush Panel Solar Roof Vent",
          description: "20-watt flush solar panel roof ventilator for north-facing roofs. 2,718 m³/h airflow.",
          brand: { "@type": "Brand", name: "SolarArk" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "SolarArk SAV-30 High Capacity Solar Roof Vent",
          description: "30-watt high-capacity solar roof ventilator. 3,150 m³/h airflow with slim designer profile.",
          brand: { "@type": "Brand", name: "SolarArk" },
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
