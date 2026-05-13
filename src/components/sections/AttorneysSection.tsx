import { motion } from "framer-motion";
import { Linkedin, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "../SectionHeader";
import { stagger, fadeUp } from "@/lib/animations";

const attorneys = [
  {
    name: "James Harrington",
    role: "Senior Partner",
    spec: "Corporate Law",
    img: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    name: "Amara Osei",
    role: "Partner",
    spec: "Criminal Defense",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Sofia Marchetti",
    role: "Partner",
    spec: "Immigration Law",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "David Chen",
    role: "Associate",
    spec: "Family Law",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
  },
];

export function AttorneysSection() {
  return (
    <section className="py-28 lg:py-40 bg-bg-primary grain">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          label="Our Team"
          title={
            <>
              Meet Our <span className="text-gold font-light">Legal</span> Experts.
            </>
          }
          intro="Decorated attorneys from the country's leading law schools, united by a single ethic: relentless advocacy."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {attorneys.map((a) => (
            <motion.div
              key={a.name}
              variants={fadeUp}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden bg-bg-secondary transition-all duration-500 hover:shadow-[0_20px_50px_-20px_rgba(201,168,76,0.3)]"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={a.img}
                  alt={a.name}
                  className="h-full w-full object-cover grayscale transition-all duration-1000 cubic-bezier(0.4, 0, 0.2, 1) group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-accent text-[10px] uppercase tracking-[0.25em] text-gold">
                    {a.role}
                  </p>
                  <h3 className="font-display text-2xl text-text-primary mt-1">{a.name}</h3>
                  <p className="text-sm text-text-secondary mt-1">{a.spec}</p>
                  <div className="mt-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 text-gold text-xs font-accent uppercase tracking-[0.2em]"
                    >
                      Profile <ArrowUpRight className="h-3 w-3" />
                    </a>
                    <a href="#" className="text-gold">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div className="absolute bottom-0 inset-x-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
