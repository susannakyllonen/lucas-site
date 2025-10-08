"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import Header from "@/components/Header";
import VideoEmbed from "@/components/VideoEmbed";
import Image from "next/image";
import styled from "styled-components";

const Main = styled.main`
  padding: 140px 6vw 80px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-family: "Satoshi", sans-serif;
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const IntroText = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  font-family: "Satoshi", sans-serif;
  max-width: 800px;
  margin: 0 auto;
  color: #444;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    line-height: 1.5;
  }
`;

const SectionTitle = styled.h2`
  font-family: "Satoshi", sans-serif;
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`;

const GalleryItem = styled.div`
  position: relative;
  width: 100%;
  height: 200px;

  img {
    object-fit: cover;
  }
`;

export default function MediaPageEn() {
  return (
    <>
      <Header />
      <Main>
        <Title>Media</Title>
        <IntroText>
          Here you can find Lucas’s highlight videos and photo gallery.
        </IntroText>

        <AnimatedSection>
          <SectionTitle>Highlight Video</SectionTitle>
          <VideoEmbed />
        </AnimatedSection>

        <AnimatedSection>
          <SectionTitle>Photo Gallery</SectionTitle>
          <GalleryGrid>
            <GalleryItem>
              <Image src="/1.png" alt="Lucas in a match" fill />
            </GalleryItem>
            <GalleryItem>
              <Image src="/2.png" alt="Training session" fill />
            </GalleryItem>
            <GalleryItem>
              <Image
                src="/field-lucas.jpeg"
                alt="Lucas training on the field"
                fill
              />
            </GalleryItem>
            <GalleryItem>
              <Image src="/kentta.jpeg" alt="Football field" fill />
            </GalleryItem>
            <GalleryItem>
              <Image
                src="/header-lucas.jpeg"
                alt="Lucas portrait in training"
                fill
              />
            </GalleryItem>
            <GalleryItem>
              <Image
                src="/kentta-lucas.jpeg"
                alt="Lucas practicing at the stadium"
                fill
              />
            </GalleryItem>
            <GalleryItem>
              <Image
                src="/lucas-lentaa.jpg"
                alt="Lucas mid-air during a game"
                fill
              />
            </GalleryItem>
            <GalleryItem>
              <Image
                src="/lucas-lentaa1.jpg"
                alt="Lucas jumping in action"
                fill
              />
            </GalleryItem>
          </GalleryGrid>
        </AnimatedSection>
      </Main>
    </>
  );
}
