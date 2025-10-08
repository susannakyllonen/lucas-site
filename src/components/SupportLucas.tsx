"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styled from "styled-components";
import Image from "next/image";

const Section = styled.section`
  display: flex;
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    min-height: auto;
  }
`;

const Left = styled.div`
  flex: 1;
  position: relative;
  min-height: 100vh;

  @media (max-width: 768px) {
    order: 1;
    height: 350px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 4rem 2rem;

  @media (max-width: 768px) {
    order: 2;
    padding: 2rem 1rem;
    text-align: center;
  }
`;

const Content = styled.div`
  max-width: 500px;
  margin-bottom: 2rem;

  h2 {
    font-size: clamp(2rem, 6vw, 3rem);
    font-family: "Satoshi", sans-serif;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    line-height: 1.6;
    color: #333;
  }
`;

const FloatingButton = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  background: #fff;
  border-radius: 16px;
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;
  top: 40px;

  &:hover {
    border-color: #007aff;
  }

  span {
    font-size: 1rem;
    font-weight: 600;
    color: #007aff;
    font-family: "Satoshi", sans-serif;
  }

  @media (max-width: 768px) {
    top: 20px;
    img {
      width: 180px;
      height: auto;
    }
  }
`;

export default function DonationSplit() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Heiluminen (siniaalto)
  const y = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  return (
    <Section ref={ref}>
      {/* Vasemman puolen kuva */}
      <Left>
        <Image
          src="/lucas-lentaa.jpg"
          alt="Donation background"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </Left>

      {/* Oikea puoli: tekstit + MobilePay */}
      <Right>
        <Content>
          <h2>Tarjoa virtuaalikokis</h2>
          <p>
            Haluatko tukea matkaani pelikentillä? Pieni ele, iso merkitys.
            Kiitos, että olet mukana!
          </p>
        </Content>

        {/* MobilePay-nappi tekstin alla */}
        <FloatingButton
          whileHover={{ scale: 1.03 }} // pieni kohoaminen hoverilla
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
          onClick={() =>
            window.open("https://mobilepay.fi/lahjoita/12345", "_blank")
          }
        >
          <Image
            src="/MobilePay_logo.svg.png"
            alt="MobilePay QR"
            width={220}
            height={120}
            priority
          />
          <span>Lahjoita MobilePaylla 💙</span>
        </FloatingButton>
      </Right>
    </Section>
  );
}
