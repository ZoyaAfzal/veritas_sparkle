import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "../Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/practice-areas", label: "Practice Areas" },
  { to: "/attorneys", label: "Attorneys" },
  { to: "/case-studies", label: "Case Studies" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg-primary/95 backdrop-blur-xl border-b border-border-gold"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => {
            const active = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className="group relative font-accent text-[11px] uppercase tracking-[0.22em] text-text-secondary hover:text-gold transition-colors"
              >
                <span className="relative z-10 block transition-transform duration-300 group-hover:-translate-y-0.5">
                  {l.label}
                </span>
                {active ? (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-0 right-0 h-px bg-gold"
                  />
                ) : (
                  <span className="absolute -bottom-2 left-0 right-0 h-px bg-gold scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                )}
              </Link>
            );
          })}
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center font-accent text-[11px] uppercase tracking-[0.2em] px-5 py-3 border border-gold text-gold hover:bg-gold hover:text-bg-primary hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(201,168,76,0.5)] transition-all duration-300"
        >
          Book a Consultation
        </Link>

        <button className="lg:hidden text-gold p-2" onClick={() => setOpen(true)} aria-label="Menu">
          <Menu className="h-6 w-6" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-50 bg-bg-primary lg:hidden flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-20 border-b border-border">
              <Logo />
              <button onClick={() => setOpen(false)} className="text-gold p-2" aria-label="Close">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center gap-8 flex-1">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.1 + i * 0.08 } }}
                >
                  <Link
                    to={l.to}
                    className="font-display text-3xl text-text-primary hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.6 } }}
              >
                <Link
                  to="/contact"
                  className="mt-6 inline-flex font-accent text-xs uppercase tracking-[0.22em] px-8 py-4 bg-gold text-bg-primary"
                >
                  Book a Consultation
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
