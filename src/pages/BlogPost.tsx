import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { blogPosts, getReadingTime } from "@/data/blog";
import { AnimatedCard } from "@/components/AnimatedCard";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link to="/blog" className="text-primary hover:underline">
            Back to blog
          </Link>
        </div>
      </main>
    );
  }

  // Simple markdown-ish rendering: handle ## headings and paragraphs
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      const trimmed = block.trim();
      if (trimmed.startsWith("## ")) {
        return (
          <h2 key={i} className="text-xl font-bold mt-8 mb-3">
            {trimmed.replace("## ", "")}
          </h2>
        );
      }
      if (trimmed.startsWith("### ")) {
        return (
          <h3 key={i} className="text-lg font-semibold mt-6 mb-2">
            {trimmed.replace("### ", "")}
          </h3>
        );
      }
      return (
        <p key={i} className="text-muted-foreground leading-relaxed mb-4">
          {trimmed}
        </p>
      );
    });
  };

  return (
    <main className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <AnimatedCard className="mb-8">
          <div className="bento-card-static p-6">
            <Link
              to="/blog"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Back to blog
            </Link>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span key={tag} className="tag-pill">{tag}</span>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {getReadingTime(post)} min read
              </span>
            </div>
            <div className="prose-custom">{renderContent(post.content)}</div>
          </div>
        </AnimatedCard>
      </div>
    </main>
  );
};

export default BlogPost;
