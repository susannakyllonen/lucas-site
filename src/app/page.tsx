"use client";

import Hero from "@/components/Hero";
import { Section, Container } from "@/components/Section";
import VideoEmbed from "@/components/VideoEmbed";
import SponsorGrid from "@/components/SponsorGrid";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Hero />
      <About />

      <Section>
        <Container>
          <h2>Highlights</h2>
          <VideoEmbed id="YOUTUBE_VIDEO_ID" />
        </Container>
      </Section>

      <Section>
        <Container>
          <h2>Yhteistyökumppanit</h2>
          <SponsorGrid />
        </Container>
      </Section>
    </>
  );
}
