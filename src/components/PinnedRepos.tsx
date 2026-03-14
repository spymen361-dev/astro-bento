import { Github, ExternalLink } from "lucide-react";
import { pinnedRepos } from "@/data/pinned-repos";
import { AnimatedCard } from "./AnimatedCard";

export const PinnedRepos = () => {
  return (
    <AnimatedCard delay={0.2}>
      <div className="bento-card-static p-5">
        <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
          Pinned
        </h4>
        <ul className="space-y-1.5">
          {pinnedRepos.map((repo) => (
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
                <span className="truncate">{repo.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedCard>
  );
};
