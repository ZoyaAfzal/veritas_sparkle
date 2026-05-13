import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";

export function CTABanner() {
  return (
    <section className="relative py-28 lg:py-36 bg-bg-primary overflow-hidden grain">
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="diag"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line x1="0" y1="0" x2="0" y2="40" stroke="#C9A84C" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diag)" />
      </svg>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-3xl px-6 text-center"
      >
        <span className="font-accent text-[10px] uppercase tracking-[0.3em] text-gold">
          Free Consultation
        </span>
        <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
          Ready to <span className="text-gold font-light">Protect</span> Your Legal Rights?
        </h2>
        <p className="mt-5 text-text-secondary max-w-xl mx-auto">
          Speak with a senior attorney today. Confidential, no obligation, and free of charge.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="bg-gold text-bg-primary font-accent text-[11px] uppercase tracking-[0.2em] px-7 py-4 hover:bg-gold-light transition-colors animate-pulse-gold"
          >
            Book Free Consultation
          </Link>
          <a
            href="tel:+12125550198"
            className="inline-flex items-center gap-2 border border-text-primary/40 text-text-primary font-accent text-[11px] uppercase tracking-[0.2em] px-7 py-4 hover:bg-text-primary hover:text-bg-primary transition-colors"
          >
            <Phone className="h-4 w-4" /> Call Us Now
          </a>
        </div>
      </motion.div>
    </section>
  );
}
