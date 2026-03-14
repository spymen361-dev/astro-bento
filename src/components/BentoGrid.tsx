import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Boxes, Search, Clock, ArrowDownAZ } from "lucide-react";
import { GridItem } from "./GridItem";
import { AnimatedCard } from "./AnimatedCard";
import { gridProjects, allTags } from "@/data/projects";

type SortOption = "time" | "name";

export const BentoGrid = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sort, setSort] = useState<SortOption>("time");

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filtered = gridProjects
    .filter((p) => {
      const matchesSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((t) => p.tags.includes(t));
      return matchesSearch && matchesTags;
    })
    .sort((a, b) => {
      if (sort === "name") return a.title.localeCompare(b.title);
      return (b.date ?? "").localeCompare(a.date ?? "");
    });

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
        <div className="flex items-center gap-1 rounded-full bg-muted/50 border border-border p-0.5">
          <button
            onClick={() => setSort("time")}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
              sort === "time"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Clock className="w-3 h-3" />
            Time
          </button>
          <button
            onClick={() => setSort("name")}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
              sort === "name"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <ArrowDownAZ className="w-3 h-3" />
            Name
          </button>
        </div>
      </header>

      <div className="mb-6 space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search projects..."
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

      {filtered.length === 0 ? (
        <div className="flex items-center justify-center h-40 text-muted-foreground text-sm">
          No projects match your search.
        </div>
      ) : (
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
      )}
    </section>
  );
};
