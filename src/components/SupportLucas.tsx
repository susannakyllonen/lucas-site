"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type SupportProps = {
  variant?: "full" | "strip";
};

const Wrapper = styled.section<{ $variant: "full" | "strip" }>`
  position: relative;
  padding: ${({ $variant }) =>
    $variant === "full" ? "6rem 2rem" : "2rem 1rem"};
  background: ${({ $variant }) =>
    $variant === "full"
      ? "linear-gradient(135deg, #f0f4ff, #e0e8ff)"
      : "linear-gradient(90deg, #1139ec, #ff66b5)"};
  color: ${({ $variant }) => ($variant === "strip" ? "#fff" : "#000")};
  overflow: hidden;

  @media (max-width: 768px) {
    padding: ${({ $variant }) =>
      $variant === "full" ? "4rem 1.5rem" : "1.5rem"};
  }
`;

const Content = styled(motion.div)`
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2<{ $variant: "full" | "strip" }>`
  font-family: "Satoshi", sans-serif;
  font-size: ${({ $variant }) =>
    $variant === "full" ? "clamp(2.5rem, 6vw, 3.5rem)" : "1.4rem"};
  margin-bottom: ${({ $variant }) => ($variant === "full" ? "1rem" : "0")};
  color: ${({ $variant }) => ($variant === "full" ? "#1139ec" : "#fff")};
`;

const Subtitle = styled.p`
  font-family: "Satoshi", sans-serif;
  font-size: 1.5rem;
  line-height: 1.6;
  color: #444;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    line-height: 1.5;
  }
`;

const Button = styled(motion.a)<{ $variant: "full" | "strip" }>`
  display: inline-block;
  padding: ${({ $variant }) =>
    $variant === "full" ? "0.75rem 2rem" : "0.4rem 1.2rem"};
  background-color: ${({ $variant }) =>
    $variant === "full" ? "#1139ec" : "#fff"};
  color: ${({ $variant }) => ($variant === "full" ? "#fff" : "#1139ec")};
  border-radius: 12px;
  font-family: "Satoshi", sans-serif;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background-color: ${({ $variant }) =>
      $variant === "full" ? "#0d2fc5" : "#f0f0f0"};
  }
`;

export default function SupportLucasSection({
  variant = "full",
}: SupportProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.25 });

  return (
    <Wrapper $variant={variant}>
      <Content
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <Title $variant={variant}>
          {variant === "full"
            ? "Tarjoa Lucakselle energiajuoma🥤"
            : "Tue Lucaksen matkaa ⚽"}
        </Title>

        {variant === "full" && (
          <Subtitle>
            Haluatko tukea Lucaksen matkaa pelikentillä? Pieni ele, iso
            merkitys. Kiitos, että olet mukana!
          </Subtitle>
        )}

        <Button
          $variant={variant}
          href="https://mobilepay.fi/fi-fi/Pages/Send.aspx?phone=358401234567&amount=5"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Tue MobilePaylla
        </Button>
      </Content>
    </Wrapper>
  );
}
