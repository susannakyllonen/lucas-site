"use client";

import styled from "styled-components";
import Image from "next/image";

type Sponsor = { name: string; logo: string; url: string };

const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 24px;
  align-items: center;
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
  border: 1px dashed ${(p) => p.theme.colors.line};
  background: ${(p) => p.theme.colors.card};
  color: ${(p) => p.theme.colors.mute};
  padding: 24px;
  border-radius: 12px;
  text-align: center;
`;

export default function SponsorGrid({
  items = [] as Sponsor[],
}: {
  items?: Sponsor[];
}) {
  if (!items.length) {
    return (
      <Empty>
        <h3 style={{ margin: 0 }}>Etsimme kauden 2025–26 kumppaneita</h3>
        <p style={{ margin: "8px 0 0" }}>
          Kiinnostuitko yhteistyöstä? <a href="/contact">Ota yhteyttä →</a>
        </p>
      </Empty>
    );
  }

  return (
    <Wrap>
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
    </Wrap>
  );
}
