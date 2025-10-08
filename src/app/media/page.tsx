"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import Header from "@/components/Header";
import VideoEmbed from "@/components/VideoEmbed";
import Image from "next/image";
import styled from "styled-components";

const Main = styled.main`
  padding: 140px 6vw 80px; /* top, left-right, bottom */
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

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  overflow: hidden;
  border-radius: 12px;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 12px;
  }
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

export default function MediaPage() {
  return (
    <>
      <Header />
      <Main>
        <Title>Media</Title>
        <IntroText>
          Tähän on koottu Lucaksen highlight-videot ja kuvagalleria.
        </IntroText>

        <AnimatedSection>
          <SectionTitle>Highlight-video</SectionTitle>
          <VideoEmbed />
        </AnimatedSection>

        <AnimatedSection>
          <SectionTitle>Kuvagalleria</SectionTitle>
          <GalleryGrid>
            <GalleryItem>
              <Image src="/1.png" alt="Lucas pelissä" fill />
            </GalleryItem>
            <GalleryItem>
              <Image src="/2.png" alt="Treeneissä" fill />
            </GalleryItem>
            <GalleryItem>
              <Image
                src="/field-lucas.jpeg"
                alt="Ensiaskeleet jalkapallon parissa"
                fill
              />
            </GalleryItem>
            <GalleryItem>
              <Image
                src="/kentta.jpeg"
                alt="Ensiaskeleet jalkapallon parissa"
                fill
              />
            </GalleryItem>{" "}
            <GalleryItem>
              <Image
                src="/header-lucas.jpeg"
                alt="Ensiaskeleet jalkapallon parissa"
                fill
              />
            </GalleryItem>{" "}
            <GalleryItem>
              <Image
                src="/kentta-lucas.jpeg"
                alt="Ensiaskeleet jalkapallon parissa"
                fill
              />
            </GalleryItem>
            <GalleryItem>
              <Image
                src="/lucas-lentaa.jpg"
                alt="Ensiaskeleet jalkapallon parissa"
                fill
              />
            </GalleryItem>
            <GalleryItem>
              <Image
                src="/lucas-lentaa1.jpg"
                alt="Ensiaskeleet jalkapallon parissa"
                fill
              />
            </GalleryItem>
          </GalleryGrid>
        </AnimatedSection>
      </Main>
    </>
  );
}
