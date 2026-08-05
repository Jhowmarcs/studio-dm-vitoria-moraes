import type { Metadata } from "next";
import Image from "next/image";
import { FinalCta } from "@/src/components/Sections";

export const metadata: Metadata = { title: "Sobre Vitória Moraes", description: "Conheça a profissional à frente do Studio DM em Itapecerica da Serra." };

export default function Page() {
  return <><div className="page-hero"><span>Sobre</span><h1>Vitória Moraes</h1><p>Uma profissional dedicada à beleza do olhar e a um atendimento em que cada cliente é recebida de forma única.</p></div><section className="about-profile"><div className="portrait portrait-large"><Image src="/images/vitoria/vitoria-moraes-retrato.png" alt="Retrato de Vitória Moraes em evento profissional de beleza" fill priority sizes="(max-width: 800px) 100vw, 42vw"/></div><div className="prose profile-copy"><h2>Beleza com propósito</h2><p>No Studio DM, beleza não significa seguir um padrão. Significa reconhecer o que combina com você e valorizar sua expressão com equilíbrio.</p><h2>Atendimento próximo</h2><p>Cada encontro parte da escuta. Preferências, rotina e expectativas ajudam a orientar um cuidado individual, acolhedor e responsável.</p></div></section><FinalCta/></>;
}
