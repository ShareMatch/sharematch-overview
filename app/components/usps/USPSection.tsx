"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../common/SectionWrapper";
import Badge from "../common/Badge";
import GlowCard from "../common/GlowCard";
import { ShieldCheck, Lock, Brain, Layers, Scale, Fingerprint } from "lucide-react";

const usps = [
  {
    icon: ShieldCheck,
    title: "Structural Shariah Compliance",
    description:
      "Not a label. The entire contract architecture, from token issuance to settlement, is designed around Islamic finance principles. Formal Fatwa issued and independently monitored.",
    glow: "gold" as const,
  },
  {
    icon: Lock,
    title: "Regulatory Moat",
    description:
      "Competitors operate by regulatory arbitrage. ShareMatch is built for regulatory acceptance, making it the only platform that can be marketed publicly in GCC markets without reputational risk.",
    glow: "emerald" as const,
  },
  {
    icon: Brain,
    title: "HAL AI Engine",
    description:
      "A proprietary 9-agent AI system providing real-time market analysis, Shariah compliance screening, content moderation, and intelligence gathering, all powered by Google Gemini with search grounding.",
    glow: "gold" as const,
  },
  {
    icon: Layers,
    title: "Dual-Token Architecture",
    description:
      "SMT as the permanent protocol token. IATs as market-cycle-specific performance tokens. Fixed 100-unit custodial bucket model. Deterministic, atomic settlement on Solana.",
    glow: "emerald" as const,
  },
  {
    icon: Scale,
    title: "Not Gambling",
    description:
      "Performance units, not bets. No house, no odds-setting. Every token is a real-world asset (haqq mali) with a defined lifecycle, transparent pricing, and auditable settlement.",
    glow: "gold" as const,
  },
  {
    icon: Fingerprint,
    title: "Multi-Layered Compliance",
    description:
      "KYC/AML via SumSub. HAYA AI agent for real-time Shariah content screening (AAOIFI principles). Geolocation enforcement. Immutable audit trail on-chain.",
    glow: "emerald" as const,
  },
];

export default function USPSection() {
  return (
    <SectionWrapper id="usps" className="bg-bg-secondary">
      <div className="text-center mb-16">
        <Badge variant="gold" className="mb-4">
          Why ShareMatch
        </Badge>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Six Structural Advantages
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          These are not features. They are architectural decisions that cannot be
          retrofitted by incumbents.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {usps.map((u, i) => (
          <GlowCard
            key={u.title}
            delay={i * 0.1}
            glowColor={u.glow}
            className="p-6"
          >
            <u.icon className={`w-8 h-8 mb-4 ${u.glow === "gold" ? "text-gold-400" : "text-emerald-400"}`} />
            <h3 className="text-base font-semibold mb-2">{u.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              {u.description}
            </p>
          </GlowCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
