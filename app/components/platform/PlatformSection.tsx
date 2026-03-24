"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "../common/SectionWrapper";
import Badge from "../common/Badge";

const capabilities = [
  "Live & Trading",
  "Solana On-Chain Settlement",
  "Fatwa Approved",
  "KYC/AML via SumSub",
  "HAL AI Engine",
  "Real-World Asset Structure",
  "Digital Payment Rails",
  "Multi-Market Coverage",
];

export default function PlatformSection() {
  return (
    <SectionWrapper id="platform" className="bg-bg-secondary">
      <div className="text-center mb-12">
        <Badge variant="emerald" className="mb-4">
          The Platform
        </Badge>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          A Live, Market-Ready Product
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Not a concept. Not a whitepaper. ShareMatch is live, with real users
          trading across football, basketball, motorsport, cricket, esports, and
          global events.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-5xl mx-auto mb-12"
      >
        <div className="flex flex-col md:flex-row gap-6">
          <div className="browser-frame flex-1">
            <div className="browser-frame-bar">
              <div className="browser-dot bg-red-500" />
              <div className="browser-dot bg-yellow-500" />
              <div className="browser-dot bg-green-500" />
              <div className="flex-1 mx-4">
                <div className="bg-white/5 rounded-md px-3 py-1 text-[11px] md:text-xs text-text-muted text-center">
                  rwa.sharematch.me
                </div>
              </div>
            </div>
            <div className="relative aspect-16/10 overflow-hidden">
              <Image
                src="/screenshots/LoggedView.png"
                alt="ShareMatch platform, logged-in view"
                fill
                className="object-contain object-center p-2"
                priority
              />
            </div>
          </div>

          <div className="browser-frame flex-1">
            <div className="browser-frame-bar">
              <div className="browser-dot bg-red-500" />
              <div className="browser-dot bg-yellow-500" />
              <div className="browser-dot bg-green-500" />
              <div className="flex-1 mx-4">
                <div className="bg-white/5 rounded-md px-3 py-1 text-[11px] md:text-xs text-text-muted text-center">
                  rwa.sharematch.me/ai-analytics
                </div>
              </div>
            </div>
            <div className="relative aspect-16/10 overflow-hidden">
              <Image
                src="/screenshots/HAL-AI.png"
                alt="HAL AI analytics"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
        <div className="absolute -inset-10 -z-10 bg-gold-500/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="flex flex-wrap justify-center gap-3">
        {capabilities.map((cap, i) => (
          <motion.div
            key={cap}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
          >
            <Badge variant="emerald">{cap}</Badge>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
