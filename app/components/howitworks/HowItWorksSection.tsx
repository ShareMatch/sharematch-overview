"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "../common/SectionWrapper";
import Badge from "../common/Badge";
import { UserPlus, Wallet, BarChart3, TrendingUp, Bot, ArrowDownToLine } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Sign Up & Verify",
    description: "Create an account with instant KYC verification. Geolocation compliance ensures you are in a supported jurisdiction.",
    screenshot: "/screenshots/step-1-signup.png",
  },
  {
    icon: Wallet,
    step: "02",
    title: "Deposit Funds",
    description: "Deposit USDC or use supported local payment rails. Funds convert to ShareMatch Tokens (SMT) at 1:1.",
    screenshot: "/screenshots/step-2-deposit.png",
  },
  {
    icon: BarChart3,
    step: "03",
    title: "Browse Markets",
    description: "Choose from 10+ performance indices: EPL, UCL, SPL, NBA, NFL, F1, T20 Cricket, FIFA World Cup, and more.",
    screenshot: "/screenshots/step-3-markets.png",
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Trade Performance Tokens",
    description: "Buy Index Asset Tokens (IATs) whose value is tied to real-world performance outcomes. No odds, no house, no gambling.",
    screenshot: "/screenshots/step-4-trade.png",
  },
  {
    icon: Bot,
    step: "05",
    title: "AI-Powered Insights",
    description: "HAL AI provides real-time, search-grounded analysis, news summaries, and educational content to support your decisions.",
    screenshot: "/screenshots/step-5-ai.png",
  },
  {
    icon: ArrowDownToLine,
    step: "06",
    title: "Settle & Withdraw",
    description: "Deterministic on-chain settlement at market close. Withdraw to USDC at any time. Fully auditable on Solana.",
    screenshot: "/screenshots/step-6-settle.png",
  },
];

export default function HowItWorksSection() {
  const [active, setActive] = useState(0);

  return (
    <SectionWrapper id="how">
      <div className="text-center mb-12">
        <Badge variant="gold" className="mb-4">
          How It Works
        </Badge>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          How ShareMatch Works in 6 Simple Steps
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          From sign-up to settlement, the entire journey is transparent,
          Shariah-compliant, and blockchain-verified.
        </p>
      </div>

      {/* Rotated screenshot, centred */}
      <div className="flex justify-center mb-16">
        <div className="relative w-full max-w-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, rotate: -8, scale: 0.95 }}
              animate={{ opacity: 1, rotate: -6, scale: 1 }}
              exit={{ opacity: 0, rotate: -4, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
              className="rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10"
            >
              <Image
                src={steps[active].screenshot}
                alt={steps[active].title}
                width={600}
                height={400}
                unoptimized
                className="w-full h-auto"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute -inset-16 -z-10 bg-emerald-500/8 rounded-full blur-3xl pointer-events-none" />
        </div>
      </div>

      {/* 3x2 step cards grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {steps.map((s, i) => (
          <motion.button
            key={s.step}
            onClick={() => setActive(i)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className={`glass-card p-6 text-left transition-all duration-300 cursor-pointer ${
              i === active
                ? "border-emerald-500/30 bg-emerald-500/5"
                : "hover:border-white/10 hover:bg-white/[0.04]"
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                i === active ? "bg-emerald-500/15" : "bg-white/5"
              }`}>
                <s.icon className={`w-5 h-5 ${i === active ? "text-emerald-400" : "text-text-muted"}`} />
              </div>
              <span className="text-xs font-mono text-text-muted">{s.step}</span>
            </div>
            <h3 className="text-base font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              {s.description}
            </p>
          </motion.button>
        ))}
      </div>
    </SectionWrapper>
  );
}
