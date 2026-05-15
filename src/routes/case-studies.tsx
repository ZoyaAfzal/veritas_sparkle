import { createFileRoute } from "@tanstack/react-router";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { CaseDetails } from "@/components/sections/CaseDetails";
import { CTABanner } from "@/components/sections/CTABanner";

export const Route = createFileRoute("/case-studies")({
  component: () => (
    <>
      <div className="pt-24" />
      <CaseStudies />
      <CaseDetails />
      <CTABanner />
    </>
  ),
  head: () => ({
    meta: [
      { title: "Case Studies — Veritas Law" },
      {
        name: "description",
        content:
          "Landmark outcomes from Veritas Law across corporate, criminal, family and immigration matters.",
      },
      { property: "og:title", content: "Case Studies — Veritas Law" },
      { property: "og:description", content: "Selected landmark cases from our partners." },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
});
