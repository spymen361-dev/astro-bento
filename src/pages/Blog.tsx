import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, Clock, Calendar, Tag } from "lucide-react";
import { AnimatedCard } from "@/components/AnimatedCard";
import { blogPosts, getReadingTime, allBlogTags } from "@/data/blog";

const Blog = () => {
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filtered = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        !search ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.description.toLowerCase().includes(search.toLowerCase());
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((t) => post.tags.includes(t));
      return matchesSearch && matchesTags;
    });
  }, [search, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <main className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <AnimatedCard className="mb-8">
          <div className="bento-card-static p-6 flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </Link>
            <h1 className="text-2xl font-bold">Blog</h1>
            <div className="w-16" />
          </div>
        </AnimatedCard>

        {/* Search & Filters */}
        <AnimatedCard delay={0.1} className="mb-6">
          <div className="bento-card-static p-6 space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search posts..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-muted/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {allBlogTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`tag-pill cursor-pointer transition-colors ${
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
        </AnimatedCard>

        {/* Posts */}
        <div className="space-y-4">
          {filtered.length === 0 && (
            <div className="bento-card-static p-12 text-center text-muted-foreground">
              No posts found matching your criteria.
            </div>
          )}
          {filtered.map((post, i) => (
            <AnimatedCard key={post.slug} delay={0.1 + i * 0.05}>
              <Link to={`/blog/${post.slug}`}>
                <article className="bento-card p-6 cursor-pointer">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span key={tag} className="tag-pill text-[10px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {getReadingTime(post)} min read
                    </span>
                  </div>
                </article>
              </Link>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Blog;
