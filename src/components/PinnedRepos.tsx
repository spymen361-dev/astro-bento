import { useState } from "react";
import { Github, ExternalLink, Star } from "lucide-react";
import { repoTabs } from "@/data/pinned-repos";
import { AnimatedCard } from "./AnimatedCard";

export const PinnedRepos = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <AnimatedCard delay={0.2}>
      <div className="bento-card-static p-5">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Pinned
          </h4>
          <div className="flex gap-1">
            {repoTabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(i)}
                className={`px-2.5 py-1 rounded-full text-[10px] font-medium transition-colors cursor-pointer ${
                  activeTab === i
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <ul className="space-y-0.5">
          {repoTabs[activeTab].repos.map((repo) => (
            <li key={repo.name}>
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-1.5 px-2 -mx-2 rounded-lg text-sm font-medium text-foreground hover:bg-muted/60 transition-colors group"
              >
                {repo.type === "github" ? (
                  <Github className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
                ) : (
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
                )}
                <span className="truncate flex-1">{repo.name}</span>
                <span className="flex items-center gap-2 shrink-0">
                  {repo.language && (
                    <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                      <span
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: repo.languageColor ? `hsl(${repo.languageColor})` : undefined }}
                      />
                      {repo.language}
                    </span>
                  )}
                  {repo.stars !== undefined && (
                    <span className="flex items-center gap-0.5 text-[10px] text-muted-foreground">
                      <Star className="w-2.5 h-2.5" />
                      {repo.stars}
                    </span>
                  )}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedCard>
  );
};
