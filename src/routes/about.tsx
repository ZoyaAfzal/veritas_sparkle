import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CTABanner } from "@/components/sections/CTABanner";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — Veritas Law" },
      {
        name: "description",
        content:
          "Founded in 1998, Veritas Law brings principled, partner-led counsel to every client matter.",
      },
      { property: "og:title", content: "About — Veritas Law" },
      {
        property: "og:description",
        content: "Our story, philosophy, and the people behind Veritas Law.",
      },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function About() {
  return (
    <>
      <section className="pt-40 pb-24 bg-bg-primary grain">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              label="Our Story"
              title={
                <>
                  A firm built on <span className="text-gold font-light">principle</span>.
                </>
              }
              intro="Veritas Law was founded in 1998 on a single conviction: that excellent legal counsel is built on truth, preparation, and unwavering loyalty to the client."
            />
            <p className="mt-6 text-text-secondary leading-relaxed">
              Today, our partners lead nine practice groups across twelve states, but our standard
              has never changed. Every matter — from a multinational merger to a family asylum
              petition — is staffed and led personally by senior counsel.
            </p>
          </div>
          <div className="aspect-[4/5] border border-border-gold overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=900"
              alt="Office"
              className="h-full w-full object-cover grayscale"
            />
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <CTABanner />
    </>
  );
}
