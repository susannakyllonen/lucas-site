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

  @media (max-width: 768px) {
    font-size: 1.2rem;
    line-height: 1.5;
  }
`;

export default function HighlightSection() {
  return (
    <Wrapper>
      <Title>Kauden paras maali</Title>
      <Subtitle>
        Ottelussa KäPaa vastaan tein maalin, joka valittiin koko kauden
        parhaaksi.
      </Subtitle>
      <VideoEmbed />
    </Wrapper>
  );
}
