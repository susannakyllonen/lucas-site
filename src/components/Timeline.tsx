"use client";

import { useState } from "react";
import styled from "styled-components";

const TimelineWrapper = styled.section`
  padding: 9rem 2rem 15rem;
  background: #fff;
  position: relative;
`;

const TimelineTitle = styled.h2`
  font-size: clamp(3rem, 7vw, 6rem);
  font-family: "Satoshi", sans-serif;
  font-weight: 500;
  margin-bottom: 8rem;
  text-align: left;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const Line = styled.div`
  height: 1px;
  background: #bbb;
  position: relative;
  width: 100%;
  margin: 0 auto;
`;

const Dot = styled.div<{ $active: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ $active }) => ($active ? "#1139ec" : "#ccc")};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${({ style }) => style?.left};
  transition: background 0.3s;
  cursor: pointer;
`;

const Description = styled.p`
  font-size: 1.125rem;
  font-family: "Satoshi", sans-serif;
  color: #222;
  text-align: center;
  margin-top: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding-top: 2rem;
`;

const ArrowControl = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  z-index: 10;
  color: #000;
  transition: transform 0.3s ease;
`;

const LeftArrow = styled(ArrowControl)`
  left: 2rem;
  &:hover {
    transform: translateY(-50%) translateX(-5px);
  }
`;

const RightArrow = styled(ArrowControl)`
  right: 2rem;
  &:hover {
    transform: translateY(-50%) translateX(5px);
  }
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

const timelineData = [
  {
    label: "2006",
    description: "Synnyin Turussa",
  },
  {
    label: "2019",
    description: "Italia",
  },
  {
    label: "2021",
    description: "TPS",
  },
  {
    label: "2023",
    description: "SJK",
  },
  {
    label: "2025",
    description: "SJK Akatemia",
  },
  {
    label: "Now",
    description: "You are here. The story continues.",
  },
];

export default function Timeline() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < timelineData.length - 1) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <TimelineWrapper>
      <TimelineTitle>Ura aikajanalla</TimelineTitle>
      {index > 0 && <LeftArrow onClick={handlePrev}>←</LeftArrow>}
      <RightArrow onClick={handleNext}>→</RightArrow>

      <Line>
        {timelineData.map((item, i) => {
          const left = `${(i / (timelineData.length - 1)) * 100}%`;
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
        <Description>{timelineData[index].description}</Description>
      </Line>
    </TimelineWrapper>
  );
}
