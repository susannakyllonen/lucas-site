"use client";

import styled from "styled-components";
import Image from "next/image";

type Sponsor = { name: string; logo: string; url: string };

const Section = styled.section`
  padding: 6rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Content = styled.div`
  h2 {
    font-family: "Satoshi", sans-serif;
    font-weight: 600;
    font-size: clamp(2rem, 5vw, 3rem);
    margin-bottom: 1rem;
  }

  p {
    font-family: "Satoshi", sans-serif;
    font-size: 1.5rem;
    line-height: 1.6;
    color: #444;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      font-size: 1.2rem;
      line-height: 1.5;
    }
  }
`;

const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 400px;

  img {
    object-fit: cover;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;

  img {
    max-height: 48px;
    width: auto;
    filter: grayscale(100%);
    transition: filter 0.2s ease;

    &:hover {
      filter: grayscale(0%);
    }
  }
`;

export default function SponsorSection({
  items = [] as Sponsor[],
}: {
  items?: Sponsor[];
}) {
  return (
    <Section>
      <Wrapper>
        <ImageWrap>
          <Image src="/1.png" alt="Lucas Kyllönen" fill priority />
        </ImageWrap>

        <Content>
          <h2>Yhteistyökumppanit</h2>
          <p>
            Lucas tekee yhteistyötä intohimoisten ja urheilua tukevien brändien
            kanssa. Oletko kiinnostunut kumppanuudesta? Tutustu sponsoreihin tai
            ota yhteyttä.
          </p>

          {items.length ? (
            <Grid>
              {items.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={s.logo} alt={s.name} width={120} height={48} />
                </a>
              ))}
            </Grid>
          ) : (
            <p style={{ fontStyle: "italic", color: "#666" }}>
              Etsimme kauden 2025–26 kumppaneita.{" "}
              <a href="/contact">Ota yhteyttä →</a>
            </p>
          )}
        </Content>
      </Wrapper>
    </Section>
  );
}
