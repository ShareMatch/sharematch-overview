"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "../common/SectionWrapper";
import Badge from "../common/Badge";
import { UserPlus, Wallet, BarChart3, TrendingUp, Bot, ArrowDownToLine, ChevronLeft, ChevronRight } from "lucide-react";

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

  const next = () => setActive((i) => (i + 1) % steps.length);
  const prev = () => setActive((i) => (i - 1 + steps.length) % steps.length);

  const s = steps[active];

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

      {/* Step pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {steps.map((step, i) => (
          <button
            key={step.step}
            onClick={() => setActive(i)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              i === active
                ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                : "bg-white/5 text-text-muted border border-white/5 hover:text-text-secondary hover:bg-white/8"
            }`}
          >
            <step.icon className="w-4 h-4" />
            <span className="hidden sm:inline">{step.title}</span>
            <span className="sm:hidden">{step.step}</span>
          </button>
        ))}
      </div>

      {/* Main carousel area */}
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Screenshot in browser frame */}
          <div className="relative">
            <div className="browser-frame">
              <div className="browser-frame-bar">
                <div className="browser-dot bg-red-500" />
                <div className="browser-dot bg-yellow-500" />
                <div className="browser-dot bg-green-500" />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={s.screenshot}
                      alt={s.title}
                      fill
                      className="object-cover object-top"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            <div className="absolute -inset-10 -z-10 bg-emerald-500/5 rounded-full blur-3xl overflow-hidden pointer-events-none" />
          </div>

          {/* Right: Step content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <s.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <span className="text-sm font-mono text-emerald-400">
                  Step {s.step}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{s.title}</h3>
              <p className="text-text-secondary text-base leading-relaxed mb-8">
                {s.description}
              </p>

              {/* Navigation arrows */}
              <div className="flex items-center gap-4">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label="Previous step"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex gap-1.5">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === active ? "w-6 bg-emerald-400" : "w-1.5 bg-white/20"
                      }`}
                      aria-label={`Go to step ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label="Next step"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}
