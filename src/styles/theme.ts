import type { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    bg: "#ffffff",
    text: "#171717",
    mute: "#6b7280",
    accent: "#2563eb",
    card: "#fafafa",
    line: "#e5e7eb",
  },
  fonts: {
    body: "var(--font-inter), system-ui, sans-serif",
    mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
    heading: "var(--font-playfair), serif",
  },
  radii: { sm: "8px", lg: "16px", full: "999px" },
  space: (n) => `${n * 8}px`,
  shadow: { soft: "0 8px 24px rgba(0,0,0,0.08)" },
};
