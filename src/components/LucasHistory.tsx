"use client";

import Timeline, { TimelineItem } from "@/components/Timeline";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 4rem 2rem;
`;

const lucasHistory: TimelineItem[] = [
  {
    label: "2006",
    description: "Syntyi Turussa 14. marraskuuta.",
  },
  {
    label: "2012",
    description:
      "23.4.2012: Ensimmäiset treenit Turun Palloseurassa (TPS), vain 5-vuotiaana.",
  },
  {
    label: "2012–2022",
    description:
      "TPS juniorit (Finland) – pelasi koko junioriuransa Turun Palloseurassa.",
  },
  {
    label: "2021",
    description: "Suomen U16 maajoukkue – debyytti Suomen paidassa.",
  },
  {
    label: "2022–2023",
    description: "TPS U19 (Finland) – nousi seuran U19-joukkueeseen.",
  },
  {
    label: "2023–2024",
    description:
      "Genoa U17 (Italy) – pelasi Italiassa Genoan akatemiajoukkueessa.",
  },
  {
    label: "2023–2024",
    description: "Turun II (Finland) – palasi Suomeen Turun joukkueeseen.",
  },
  {
    label: "2024–2025",
    description:
      "SJK III (Finland) – liittyi Seinäjoen Jalkapallokerhon riveihin.",
  },
  {
    label: "2025–",
    description: "SJK II (Finland) – mukana seuran kakkosjoukkueessa.",
  },
];

export default function LucasHistory() {
  return (
    <Wrapper>
      <Timeline title="Lucaksen matka" items={lucasHistory} />
    </Wrapper>
  );
}
