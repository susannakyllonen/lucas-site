// src/components/ui/Section.tsx
import styled from "styled-components";
import { container } from "@/styles/mixins";

export const Section = styled.section`
  padding: clamp(48px, 6vw, 96px) 0;
  background: ${({ theme }) => theme.colors.bg};
`;

export const Container = styled.div`
  ${container}
`;
