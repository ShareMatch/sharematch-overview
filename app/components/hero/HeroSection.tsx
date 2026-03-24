"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Badge from "../common/Badge";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-mesh overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
          className="flex items-center justify-center mb-12"
        >
          <Image
            src="/logos/sharematch-lockup.svg"
            alt="ShareMatch"
            width={280}
            height={64}
            className="h-12 md:h-16 w-auto"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-8"
        >
          <Badge variant="gold">General Overview</Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 max-w-5xl mx-auto"
        >
          The Future of{" "}
          <span className="bg-gradient-to-r from-gold-500 to-gold-300 bg-clip-text text-transparent">
            Performance-Based
          </span>{" "}
          Digital Assets
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          The world&rsquo;s first and only Shariah-compliant tokenised asset
          marketplace. Trade performance indices across sport, culture, and
          global events, built on Solana.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#who"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold-500 text-bg-primary font-semibold text-lg hover:bg-gold-400 transition-all duration-300 hover:-translate-y-0.5 shimmer"
          >
            Learn More
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
          <a
            href="https://rwa.sharematch.me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/10 text-text-primary font-semibold text-lg hover:bg-white/5 transition-all duration-300"
          >
            Create an Account
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent" />
    </section>
  );
}
