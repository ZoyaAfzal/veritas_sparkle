import { createFileRoute } from "@tanstack/react-router";
import { AttorneysSection } from "@/components/sections/AttorneysSection";
import { CTABanner } from "@/components/sections/CTABanner";

export const Route = createFileRoute("/attorneys")({
  component: () => (
    <>
      <div className="pt-24" />
      <AttorneysSection />
      <CTABanner />
    </>
  ),
  head: () => ({
    meta: [
      { title: "Attorneys — Veritas Law" },
      { name: "description", content: "Meet the partners and associates of Veritas Law." },
      { property: "og:title", content: "Attorneys — Veritas Law" },
      {
        property: "og:description",
        content: "Decorated counsel from the country's leading law schools.",
      },
    ],
    links: [{ rel: "canonical", href: "/attorneys" }],
  }),
});
