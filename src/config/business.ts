export const business = {
  businessName: "Studio DM — Vitória Moraes",
  legalName: "PREENCHER_RAZAO_SOCIAL",
  ownerName: "Vitória Moraes",
  slogan: "Beleza com propósito: te fazer se sentir única.",
  description: "Studio de beleza com atendimento personalizado em sobrancelhas, cílios e valorização do olhar.",
  phone: "+55 11 99261-0966",
  whatsapp: "5511992610966",
  email: "PREENCHER_EMAIL_REAL",
  instagram: "https://www.instagram.com/studiodm.vitoria/",
  googleMapsUrl: process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL || "https://www.google.com/maps/place/Studio+DM+Vit%C3%B3ria+Moraes/@-23.7184211,-46.8536383,17z/data=!4m6!3m5!1s0x94cfad8ec1f55d25:0x45a6959fe33795c8!8m2!3d-23.7184211!4d-46.8510634!16s%2Fg%2F11zh6z643c",
  googleReviewUrl: process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL || "https://share.google/T65XBRmvZCjB9avI0",
  placeId: process.env.GOOGLE_PLACE_ID || "PREENCHER_GOOGLE_PLACE_ID",
  address: "R. Maj. Telles, 216 - Centro",
  city: "Itapecerica da Serra",
  state: "SP",
  postalCode: "06850-001",
  country: "BR",
  latitude: -23.7184211,
  longitude: -46.8510634,
  openingHours: [] as string[],
  serviceArea: "Itapecerica da Serra e região",
  googleRating: 5,
  googleReviewCount: 10,
  googleRatingVerifiedAt: "2026-08-04",
  socialLinks: { instagram: "https://www.instagram.com/studiodm.vitoria/" },
} as const;

export const defaultWhatsappMessage = "Olá, Vitória! Conheci o Studio DM pelo site e gostaria de saber mais sobre os serviços e horários disponíveis.";
export function whatsappUrl(message = defaultWhatsappMessage) { return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`; }
export const isPending = (value: string) => value.startsWith("PREENCHER_");
