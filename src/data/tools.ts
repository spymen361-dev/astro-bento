import { Pipette, Palette, Link2, type LucideIcon } from "lucide-react";

export interface ToolData {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export const tools: ToolData[] = [
  {
    id: "color-picker",
    title: "Color Picker",
    description: "Pick colors & copy HEX, RGB, HSL",
    icon: Pipette,
    color: "330 100% 50%",
  },
  {
    id: "gradient-generator",
    title: "Gradient Gen",
    description: "Create beautiful CSS gradients",
    icon: Palette,
    color: "264 60% 55%",
  },
  {
    id: "url-shortener",
    title: "URL Shortener",
    description: "Generate short demo links",
    icon: Link2,
    color: "193 95% 50%",
  },
];
