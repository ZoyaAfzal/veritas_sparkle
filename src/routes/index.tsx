import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { PracticeAreas } from "@/components/sections/PracticeAreas";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { AttorneysSection } from "@/components/sections/AttorneysSection";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Testimonials } from "@/components/sections/Testimonials";
import { Insights } from "@/components/sections/Insights";
import { CTABanner } from "@/components/sections/CTABanner";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Veritas Law — Where Truth Meets Justice" },
      {
        name: "description",
        content:
          "Premium legal counsel since 1998. 1,200+ cases won across corporate, criminal, family, immigration and litigation matters.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <PracticeAreas />
      <WhyChooseUs />
      <AttorneysSection />
      <CaseStudies />
      <Testimonials />
      <Insights />
      <CTABanner />
      <ContactSection />
    </>
  );
}
