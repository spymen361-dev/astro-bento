import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { gridProjects, sidebarProjects } from "@/data/projects";
import { AnimatedCard } from "@/components/AnimatedCard";

const allProjects = [...sidebarProjects, ...gridProjects];

const ProjectPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = allProjects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!project) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        Project not found.
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

      <AnimatedCard>
        <div className="rounded-2xl overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>
      </AnimatedCard>

      <AnimatedCard delay={0.1}>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{project.title}</h1>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="tag-pill">{tag}</span>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed">
            {project.longDescription || project.description}
          </p>
          <div className="flex gap-3 pt-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm font-medium hover:bg-muted/60 transition-colors"
              >
                <Github className="w-4 h-4" /> Source
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </AnimatedCard>

      {project.gallery && project.gallery.length > 1 && (
        <AnimatedCard delay={0.2}>
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
              Gallery
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {project.gallery.map((img, i) => (
                <div key={i} className="rounded-xl overflow-hidden">
                  <img
                    src={img}
                    alt={`${project.title} gallery ${i + 1}`}
                    className="w-full h-40 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </AnimatedCard>
      )}
    </div>
  );
};

export default ProjectPage;
