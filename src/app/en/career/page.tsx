"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import Image from "next/image";
import Header from "@/components/Header";
import { AnimatedSection } from "@/components/AnimatedSection";
import LucasHistoryEn from "@/components/LucasHistoryEn";
import SeasonStatsTableEn from "@/components/SeasonStatsTableEn";

const Section = styled.section`
  padding: 6rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const IntroSection = styled.section`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 2rem;
  text-align: center;
  background: #fff;
  border-bottom: 1px solid #000;
`;

const IntroHeading = styled.h1`
  font-size: 3rem;
  line-height: 1.2;
  font-family: "Satoshi", sans-serif;
  font-weight: 700;
  margin-bottom: 3rem;
  max-width: 800px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`;

const IntroSubheading = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  font-family: "Satoshi", sans-serif;
  max-width: 800px;
  margin: 0 auto;
  color: #444;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    line-height: 1.5;
  }
`;

const Grid = styled.div<{ $reverse?: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  ${({ $reverse }) =>
    $reverse &&
    `
    @media (min-width: 769px) {
      direction: rtl;
      text-align: right;
      & > * { direction: ltr; }
    }
  `}
`;

const Text = styled(motion.div)`
  font-size: 1.5rem;
  line-height: 1.75;
  font-family: "Satoshi", sans-serif;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    line-height: 1.6;
  }
`;

const Stats = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  font-family: "Satoshi", sans-serif;
  font-weight: 700;
  font-size: 2.5rem;
  text-align: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    font-size: 1.5rem;
  }
`;

const StatsWrapper = styled.section`
  padding: 6rem 2rem;
  border-bottom: 1px solid #000;
  background: #fff;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

interface BlockProps {
  image: string;
  title: string;
  text: string;
  reverse?: boolean;
}

const SectionBlock = ({ image, title, text, reverse }: BlockProps) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <Section>
      <Grid $reverse={reverse}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ position: "relative", width: "100%", height: "350px" }}
        >
          <Image src={image} alt={title} fill style={{ objectFit: "cover" }} />
        </motion.div>

        <Text
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2>{title}</h2>
          <p>{text}</p>
        </Text>
      </Grid>
    </Section>
  );
};

export default function CareerPage() {
  return (
    <>
      <Header />
      <AnimatedSection noMargin>
        <IntroSection>
          <IntroHeading>
            I’m Lucas, and football has always been a part of who I am.
          </IntroHeading>
          <IntroSubheading>
            When I was just one year old, I used to sleep with a football next
            to me. At the age of five, I joined my first team, and since then,
            the pitch has felt like home — a place where I’ve learned
            discipline, courage, and the importance of chasing dreams. Today, I
            ’m working towards becoming a professional football player. Every
            match, every training, every touch of the ball takes me one step
            closer.
          </IntroSubheading>
        </IntroSection>
      </AnimatedSection>

      <StatsWrapper>
        <Stats>
          <div>13+ years of football</div>
          <div>100+ official matches</div>
          <div>300+ training sessions per year</div>
          <div>Member of Finland U16 National Team</div>
        </Stats>
      </StatsWrapper>

      <SectionBlock
        image="/pallo.png"
        title="First Steps"
        text="Lucas grabbed a football before he could even talk — at one year old, he slept in his crib holding a ball. At five, he joined his first club, and since then, the pitch has been his second home."
      />

      <SectionBlock
        image="/tps.png"
        title="Training and Development"
        text="Over the years, Lucas has accumulated thousands of hours of training, repetition, and matches. He is known for his persistence, strong work ethic, and constant desire to learn and improve. Each session brings him one step closer to becoming a professional player."
        reverse
      />

      <LucasHistoryEn />
      <SeasonStatsTableEn />
    </>
  );
}
