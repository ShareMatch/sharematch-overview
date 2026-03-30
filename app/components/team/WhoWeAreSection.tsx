"use client";
import { motion } from "framer-motion";
import SectionWrapper from "../common/SectionWrapper";
import Badge from "../common/Badge";
import { Scale, BookOpen, FileCheck, Shield, Cpu } from "lucide-react";

const points = [
  {
    icon: Scale,
    text: "Official Fatwa from leading global Islamic scholars confirming full Shariah compliance",
  },
  {
    icon: BookOpen,
    text: "All assets follow AAOIFI standards, the global benchmark for Islamic financial compliance",
  },
  {
    icon: FileCheck,
    text: "Settlement technology and market structure under global patent and trademark application",
  },
  {
    icon: Shield,
    text: "Halal financial market alternative to Polymarket, Kalshi, and DraftKings",
  },
  {
    icon: Cpu,
    text: "Built on Solana, enabling high-throughput, low-cost on-chain settlement",
  },
];

export default function WhoWeAreSection() {
  return (
    <SectionWrapper id="who" className="pt-12 md:pt-32">
      {/*<div className="text-center mb-16">
        <Badge variant="gold" className="mb-4">
          What is ShareMatch
        </Badge>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          The Future of Halal SportFi
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Built on Solana, the platform enables users to trade sports indices
          and outcome-based assets using skill and knowledge, while remaining
          fully compliant with Islamic financial principles. Unlike traditional
          iGaming or prediction markets, ShareMatch is designed as a Halal
          financial market.
        </p>
      </div>*/}

      <div className="flex flex-col-reverse lg:grid lg:grid-cols-[3fr_2fr] gap-12 items-center">
        {/* Left: Video */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden glow-gold"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            controls
            className="w-full rounded-2xl"
            poster=""
          >
            <source src="/videos/platform-walkthrough.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Right: Badge, heading, description + bullet points */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Badge variant="gold" className="mb-4">
            What is ShareMatch
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 leading-tight">
            The Future of Halal SportFi
          </h2>
          <p className="text-text-secondary mb-8 leading-relaxed">
            Built on Solana, the platform enables users to trade sports indices
            and outcome-based assets using skill and knowledge, while remaining
            fully compliant with Islamic financial principles. Unlike
            traditional iGaming or prediction markets, ShareMatch is designed as
            a Halal financial market.
          </p>

          <div className="space-y-4">
            {points.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className="flex items-start gap-3"
              >
                <div className="shrink-0 w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center mt-0.5">
                  <p.icon className="w-4 h-4 text-gold-400" />
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {p.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
