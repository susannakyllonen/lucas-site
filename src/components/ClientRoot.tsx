"use client";

import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "@/styles/theme";
import "@/styles/globals.css";
import { Footer } from "@/components/Footer";

const Global = createGlobalStyle`
  html, body { margin: 0; padding: 0; }
  body {
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    font-family: var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  }
  h1, h2, h3 {
    font-family: var(--font-playfair), serif;
  }
  a { text-decoration: none; color: inherit; }
`;

export default function ClientRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
