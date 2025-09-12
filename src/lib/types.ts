// lib/types.ts
export type PlayerProfile = {
  name: string;
  birthYear: number;
  position: string;
  club: string;
  height?: number;
  weight?: number;
  number?: number;
  shortBio: string;
  socials?: { instagram?: string; youtube?: string };
};
export type CareerEntry = {
  yearFrom: number;
  yearTo?: number;
  club: string;
  level?: string;
  notes?: string;
};
export type MediaItem = {
  type: "video" | "image";
  src: string;
  title?: string;
  cover?: string;
};
export type Sponsor = { name: string; logo: string; url: string };
