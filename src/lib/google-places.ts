export type GooglePlace = { displayName?: { text:string }; rating?:number; userRatingCount?:number; reviews?: Array<{name:string;relativePublishTimeDescription:string;text?:{text:string};rating:number;authorAttribution:{displayName:string;uri?:string;photoUri?:string}}> ; googleMapsUri?:string; formattedAddress?:string; regularOpeningHours?:{weekdayDescriptions:string[]} };
export async function getGooglePlace(): Promise<GooglePlace | null> {
 const key=process.env.GOOGLE_PLACES_API_KEY, id=process.env.GOOGLE_PLACE_ID;
 if(!key||!id) return null;
 try { const res=await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(id)}?languageCode=pt-BR`,{headers:{"X-Goog-Api-Key":key,"X-Goog-FieldMask":"displayName,rating,userRatingCount,reviews,googleMapsUri,formattedAddress,regularOpeningHours"},next:{revalidate:3600}}); if(!res.ok){console.error("Places API indisponível",res.status);return null;} return res.json(); } catch(error){ console.error("Falha ao consultar Places API", error instanceof Error ? error.message : "erro desconhecido"); return null; }
}
