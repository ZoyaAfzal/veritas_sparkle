import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeader } from "../SectionHeader";
import { stagger, fadeUp } from "@/lib/animations";

const articles = [
  {
    id: "sec-rules",
    tag: "Corporate",
    title: "What the New SEC Disclosure Rules Mean for Mid-Market Boards",
    date: "May 2026",
    read: "6 min",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800",
  },
  {
    id: "visa-pathways",
    tag: "Immigration",
    title: "Updated Visa Pathways for Skilled Workers in 2026",
    date: "April 2026",
    read: "8 min",
    img: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=800",
  },
  {
    id: "ai-evidence",
    tag: "Litigation",
    title: "AI Evidence in Federal Court: A Practitioner's Guide",
    date: "March 2026",
    read: "10 min",
    img: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=800",
  },
];

export function Insights() {
  return (
    <section className="py-28 lg:py-40 bg-bg-secondary border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          label="Journal"
          title={
            <>
              Legal <span className="text-gold font-light">Insights</span> & News.
            </>
          }
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {articles.map((a) => (
            <motion.article key={a.title} variants={fadeUp} className="group">
              <div className="relative aspect-[16/10] overflow-hidden bg-bg-primary border border-border">
                <img
                  src={a.img}
                  alt={a.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-bg-primary/80 backdrop-blur border border-gold/40 font-accent text-[10px] uppercase tracking-[0.22em] text-gold">
                  {a.tag}
                </span>
              </div>
              <h3 className="mt-5 font-display text-2xl text-text-primary group-hover:text-gold transition-colors">
                {a.title}
              </h3>
              <div className="mt-3 flex items-center justify-between">
                <p className="font-accent text-[10px] uppercase tracking-[0.22em] text-text-tertiary">
                  {a.date} · {a.read}
                </p>
                <Link
                  to="/insights"
                  hash={a.id}
                  className="inline-flex items-center gap-1 text-gold font-accent text-[10px] uppercase tracking-[0.22em] hover:text-gold-light transition-colors"
                >
                  Read <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
