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
    description:
      "Genoa U17 (Italy) – siirtyi Italiaan pelaamaan Genoan akatemiajoukkueeseen.",
  },
  {
    label: "2023",
    description: "Palasi Suomeen ja jatkoi pelejä TPS:ssä.",
  },
  {
    label: "2024",
    description:
      "SJK III ja SJK II (Finland) – liittyi Seinäjoen Jalkapallokerhon riveihin.",
  },
  {
    label: "2025–",
    description:
      "SJK II & SJK III (Finland) – siirtyi Seinäjoen Jalkapallokerhoon ja on pelannut eniten pelejä kakkosjoukkueessa.",
  },
];

export default function LucasHistory() {
  return (
    <Wrapper>
      <Timeline title="Lucaksen matka" items={lucasHistory} />
    </Wrapper>
  );
}
