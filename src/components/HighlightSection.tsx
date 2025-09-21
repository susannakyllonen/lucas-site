// components/HighlightSection.tsx
"use client";

import styled from "styled-components";
import VideoEmbed from "@/components/VideoEmbed";

const Wrapper = styled.section`
  padding: 6rem 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-family: "Satoshi", sans-serif;
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  max-width: 700px;
  margin: 0 auto 3rem;
  font-size: 1.5rem;
  line-height: 1.6;
  color: #444;
`;

export default function HighlightSection() {
  return (
    <Wrapper>
      <Title>Highlight-video</Title>
      <Subtitle>
        Kooste Lucaksen peleistä ja hetkistä kentällä. Tämä video näyttää, miksi
        intohimo jalkapalloon on ollut mukana jo lapsesta asti.
      </Subtitle>
      <VideoEmbed />
    </Wrapper>
  );
}
