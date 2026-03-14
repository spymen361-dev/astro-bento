import { useState } from "react";
import { Palette, Copy, Check, RefreshCw } from "lucide-react";

const presets = [
  { name: "Sunset", from: "#ff6b6b", via: "#feca57", to: "#ff9ff3" },
  { name: "Ocean", from: "#0abde3", via: "#48dbfb", to: "#c8d6e5" },
  { name: "Forest", from: "#2ed573", via: "#7bed9f", to: "#1e3799" },
  { name: "Neon", from: "#ff0080", via: "#7c3aed", to: "#06b6d4" },
];

const GradientGenerator = () => {
  const [from, setFrom] = useState("#ff0080");
  const [via, setVia] = useState("#7c3aed");
  const [to, setTo] = useState("#06b6d4");
  const [angle, setAngle] = useState(135);
  const [copied, setCopied] = useState(false);

  const gradient = `linear-gradient(${angle}deg, ${from}, ${via}, ${to})`;
  const cssCode = `background: ${gradient};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(cssCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const randomColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
  const randomize = () => {
    setFrom(randomColor());
    setVia(randomColor());
    setTo(randomColor());
    setAngle(Math.floor(Math.random() * 360));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Palette className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-bold">Gradient Generator</h2>
        </div>
        <button
          onClick={randomize}
          className="p-2 rounded-lg hover:bg-muted/60 transition-colors text-muted-foreground hover:text-foreground"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>

      <div
        className="w-full h-32 rounded-xl border border-border"
        style={{ background: gradient }}
      />

      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "From", value: from, set: setFrom },
          { label: "Via", value: via, set: setVia },
          { label: "To", value: to, set: setTo },
        ].map(({ label, value, set }) => (
          <label key={label} className="space-y-1">
            <span className="text-xs text-muted-foreground">{label}</span>
            <div className="flex items-center gap-1.5">
              <input
                type="color"
                value={value}
                onChange={(e) => set(e.target.value)}
                className="w-6 h-6 rounded cursor-pointer border-0 bg-transparent shrink-0"
              />
              <span className="text-xs font-mono text-foreground">{value}</span>
            </div>
          </label>
        ))}
      </div>

      <label className="block space-y-1">
        <span className="text-xs text-muted-foreground">Angle: {angle}°</span>
        <input
          type="range"
          min={0}
          max={360}
          value={angle}
          onChange={(e) => setAngle(Number(e.target.value))}
          className="w-full accent-primary"
        />
      </label>

      <div className="flex flex-wrap gap-2">
        {presets.map((p) => (
          <button
            key={p.name}
            onClick={() => { setFrom(p.from); setVia(p.via); setTo(p.to); }}
            className="tag-pill cursor-pointer hover:border-primary hover:text-primary transition-colors"
          >
            {p.name}
          </button>
        ))}
      </div>

      <button
        onClick={handleCopy}
        className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-muted/50 border border-border text-xs font-mono hover:bg-muted transition-colors"
      >
        <span className="truncate text-muted-foreground">{cssCode}</span>
        {copied ? <Check className="w-3 h-3 text-primary shrink-0" /> : <Copy className="w-3 h-3 text-muted-foreground shrink-0" />}
      </button>
    </div>
  );
};

export default GradientGenerator;
