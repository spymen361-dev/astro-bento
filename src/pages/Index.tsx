import { Sidebar } from "@/components/Sidebar";
import { BentoGrid } from "@/components/BentoGrid";
import { sidebarProjects } from "@/data/projects";

const Index = () => {
  return (
    <main className="h-screen p-4 flex flex-col md:flex-row gap-4 overflow-hidden bg-background">
      <Sidebar projects={sidebarProjects} />
      <BentoGrid />
    </main>
  );
};

export default Index;
