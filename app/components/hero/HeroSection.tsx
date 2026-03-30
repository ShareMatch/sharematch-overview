"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Badge from "../common/Badge";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-start pt-34 md:items-center md:pt-0 gradient-mesh overflow-hidden">
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
          className="hidden md:flex items-center justify-center mb-12"
        >
          <Image
            src="/logos/sharematch-lockup.png"
            alt="ShareMatch"
            width={400}
            height={111}
            unoptimized
            className="h-14 md:h-20 w-auto"
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
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: [0.22, 0.61, 0.36, 1],
          }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 max-w-5xl mx-auto"
        >
          The World&rsquo;s First{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
            Shariah-Compliant
          </span>{" "}
          Sports Investment Market
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Welcome to the Next-Gen of Investing. Buy, sell, and grow your
          portfolio on our 100% Shariah-compliant platform designed for secure,
          end-to-end, ethical investing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#who"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#2e3742] text-white font-semibold text-lg hover:opacity-90 transition-all duration-300 hover:-translate-y-0.5 shimmer"
          >
            Learn More
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent" />
    </section>
  );
}
