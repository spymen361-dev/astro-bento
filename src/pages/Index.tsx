import { useParams } from "react-router-dom";
import { Sidebar } from "@/components/Sidebar";
import { BentoGrid } from "@/components/BentoGrid";
import ProjectPage from "./ProjectPage";
import ToolPage from "./ToolPage";

const Index = () => {
  const { slug, toolId } = useParams();

  return (
    <main className="h-screen p-4 flex flex-col md:flex-row gap-4 overflow-hidden bg-background">
      <Sidebar />
      {slug ? (
        <section className="flex-1 bento-card-static overflow-y-auto p-6 no-scrollbar">
          <ProjectPage />
        </section>
      ) : toolId ? (
        <section className="flex-1 bento-card-static overflow-y-auto p-6 no-scrollbar">
          <ToolPage />
        </section>
      ) : (
        <BentoGrid />
      )}
    </main>
  );
};

export default Index;
