"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    setActive(id);
  };

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-emerald-500 origin-left z-60"
      />

      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-bg-primary py-3 md:py-4"
      >
        <div className="section-container flex items-center justify-between">
          <Image
            src="/logos/sharematch-lockup.png"
            alt="ShareMatch"
            width={400}
            height={111}
            unoptimized
            className={`h-10 md:h-14 w-auto origin-left transition-transform duration-500 ease-out will-change-transform ${
              scrolled ? "scale-95 md:scale-75" : "scale-100"
            }`}
          />

          {/* Desktop Navigation */}
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
            href="#join"
            className="hidden lg:inline-flex items-center px-5 py-2 text-sm font-semibold rounded-full bg-[#2e3742] text-white hover:opacity-90 transition-all duration-300"
          >
            Get in Touch
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-bg-primary/95 backdrop-blur-xl lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div
              className="flex flex-col items-center justify-center h-full gap-2 px-6"
              onClick={(e) => e.stopPropagation()}
            >
              {NAV_ITEMS.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{
                    duration: 0.25,
                    delay: 0.1 + index * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`w-full max-w-xs text-center py-3 px-6 text-lg rounded-xl transition-colors ${
                    active === item.id
                      ? "text-emerald-400 bg-emerald-500/10"
                      : "text-text-secondary hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#join"
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{
                  duration: 0.25,
                  delay: 0.1 + NAV_ITEMS.length * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-4 w-full max-w-xs text-center py-3 px-6 text-lg font-semibold rounded-full bg-[#2e3742] text-white hover:opacity-90 transition-opacity duration-300"
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
