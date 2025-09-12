"use client";

import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "@/styles/theme";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const Global = createGlobalStyle`
  :root {
    /* voit käyttää näitä suoraan komponenteissa: font-family: var(--font-playfair) */
  }
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fi" className={`${inter.variable}`}>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <Global />

          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
