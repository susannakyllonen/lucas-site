"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styled from "styled-components";
import Image from "next/image";
import { usePathname } from "next/navigation"; // 👈 tämä mahdollistaa automaattisen kielenvaihdon

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
    height: 300px;
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
    padding: 2.5rem 1.5rem 3rem;
    text-align: center;
  }
`;

const Content = styled.div`
  max-width: 500px;
  margin-bottom: 2rem;

  h2 {
    font-size: clamp(1.8rem, 5vw, 3rem);
    font-family: "Satoshi", sans-serif;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  p {
    font-size: clamp(1rem, 3.8vw, 1.5rem);
    line-height: 1.6;
    color: #333;

    @media (max-width: 480px) {
      font-size: 1.2rem;
      line-height: 1.5;
    }
  }
`;

const FloatingButton = styled(motion.button)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  background: #fff;
  border-radius: 16px;
  padding: 0.8rem 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;
  top: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  outline: none;

  &:hover {
    border-color: #007aff;
  }

  span {
    font-size: 0.95rem;
    font-weight: 600;
    color: #007aff;
    font-family: "Satoshi", sans-serif;
  }

  img {
    width: 180px; /* 👈 kiinteä leveys */
    height: auto; /* 👈 ei veny enää */
    object-fit: contain;
  }

  @media (max-width: 768px) {
    top: 20px;
    padding: 0.7rem 1rem;

    img {
      width: 140px;
    }

    span {
      font-size: 0.85rem;
    }
  }
`;

export default function DonationSplit() {
  const ref = useRef(null);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  const isEnglish = pathname.startsWith("/en");

  // 👇 Tekstit vaihtuvat automaattisesti
  const heading = isEnglish
    ? "Buy me a virtual coffee ☕"
    : "Tarjoa virtuaalikokis";
  const paragraph = isEnglish
    ? "Want to support my football journey? Small act, big meaning. Thank you for being part of it!"
    : "Haluatko tukea matkaani pelikentillä? Pieni ele, iso merkitys. Kiitos, että olet mukana!";
  const buttonText = isEnglish
    ? "Donate via MobilePay 💙"
    : "Lahjoita MobilePaylla 💙";

  return (
    <Section ref={ref}>
      <Left>
        <Image
          src="/lucas-lentaa.jpg"
          alt="Donation background"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </Left>

      <Right>
        <Content>
          <h2>{heading}</h2>
          <p>{paragraph}</p>
        </Content>

        <FloatingButton
          as={motion.button}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
          onClick={() =>
            window.open("https://mobilepay.fi/lahjoita/12345", "_blank")
          }
          style={{ y }}
        >
          <Image
            src="/MobilePay_logo.svg.png"
            alt="MobilePay logo"
            width={180}
            height={80}
          />
          <span>{buttonText}</span>
        </FloatingButton>
      </Right>
    </Section>
  );
}
