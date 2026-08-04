import Link from "next/link";
import { Instagram, MapPin } from "lucide-react";
import { business, whatsappUrl } from "@/src/config/business";

export function Footer() {
  return <footer><div className="footer-grid"><div><div className="brand light"><span>DM</span><b>Studio DM</b></div><p>{business.slogan}</p><p className="muted">{business.address}<br/>{business.city} - {business.state}, {business.postalCode}</p></div><div><h3>Explore</h3><Link href="/servicos">Serviços</Link><Link href="/portfolio">Portfólio</Link><Link href="/sobre">Sobre Vitória</Link></div><div><h3>Contato</h3><a href={whatsappUrl()} target="_blank">{business.phone}</a><a href={business.instagram} target="_blank"><Instagram size={16}/> Instagram</a><a href={business.googleMapsUrl} target="_blank"><MapPin size={16}/> Google Maps</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} {business.businessName}</span><span><Link href="/politica-de-privacidade">Privacidade</Link> · <Link href="/termos-de-uso">Termos</Link></span></div></footer>;
}
