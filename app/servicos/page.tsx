import type { Metadata } from "next"; import { Services, FinalCta } from "@/src/components/Sections";
export const metadata:Metadata={title:"Serviços de sobrancelhas e cílios",description:"Conheça os atendimentos de sobrancelhas e cílios do Studio DM em Itapecerica da Serra."};
export default function Page(){return <><div className="page-hero"><span>Serviços</span><h1>Um cuidado que começa em você.</h1><p>Conheça as categorias de atendimento confirmadas e fale com Vitória para receber uma indicação personalizada.</p></div><Services/><FinalCta/></>}
