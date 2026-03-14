export interface PinnedRepo {
  name: string;
  url: string;
  type: "github" | "link";
  stars?: number;
  language?: string;
  languageColor?: string;
}

export const pinnedRepos: PinnedRepo[] = [
  {
    name: "chatprd-brand",
    url: "https://github.com/jkane/chatprd-brand",
    type: "github",
    stars: 142,
    language: "TypeScript",
    languageColor: "210 100% 50%",
  },
  {
    name: "beans-trading-ui",
    url: "https://github.com/jkane/beans-trading-ui",
    type: "github",
    stars: 89,
    language: "React",
    languageColor: "193 95% 50%",
  },
  {
    name: "retro-collection",
    url: "https://github.com/jkane/retro-collection",
    type: "github",
    stars: 256,
    language: "CSS",
    languageColor: "264 60% 55%",
  },
  {
    name: "gradient-generator",
    url: "https://gradient-gen.jkane.co",
    type: "link",
    language: "JavaScript",
    languageColor: "50 100% 50%",
  },
  {
    name: "type-specimen",
    url: "https://github.com/jkane/type-specimen",
    type: "github",
    stars: 67,
    language: "HTML",
    languageColor: "12 77% 52%",
  },
  {
    name: "portfolio-v3",
    url: "https://github.com/jkane/portfolio-v3",
    type: "github",
    stars: 34,
    language: "Astro",
    languageColor: "330 100% 50%",
  },
];
