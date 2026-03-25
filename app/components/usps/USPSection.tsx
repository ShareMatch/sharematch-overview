"use client";

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
    title: "Fully Regulated for Your Protection",
    description:
      "While competitors operate by regulatory arbitrage, ShareMatch is built on total transparency. We are engineered for full regulatory approval across the GCC, ensuring your investments are secure, officially recognised, and fully protected.",
    glow: "emerald" as const,
  },
  {
    icon: Brain,
    title: "HAL AI Engine",
    description:
      "Powered by Google Gemini, our proprietary AI delivers real-time market analysis, up-to-the-minute sports intelligence, and continuous Shariah-compliance screening to keep you ahead of the game.",
    glow: "gold" as const,
  },
  {
    icon: Layers,
    title: "Dual-Token Architecture",
    description:
      "One token powers your platform experience; another represents your real-world sports assets. Built on the Solana blockchain for lightning-fast trades and perfectly transparent ownership shares.",
    glow: "emerald" as const,
  },
  {
    icon: Scale,
    title: "Halal Investing",
    description:
      "Performance units, not bets. No house, no odds-setting. Every token is a real-world asset (haqq mali) with a defined lifecycle, transparent pricing, and auditable settlement.",
    glow: "gold" as const,
  },
  {
    icon: Fingerprint,
    title: "Multi-Layered Compliance",
    description:
      "Advanced KYC/AML identity verification and real-time AI Shariah screening (AAOIFI principles), backed by permanent blockchain records built to keep your portfolio safe and ethical.",
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
          The ShareMatch Edge
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          6 unique reasons why we are the future of ethical sports investing.
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

      {/* Third-party reinforcement */}
      <div className="mt-16 glass-card p-8 max-w-4xl mx-auto">
        <h3 className="text-lg font-semibold text-center mb-6">Reinforced by Third Parties</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">Independent Fatwa Approval</p>
              <p className="text-xs text-text-secondary leading-relaxed">
                Formal ruling from recognised Islamic scholars confirming full Shariah compliance of the platform, tokens, and settlement logic.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
              <Lock className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">Patent-Pending Technology</p>
              <p className="text-xs text-text-secondary leading-relaxed">
                Core smart-contract logic, compliance workflows, and settlement mechanisms filed with global trademark applications in progress.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
              <Scale className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">AAOIFI Standards Compliance</p>
              <p className="text-xs text-text-secondary leading-relaxed">
                All tokens structured in accordance with standards published by the Accounting and Auditing Organisation for Islamic Financial Institutions.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
              <Fingerprint className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">KYC/AML by SumSub</p>
              <p className="text-xs text-text-secondary leading-relaxed">
                Industry-leading identity verification and anti-money laundering compliance powered by SumSub, trusted by thousands of regulated platforms globally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
