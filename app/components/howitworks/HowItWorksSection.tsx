"use client";

import { motion } from "framer-motion";
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
    focus: "right top",
  },
  {
    icon: Wallet,
    step: "02",
    title: "Deposit Funds",
    description: "Deposit USDC or use supported local payment rails. Funds convert to ShareMatch Tokens (SMT) at 1:1.",
    screenshot: "/screenshots/step-2-deposit.png",
    focus: "80% 0%",
  },
  {
    icon: BarChart3,
    step: "03",
    title: "Browse Markets",
    description: "Choose from 10+ performance indices: EPL, UCL, SPL, NBA, NFL, F1, T20 Cricket, FIFA World Cup, and more.",
    screenshot: "/screenshots/step-3-markets.png",
    focus: "left center",
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Trade Performance Tokens",
    description: "Buy Index Asset Tokens (IATs) whose value is tied to real-world performance outcomes. No odds, no house, no gambling.",
    screenshot: "/screenshots/step-4-trade.png",
    focus: "center 30%",
  },
  {
    icon: Bot,
    step: "05",
    title: "AI-Powered Insights",
    description: "HAL AI provides real-time, search-grounded analysis, news summaries, and educational content to support your decisions.",
    screenshot: "/screenshots/step-5-ai.png",
    focus: "center center",
  },
  {
    icon: ArrowDownToLine,
    step: "06",
    title: "Settle & Withdraw",
    description: "Deterministic on-chain settlement at market close. Withdraw to USDC at any time. Fully auditable on Solana.",
    screenshot: "/screenshots/step-6-settle.png",
    focus: "center 40%",
  },
];

export default function HowItWorksSection() {
  return (
    <SectionWrapper id="how">
      <div className="text-center mb-16">
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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {steps.map((s, i) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="glass-card p-6 relative group overflow-hidden"
          >
            <div className="relative aspect-[4/3] mb-4 rounded-lg overflow-hidden -mx-2 -mt-2">
              <Image
                src={s.screenshot}
                alt={s.title}
                fill
                style={{ objectPosition: s.focus }}
                className="object-cover transform rotate-[-3deg] scale-[1.8] group-hover:rotate-[-1deg] group-hover:scale-[1.9] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/40 via-transparent to-transparent" />
            </div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <s.icon className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="text-xs font-mono text-text-muted">{s.step}</span>
            </div>
            <h3 className="text-base font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              {s.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
