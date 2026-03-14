import { Boxes } from "lucide-react";
import { GridItem } from "./GridItem";
import projectRetro from "@/assets/project-retro.jpg";
import projectLogo from "@/assets/project-logo.jpg";
import projectTypography from "@/assets/project-typography.jpg";
import projectTypeDesign from "@/assets/project-type-design.jpg";
import projectDreamscape from "@/assets/project-dreamscape.jpg";
import projectGradient from "@/assets/project-gradient.jpg";

export const BentoGrid = () => {
  return (
    <section className="flex-1 bento-card-static overflow-y-auto p-6 no-scrollbar">
      <header className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Boxes className="w-5 h-5 text-primary" />
          Playground
        </h2>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
        {/* Large retro image */}
        <GridItem className="col-span-2 row-span-2">
          <img
            src={projectRetro}
            alt="Retro computer project"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </GridItem>

        {/* Logo on black */}
        <GridItem className="bg-foreground">
          <img
            src={projectLogo}
            alt="Logo design"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </GridItem>

        {/* Typography */}
        <GridItem className="row-span-2">
          <img
            src={projectTypography}
            alt="Typography project"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </GridItem>

        {/* Type design */}
        <GridItem className="col-span-2">
          <img
            src={projectTypeDesign}
            alt="Type design"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </GridItem>

        {/* Dreamscape */}
        <GridItem className="col-span-2">
          <img
            src={projectDreamscape}
            alt="Dreamscape branding"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </GridItem>

        {/* Gradient sphere */}
        <GridItem>
          <img
            src={projectGradient}
            alt="Gradient artwork"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </GridItem>
      </div>
    </section>
  );
};
