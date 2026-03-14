import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface ProjectData {
  title: string;
  description: string;
  image: string;
  tags: string[];
  date?: string;
  longDescription?: string;
  gallery?: string[];
  github?: string;
  demo?: string;
}

interface ProjectDetailModalProps {
  project: ProjectData | null;
  open: boolean;
  onClose: () => void;
}

export const ProjectDetailModal = ({ project, open, onClose }: ProjectDetailModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden rounded-3xl border-none bg-card">
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-background transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span key={tag} className="tag-pill">{tag}</span>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {project.longDescription || project.description}
          </p>
          {project.gallery && project.gallery.length > 0 && (
            <div className="grid grid-cols-2 gap-3">
              {project.gallery.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl overflow-hidden"
                >
                  <img src={img} alt={`${project.title} gallery ${i + 1}`} className="w-full h-40 object-cover" />
                </motion.div>
              ))}
            </div>
          )}
          {(project.github || project.demo) && (
            <div className="flex gap-3 mt-6">
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
                  Live Demo
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full border border-border text-sm font-semibold hover:bg-muted transition-colors">
                  GitHub
                </a>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
