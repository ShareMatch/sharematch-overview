"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";

const NAV_ITEMS = [
  { id: "who", label: "What is ShareMatch" },
  { id: "platform", label: "Platform" },
  { id: "how", label: "How It Works" },
  { id: "usps", label: "Why Us" },
  { id: "audience", label: "Audience" },
  { id: "roadmap", label: "Roadmap" },
];

export default function StickyNav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = NAV_ITEMS.map((item) => ({
        id: item.id,
        el: document.getElementById(item.id),
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i].el;
        if (el && el.getBoundingClientRect().top < 200) {
          setActive(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-emerald-500 origin-left z-60"
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-bg-primary/80 backdrop-blur-xl border-b border-white/5 py-2 md:py-3"
            : "bg-transparent py-3 md:py-5"
        }`}
      >
        <div className="section-container flex items-center justify-between">
          <Image
            src="/logos/sharematch-lockup.png"
            alt="ShareMatch"
            width={400}
            height={111}
            unoptimized
            className={`transition-all duration-300 ${
              scrolled ? "h-8 md:h-10 w-auto" : "h-10 md:h-14 w-auto"
            }`}
          />

          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-3 py-1.5 text-sm rounded-full transition-all duration-300 ${
                  active === item.id
                    ? "text-emerald-400 bg-emerald-500/10"
                    : "text-text-secondary font-medium hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="mailto:will@sharematch.me"
            className="hidden lg:inline-flex items-center px-5 py-2 text-sm font-semibold rounded-full bg-emerald-500 text-bg-primary hover:bg-emerald-400 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </nav>
    </>
  );
}
