import { css } from "styled-components";

export const card = css`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadow.soft};
`;

export const container = css`
  width: min(1100px, 92vw);
  margin: 0 auto;
`;

export const focusRing = css`
  outline: none;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.35); /* accent */
`;
