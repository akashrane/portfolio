"use client";

import { useEffect } from "react";

export default function InteractiveSurface() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const cards = document.querySelectorAll<HTMLElement>(".project-card");
    const cleanups: (() => void)[] = [];
    cards.forEach(card => {
      const reset = () => { card.style.removeProperty("transform"); card.style.removeProperty("--spotlight"); };
      const move = (event: PointerEvent) => {
        if (reduced.matches || event.pointerType !== "mouse") return;
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        card.style.transform = `perspective(1000px) rotateX(${(0.5-y)*5}deg) rotateY(${(x-0.5)*5}deg) translateY(-3px)`;
        card.style.setProperty("--spotlight", `radial-gradient(450px circle at ${x*100}% ${y*100}%, #d5fa6415, transparent 65%)`);
      };
      card.addEventListener("pointermove", move); card.addEventListener("pointerleave", reset);
      cleanups.push(() => { card.removeEventListener("pointermove", move); card.removeEventListener("pointerleave", reset); reset(); });
    });
    const progress = document.querySelector<HTMLElement>(".reading-progress");
    const update = () => { if (progress) progress.style.transform = `scaleX(${window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight)})`; };
    window.addEventListener("scroll", update, { passive: true }); update();
    return () => { cleanups.forEach(cleanup => cleanup()); window.removeEventListener("scroll", update); };
  }, []);
  return <div className="reading-progress" aria-hidden="true"/>;
}
