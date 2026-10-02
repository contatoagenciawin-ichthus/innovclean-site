"use client";

import { useEffect } from "react";

export default function SiteMotion() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-ready");

    const updateScrollState = () => {
      root.dataset.scrolled = window.scrollY > 24 ? "true" : "false";
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return () => window.removeEventListener("scroll", updateScrollState);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.12,
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateScrollState);
      root.classList.remove("motion-ready");
      delete root.dataset.scrolled;
    };
  }, []);

  return null;
}
