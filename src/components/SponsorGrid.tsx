"use client";

import styled from "styled-components";
import Image from "next/image";

type Sponsor = { name: string; logo: string; url: string };

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr; /* 50/50 */
  height: 100vh; /* sama korkeus kuin hero */
  border-top: 2px solid ${(p) => p.theme.colors.line};

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    height: auto;
  }
`;

const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 400px;

  @media (max-width: 900px) {
    min-height: 280px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* keskelle pystyyn */
  align-items: flex-start;
  padding: 80px 6vw;
  overflow-y: auto; /* jos sisältö kasvaa liikaa */

  @media (max-width: 900px) {
    padding: 48px 6vw;
    align-items: center;
    text-align: center;
  }

  h2 {
    font-family: ${(p) => p.theme.fonts.heading};
    font-weight: 500;
    font-size: clamp(28px, 4vw, 46px);
    line-height: 1.2;
    margin: 0 0 24px;
    color: ${(p) => p.theme.colors.text};
  }

  p {
    font-family: ${(p) => p.theme.fonts.body};
    font-size: clamp(16px, 2vw, 18px);
    line-height: 1.6;
    color: ${(p) => p.theme.colors.text};
    margin: 0 0 32px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 24px;
  align-items: center;
  width: 100%;
`;

const Card = styled.a`
  background: ${(p) => p.theme.colors.card};
  border: 1px solid ${(p) => p.theme.colors.line};
  border-radius: 12px;
  padding: 16px;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.15s ease;
  &:hover {
    transform: translateY(-2px);
  }
`;

const Empty = styled.div`
  background: ${(p) => p.theme.colors.card};
  color: ${(p) => p.theme.colors.mute};
  padding: 24px;

  text-align: center;
  width: 100%;
`;

export default function SponsorSection({
  items = [] as Sponsor[],
}: {
  items?: Sponsor[];
}) {
  return (
    <Section>
      {/* Kuva puolikas */}
      <ImageWrap>
        <Image
          src="/1.png"
          alt="Lucas Kyllönen"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </ImageWrap>

      {/* Tekstilaatikko puolikas */}
      <Content>
        <h2>Yhteistyökumppanit</h2>
        <p>
          Lucas tekee yhteistyötä intohimoisten ja urheilua tukevien brändien
          kanssa. Oletko kiinnostunut kumppanuudesta? Tutustu nykyisiin
          sponsoreihin tai ota yhteyttä.
        </p>

        {items.length ? (
          <Grid>
            {items.map((s) => (
              <Card
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={s.logo} alt={s.name} width={120} height={48} />
              </Card>
            ))}
          </Grid>
        ) : (
          <Empty>
            <h3 style={{ margin: 0 }}>Etsimme kauden 2025–26 kumppaneita</h3>
            <p style={{ margin: "8px 0 0" }}>
              Kiinnostuitko yhteistyöstä? <a href="/contact">Ota yhteyttä →</a>
            </p>
          </Empty>
        )}
      </Content>
    </Section>
  );
}
