import { useState } from "react";
import { Link2, Copy, Check } from "lucide-react";

const UrlShortener = () => {
  const [url, setUrl] = useState("");
  const [shortened, setShortened] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<{ original: string; short: string }[]>([]);

  const generateShort = () => {
    if (!url.trim()) return;
    const hash = Math.random().toString(36).substring(2, 8);
    const short = `jk.co/${hash}`;
    setShortened(short);
    setHistory((prev) => [{ original: url, short }, ...prev].slice(0, 5));
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Link2 className="w-5 h-5 text-primary" />
        <h2 className="text-lg font-bold">URL Shortener</h2>
      </div>

      <p className="text-xs text-muted-foreground">
        Generate short demo links (mockup — no real backend).
      </p>

      <div className="flex gap-2">
        <input
          type="url"
          placeholder="Paste a URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && generateShort()}
          className="flex-1 px-3 py-2 rounded-xl bg-muted/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
        <button
          onClick={generateShort}
          className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity shrink-0"
        >
          Shorten
        </button>
      </div>

      {shortened && (
        <button
          onClick={() => handleCopy(shortened)}
          className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl bg-primary/5 border border-primary/20 text-sm"
        >
          <span className="font-mono font-semibold text-primary">{shortened}</span>
          {copied ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4 text-muted-foreground" />}
        </button>
      )}

      {history.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">History</h4>
          {history.map((item, i) => (
            <div key={i} className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-muted/30 text-xs">
              <span className="truncate text-muted-foreground max-w-[60%]">{item.original}</span>
              <span className="font-mono text-foreground">{item.short}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UrlShortener;
