"use client";

import { useEffect } from "react";

export function ScrollEffects() {
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main > section:not(.hero), main > .trust, .service-card, .review, .experience > div, .portfolio-item",
      ),
    );

    targets.forEach((target, index) => {
      target.classList.add("reveal");
      target.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 70}ms`);
    });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    const hero = document.querySelector<HTMLElement>(".hero");
    const tiltCards = Array.from(
      document.querySelectorAll<HTMLElement>(".service-card, .portfolio-item, .portrait"),
    );
    const updateHero = (event: PointerEvent) => {
      if (!hero || event.pointerType === "touch") return;
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;
      hero.style.setProperty("--pointer-x", x.toFixed(3));
      hero.style.setProperty("--pointer-y", y.toFixed(3));
    };
    const tilt = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      const card = event.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.setProperty("--tilt-x", `${(-y * 6).toFixed(2)}deg`);
      card.style.setProperty("--tilt-y", `${(x * 7).toFixed(2)}deg`);
      card.style.setProperty("--glow-x", `${((x + 0.5) * 100).toFixed(1)}%`);
      card.style.setProperty("--glow-y", `${((y + 0.5) * 100).toFixed(1)}%`);
    };
    const resetTilt = (event: PointerEvent) => {
      const card = event.currentTarget as HTMLElement;
      card.style.removeProperty("--tilt-x");
      card.style.removeProperty("--tilt-y");
    };

    window.addEventListener("pointermove", updateHero, { passive: true });
    tiltCards.forEach((card) => {
      card.addEventListener("pointermove", tilt);
      card.addEventListener("pointerleave", resetTilt);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );

    targets.forEach((target) => observer.observe(target));
    return () => {
      observer.disconnect();
      window.removeEventListener("pointermove", updateHero);
      tiltCards.forEach((card) => {
        card.removeEventListener("pointermove", tilt);
        card.removeEventListener("pointerleave", resetTilt);
      });
    };
  }, []);

  return null;
}
