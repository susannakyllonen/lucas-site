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
  color: #1139ec60; /* sininen, mutta läpikuultava */
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
  min-width: 700px; /* pakottaa scrollaamaan kapeilla näytöillä */

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

const SeasonStatsTable: React.FC<SeasonStatsTableProps> = ({
  stats,
  total,
}) => {
  return (
    <Section>
      <HeadingWrapper>
        <BackgroundText>23/25</BackgroundText>
        <Heading>Tilastot</Heading>
      </HeadingWrapper>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <th>Kilpailu</th>
              <th>Klubi</th>
              <th>Ottelut</th>
              <th>Maalit</th>
              <th>Minuutit</th>
              <th>Varoitukset</th>
              <th>Punaiset</th>
            </tr>
          </thead>
          <tbody>
            {stats.map((s, i) => (
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
            {total && (
              <tr className="total-row">
                <td>Yhteensä</td>
                <td>-</td>
                <td>{total.matches}</td>
                <td>{total.goals ?? "-"}</td>
                <td>{total.minutes}</td>
                <td>{total.yellowCards ?? "-"}</td>
                <td>{total.redCards ?? "-"}</td>
              </tr>
            )}
          </tbody>
        </Table>
      </TableContainer>
    </Section>
  );
};

export default SeasonStatsTable;
