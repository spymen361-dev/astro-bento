import { useState } from "react";
import { Twitter, Globe, Smile, Copy, Check, Send, Bold, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { LiveClock } from "./LiveClock";
import { AnimatedCard } from "./AnimatedCard";
import { ProjectDetailModal, type ProjectData } from "./ProjectDetailModal";
import avatar from "@/assets/avatar.png";

interface SidebarProps {
  projects: ProjectData[];
}

export const Sidebar = ({ projects }: SidebarProps) => {
  const [activeTab, setActiveTab] = useState<"info" | "contact">("info");
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText("contact@jkane.co");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const clients = ["MERCK", "Discord", "Publix", "Huel", "Walmart", "Under Armour", "Google"];

  return (
    <aside className="w-full md:w-[460px] flex flex-col gap-4 overflow-y-auto no-scrollbar shrink-0">
      {/* Navbar */}
      <nav className="bento-card-static p-4 flex justify-between items-center">
        <Bold className="w-5 h-5" />
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab("info")}
            className={`nav-toggle ${activeTab === "info" ? "nav-toggle-active" : "nav-toggle-inactive"}`}
          >
            Info {activeTab === "info" ? "⊖" : "⊕"}
          </button>
          <button
            onClick={() => setActiveTab("contact")}
            className={`nav-toggle ${activeTab === "contact" ? "nav-toggle-active" : "nav-toggle-inactive"}`}
          >
            Contact {activeTab === "contact" ? "⊖" : "⊕"}
          </button>
          <Link
            to="/blog"
            className="nav-toggle nav-toggle-inactive flex items-center gap-1"
          >
            <BookOpen className="w-3.5 h-3.5" /> Blog
          </Link>
          <ThemeToggle />
        </div>
      </nav>

      {activeTab === "info" && (
        <>
          {/* Hero Card */}
          <AnimatedCard>
            <div className="bento-card-static p-6 flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <div className="w-20 h-20 rounded-2xl overflow-hidden bg-muted">
                  <img src={avatar} alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div className="text-right flex flex-col items-end gap-1">
                  <div className="flex gap-2 text-xs font-medium">
                    <span className="underline underline-offset-2">EN</span>
                    <span className="text-muted-foreground">CY</span>
                  </div>
                  <LiveClock />
                </div>
              </div>
              <p className="text-foreground leading-relaxed">
                Jkane is the creative practice of Jordan Jenkins, a Welsh designer with over 15 years of experience,
                including Principal and Director roles. Building products and companies through exploratory design
                and art direction, embracing emerging technologies to push creative boundaries.
              </p>
            </div>
          </AnimatedCard>

          {/* Client Marquee */}
          <AnimatedCard delay={0.1}>
            <div className="bento-card-static p-4 overflow-hidden">
              <div className="flex animate-marquee whitespace-nowrap gap-8">
                {[...clients, ...clients].map((c, i) => (
                  <span key={i} className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedCard>

          {/* Featured Work */}
          <AnimatedCard delay={0.2}>
            <div className="bento-card-static p-6 flex flex-col gap-5">
              {projects.map((project, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedProject(project)}
                  className="group flex items-start gap-4 text-left w-full border-0"
                >
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-muted shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold leading-tight">{project.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-3">{project.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </AnimatedCard>
        </>
      )}

      {activeTab === "contact" && (
        <>
          <AnimatedCard>
            <div className="bento-card-static p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-2 text-xs font-medium">
                  <span className="underline underline-offset-2">EN</span>
                  <span className="text-muted-foreground">CY</span>
                </div>
                <LiveClock />
              </div>
              <h3 className="font-semibold mb-3">Services</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {["PITCH DECKS", "STRATEGY", "BRANDING", "ILLUSTRATION", "ANIMATION"].map((s) => (
                  <span key={s} className="tag-pill">{s}</span>
                ))}
              </div>
            </div>
          </AnimatedCard>
          <AnimatedCard delay={0.1}>
            <div className="bento-card-static p-6">
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <button className="self-start flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
                  Submit <Send className="w-3 h-3" />
                </button>
              </div>
            </div>
          </AnimatedCard>
        </>
      )}

      {/* Footer */}
      <div className="mt-auto cta-banner p-4 flex justify-between items-center rounded-md bg-secondary-foreground">
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-muted-foreground/20 text-sm font-medium text-background hover:bg-background/10 transition-colors"
        >
          contact@jkane.co
          {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
        </button>
        <div className="flex items-center gap-3">
          <a href="#" className="text-background/60 hover:text-background transition-colors"><Twitter className="w-4 h-4" /></a>
          <a href="#" className="text-background/60 hover:text-background transition-colors"><Globe className="w-4 h-4" /></a>
          <a href="#" className="text-background/60 hover:text-background transition-colors"><Smile className="w-4 h-4" /></a>
        </div>
      </div>

      <ProjectDetailModal
        project={selectedProject}
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </aside>
  );
};
