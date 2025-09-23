"use client";

import { useState } from "react";
import styled from "styled-components";

export interface TimelineItem {
  label: string; // esim. vuosi
  description: string; // kuvaus
}

interface TimelineProps {
  title?: string;
  items: TimelineItem[];
}

const TimelineWrapper = styled.section`
  padding: 3rem 2rem;
  background: #fff;
`;

const TimelineTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-family: "Satoshi", sans-serif;
  font-weight: 500;
  margin-bottom: 4rem;
  text-align: left;
  max-width: 1200px;
  margin: 0 auto 7rem;

  @media (max-width: 768px) {
    margin: 0 auto 4rem;
  }
`;

const Line = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  height: 1px;
  background: #bbb;

  @media (max-width: 768px) {
    display: none; /* piilotetaan mobiilissa */
  }
`;

const Dot = styled.div<{ $active: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ $active }) => ($active ? "#1139ec" : "#ccc")};
  transition: background 0.3s;
  cursor: pointer;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const YearLabel = styled.div`
  position: absolute;
  top: -2.5rem;
  left: 50%;
  transform: translateX(-50%);
  font-family: "Satoshi", sans-serif;
  font-size: 1rem;
  color: #333;
  white-space: nowrap;
`;

const Description = styled.p`
  font-size: 1.125rem;
  font-family: "Satoshi", sans-serif;
  color: #222;
  text-align: center;
  margin-top: 2.5rem; /* lisää väli otsikon jälkeen */
  max-width: 650px; /* vähän leveämpi lukutila */
  margin-left: auto;
  margin-right: auto;
  line-height: 10; /* rennompi riviväli desktopilla */

  @media (max-width: 768px) {
    text-align: left;
    margin-top: 1.5rem; /* mobiilissa vähän vähemmän tilaa */
    line-height: 1.7; /* mobiilissa myös väljempi */
  }
`;

const ArrowControl = styled.button`
  position: absolute;
  top: -5rem;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  z-index: 10;
  color: #000;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    display: none; /* ei nuolia mobiilissa */
  }
`;

const LeftArrow = styled(ArrowControl)`
  left: 1rem;
`;
const RightArrow = styled(ArrowControl)`
  right: 1rem;
`;

const MobileList = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const MobileItem = styled.div`
  font-family: "Satoshi", sans-serif;

  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: #1139ec;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #222;
  }
`;

const LineWrapper = styled.div`
  position: relative;
  max-width: 100%;
  margin: 0 auto;
`;

export default function Timeline({ title = "Timeline", items }: TimelineProps) {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < items.length - 1) setIndex(index + 1);
  };

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <TimelineWrapper>
      <TimelineTitle>{title}</TimelineTitle>

      {/* Desktop-versio */}
      {index > 0 && <LeftArrow onClick={handlePrev}>←</LeftArrow>}
      {index < items.length - 1 && (
        <RightArrow onClick={handleNext}>→</RightArrow>
      )}

      <LineWrapper>
        {index > 0 && <LeftArrow onClick={handlePrev}>←</LeftArrow>}
        {index < items.length - 1 && (
          <RightArrow onClick={handleNext}>→</RightArrow>
        )}

        <Line>
          {items.map((item, i) => {
            const left = `${(i / (items.length - 1)) * 100}%`;
            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left,
                  top: 0,
                  transform: "translateX(-50%)",
                }}
              >
                <YearLabel>{item.label}</YearLabel>
                <Dot
                  $active={i === index}
                  style={{ left }}
                  onClick={() => setIndex(i)}
                />
              </div>
            );
          })}
          <Description>{items[index].description}</Description>
        </Line>
      </LineWrapper>

      {/* Mobile-versio */}
      <MobileList>
        {items.map((item, i) => (
          <MobileItem key={i}>
            <h3>{item.label}</h3>
            <p>{item.description}</p>
          </MobileItem>
        ))}
      </MobileList>
    </TimelineWrapper>
  );
}
