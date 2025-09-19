"use client";

import Hero from "@/components/Hero";
import { Section, Container } from "@/components/Section";
import VideoEmbed from "@/components/VideoEmbed";
import SponsorGrid from "@/components/SponsorGrid";
import About from "@/components/About";
import HeroMotion from "@/components/HeroMotion";
import AboutReveal from "@/components/AboutReveal";
import GalleryMasonry from "@/components/GalleryMasonry";
import NameAndGallery from "@/components/NameAndGallery";

export default function Home() {
  return (
    <>
      <HeroMotion />
      <NameAndGallery />

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
