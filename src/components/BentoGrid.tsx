import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Boxes, Search, Wrench } from "lucide-react";
import { GridItem } from "./GridItem";
import { AnimatedCard } from "./AnimatedCard";
import { gridProjects, allTags } from "@/data/projects";
import { tools } from "@/data/tools";

export const BentoGrid = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filtered = gridProjects.filter((p) => {
    const matchesSearch =
      !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some((t) => p.tags.includes(t));
    return matchesSearch && matchesTags;
  });

  const filteredTools = tools.filter((t) =>
    !search || t.title.toLowerCase().includes(search.toLowerCase()) || t.description.toLowerCase().includes(search.toLowerCase())
  );

  const getSpanClasses = (i: number) => {
    const patterns = [
      "col-span-2 row-span-2",
      "",
      "row-span-2",
      "col-span-2",
      "col-span-2",
      "",
    ];
    return patterns[i % patterns.length];
  };

  return (
    <section className="flex-1 bento-card-static overflow-y-auto p-6 no-scrollbar">
      <header className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Boxes className="w-5 h-5 text-primary" />
          Playground
        </h2>
      </header>

      {/* Search & Tags */}
      <div className="mb-6 space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search projects & tools..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-muted/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`tag-pill cursor-pointer transition-colors text-[10px] ${
                selectedTags.includes(tag)
                  ? "!bg-primary !text-primary-foreground !border-primary"
                  : ""
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Tools Section */}
      {filteredTools.length > 0 && (
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-3 flex items-center gap-2">
            <Wrench className="w-3.5 h-3.5" />
            Tools
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {filteredTools.map((tool, i) => (
              <AnimatedCard
                key={tool.id}
                delay={i * 0.06}
                onClick={() => navigate(`/tool/${tool.id}`)}
              >
                <div className="bento-card p-4 cursor-pointer h-full flex flex-col gap-2">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `hsl(${tool.color} / 0.12)` }}
                  >
                    <tool.icon
                      className="w-4 h-4"
                      style={{ color: `hsl(${tool.color})` }}
                    />
                  </div>
                  <h4 className="text-sm font-semibold">{tool.title}</h4>
                  <p className="text-xs text-muted-foreground">{tool.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      )}

      {/* Projects Grid */}
      {filtered.length === 0 && filteredTools.length === 0 ? (
        <div className="flex items-center justify-center h-40 text-muted-foreground text-sm">
          No results match your search.
        </div>
      ) : filtered.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {filtered.map((project, i) => (
            <AnimatedCard
              key={project.title}
              delay={i * 0.08}
              className={getSpanClasses(i)}
              onClick={() => navigate(`/project/${project.title.toLowerCase().replace(/\s+/g, "-")}`)}
            >
              <GridItem className="h-full cursor-pointer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <h3 className="text-sm font-bold text-background">{project.title}</h3>
                    <p className="text-xs text-background/70">{project.tags.join(" · ")}</p>
                  </div>
                </div>
              </GridItem>
            </AnimatedCard>
          ))}
        </div>
      ) : null}
    </section>
  );
};
