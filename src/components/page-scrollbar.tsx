"use client";

import { useEffect, useRef } from "react";

const FADE = 650;

export default function PageScrollbar() {
  const thumb = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = thumb.current;
    if (!element) return;

    let timer = 0;
    let frame = 0;

    const paint = () => {
      frame = 0;
      const viewport = window.innerHeight;
      const total = document.documentElement.scrollHeight;
      const travel = total - viewport;

      if (travel <= 0) {
        element.style.opacity = "0";
        return;
      }

      const height = Math.max(24, (viewport / total) * viewport);
      const top = (window.scrollY / travel) * (viewport - height);

      element.style.height = `${height}px`;
      element.style.transform = `translateY(${top}px)`;
      element.style.opacity = "1";

      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        element.style.opacity = "0";
      }, FADE);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(paint);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.clearTimeout(timer);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={thumb}
      aria-hidden="true"
      className="pointer-events-none fixed right-0.5 top-0 z-40 hidden w-1 rounded-full bg-primary/45 opacity-0 transition-opacity duration-200 sm:block"
    />
  );
}
