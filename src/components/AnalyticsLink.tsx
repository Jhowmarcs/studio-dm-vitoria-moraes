"use client";
import Link from "next/link";
import type { ComponentProps } from "react";
export function AnalyticsLink({event,...props}:ComponentProps<typeof Link>&{event:string}) { return <Link {...props} onClick={()=>{window.dispatchEvent(new CustomEvent("studio:event",{detail:event})); if(typeof window.gtag==="function") window.gtag("event",event);}}/>; }
declare global { interface Window { gtag?: (...args:unknown[])=>void } }
