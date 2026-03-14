import { useState } from "react";
import { Pipette, Copy, Check } from "lucide-react";

const ColorPicker = () => {
  const [color, setColor] = useState("#ff0080");
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const hexToRgb = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const hexToHsl = (hex: string) => {
    let r = parseInt(hex.slice(1, 3), 16) / 255;
    let g = parseInt(hex.slice(3, 5), 16) / 255;
    let b = parseInt(hex.slice(5, 7), 16) / 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
        case g: h = ((b - r) / d + 2) / 6; break;
        case b: h = ((r - g) / d + 4) / 6; break;
      }
    }
    return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Pipette className="w-5 h-5 text-primary" />
        <h2 className="text-lg font-bold">Color Picker</h2>
      </div>

      <div className="flex items-center gap-4">
        <div
          className="w-20 h-20 rounded-xl border border-border shrink-0"
          style={{ backgroundColor: color }}
        />
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-full h-10 rounded-lg cursor-pointer border-0 bg-transparent"
        />
      </div>

      <div className="space-y-2">
        {[
          { label: "HEX", value: color.toUpperCase() },
          { label: "RGB", value: hexToRgb(color) },
          { label: "HSL", value: hexToHsl(color) },
        ].map(({ label, value }) => (
          <button
            key={label}
            onClick={() => handleCopy(value)}
            className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-muted/50 border border-border text-sm hover:bg-muted transition-colors"
          >
            <span className="text-muted-foreground font-mono text-xs">{label}</span>
            <span className="flex items-center gap-2 font-mono text-xs">
              {value}
              {copied ? <Check className="w-3 h-3 text-primary" /> : <Copy className="w-3 h-3 text-muted-foreground" />}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
