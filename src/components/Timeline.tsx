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
  position: relative;
  font-family: "Satoshi", sans-serif;
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-weight: 600;
  color: #000;
  max-width: 1200px;
  margin: 0 auto 5rem;
  text-align: center;

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
  font-size: 1.3rem; /* vähän isompi fontti */
  font-family: "Satoshi", sans-serif;
  color: #222;
  text-align: center;
  margin-top: 4rem;
  max-width: 700px; /* vähän isompi lukutila */
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7; /* korjattu riviväli */

  @media (max-width: 768px) {
    display: none; /* piilotetaan mobiilissa */
  }
`;

const Arrows = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: -2rem auto 5rem;
  /* -2rem nostaa ylemmäs, 3rem antaa tilaa viivaan */
  position: relative;
`;

const ArrowControl = styled.button<{ disabled?: boolean }>`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  color: ${({ disabled }) => (disabled ? "#aaa" : "#000")};
  transition: transform 0.3s ease;

  &:hover {
    transform: ${({ disabled }) => (disabled ? "none" : "scale(1.2)")};
  }

  @media (max-width: 768px) {
    display: none;
  }
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

      <Arrows>
        <ArrowControl onClick={handlePrev} disabled={index === 0}>
          ←
        </ArrowControl>
        <ArrowControl
          onClick={handleNext}
          disabled={index === items.length - 1}
        >
          →
        </ArrowControl>
      </Arrows>

      <LineWrapper>
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
        </Line>
      </LineWrapper>

      <Description>{items[index].description}</Description>

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
