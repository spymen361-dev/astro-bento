export interface PinnedRepo {
  name: string;
  url: string;
  type: "github" | "link";
}

export const pinnedRepos: PinnedRepo[] = [
  { name: "chatprd-brand", url: "#", type: "github" },
  { name: "beans-trading-ui", url: "#", type: "github" },
  { name: "retro-collection", url: "#", type: "github" },
  { name: "gradient-generator", url: "#", type: "link" },
  { name: "type-specimen", url: "#", type: "github" },
  { name: "portfolio-v3", url: "#", type: "github" },
];
