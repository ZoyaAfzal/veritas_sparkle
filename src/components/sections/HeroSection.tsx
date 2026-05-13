import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star, ChevronDown } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { wordReveal, stagger } from "@/lib/animations";
import { useRef } from "react";

const headline = ["Your", "Trusted", "Law", "Firm,", "For", "Your", "Legal", "Solutions."];

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="spotlight relative min-h-screen flex items-center overflow-hidden grain bg-bg-primary"
    >
      <motion.div style={{ y, opacity }} className="absolute inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2670&auto=format&fit=crop"
          alt="Law firm interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-bg-primary/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/50 to-transparent" />
      </motion.div>

      {/* Aurora orbs (gold + sapphire) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="aurora-orb animate-aurora"
          style={{
            top: "-10%",
            left: "-10%",
            width: 620,
            height: 620,
            background: "radial-gradient(circle, rgba(201,168,76,0.25), transparent 65%)",
          }}
        />
        <div
          className="aurora-orb animate-aurora"
          style={{
            bottom: "-15%",
            right: "-10%",
            width: 720,
            height: 720,
            background: "radial-gradient(circle, rgba(201,168,76,0.35), transparent 65%)",
            animationDelay: "-5s",
          }}
        />
        <div
          className="aurora-orb animate-aurora"
          style={{
            top: "30%",
            right: "20%",
            width: 380,
            height: 380,
            background: "radial-gradient(circle, rgba(43,76,140,0.30), transparent 65%)",
            animationDelay: "-9s",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-32 pb-24 w-full">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-5xl">
          <motion.div variants={wordReveal} className="flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-gold" />
            <span className="font-accent text-[10px] uppercase text-gold tracking-[0.3em]">
              Trusted Legal Excellence Since 1998
            </span>
          </motion.div>

          <h1 className="font-display text-[52px] leading-[1.05] md:text-[78px] lg:text-[96px] tracking-tight">
            {headline.map((w, i) => (
              <motion.span key={i} variants={wordReveal} className="inline-block mr-[0.25em]">
                {i === 1 ? <span className="font-light text-gold">{w}</span> : w}
              </motion.span>
            ))}
          </h1>

          <motion.p
            variants={wordReveal}
            className="mt-8 max-w-xl text-text-secondary text-lg leading-relaxed"
          >
            At Veritas Law, we provide strategic legal solutions backed by experience, integrity,
            and unwavering dedication to every client we represent.
          </motion.p>

          <motion.div variants={wordReveal} className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-gold text-white font-accent text-[11px] uppercase tracking-[0.2em] px-7 py-4 hover:bg-gold/90 transition-colors"
            >
              Get a Free Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-3 border border-text-primary/40 text-text-primary font-accent text-[11px] uppercase tracking-[0.2em] px-7 py-4 hover:bg-gold hover:border-gold hover:text-white transition-all"
            >
              Explore Our Work
            </Link>
          </motion.div>

          <motion.div
            variants={wordReveal}
            className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-text-secondary">
                <span className="text-text-primary font-medium">4.9</span> · 600+ Reviews
              </span>
            </div>
            <span className="hidden md:inline h-4 w-px bg-gold/30" />
            <span className="text-text-secondary">
              <span className="text-text-primary font-medium">25+</span> Years Experience
            </span>
            <span className="hidden md:inline h-4 w-px bg-gold/30" />
            <span className="text-text-secondary">
              <span className="text-text-primary font-medium">1,200+</span> Cases Won
            </span>
          </motion.div>
        </motion.div>

        {/* Floating attorney cards */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="hidden xl:flex absolute right-10 bottom-24 gap-4"
        >
          {[
            {
              name: "James Harrington",
              role: "Senior Partner",
              img: "https://randomuser.me/api/portraits/men/41.jpg",
            },
            {
              name: "Amara Osei",
              role: "Partner, Criminal",
              img: "https://randomuser.me/api/portraits/women/68.jpg",
            },
          ].map((a) => (
            <div
              key={a.name}
              className="glass-card p-4 w-56 rounded-sm border-gold/20 hover:border-gold/50"
            >
              <div className="flex items-center gap-3">
                <img
                  src={a.img}
                  alt={a.name}
                  className="h-12 w-12 rounded-full object-cover grayscale hover:grayscale-0 transition-all"
                />
                <div>
                  <p className="font-display text-base text-text-primary">{a.name}</p>
                  <p className="font-accent text-[10px] uppercase text-gold tracking-[0.2em]">
                    {a.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.6 }, y: { duration: 1.8, repeat: Infinity } }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gold"
      >
        <ChevronDown className="h-5 w-5" />
      </motion.div>
    </section>
  );
}
