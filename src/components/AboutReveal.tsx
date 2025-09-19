"use client";

import { motion } from "framer-motion";
import styled from "styled-components";
import Image from "next/image";

const Section = styled.section`
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: clamp(20px, 4vw, 48px);
  align-items: center;
  padding: clamp(32px, 6vw, 96px) 6vw;
  background: #fff;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`;

const ImgWrap = styled(motion.div)`
  position: relative;
  width: 100%;
  height: clamp(260px, 48vh, 520px);
  border-radius: 16px;
  overflow: hidden;
`;

const Copy = styled(motion.div)`
  h2 {
    margin: 0 0 12px 0;
    font-weight: 600;
    font-size: clamp(24px, 3.5vw, 40px);
    letter-spacing: 0.01em;
  }
  p {
    margin: 0;
    font-size: clamp(16px, 2vw, 18px);
    line-height: 1.7;
    color: #333;
  }
`;

export default function AboutReveal() {
  return (
    <Section>
      <ImgWrap
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/field-lucas.jpeg"
          alt="Lucas pelaamassa"
          fill
          style={{ objectFit: "cover" }}
        />
      </ImgWrap>

      <Copy
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        <h2>Minusta</h2>
        <p>
          Olen Lucas Kyllönen – hyökkääjä, joka rakastaa juosta linjan taakse ja
          viimeistellä. Tavoitteeni on kehittyä joka pelissä ja pelata
          tulevaisuudessa kansainvälisillä kentillä.
        </p>
      </Copy>
    </Section>
  );
}
