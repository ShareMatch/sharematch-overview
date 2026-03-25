"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CTASection() {
  return (
    <section
      id="join"
      className="relative min-h-[80vh] flex items-center justify-center gradient-mesh overflow-hidden pb-32 sm:pb-20"
    >
      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/logos/sharematch-mark.png"
            alt="ShareMatch"
            width={48}
            height={64}
            unoptimized
            className="mx-auto mb-8 h-12 w-auto opacity-60"
          />

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Join the Journey
          </h2>

          <p className="text-lg text-text-secondary max-w-xl mx-auto mb-10">
            Step into the future of Halal SportsFi investing. Be the first to
            experience the world&rsquo;s only Shariah-compliant sports investment
            market when we open our digital doors.
          </p>

          <div className="flex flex-col items-center gap-6 mb-24 sm:mb-16">
            <a
              href="https://rwa.sharematch.me"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-500 text-bg-primary font-semibold text-lg hover:bg-emerald-400 transition-all duration-300 hover:-translate-y-0.5 shimmer"
            >
              Register for Early Access
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            <div className="text-center">
              <p className="text-sm text-text-secondary mb-3">
                Looking for business or investment opportunities?
              </p>
              <a
                href="mailto:will@sharematch.me"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/10 text-text-primary font-semibold text-lg hover:bg-white/5 transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact Us
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 py-6 border-t border-white/5">
        <div className="section-container">
          <p className="text-xs text-text-muted text-center leading-relaxed max-w-2xl mx-auto">
            This page is for information purposes only and does not constitute
            an offer to sell or a solicitation of an offer to buy any securities.
            &copy; {new Date().getFullYear()} ShareMatch. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
