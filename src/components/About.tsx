"use client";

import styled from "styled-components";
import { AnimatedSection } from "./AnimatedSection";

const Section = styled.section`
  padding: 100px 6vw;
  background: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: center;
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

export default function AboutSusannaStyle() {
  return (
    <AnimatedSection>
      <Section>
        <Container>
          <Intro>Olen Lucas Kyllönen</Intro>
          <BodyText>
            Pelaan keskikentällä SJK Akatemiassa. Minulle tärkeintä kentällä on
            pelin lukeminen ja se, että pystyn auttamaan joukkuetta oikealla
            hetkellä. Olen todella määrätietoinen ja kunnianhimoinen – haluan
            jatkuvasti oppia ja mennä eteenpäin. Kentän ulkopuolella olen
            sosiaalinen ja helposti lähestyttävä, tulen hyvin toimeen kaikkien
            kanssa ja uskon, että hyvä joukkuehenki syntyy juuri siitä.
          </BodyText>
        </Container>
      </Section>
    </AnimatedSection>
  );
}
