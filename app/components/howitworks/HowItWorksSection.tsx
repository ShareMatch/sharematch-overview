"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Badge from "../common/Badge";
import {
  UserPlus,
  Wallet,
  BarChart3,
  TrendingUp,
  Bot,
  ArrowDownToLine,
} from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Sign Up & Verify",
    description:
      "Create an account with instant KYC verification. Geolocation compliance ensures you are in a supported jurisdiction.",
    screenshot: "/screenshots/step-1.png",
  },
  {
    icon: Wallet,
    step: "02",
    title: "Deposit Funds",
    description:
      "Deposit USDC or use supported local payment rails. Funds convert to ShareMatch Tokens (SMT) at 1:1.",
    screenshot: "/screenshots/step-2.png",
  },
  {
    icon: BarChart3,
    step: "03",
    title: "Browse Markets",
    description:
      "Choose from 10+ performance indices: EPL, UCL, SPL, NBA, NFL, F1, T20 Cricket, FIFA World Cup, and more.",
    screenshot: "/screenshots/step-3.png",
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Trade Performance Tokens",
    description:
      "Buy Index Asset Tokens (IATs) whose value is tied to real-world performance outcomes. No odds, no house, no gambling.",
    screenshot: "/screenshots/step-4.png",
  },
  {
    icon: Bot,
    step: "05",
    title: "AI-Powered Insights",
    description:
      "HAL AI provides real-time, search-grounded analysis, news summaries, and educational content to support your decisions.",
    screenshot: "/screenshots/step-5.png",
  },
  {
    icon: ArrowDownToLine,
    step: "06",
    title: "Settle & Withdraw",
    description:
      "Deterministic on-chain settlement at market close. Withdraw to USDC at any time. Fully auditable on Solana.",
    screenshot: "/screenshots/step-6.png",
  },
];

export default function HowItWorksSection() {
  return (
    <motion.section
      id="how"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
      className="py-24 md:py-32 overflow-hidden relative"
    >
      <div className="section-container mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="gold" className="mb-4">
            How it works
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            How ShareMatch works in 6 simple steps
          </h2>
          <p className="text-text-secondary text-lg">
            A step-by-step of the ShareMatch experience—transparent,
            Shariah-compliant, and seamlessly connected to real-world outcomes.
          </p>
        </div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pb-12 lg:pb-12">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`glass-card rounded-3xl overflow-hidden flex flex-col border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-emerald-500/30 transition-all duration-300 group`}
            >
              {/* Image Section */}
              <div
                className={`h-60 relative flex items-center justify-center border-b border-white/5 overflow-hidden ${i < 2 ? "bg-emerald-900" : "bg-gray-900"}`}
              >
                <div className="relative flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={s.screenshot}
                    alt={s.title}
                    width={400}
                    height={300}
                    unoptimized
                    priority={i < 2}
                    className="w-auto h-auto max-w-full max-h-full object-contain drop-shadow-2xl rounded-lg"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>

              {/* Content Section */}
              <div className="p-6 sm:p-8 flex flex-col max-h-[250px] relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-emerald-500/10 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                    <s.icon className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                  </div>
                  {/* Subtle step indicator since it's an overview, not strict steps */}
                  <span className="text-xs font-bold font-mono text-emerald-400/70 tracking-widest uppercase">
                    Step {s.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-emerald-300 transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {s.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
