import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Check } from "lucide-react";
import { SectionHeader } from "../SectionHeader";

export function ContactSection() {
  const [sent, setSent] = useState(false);
  return (
    <section className="py-28 lg:py-40 bg-bg-primary grain">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          label="Get in Touch"
          title={
            <>
              Begin Your <span className="text-gold font-light">Consultation</span>.
            </>
          }
          intro="Tell us about your matter. A senior attorney will respond within one business day."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-10">
          <div className="space-y-8">
            <ul className="space-y-6">
              <Info
                icon={MapPin}
                title="Office"
                text="1100 Liberty Avenue, Suite 4400, New York, NY 10013"
              />
              <Info icon={Phone} title="Phone" text="+1 (212) 555-0198" />
              <Info icon={Mail} title="Email" text="hello@veritaslaw.com" />
              <Info icon={Clock} title="Hours" text="Mon – Fri, 8:00 AM – 7:00 PM ET" />
            </ul>
            <div className="aspect-[4/3] border border-border overflow-hidden">
              <iframe
                title="Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-74.02%2C40.71%2C-73.99%2C40.72&amp;layer=mapnik"
                className="w-full h-full"
                style={{ filter: "grayscale(1) invert(0.92) contrast(0.85)" }}
              />
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="border border-border bg-bg-secondary p-8 lg:p-10 space-y-5"
          >
            <Field label="Full Name">
              <input required className="input" placeholder="Jane Doe" />
            </Field>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Email">
                <input required type="email" className="input" placeholder="you@email.com" />
              </Field>
              <Field label="Phone">
                <input className="input" placeholder="+1 (555) 000 0000" />
              </Field>
            </div>
            <Field label="Practice Area">
              <select className="input">
                <option>Corporate Law</option>
                <option>Criminal Defense</option>
                <option>Family Law</option>
                <option>Immigration</option>
                <option>Personal Injury</option>
                <option>Other</option>
              </select>
            </Field>
            <Field label="Case Description">
              <textarea
                required
                rows={5}
                className="input resize-none"
                placeholder="Briefly describe your matter…"
              />
            </Field>
            <button
              type="submit"
              disabled={sent}
              className="w-full bg-gold text-bg-primary font-accent text-[11px] uppercase tracking-[0.22em] py-4 hover:bg-gold-light transition-colors disabled:opacity-70"
            >
              {sent ? "Message Received" : "Submit Inquiry"}
            </button>
            {sent && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 text-gold text-sm"
              >
                <span className="grid place-items-center h-6 w-6 border border-gold rounded-full">
                  <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
                We've received your message. An attorney will reach out shortly.
              </motion.div>
            )}
          </form>
        </div>
      </div>

      <style>{`
        .input {
          width: 100%;
          background: transparent;
          border: 1px solid var(--border);
          color: var(--text-primary);
          padding: 0.85rem 1rem;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.3s;
        }
        .input:focus { border-color: var(--gold); }
        .input::placeholder { color: var(--text-tertiary); }
        select.input { appearance: none; }
      `}</style>
    </section>
  );
}

function Info({ icon: Icon, title, text }: { icon: any; title: string; text: string }) {
  return (
    <li className="flex items-start gap-4">
      <span className="grid place-items-center h-10 w-10 border border-border-gold text-gold flex-shrink-0">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className="font-accent text-[10px] uppercase tracking-[0.22em] text-gold">{title}</p>
        <p className="text-text-secondary mt-1">{text}</p>
      </div>
    </li>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="font-accent text-[10px] uppercase tracking-[0.22em] text-text-secondary mb-2 block">
        {label}
      </span>
      {children}
    </label>
  );
}
