import { Link } from "@tanstack/react-router";
import { Logo } from "../Logo";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border-gold">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 pb-12 border-b border-border">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 font-display text-text-secondary text-lg">
              Where truth meets justice.
            </p>
            <div className="mt-6 flex gap-4">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-9 w-9 grid place-items-center border border-border text-text-secondary hover:border-gold hover:text-gold transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
            <FooterCol
              title="Firm"
              links={[
                { label: "About", to: "/about" },
                { label: "Attorneys", to: "/attorneys" },
                { label: "Case Studies", to: "/case-studies" },
                { label: "Contact", to: "/contact" },
              ]}
            />
            <FooterCol
              title="Practice"
              links={[
                { label: "Corporate", to: "/practice-areas" },
                { label: "Criminal", to: "/practice-areas" },
                { label: "Family", to: "/practice-areas" },
                { label: "Immigration", to: "/practice-areas" },
              ]}
            />
            <FooterCol
              title="Resources"
              links={[
                { label: "Insights", to: "/" },
                { label: "Press", to: "/" },
                { label: "Careers", to: "/" },
                { label: "FAQ", to: "/" },
              ]}
            />
            <div>
              <h4 className="font-accent text-[11px] uppercase text-gold mb-5">Contact</h4>
              <ul className="space-y-3 text-sm text-text-secondary">
                <li>
                  1100 Liberty Avenue
                  <br />
                  New York, NY 10013
                </li>
                <li>+1 (212) 555-0198</li>
                <li>hello@veritaslaw.com</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 flex justify-end text-xs text-text-tertiary font-accent uppercase tracking-[0.18em]">
          <p>
            Powered by{" "}
            <a
              href="https://axistechgroup.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline transition-all"
            >
              AxisTechGroup
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <div>
      <h4 className="font-accent text-[11px] uppercase text-gold mb-5">{title}</h4>
      <ul className="space-y-3 text-sm text-text-secondary">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="hover:text-gold transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
