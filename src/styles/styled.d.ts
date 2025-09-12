import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bg: string;
      text: string;
      mute: string;
      accent: string;
      card: string;
      line: string;
    };
    fonts: {
      body: string;
      mono: string;
      heading: string;
    };
    radii: { sm: string; lg: string; full: string };
    space: (n: number) => string;
    shadow: { soft: string };
  }
}
