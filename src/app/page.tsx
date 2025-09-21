"use client";

import SponsorGrid from "@/components/SponsorGrid";
import About from "@/components/About";
import HeroMotion from "@/components/HeroMotion";
import NameAndGallery from "@/components/NameAndGallery";
import HighlightSection from "@/components/HighlightSection";
import SupportLucas from "@/components/SupportLucas";
import { Container, Section } from "@/components/Section";

export default function Home() {
  return (
    <>
      <HeroMotion />
      <About />
      <NameAndGallery />
      <Section>
        <Container>
          <HighlightSection />
        </Container>
      </Section>

      <SupportLucas />
      <SponsorGrid />
    </>
  );
}
