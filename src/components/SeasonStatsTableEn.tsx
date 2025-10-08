"use client";

import React from "react";
import styled from "styled-components";

export interface SeasonStat {
  competition: string;
  club: string;
  matches: number;
  goals?: number;
  minutes: number;
  yellowCards?: number;
  redCards?: number;
}

interface SeasonStatsTableProps {
  season: string;
  stats: SeasonStat[];
  total?: {
    matches: number;
    goals?: number;
    minutes: number;
    yellowCards?: number;
    redCards?: number;
  };
}

const Section = styled.section`
  padding: 10rem 2rem;
  background: #fff;
  width: 100%;

  @media (max-width: 768px) {
    padding: 3rem 2rem;
  }
`;

const HeadingWrapper = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 4rem;
`;

const BackgroundText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Satoshi", sans-serif;
  font-size: clamp(4rem, 15vw, 12rem);
  font-weight: 700;
  color: #1139ec60;
  z-index: 0;
  pointer-events: none;
  user-select: none;

  @media (max-width: 768px) {
    font-size: 25vw;
  }
`;

const Heading = styled.h2`
  position: relative;
  font-family: "Satoshi", sans-serif;
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-weight: 600;
  color: #000;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 10vw;
  }
`;

const TableContainer = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: "Satoshi", sans-serif;
  margin: 0 auto;
  min-width: 700px;

  th,
  td {
    padding: 1rem;
    text-align: center;
    font-size: 1rem;
    white-space: nowrap;
  }

  th {
    font-weight: 600;
    color: #000;
    border-bottom: 2px solid #000;
  }

  tr td {
    border-bottom: 1px solid #eee;
  }

  tr:last-child td {
    border-bottom: none;
  }

  tr.total-row {
    font-weight: bold;
    background: #f9f9f9;
  }
`;

/* --- Updated stats from Transfermarkt (October 2025) --- */
const season2025Stats: SeasonStat[] = [
  {
    competition: "Ykkösliiga (Finland 2nd tier)",
    club: "SJK II",
    matches: 15,
    goals: 1,
    minutes: 561,
    yellowCards: 1,
    redCards: 0,
  },
  {
    competition: "Kakkonen – Group C",
    club: "SJK III",
    matches: 8,
    goals: 1,
    minutes: 571,
    yellowCards: 0,
    redCards: 0,
  },
  {
    competition: "Finnish Cup",
    club: "SJK II",
    matches: 1,
    goals: 0,
    minutes: 45,
    yellowCards: 1,
    redCards: 0,
  },
  {
    competition: "Ykkösliigacup",
    club: "SJK II",
    matches: 1,
    goals: 0,
    minutes: 45,
    yellowCards: 0,
    redCards: 0,
  },
];

/* Totals across all competitions (Transfermarkt summary: 25 matches, 2 goals, 1 yellow, 1222 min) */
const totalStats = {
  matches: 25,
  goals: 2,
  minutes: 1222,
  yellowCards: 1,
  redCards: 0,
};

const SeasonStatsTableEn: React.FC = () => {
  return (
    <Section>
      <HeadingWrapper>
        <BackgroundText>24/25</BackgroundText>
        <Heading>Season Stats</Heading>
      </HeadingWrapper>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <th>Competition</th>
              <th>Club</th>
              <th>Matches</th>
              <th>Goals</th>
              <th>Minutes</th>
              <th>Yellow Cards</th>
              <th>Red Cards</th>
            </tr>
          </thead>
          <tbody>
            {season2025Stats.map((s, i) => (
              <tr key={i}>
                <td>{s.competition}</td>
                <td>{s.club}</td>
                <td>{s.matches}</td>
                <td>{s.goals ?? "-"}</td>
                <td>{s.minutes}</td>
                <td>{s.yellowCards ?? "-"}</td>
                <td>{s.redCards ?? "-"}</td>
              </tr>
            ))}
            <tr className="total-row">
              <td>Total</td>
              <td>-</td>
              <td>{totalStats.matches}</td>
              <td>{totalStats.goals}</td>
              <td>{totalStats.minutes}</td>
              <td>{totalStats.yellowCards}</td>
              <td>{totalStats.redCards}</td>
            </tr>
          </tbody>
        </Table>
      </TableContainer>
      <p
        style={{
          textAlign: "center",
          fontFamily: "Satoshi, sans-serif",
          fontSize: "0.95rem",
          marginTop: "1.5rem",
          opacity: 0.7,
        }}
      >
        Source:{" "}
        <a
          href="https://www.transfermarkt.com/lucas-kyllonen/leistungsdaten/spieler/928001"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#1139ec", textDecoration: "none" }}
        >
          Transfermarkt
        </a>
      </p>
    </Section>
  );
};

export default SeasonStatsTableEn;
