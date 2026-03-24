"use client";

import SectionWrapper from "../common/SectionWrapper";
import Badge from "../common/Badge";
import GlowCard from "../common/GlowCard";
import { Shield, Cpu, Globe, Scale } from "lucide-react";

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
];

const board = [
  { name: "Gillian Hughes", role: "Chairman" },
  { name: "Joshua Hearne", role: "Non-Executive Director" },
  { name: "Richard Walker", role: "Non-Executive Director (Finance)" },
  { name: "Rawad Abou Diab", role: "Non-Executive Director" },
  { name: "Michael Fortun", role: "Head of Compliance" },
];

const executive = [
  { name: "Will Wilde", role: "Chief Executive Officer" },
  { name: "Resmimol Krishnakumari", role: "Chief Technical Officer" },
  { name: "Paul Phillpot", role: "Head of Partnerships" },
];

const partners = [
  "Partis Solutions",
  "Conexus",
  "Damisa",
  "SAHL Investment Incubators",
  "LeapFrog",
  "Seed Legals",
  "EIP",
  "Prysm Financial",
  "Alfred Henry",
  "SumSub",
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

      {/* Board & Leadership */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="glass-card p-6">
          <h3 className="text-base font-semibold mb-4">Board of Directors</h3>
          <div className="space-y-3">
            {board.map((t) => (
              <div key={t.name} className="flex items-center justify-between">
                <span className="text-sm text-text-primary font-medium">{t.name}</span>
                <span className="text-xs text-text-muted">{t.role}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6">
          <h3 className="text-base font-semibold mb-4">Executive Team</h3>
          <div className="space-y-3">
            {executive.map((t) => (
              <div key={t.name} className="flex items-center justify-between">
                <span className="text-sm text-text-primary font-medium">{t.name}</span>
                <span className="text-xs text-text-muted">{t.role}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-white/5">
            <p className="text-xs text-text-muted">
              + Full stack and blockchain development teams across London and Dubai
            </p>
          </div>
        </div>
      </div>

      {/* Strategic Partners */}
      <div className="glass-card p-6">
        <h3 className="text-base font-semibold mb-4 text-center">Strategic Partners</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {partners.map((p) => (
            <span
              key={p}
              className="px-3 py-1.5 rounded-full bg-white/5 text-xs text-text-secondary"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
