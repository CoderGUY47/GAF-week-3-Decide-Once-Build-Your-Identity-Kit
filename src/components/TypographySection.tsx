import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Type, RotateCcw } from "lucide-react";
import { toast } from "sonner";

export const TypographySection: React.FC = () => {
  const [fontFamily, setFontFamily] = useState<string>("'Outfit', sans-serif");
  const [fontWeight, setFontWeight] = useState<string>("400");
  const [fontSize, setFontSize] = useState<number[]>([24]);
  const [sampleText, setSampleText] = useState<string>(
    "Decide once, inherit forever. Focus on the craft."
  );

  const handleReset = () => {
    setFontFamily("'Outfit', sans-serif");
    setFontWeight("400");
    setFontSize([24]);
    setSampleText("Decide once, inherit forever. Focus on the craft.");
    toast.info("Type tester reset to defaults");
  };

  return (
    <section className="mb-14" id="typography">
      {/* section header */}
      <div className="mb-6">
        <div className="font-mono text-xs uppercase tracking-wider text-[#737373] mb-1.5 flex items-center gap-1.5">
          <Type className="w-3.5 h-3.5" /> 01 / Type Hierarchy
        </div>
        <h2 className="text-2xl font-medium text-white tracking-tight">
          Two Curated Typefaces
        </h2>
        <p className="text-[#a3a3a3] text-sm mt-1">
          Outfit for crisp geometric structural headings and fluid body prose; JetBrains Mono for metadata, code, tokens, and badges.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        {/* outfit specimen — card rounded-md */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between bg-white/[0.03] p-3 rounded-sm">
              <div>
                <CardTitle>Outfit</CardTitle>
                <div className="font-mono text-xs text-[#a3a3a3] mt-0.5">Primary / Headings &amp; Prose</div>
              </div>
              <Badge variant="secondary">Google Fonts</Badge>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="text-4xl font-medium text-white tracking-tight leading-none" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Aa Bb Gg 79
            </div>
            <div className="text-xs text-[#737373] tracking-widest leading-relaxed break-all" style={{ fontFamily: "'Outfit', sans-serif" }}>
              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
              abcdefghijklmnopqrstuvwxyz 0123456789
            </div>

            {/* spec list — text-xs throughout */}
            <div className="space-y-1.5 font-mono text-xs text-[#a3a3a3]">
              {[
                ["Weights Used", "Light (300), Regular (400), Medium (500)"],
                ["Tracking", "-0.02em (Headings), Normal (Body)"],
                ["Role", "Headings, Prose, Buttons, Nav"],
              ].map(([label, val]) => (
                <div key={label} className="flex justify-between items-center p-2 rounded-sm bg-white/[0.02]">
                  <span>{label}</span>
                  <span className="text-white">{val}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* jetbrains mono specimen */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between bg-white/[0.03] p-3 rounded-sm">
              <div>
                <CardTitle>JetBrains Mono</CardTitle>
                <div className="font-mono text-xs text-[#a3a3a3] mt-0.5">Secondary / Code &amp; Metadata</div>
              </div>
              <Badge variant="secondary">Google Fonts</Badge>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="text-3xl font-medium text-white tracking-tight leading-none" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              {"{ id: \"kit\" }"}
            </div>
            <div className="text-xs text-[#737373] tracking-widest leading-relaxed break-all font-mono" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
              abcdefghijklmnopqrstuvwxyz 0123456789
            </div>

            <div className="space-y-1.5 font-mono text-xs text-[#a3a3a3]">
              {[
                ["Weights Used", "Regular (400), Medium (500)"],
                ["Tracking", "+0.04em (Uppercase Tags)"],
                ["Role", "Badges, Hex Values, Code Snippets"],
              ].map(([label, val]) => (
                <div key={label} className="flex justify-between items-center p-2 rounded-sm bg-white/[0.02]">
                  <span>{label}</span>
                  <span className="text-white">{val}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* live type tester — card rounded-md */}
      <Card className="p-5">
        <div className="flex flex-wrap items-center justify-between gap-4 p-3.5 rounded-sm bg-white/[0.03] mb-5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#a3a3a3]">Font:</span>
            <select
              value={fontFamily}
              onChange={(e) => setFontFamily(e.target.value)}
              className="bg-white/[0.07] text-white text-xs rounded-md px-2.5 py-1.5 outline-none cursor-pointer"
            >
              <option value="'Outfit', sans-serif" className="bg-black">Outfit (Primary)</option>
              <option value="'JetBrains Mono', monospace" className="bg-black">JetBrains Mono</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#a3a3a3]">Weight:</span>
            <select
              value={fontWeight}
              onChange={(e) => setFontWeight(e.target.value)}
              className="bg-white/[0.07] text-white text-xs rounded-md px-2.5 py-1.5 outline-none cursor-pointer"
            >
              <option value="300" className="bg-black">Light (300)</option>
              <option value="400" className="bg-black">Regular (400)</option>
              <option value="500" className="bg-black">Medium (500)</option>
              <option value="600" className="bg-black">Semi-Bold (600)</option>
            </select>
          </div>

          <div className="flex items-center gap-3 w-44">
            <span className="text-xs font-mono text-[#a3a3a3] whitespace-nowrap">Size: {fontSize[0]}px</span>
            <Slider value={fontSize} onValueChange={setFontSize} min={14} max={48} step={1} className="w-full" />
          </div>

          <Button onClick={handleReset} variant="secondary" size="sm">
            <RotateCcw className="w-3.5 h-3.5" /> Reset
          </Button>
        </div>

        <textarea
          value={sampleText}
          onChange={(e) => setSampleText(e.target.value)}
          rows={2}
          spellCheck={false}
          className="w-full rounded-sm bg-white/[0.03] p-4 text-white placeholder:text-[#737373] outline-none transition-colors focus:bg-white/[0.07] resize-none"
          style={{ fontFamily, fontWeight, fontSize: `${fontSize[0]}px`, lineHeight: 1.4 }}
        />
      </Card>
    </section>
  );
};
