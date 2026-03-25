"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../common/SectionWrapper";
import Badge from "../common/Badge";
import { Globe, CreditCard } from "lucide-react";

const phases = [
  {
    region: "GCC",
    focus: "Saudi Arabia, UAE, wider Gulf",
    tam: "40M+",
    highlight: true,
    segments: [
      "23M+ Muslim population in KSA",
      "18M+ high-ARPU digital users across GCC",
    ],
    rails: ["STC Pay", "urpay", "tiqmo"],
  },
  {
    region: "Asia Pacific",
    focus: "Indonesia, India, Pakistan, Bangladesh",
    tam: "800M+",
    segments: [
      "230M+ Muslims in Indonesia",
      "580M+ across India, Pakistan, Bangladesh",
    ],
    rails: ["GoPay", "DANA", "JazzCash", "bKash"],
  },
  {
    region: "Greater MENA",
    focus: "T\u00fcrkiye, North Africa, Levant",
    tam: "340M+",
    segments: [
      "93M+ in T\u00fcrkiye & Azerbaijan",
      "235M+ across Egypt, North Africa, Levant",
    ],
    rails: ["Fawry", "Papara", "Local Rails"],
  },
  {
    region: "Africa & Global Diaspora",
    focus: "Sub-Saharan Africa, Europe, Americas",
    tam: "400M+",
    segments: [
      "100M+ Muslims in Nigeria alone",
      "44M+ Muslims across Europe",
    ],
    rails: ["MPESA", "Stripe", "Local Rails"],
  },
];

const demographics = [
  { label: "Total Addressable Market", value: "1.5B+", sub: "mobile-connected Muslims globally" },
  { label: "Primary Age Group", value: "18-35", sub: "digital-native, mobile-first" },
];

export default function AudienceSection() {
  return (
    <SectionWrapper id="audience">
      <div className="text-center mb-16">
        <Badge variant="emerald" className="mb-4">
          <Globe className="w-3 h-3" /> Global Audience
        </Badge>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          1.5 Billion Addressable Users
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          ~2 billion Muslims worldwide. ~1.5 billion are mobile-connected.
          Zero Shariah-compliant alternatives exist in this market today.
        </p>
      </div>

      {/* Key demographics */}
      <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto mb-16">
        {demographics.map((d, i) => (
          <motion.div
            key={d.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass-card p-4 text-center"
          >
            <p className="text-2xl md:text-3xl font-bold text-gold-400">{d.value}</p>
            <p className="text-xs text-text-primary font-medium mt-1">{d.label}</p>
            <p className="text-[11px] text-text-muted mt-0.5">{d.sub}</p>
          </motion.div>
        ))}
      </div>

      {/* Region cards */}
      <div className="space-y-4">
        {phases.map((p, i) => (
          <motion.div
            key={p.region}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className={`p-5 md:p-6 rounded-xl ${
              p.highlight
                ? "bg-gradient-to-br from-gold-500/10 to-gold-500/5 border border-gold-500/15"
                : "glass-card"
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="flex-1">
                <span className="text-lg font-bold">{p.region}</span>
                <p className="text-sm text-text-secondary">{p.focus}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {p.segments.map((s) => (
                    <span key={s} className="text-xs text-text-muted bg-white/5 px-2 py-1 rounded">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-right shrink-0">
                <p className={`text-3xl font-bold ${p.highlight ? "text-gold-400" : "text-emerald-400"}`}>
                  {p.tam}
                </p>
                <p className="text-xs text-text-muted">Addressable Users</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {p.rails.map((r) => (
                <span
                  key={r}
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] bg-white/5 text-text-muted"
                >
                  <CreditCard className="w-2.5 h-2.5" />
                  {r}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
