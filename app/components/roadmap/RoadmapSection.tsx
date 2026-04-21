"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "../common/SectionWrapper";
import Badge from "../common/Badge";

const milestones = [
  {
    date: "May 2026",
    title: "KSA Launch, App Release & GCC Expansion",
    detail:
      "Invitation-only rollout in Saudi Arabia with STC Pay, urpay, and tiqmo payment rails. Full mobile app release. Wider GCC rollout and Indonesia market entry. Esports markets go live.",
    highlight: true,
  },
  {
    date: "Jun 2026",
    title: "FIFA World Cup",
    detail:
      "Global onboarding funnel via the world's biggest sporting event. Projected 245,000 active users.",
  },
  {
    date: "Jul 2026",
    title: "Esports World Cup, Riyadh",
    detail:
      "Twitch, Discord, and creator collaborations. Targeted expansion into esports demographics.",
  },
];

export default function RoadmapSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <SectionWrapper id="roadmap" className="bg-bg-secondary">
      <div className="text-center mb-12">
        <Badge variant="gold" className="mb-4">
          Roadmap
        </Badge>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          2026: The Inflection Year
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Every milestone tied to user growth, market expansion, and product
          delivery.
        </p>
      </div>

      <div ref={containerRef} className="relative max-w-3xl mx-auto">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2">
          <motion.div
            style={{ height: lineHeight }}
            className="w-full bg-gradient-to-b from-gold-500 to-emerald-500 origin-top"
          />
        </div>

        <div className="space-y-10">
          {milestones.map((m, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={m.date}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
                className={`relative flex items-start gap-6 ${
                  isLeft
                    ? "md:flex-row md:text-right"
                    : "md:flex-row-reverse md:text-left"
                } pl-12 md:pl-0`}
              >
                <div className="flex-1">
                  <div
                    className={`p-5 rounded-xl glass-card ${
                      m.highlight ? "border-gold-500/30 glow-gold" : ""
                    }`}
                  >
                    <p className="text-xs text-text-muted mb-1">{m.date}</p>
                    <h3 className="text-lg font-semibold mb-1">{m.title}</h3>
                    <p className="text-sm text-text-secondary">{m.detail}</p>
                    {m.completed && (
                      <Badge variant="emerald" className="mt-2">
                        Completed
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 shrink-0">
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      m.completed
                        ? "bg-emerald-500 border-emerald-400"
                        : m.highlight
                          ? "bg-gold-500 border-gold-400"
                          : "bg-bg-elevated border-white/20"
                    }`}
                  />
                </div>

                <div className="hidden md:block flex-1" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
