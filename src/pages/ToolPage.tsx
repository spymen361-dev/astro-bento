import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { tools } from "@/data/tools";
import { lazy, Suspense } from "react";

const toolComponents: Record<string, React.LazyExoticComponent<React.ComponentType>> = {
  "color-picker": lazy(() => import("@/components/tools/ColorPicker")),
  "gradient-generator": lazy(() => import("@/components/tools/GradientGenerator")),
  "url-shortener": lazy(() => import("@/components/tools/UrlShortener")),
};

const ToolPage = () => {
  const { toolId } = useParams();
  const navigate = useNavigate();

  const tool = tools.find((t) => t.id === toolId);
  const ToolComponent = toolId ? toolComponents[toolId] : null;

  if (!tool || !ToolComponent) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        Tool not found.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Playground
      </button>

      <Suspense fallback={<div className="text-muted-foreground text-sm">Loading...</div>}>
        <ToolComponent />
      </Suspense>
    </div>
  );
};

export default ToolPage;
