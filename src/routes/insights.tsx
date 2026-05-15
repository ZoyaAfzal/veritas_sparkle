import { createFileRoute } from "@tanstack/react-router";
import { Insights } from "@/components/sections/Insights";
import { BlogDetails } from "@/components/sections/BlogDetails";
import { CTABanner } from "@/components/sections/CTABanner";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/insights")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Legal Insights — Veritas Law" },
      {
        name: "description",
        content: "Expert legal analysis and news from Veritas Law partners.",
      },
      { property: "og:title", content: "Legal Insights — Veritas Law" },
      {
        property: "og:description",
        content: "Expert legal analysis and news from Veritas Law partners.",
      },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
});

function Page() {
  return (
    <div className="bg-bg-primary min-h-screen">
      <section className="pt-48 pb-12 grain">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeader
            label="Journal"
            title={
              <>
                Legal <span className="text-gold font-light">Insights</span> & News.
              </>
            }
            intro="Analysis, updates, and perspectives from the leading edge of law."
          />
        </div>
      </section>
      <BlogDetails />
      <div className="bg-bg-secondary py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="font-display text-4xl text-text-primary mb-12">Recent Journal Entries</h2>
          <Insights />
        </div>
      </div>
      <CTABanner />
    </div>
  );
}
