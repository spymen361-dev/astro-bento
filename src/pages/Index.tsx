import { Sidebar } from "@/components/Sidebar";
import { BentoGrid } from "@/components/BentoGrid";
import projectRetro from "@/assets/project-retro.jpg";
import projectDreamscape from "@/assets/project-dreamscape.jpg";
import projectGradient from "@/assets/project-gradient.jpg";

const projects = [
  {
    title: "ChatPRD",
    description: "ChatPRD transforms product management through AI. We developed a brand strategy and visual identity balancing enterprise credibility with distinctive personality.",
    image: projectDreamscape,
    tags: ["BRANDING", "STRATEGY"],
  },
  {
    title: "Beans",
    description: "A crypto trading platform that transforms complex market analysis into an emotionally engaging, community-driven experience.",
    image: projectGradient,
    tags: ["BRANDING", "ILLUSTRATION"],
  },
  {
    title: "Retro Collection",
    description: "A nostalgic exploration of vintage computing aesthetics reimagined through modern design principles.",
    image: projectRetro,
    tags: ["ART DIRECTION"],
  },
];

const Index = () => {
  return (
    <main className="h-screen p-4 flex flex-col md:flex-row gap-4 overflow-hidden bg-background">
      <Sidebar projects={projects} />
      <BentoGrid />
    </main>
  );
};

export default Index;
