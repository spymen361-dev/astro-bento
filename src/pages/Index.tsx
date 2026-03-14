import { Sidebar } from "@/components/Sidebar";
import { BentoGrid } from "@/components/BentoGrid";

const Index = () => {
  return (
    <main className="h-screen p-4 flex flex-col md:flex-row gap-4 overflow-hidden bg-background">
      <Sidebar />
      <BentoGrid />
    </main>
  );
};

export default Index;
