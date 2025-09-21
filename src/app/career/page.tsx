// Tässä oletetaan, että käytetään styled-components + Framer Motion + React

"use client";

import { useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import Timeline from "@/components/Timeline";
import Head from "next/head";
import Header from "@/components/Header";

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

const ParagraphWrapper = styled.div`
  padding: 4rem 2rem;
  font-size: 1.5rem;
  line-height: 1.75;
  font-family: "Satoshi", sans-serif;
  font-weight: 400;
  color: #222;
  overflow: hidden; /* Estää sisällön näkymisen ennen animaatiota */

  &:nth-child(odd) {
    border-right: 1px solid #000;

    @media (max-width: 768px) {
      border-right: none;
      border-bottom: 1px solid #000;
    }
  }
`;

interface ParagraphProps {
  children: React.ReactNode;
  delay?: number;
}

const AnimatedParagraph: React.FC<ParagraphProps> = ({
  children,
  delay = 0,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  // threshold: kuinka paljon lohkosta pitää näkyä ennen animaation käynnistystä

  // kun lohko näkyy, käynnistä animaatio
  if (inView) {
    controls.start("visible");
  }

  const variants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1 },
  };

  return (
    <ParagraphWrapper ref={ref}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 0.8, ease: "easeOut", delay }}
        style={{ overflow: "hidden" }}
      >
        {children}
      </motion.div>
    </ParagraphWrapper>
  );
};

export default function CareerPage() {
  return (
    <>
      <Header />
      <Section>
        <TextGrid>
          <AnimatedParagraph delay={0}>
            <p>
              I’m Susanna, a frontend developer who cares about clarity, calm
              experiences, and the human side of tech.
            </p>
            <p>
              I build websites that feel intentional and alive. Whether it’s a
              custom-coded site or a no-code solution, my focus is always the
              same: helping you share your story with confidence and ease.
            </p>
            <p>
              I’m Susanna, a frontend developer who cares about clarity, calm
              experiences, and the human side of tech.
            </p>
            <p>
              I build websites that feel intentional and alive. Whether it’s a
              custom-coded site or a no-code solution, my focus is always the
              same: helping you share your story with confidence and ease.
            </p>
          </AnimatedParagraph>

          <AnimatedParagraph delay={0.3}>
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
          </AnimatedParagraph>
        </TextGrid>
      </Section>
      <Timeline />
    </>
  );
}
