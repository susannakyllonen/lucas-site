"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation"; // 👈 kielentunnistus

type Sponsor = { name: string; logo: string; url: string };

const Section = styled.section`
  background: #fff;
  padding: 10rem 2rem;

  @media (max-width: 768px) {
    padding: 6rem 1.5rem;
  }
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Heading = styled.h2`
  font-family: "Satoshi", sans-serif;
  font-weight: 700;
  font-size: clamp(2rem, 5vw, 4.5rem);
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin-bottom: 1.5rem;
  color: #111;

  @media (max-width: 768px) {
    font-size: clamp(1.8rem, 6vw, 2.6rem);
    line-height: 1.2;
    margin-bottom: 1rem;
  }
`;

const Text = styled.p`
  font-family: "Satoshi", sans-serif;
  font-size: clamp(1.4rem, 2vw, 1.8rem);
  line-height: 1.5;
  color: #444;
  margin: 0 auto 2rem;
  max-width: 780px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  margin-top: 4rem;
`;

const LogoWrapper = styled(motion.a)`
  display: block;

  img {
    max-height: 54px;
    width: auto;
    filter: grayscale(100%);
    opacity: 0.7;
    transition: all 0.3s ease;
  }

  &:hover img {
    filter: grayscale(0%);
    opacity: 1;
    transform: scale(1.08);
  }
`;

const CTA = styled(motion.a)`
  display: inline-block;
  margin-top: 2rem;
  font-family: "Satoshi", sans-serif;
  font-weight: 500;
  font-size: clamp(1.6rem, 2.5vw, 2rem);
  color: #111;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: #111;
  }
`;

export default function SponsorSection({
  items = [] as Sponsor[],
}: {
  items?: Sponsor[];
}) {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  // 👇 kieliversiot
  const heading = isEnglish ? "Partners" : "Yhteistyökumppanit";
  const text = isEnglish
    ? "Lucas collaborates with brands that share his passion for football and personal growth."
    : "Lucas tekee yhteistyötä intohimoisten ja urheilua tukevien brändien kanssa.";
  const cta = isEnglish
    ? "We’re looking for partners for the 2025–26 season. Get in touch →"
    : "Etsimme kauden 2025–26 yhteistyökumppaneita. Ota yhteyttä →";

  return (
    <Section>
      <Wrapper>
        <Heading>{heading}</Heading>
        <Text>{text}</Text>

        {items.length ? (
          <Grid>
            {items.map((s) => (
              <LogoWrapper
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
              >
                <Image src={s.logo} alt={s.name} width={140} height={60} />
              </LogoWrapper>
            ))}
          </Grid>
        ) : (
          <CTA href={isEnglish ? "/en/contact" : "/contact"}>{cta}</CTA>
        )}
      </Wrapper>
    </Section>
  );
}
