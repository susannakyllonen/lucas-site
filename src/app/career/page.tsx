"use client";

import styled from "styled-components";
import Timeline from "@/components/Timeline";

const Section = styled.section`
  background: #fff;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
`;

const TextGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Paragraph = styled.div`
  padding: 4rem 2rem;
  font-size: 1.5rem;
  line-height: 1.75;
  font-family: "Satoshi", sans-serif;
  font-weight: 400;
  color: #222;

  p + p {
    margin-top: 1.5rem;
  }

  &:nth-child(odd) {
    border-right: 1px solid #000;

    @media (max-width: 768px) {
      border-right: none;
      border-bottom: 1px solid #000;
    }
  }
`;

export default function CareerPage() {
  return (
    <>
      <Section>
        <TextGrid>
          <Paragraph>
            <p>
              I’m Susanna, a frontend developer who cares about clarity, calm
              experiences, and the human side of tech.
            </p>
            <p>
              I build websites that feel intentional and alive. Whether it’s a
              custom-coded site or a no-code solution, my focus is always the
              same: helping you share your story with confidence and ease.
            </p>
          </Paragraph>

          <Paragraph>
            <p>
              Happy Twiggy is a space to work with intention, blending
              creativity, clarity, and care with clients who value soul just as
              much as strategy.
            </p>
            <p>
              Every detail matters to me, not out of perfectionism, but out of
              care. Let’s make the internet a little more human, one project at
              a time.
            </p>
          </Paragraph>
        </TextGrid>
      </Section>
      <Timeline />
    </>
  );
}
