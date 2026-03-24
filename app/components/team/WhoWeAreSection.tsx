"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../common/SectionWrapper";
import Badge from "../common/Badge";
import GlowCard from "../common/GlowCard";
import { Building2, Shield, Cpu, Globe } from "lucide-react";

const pillars = [
  {
    icon: Building2,
    title: "UK-Incorporated, GCC-First",
    description:
      "Pachira Holdings Ltd (UK) with strategic operations across London, Dubai, and Riyadh. Built for regulatory alignment, not arbitrage.",
  },
  {
    icon: Shield,
    title: "Shariah-Certified",
    description:
      "Formal Fatwa issued December 2025, covering contract structure, risk transfer, fee treatment, custody, and settlement. Monitored by SAHL Investment Incubators.",
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
];

const team = [
  { role: "CEO", location: "London" },
  { role: "CTO", location: "Dubai" },
  { role: "Head of Risk & Compliance", location: "Dubai" },
  { role: "Full Stack Development", location: "Dubai" },
  { role: "Blockchain Development", location: "London" },
];

export default function WhoWeAreSection() {
  return (
    <SectionWrapper id="who">
      <div className="text-center mb-16">
        <Badge variant="gold" className="mb-4">
          Who We Are
        </Badge>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Built for Scale, Backed by Conviction
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          A focused team of fintech, blockchain, and AI specialists building at the
          intersection of Islamic finance and digital assets.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-16">
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-6 md:p-8"
      >
        <h3 className="text-lg font-semibold mb-4 text-center">
          Core Team
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {team.map((t) => (
            <div
              key={t.role}
              className="px-4 py-2 rounded-lg bg-white/5 text-sm"
            >
              <span className="text-text-primary font-medium">{t.role}</span>
              <span className="text-text-muted ml-2">{t.location}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-text-muted text-center mt-4">
          Actively hiring: CFO, Head of Strategic Ops, Head of Media, Compliance Manager
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
