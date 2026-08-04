export const services = [
  { slug: "sobrancelhas", name: "Sobrancelhas", eyebrow: "Harmonia e expressão", description: "Um atendimento cuidadoso para valorizar o formato natural do seu olhar.", benefits: ["Atendimento personalizado", "Acabamento delicado", "Respeito aos seus traços"] },
  { slug: "cilios", name: "Cílios", eyebrow: "Leveza e presença", description: "Cuidados voltados à beleza dos cílios, com indicação individual para cada cliente.", benefits: ["Avaliação individual", "Resultado alinhado ao seu estilo", "Orientações de cuidado"] },
] as const;
export type Service = (typeof services)[number];
