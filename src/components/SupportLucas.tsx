"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SupportWrapper = styled.section`
  position: relative;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #f0f4ff, #e0e8ff);
  overflow: hidden;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const Content = styled(motion.div)`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-family: "Satoshi", sans-serif;
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  margin-bottom: 1rem;
  color: #1139ec;
`;

const Subtitle = styled.p`
  font-family: "Satoshi", sans-serif;
  font-size: 1.5rem;
  line-height: 1.6;
  color: #444;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    line-height: 1.5;
  }
`;

const CoffeeButton = styled(motion.a)`
  display: inline-block;
  padding: 0.75rem 2rem;
  background-color: #1139ec;
  color: #fff;
  border-radius: 12px;
  font-family: "Satoshi", sans-serif;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background-color: #0d2fc5;
  }
`;

export default function SupportLucasSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.25 });

  return (
    <SupportWrapper>
      <Content
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <Title>Tarjoa Lucakselle energiajuoma</Title>
        <Subtitle>
          Haluatko tukea Lucaksen matkaa pelikentillä? Pieni ele, iso merkitys —
          kiitos, että olet mukana!
        </Subtitle>
        <CoffeeButton
          href="https://mobilepay.fi/fi-fi/Pages/Send.aspx?phone=358401234567&amount=5"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Tue MobilePaylla
        </CoffeeButton>
      </Content>
    </SupportWrapper>
  );
}
