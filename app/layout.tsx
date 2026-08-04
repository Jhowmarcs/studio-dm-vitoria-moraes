import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import "./portrait.css";
import "./portfolio-media.css";
import "./modern.css";
import "./mobile-fixes.css";
import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";
import { FloatingWhatsApp } from "@/src/components/WhatsApp";
import { business, isPending } from "@/src/config/business";
import { JsonLd } from "@/src/components/seo/JsonLd";
import { ScrollEffects } from "@/src/components/ScrollEffects";

const site = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export const metadata: Metadata = { metadataBase: new URL(site), title: { default: "Studio DM — Vitória Moraes | Beleza em Itapecerica da Serra", template: "%s | Studio DM" }, description: business.description, verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }, openGraph: { type: "website", locale: "pt_BR", siteName: business.businessName, images: ["/images/studio/hero-editorial.png"] } };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const local: Record<string, unknown> = { "@context": "https://schema.org", "@type": "BeautySalon", "@id": `${site}/#business`, name: business.businessName, description: business.description, url: site, telephone: business.phone, areaServed: business.serviceArea, sameAs: [business.instagram], hasMap: business.googleMapsUrl, aggregateRating: { "@type": "AggregateRating", ratingValue: business.googleRating, reviewCount: business.googleReviewCount, bestRating: 5 } };
  if (!isPending(business.address)) {
    local.address = { "@type": "PostalAddress", streetAddress: business.address, addressLocality: business.city, addressRegion: business.state, postalCode: business.postalCode, addressCountry: business.country };
    local.geo = { "@type": "GeoCoordinates", latitude: business.latitude, longitude: business.longitude };
  }
  return <html lang="pt-BR"><body><a className="skip" href="#conteudo">Pular para o conteúdo</a><JsonLd data={local}/><Header/><main id="conteudo">{children}</main><Footer/><FloatingWhatsApp/><ScrollEffects/>{process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}/>}</body></html>;
}
