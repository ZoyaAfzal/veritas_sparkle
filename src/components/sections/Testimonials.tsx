import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const items = [
  {
    quote:
      "Veritas Law guided our company through a regulatory minefield with calm and clarity. They are unlike any firm I've worked with.",
    name: "Eleanor Whitfield",
    role: "CEO, Whitfield Holdings",
    img: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    quote:
      "From day one I felt like their only client. Their preparation, integrity, and outcome speak for themselves.",
    name: "Marcus Reyes",
    role: "Personal Injury Client",
    img: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    quote:
      "They turned an impossible immigration case into permanent residency for our entire family. We will be forever grateful.",
    name: "Priya Nair",
    role: "Immigration Client",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, [paused]);

  const t = items[i];

  return (
    <section
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative py-28 lg:py-40 bg-bg-primary overflow-hidden grain"
    >
      <div className="absolute inset-0 -z-10 grid place-items-center pointer-events-none">
        <div
          className="h-[700px] w-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(138,43,226,0.10), transparent 60%)" }}
        />
      </div>
      <span className="absolute top-12 left-1/2 -translate-x-1/2 font-display text-[260px] leading-none text-gold/10 select-none pointer-events-none">
        "
      </span>

      <div className="relative mx-auto max-w-3xl px-6 lg:px-10 text-center">
        <div className="flex justify-center gap-1 mb-8">
          {Array.from({ length: 5 }).map((_, j) => (
            <Star key={j} className="h-4 w-4 fill-gold text-gold" />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-display text-2xl md:text-3xl lg:text-4xl leading-snug text-text-primary">
              "{t.quote}"
            </p>
            <footer className="mt-10 flex items-center justify-center gap-4">
              <img
                src={t.img}
                alt={t.name}
                className="h-12 w-12 rounded-full object-cover grayscale"
              />
              <div className="text-left">
                <p className="font-display text-lg text-text-primary">{t.name}</p>
                <p className="font-accent text-[10px] uppercase tracking-[0.22em] text-gold">
                  {t.role}
                </p>
              </div>
            </footer>
          </motion.blockquote>
        </AnimatePresence>

        <div className="mt-10 flex justify-center gap-2">
          {items.map((_, j) => (
            <button
              key={j}
              onClick={() => setI(j)}
              className={`h-1.5 transition-all ${j === i ? "w-8 bg-gold" : "w-4 bg-border"}`}
              aria-label={`Go to testimonial ${j + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
