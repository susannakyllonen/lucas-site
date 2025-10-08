"use client";

import styled from "styled-components";
import { AnimatedSection } from "./AnimatedSection";

const Section = styled.section`
  padding: 100px 6vw;
  background: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 60px 6vw 40px; /* vähemmän tilaa ylhäällä ja alhaalla */
  }
`;

const Container = styled.div`
  max-width: 700px;
  width: 100%;
  text-align: left;

  @media (max-width: 768px) {
    padding: 0 4vw;
  }
`;

const Intro = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 500;
  font-size: clamp(32px, 5vw, 60px);
  line-height: 1.2;
  margin: 0 0 24px;
  color: ${({ theme }) => theme.colors.text};
`;

const BodyText = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(16px, 2.5vw, 25px);
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

export default function AboutLucasEn() {
  return (
    <AnimatedSection>
      <Section>
        <Container>
          <Intro>I’m Lucas Kyllönen</Intro>
          <BodyText>
            I play as a midfielder for SJK Academy. What matters most to me on
            the field is reading the game and helping my team at the right
            moments. I’m ambitious and driven — always eager to learn and move
            forward. Off the field, I’m social and easy-going. I believe that
            strong team spirit comes from trust and good communication between
            players.
          </BodyText>
        </Container>
      </Section>
    </AnimatedSection>
  );
}
