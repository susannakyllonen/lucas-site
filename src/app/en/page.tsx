"use client";

import SponsorGrid from "@/components/SponsorGrid";
import HeroMotion from "@/components/HeroMotion";
import NameAndGallery from "@/components/NameAndGallery";
import HighlightSection from "@/components/HighlightSection";
import SupportLucas from "@/components/SupportLucas";
import { Container, Section } from "@/components/Section";
import AboutLucasEn from "@/components/AboutLucasEn";

export default function Home() {
  return (
    <>
      <HeroMotion />
      <AboutLucasEn />
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
