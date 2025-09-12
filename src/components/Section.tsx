// src/components/ui/Section.tsx
import styled from "styled-components";
import { container } from "@/styles/mixins";

export const Section = styled.section`
  padding: clamp(48px, 6vw, 96px) 0;
  border-top: 1px solid ${({ theme }) => theme.colors.line};
  background: ${({ theme }) => theme.colors.bg};
`;

export const Container = styled.div`
  ${container}
`;
