import projectRetro from "@/assets/project-retro.jpg";
import projectDreamscape from "@/assets/project-dreamscape.jpg";
import projectGradient from "@/assets/project-gradient.jpg";
import projectLogo from "@/assets/project-logo.jpg";
import projectTypography from "@/assets/project-typography.jpg";
import projectTypeDesign from "@/assets/project-type-design.jpg";
import type { ProjectData } from "@/components/ProjectDetailModal";

export const sidebarProjects: ProjectData[] = [
  {
    title: "ChatPRD",
    description: "ChatPRD transforms product management through AI. We developed a brand strategy and visual identity balancing enterprise credibility with distinctive personality.",
    longDescription: "ChatPRD transforms product management through AI-powered document generation. We developed a comprehensive brand strategy and visual identity that balances enterprise credibility with a distinctive, approachable personality. The project included logo design, color system, typography guidelines, marketing collateral, and product UI design direction.",
    image: projectDreamscape,
    tags: ["BRANDING", "STRATEGY"],
    date: "2025-11-15",
    gallery: [projectDreamscape, projectGradient],
    demo: "#",
  },
  {
    title: "Beans",
    description: "A crypto trading platform that transforms complex market analysis into an emotionally engaging, community-driven experience.",
    longDescription: "Beans reimagines crypto trading by making complex market analysis emotionally engaging and community-driven. The brand identity uses playful illustration and bold typography to demystify decentralized finance. We created a full visual system including mascot design, icon sets, motion guidelines, and a comprehensive UI kit.",
    image: projectGradient,
    tags: ["BRANDING", "ILLUSTRATION"],
    date: "2025-08-20",
    gallery: [projectGradient, projectLogo],
    github: "#",
    demo: "#",
  },
  {
    title: "Retro Collection",
    description: "A nostalgic exploration of vintage computing aesthetics reimagined through modern design principles.",
    longDescription: "The Retro Collection is a personal art direction project exploring the intersection of vintage computing aesthetics and contemporary design. Each piece reimagines classic hardware, software interfaces, and pixel art through modern rendering techniques, creating a bridge between digital nostalgia and current visual trends.",
    image: projectRetro,
    tags: ["ART DIRECTION"],
    date: "2025-05-10",
    gallery: [projectRetro, projectTypography, projectTypeDesign],
  },
];

export const gridProjects: ProjectData[] = [
  {
    title: "Retro Computing",
    description: "Vintage computing aesthetics reimagined.",
    longDescription: "A deep dive into retro computing culture, recreating iconic hardware and software interfaces with modern design tools and techniques.",
    image: projectRetro,
    tags: ["ART DIRECTION", "ILLUSTRATION"],
    date: "2026-01-20",
    gallery: [projectRetro, projectTypeDesign],
  },
  {
    title: "Logo System",
    description: "Modular logo design system.",
    longDescription: "A flexible, modular logo system designed for scalability across digital and print media. The system includes responsive logo variants, clear space rules, and usage guidelines.",
    image: projectLogo,
    tags: ["BRANDING", "LOGO"],
    date: "2025-12-05",
    gallery: [projectLogo],
  },
  {
    title: "Typography Study",
    description: "Exploring type as visual art.",
    longDescription: "An experimental typography project exploring letterforms as visual art. Each composition uses custom typefaces and hand-drawn elements to push the boundaries of typographic expression.",
    image: projectTypography,
    tags: ["TYPOGRAPHY", "ART DIRECTION"],
    date: "2025-09-14",
    gallery: [projectTypography, projectTypeDesign],
  },
  {
    title: "Type Design",
    description: "Custom typeface development.",
    longDescription: "A custom typeface designed from scratch, optimized for both display and body text usage. The font family includes multiple weights and supports extensive character sets.",
    image: projectTypeDesign,
    tags: ["TYPOGRAPHY", "DESIGN"],
    date: "2025-06-30",
    gallery: [projectTypeDesign, projectTypography],
  },
  {
    title: "Dreamscape",
    description: "Surreal brand world-building.",
    longDescription: "Dreamscape is an immersive brand identity project that creates a surreal, otherworldly visual language. The project encompasses 3D renders, motion graphics, and interactive web experiences.",
    image: projectDreamscape,
    tags: ["BRANDING", "3D"],
    date: "2026-02-28",
    gallery: [projectDreamscape, projectGradient],
    demo: "#",
  },
  {
    title: "Gradient World",
    description: "Abstract gradient compositions.",
    longDescription: "A series of abstract gradient compositions exploring color theory and digital materiality. Each piece is generated through custom algorithms and refined by hand.",
    image: projectGradient,
    tags: ["ART DIRECTION", "GENERATIVE"],
    date: "2025-10-22",
    gallery: [projectGradient, projectDreamscape],
  },
];

export const allTags = [...new Set([
  ...sidebarProjects.flatMap(p => p.tags),
  ...gridProjects.flatMap(p => p.tags),
])].sort();
