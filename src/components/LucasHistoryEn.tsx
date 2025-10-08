"use client";

import Timeline, { TimelineItem } from "@/components/Timeline";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 4rem 2rem;
`;

const lucasHistoryEn: TimelineItem[] = [
  {
    label: "2006",
    description: "Born in Turku, Finland on November 14th.",
  },
  {
    label: "2012",
    description:
      "April 23, 2012: First football training session with Turun Palloseura (TPS) at the age of five.",
  },
  {
    label: "2012–2022",
    description:
      "TPS Juniors (Finland) – played his entire youth career at Turun Palloseura.",
  },
  {
    label: "2021",
    description:
      "Finland U16 National Team – debut for the Finnish national team.",
  },
  {
    label: "2022–2023",
    description:
      "Genoa U17 (Italy) – moved to Italy to play for Genoa’s academy team.",
  },
  {
    label: "2023",
    description: "Returned to Finland and continued playing for TPS.",
  },
  {
    label: "2024",
    description:
      "SJK III & SJK II (Finland) – joined Seinäjoen Jalkapallokerho (SJK).",
  },
  {
    label: "2025–",
    description:
      "SJK II & SJK III (Finland) – currently representing Seinäjoen Jalkapallokerho, playing primarily for the second team.",
  },
];

export default function LucasHistoryEn() {
  return (
    <Wrapper>
      <Timeline title="Lucas’s Journey" items={lucasHistoryEn} />
    </Wrapper>
  );
}
