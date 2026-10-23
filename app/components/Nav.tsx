"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import { navLinks, person } from "../content";
import { ease } from "./anim";
import { Logo } from "./Logo";

export function Nav() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  // Tuck away while reading down, return on any scroll up.
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 8);
    setHidden(y > 160 && y > prev);
  });

  // Mark the section in view; sections without a nav link clear it.
  useEffect(() => {
    const ids = new Set(navLinks.map((l) => l.id));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(ids.has(e.target.id) ? e.target.id : null);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    document.querySelectorAll("main section[id]").forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: "-100%" }}
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.5, ease }}
      data-scrolled={scrolled || undefined}
      className="fixed inset-x-0 top-0 z-50 border-b border-transparent transition-colors duration-500 data-[scrolled]:border-line data-[scrolled]:bg-[var(--nav-bg)] data-[scrolled]:backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 max-w-[960px] items-center justify-between px-6">
        <a href="#top" className="flex h-11 items-center text-[24px]" aria-label={`${person.name}, home`}>
          <Logo />
        </a>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-5 text-[14px] sm:gap-7">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  aria-current={active === l.id ? "true" : undefined}
                  className="relative flex h-11 items-center text-muted transition-colors duration-300 hover:text-fg aria-[current=true]:text-fg"
                >
                  {l.label}
                  {active === l.id && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-0 bottom-2.5 h-px bg-fg"
                      transition={{ duration: 0.5, ease }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
