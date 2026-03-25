"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../common/SectionWrapper";
import Badge from "../common/Badge";
import GlowCard from "../common/GlowCard";
import { Shield, Cpu, Globe, Scale, Bookmark } from "lucide-react";

const pillars = [
  {
    icon: Scale,
    title: "Fatwa Backed & Haqq Mali",
    description:
      "Independent Shariah Fatwa recognises our tokens as Haqq Mali, a legitimate financial asset that can be possessed, transferred, inherited, and traded under Islamic law.",
  },
  {
    icon: Shield,
    title: "Patent-Pending IP",
    description:
      "Smart-contract logic, compliance workflows, and settlement mechanisms are patent-pending. Global trademark applications in progress across GCC, Asia Pacific, and Europe.",
  },
  {
    icon: Cpu,
    title: "AI-Native Platform",
    description:
      "HAL, our proprietary multi-agent AI engine, powers real-time analytics, Shariah compliance screening, content generation, and market intelligence.",
  },
  {
    icon: Globe,
    title: "Strategic Backing",
    description:
      "Backed by institutional partners across M&A advisory, blockchain, compliance, and payment infrastructure. GCC Royal Family Office on the cap table.",
  },
  {
    icon: Bookmark,
    title: "Fully Regulated",
    description:
      "Engineered for full regulatory approval across the GCC, ensuring your investments are secure, officially recognised, and fully protected.",
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

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-4xl mx-auto mb-16"
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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pillars.map((p, i) => (
          <GlowCard key={p.title} delay={i * 0.1} className="p-6">
            <p.icon className="w-8 h-8 text-gold-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              {p.description}
            </p>
          </GlowCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
