import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/contact")({
  component: () => (
    <>
      <div className="pt-24" />
      <ContactSection />
    </>
  ),
  head: () => ({
    meta: [
      { title: "Contact — Veritas Law" },
      {
        name: "description",
        content: "Book a free consultation with a senior attorney at Veritas Law.",
      },
      { property: "og:title", content: "Contact — Veritas Law" },
      {
        property: "og:description",
        content: "Speak with a senior attorney. Confidential, no obligation.",
      },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});
