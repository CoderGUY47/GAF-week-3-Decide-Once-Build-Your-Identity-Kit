import React from "react";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Palette, Layers, Copy } from "lucide-react";

interface SwatchItem {
  name: string;
  role: string;
  hex: string;
  bg: string;
  border?: boolean;
  darkText?: boolean;
}

const SWATCHES: SwatchItem[] = [
  { name: "Pitch Black", role: "Canvas Background", hex: "#000000", bg: "#000000", border: true },
  { name: "Pure White", role: "Primary Action & Headings", hex: "#ffffff", bg: "#ffffff", darkText: true },
  { name: "Bright Gray", role: "High-Emphasis Body", hex: "#f5f5f5", bg: "#f5f5f5", darkText: true },
  { name: "Body Gray", role: "Standard Paragraph Text", hex: "#d4d4d4", bg: "#d4d4d4", darkText: true },
  { name: "Muted Gray", role: "Captions & Nav Inactive", hex: "#a3a3a3", bg: "#a3a3a3", darkText: true },
  { name: "Dim Gray", role: "Subtle Labels & Footers", hex: "#737373", bg: "#737373" },
];

interface GlassTier {
  name: string;
  code: string;
  percentage: string;
  desc: string;
  bgStyle: string;
}

const GLASS_TIERS: GlassTier[] = [
  { name: "Subtle Tier", code: "rgba(255, 255, 255, 0.03)", percentage: "0.03 (3%)", desc: "Nested tags, secondary surfaces, inputs, and footer backgrounds.", bgStyle: "rgba(255, 255, 255, 0.03)" },
  { name: "Card Base Tier", code: "rgba(255, 255, 255, 0.05)", percentage: "0.05 (5%)", desc: "Standard elevation for primary content cards and containers.", bgStyle: "rgba(255, 255, 255, 0.05)" },
  { name: "Header / Active Tier", code: "rgba(255, 255, 255, 0.07)", percentage: "0.07 (7%)", desc: "Sticky navigation bars, selected items, and high-emphasis panels.", bgStyle: "rgba(255, 255, 255, 0.07)" },
  { name: "Hover State Tier", code: "rgba(255, 255, 255, 0.09)", percentage: "0.09 (9%)", desc: "Interactive hover response for cards, buttons, and clickable rows.", bgStyle: "rgba(255, 255, 255, 0.09)" },
];

export const PaletteSection: React.FC = () => {
  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`Copied ${label}: ${text}`);
  };

  return (
    <section className="mb-14" id="palette">
      {/* section header */}
      <div className="mb-6">
        <div className="font-mono text-xs uppercase tracking-wider text-[#737373] mb-1.5 flex items-center gap-1.5">
          <Palette className="w-3.5 h-3.5" /> 02 / Color Palette
        </div>
        <h2 className="text-2xl font-medium text-white tracking-tight">
          Strict Monochrome Palette
        </h2>
        <p className="text-[#a3a3a3] text-sm mt-1">
          A tight, calm scale calibrated for high legibility, zero color noise, and effortless contrast.
        </p>
      </div>

      {/* swatch grid — cards use rounded-md */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {SWATCHES.map((swatch) => (
          <Card
            key={swatch.hex}
            onClick={() => handleCopy(swatch.hex, swatch.name)}
            className="p-4 cursor-pointer group transition-transform hover:-translate-y-1"
          >
            <div
              className="w-full h-16 rounded-md mb-3 flex items-center justify-center overflow-hidden transition-all"
              style={{
                backgroundColor: swatch.bg,
                border: swatch.border ? "1px solid rgba(255,255,255,0.12)" : "none",
              }}
            >
              <Copy className={`w-4 h-4 opacity-0 group-hover:opacity-90 transition-opacity ${swatch.darkText ? "text-black" : "text-white"}`} />
            </div>
            <div className="space-y-1">
              <div className="text-sm font-medium text-white">{swatch.name}</div>
              <div className="text-xs text-[#737373] leading-tight">{swatch.role}</div>
              <div className="font-mono text-xs text-[#f5f5f5] pt-1 flex items-center justify-between">
                <span>{swatch.hex}</span>
                <span className="text-[10px] text-[#a3a3a3] group-hover:text-white">Copy</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* glass matrix header */}
      <div className="mb-4">
        <div className="font-mono text-xs uppercase tracking-wider text-[#737373] mb-1.5 flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5" /> 02.1 / Translucency Matrix
        </div>
        <h3 className="text-base font-medium text-white tracking-tight">
          Pure White Glass Layers (20px Blur)
        </h3>
        <p className="text-[#a3a3a3] text-sm mt-1">
          Depth and hierarchy built entirely with stacked opacities—no borders or drop shadows required.
        </p>
      </div>

      {/* glass tier cards — inline style for dynamic bg, rounded-md */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {GLASS_TIERS.map((tier) => (
          <div
            key={tier.name}
            onClick={() => handleCopy(tier.code, tier.name)}
            style={{ background: tier.bgStyle }}
            className="rounded-md p-5 backdrop-blur-[20px] cursor-pointer group transition-transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-white">{tier.name}</span>
              <span className="font-mono text-xs text-[#a3a3a3] bg-black/40 px-2 py-0.5 rounded-md">
                {tier.percentage}
              </span>
            </div>
            <p className="text-xs text-[#d4d4d4] leading-relaxed mb-3">{tier.desc}</p>
            <div className="flex items-center justify-between text-xs font-mono text-[#a3a3a3] pt-2 border-t border-white/[0.04]">
              <span>Click to copy</span>
              <Copy className="w-3 h-3 group-hover:text-white" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
