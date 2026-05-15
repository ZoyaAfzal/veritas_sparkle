import { createFileRoute } from "@tanstack/react-router";
import { PracticeAreas } from "@/components/sections/PracticeAreas";
import { PracticeAreaDetails } from "@/components/sections/PracticeAreaDetails";
import { CTABanner } from "@/components/sections/CTABanner";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/practice-areas")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Practice Areas — Veritas Law" },
      {
        name: "description",
        content:
          "Nine practice groups: corporate, criminal, family, immigration, litigation, real estate, IP, employment and international law.",
      },
      { property: "og:title", content: "Practice Areas — Veritas Law" },
      {
        property: "og:description",
        content: "Discover the nine practice areas where Veritas Law represents clients.",
      },
    ],
    links: [{ rel: "canonical", href: "/practice-areas" }],
  }),
});

function Page() {
  return (
    <>
      <section className="pt-40 pb-12 bg-bg-primary grain">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeader
            label="Practice Areas"
            title={
              <>
                Where Veritas Law <span className="text-gold font-light">stands</span> for you.
              </>
            }
            intro="Nine practice groups, one standard of excellence."
          />
        </div>
      </section>
      <PracticeAreas />
      <PracticeAreaDetails />
      <CTABanner />
    </>
  );
}
