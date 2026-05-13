import { motion } from "framer-motion";
import { ReactNode } from "react";

export function SectionHeader({
  label,
  title,
  intro,
  align = "left",
}: {
  label: string;
  title: ReactNode;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } },
      }}
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <motion.div
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        className={`flex items-center gap-3 mb-5 ${align === "center" ? "justify-center" : ""}`}
      >
        <span className="h-px w-8 bg-gold" />
        <span className="font-accent text-[10px] uppercase text-gold tracking-[0.3em]">
          {label}
        </span>
      </motion.div>
      <motion.h2
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]"
      >
        {title}
      </motion.h2>
      {intro && (
        <motion.p
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="mt-5 text-text-secondary leading-relaxed"
        >
          {intro}
        </motion.p>
      )}
      <motion.div
        variants={{
          hidden: { width: 0 },
          visible: {
            width: align === "center" ? 64 : 96,
            transition: { duration: 0.8, delay: 0.3 },
          },
        }}
        className={`mt-8 h-px bg-gold ${align === "center" ? "mx-auto" : ""}`}
      />
    </motion.div>
  );
}
