"use client";

import styled from "styled-components";
import Image from "next/image";

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
  padding: 80px 6vw;
  border-top: 2px solid ${({ theme }) => theme.colors.line}; /* kapea väli/viiva */

  @media (max-width: 900px) {
    grid-template-columns: 1fr; /* mobiilissa allekkain */
    gap: 32px;
  }
`;

const ImgWrap = styled.div`
  position: relative;
  width: 100%;
  height: 500px;

  @media (max-width: 900px) {
    height: 320px;
  }
`;

const Text = styled.div`
  max-width: 600px;

  h2 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 400;
    font-size: clamp(28px, 4vw, 42px);
    margin-bottom: 16px;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: clamp(16px, 2vw, 18px);
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export default function About() {
  return (
    <Section>
      <ImgWrap>
        <Image
          src="/field-lucas.jpeg"
          alt="Lucas pelaamassa"
          fill
          style={{ objectFit: "cover" }}
        />
      </ImgWrap>
      <Text>
        <h2>Tutustu Lucakseen</h2>
        <p>
          Lucas Kyllönen on nuori ja määrätietoinen hyökkääjä, joka tunnetaan
          nopeudestaan ja maalintekotaidostaan. Hän pelaa tällä hetkellä [seuran
          nimi] riveissä ja tavoittelee uraa ammattilaiskentillä.
        </p>
      </Text>
    </Section>
  );
}
