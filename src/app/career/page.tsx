"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import Image from "next/image";
import Header from "@/components/Header";
import { AnimatedSection } from "@/components/AnimatedSection";
import LucasHistory from "@/components/LucasHistory";
import SeasonStatsTable, { SeasonStat } from "@/components/SeasonStatsTable";

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
          style={{ position: "relative", width: "100%", height: "350px" }} // korkeus säätyy
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
            Olen Lucas ja jalkapallo on ollut aina osa minua.
          </IntroHeading>
          <IntroSubheading>
            Jo yksivuotiaana nukuin pinnasängyssä pallo kainalossa ja viiden
            vuoden iässä aloitin ensimmäiset treenit. Kenttä on ollut siitä asti
            kotini – paikka, jossa opin kurinalaisuutta, rohkeutta ja unelmien
            tavoittelua. Tänään tavoittelen matkaa ammattilaiseksi. Jokainen
            peli, jokainen treeni ja jokainen hetki pallon kanssa vie minua
            askeleen lähemmäs sitä.
          </IntroSubheading>
        </IntroSection>
      </AnimatedSection>

      <StatsWrapper>
        <Stats>
          <div>13+ vuotta jalkapalloa</div>
          <div>100+ virallista ottelua</div>
          <div>300+ treeniä vuodessa</div>
          <div>Suomen U16 maajoukkuepelaaja</div>
        </Stats>
      </StatsWrapper>

      <SectionBlock
        image="/pallo.png"
        title="Ensiaskeleet"
        text="Lucas tarttui palloon jo ennen kuin oppi puhumaan – yksivuotiaana hän nukkui pinnasängyssä jalkapallo kainalossa. Viisivuotiaana hän aloitti seurassa pelaamisen ja siitä asti kenttä on ollut hänen toinen kotinsa."
      />

      <SectionBlock
        image="/tps.png"
        title="Harjoittelu ja kehitys"
        text="Vuodet ovat tuoneet tuhansia toistoja, treenikertoja ja otteluita. Lucas on tunnettu sitkeydestään, kovasta työmoraalistaan ja halustaan oppia joka päivä uutta. Jokainen harjoitus vie häntä askeleen lähemmäksi ammattilaisuutta."
        reverse
      />

      <LucasHistory />
      <SeasonStatsTable />
    </>
  );
}
