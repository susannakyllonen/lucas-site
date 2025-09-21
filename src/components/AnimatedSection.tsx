"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";
import styled from "styled-components";

// HUOM! $-etuliite -> styled-components ei vuoda proppeja DOM:iin
const Wrapper = styled(motion.section)<{ $noMargin?: boolean }>`
  margin-bottom: ${({ $noMargin }) => ($noMargin ? "0" : "4rem")};
  overflow: hidden;
`;

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  noMargin?: boolean;
}

export function AnimatedSection({
  children,
  delay = 0,
  noMargin = false,
}: AnimatedSectionProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <Wrapper
      ref={ref}
      $noMargin={noMargin}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
    >
      {children}
    </Wrapper>
  );
}
