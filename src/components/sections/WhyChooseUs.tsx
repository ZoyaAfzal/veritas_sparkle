import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { SectionHeader } from "../SectionHeader";

const features = [
  "Free Initial Consultation",
  "25+ Years of Combined Experience",
  "Transparent, Fixed-Fee Billing",
  "24/7 Client Support",
  "Multi-lingual Legal Team",
  "Licensed Across 12 States",
];

const stats = [
  { value: 1200, suffix: "+", label: "Cases Won" },
  { value: 25, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 50, suffix: "+", label: "Expert Attorneys" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 2000, bounce: 0 });
  const display = useTransform(spring, (v) => Math.floor(v).toLocaleString());
  const [text, setText] = useState("0");
  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, mv, to]);
  useEffect(() => display.on("change", setText), [display]);
  return (
    <span
      ref={ref}
      className="font-display text-5xl md:text-6xl bg-clip-text text-transparent"
      style={{
        backgroundImage:
          "linear-gradient(135deg, var(--gold-light), var(--gold) 40%, var(--sapphire-light))",
      }}
    >
      {text}
      {suffix}
    </span>
  );
}

export function WhyChooseUs() {
  return (
    <section className="relative py-28 lg:py-40 bg-bg-secondary border-y border-border overflow-hidden">
      <div
        className="aurora-orb animate-aurora"
        style={{
          top: "10%",
          left: "-15%",
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(138,43,226,0.25), transparent 65%)",
        }}
      />
      <div
        className="aurora-orb animate-aurora"
        style={{
          bottom: "-10%",
          right: "-10%",
          width: 460,
          height: 460,
          background: "radial-gradient(circle, rgba(165,124,255,0.18), transparent 65%)",
          animationDelay: "-7s",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div>
          <SectionHeader
            label="Why Veritas"
            title={
              <>
                The Veritas <span className="text-gold font-light">Difference</span>.
              </>
            }
            intro="We blend old-world principle with modern strategy. Every client matter receives partner-level attention from day one."
          />
          <ul className="mt-10 grid sm:grid-cols-2 gap-x-6 gap-y-4">
            {features.map((f, i) => (
              <motion.li
                key={f}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3 text-text-secondary"
              >
                <span className="grid place-items-center h-6 w-6 border border-gold/40 text-gold">
                  <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
                <span className="text-sm">{f}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-px bg-border">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-bg-secondary p-8 lg:p-12 text-center"
            >
              <Counter to={s.value} suffix={s.suffix} />
              <p className="mt-3 font-accent text-[10px] uppercase tracking-[0.25em] text-text-secondary">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
