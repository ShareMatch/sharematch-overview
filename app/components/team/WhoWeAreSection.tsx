"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../common/SectionWrapper";
import Badge from "../common/Badge";
import { Scale, BookOpen, FileCheck, Shield, Cpu } from "lucide-react";

const points = [
  {
    icon: Scale,
    text: "Official Fatwa from leading global Islamic scholars confirming full Shariah compliance",
  },
  {
    icon: BookOpen,
    text: "All assets follow AAOIFI standards, the global benchmark for Islamic financial compliance",
  },
  {
    icon: FileCheck,
    text: "Settlement technology and market structure under global patent and trademark application",
  },
  {
    icon: Shield,
    text: "Halal financial market alternative to Polymarket, Kalshi, and DraftKings",
  },
  {
    icon: Cpu,
    text: "Built on Solana, enabling high-throughput, low-cost on-chain settlement",
  },
];

export default function WhoWeAreSection() {
  return (
    <SectionWrapper id="who">
      <div className="text-center mb-16">
        <Badge variant="gold" className="mb-4">
          What is ShareMatch
        </Badge>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          The Future of Halal SportFi
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Built on Solana, the platform enables users to trade sports indices
          and outcome-based assets using skill and knowledge, while remaining
          fully compliant with Islamic financial principles. Unlike traditional
          iGaming or prediction markets, ShareMatch is designed as a Halal
          financial market.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
        {/* Left: Video */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="browser-frame">
            <div className="browser-frame-bar">
              <div className="browser-dot bg-red-500" />
              <div className="browser-dot bg-yellow-500" />
              <div className="browser-dot bg-green-500" />
            </div>
            <div className="relative aspect-video overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                aria-label="ShareMatch platform walkthrough showing live markets, trading, and AI analytics"
                className="w-full h-full object-cover"
              >
                <source src="/videos/platform-walkthrough.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="absolute -inset-10 -z-10 bg-emerald-500/5 rounded-full blur-3xl overflow-hidden pointer-events-none" />
        </motion.div>

        {/* Right: 5 bullet points */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-5"
        >
          {points.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              className="flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                <p.icon className="w-5 h-5 text-emerald-400" />
              </div>
              <p className="text-text-secondary text-sm leading-relaxed pt-2">
                {p.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
