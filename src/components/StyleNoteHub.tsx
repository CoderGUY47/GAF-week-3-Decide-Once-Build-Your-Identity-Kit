import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { FileCode, Copy, Clipboard, Download } from "lucide-react";

const STYLE_NOTE = `Fonts: Outfit (headings/body, weights 400/500) & JetBrains Mono (code/metadata/badges, weights 400/500).
Palette: Pitch Black #000000 · Pure White #ffffff · Bright Gray #f5f5f5 · Body Gray #d4d4d4 · Muted Gray #a3a3a3 · Dim Gray #737373; with 3–9% translucent white glass layers (3%/5%/7%/9%) on a 20px blur—a distraction-free monochrome aesthetic where the work is unconditionally the loudest element on the page.`;

const SYSTEM_PROMPT = `### UI/UX & Design System Instructions

Build the web application following this strict minimalist, pitch-black glassmorphic design system:

#### 1. Color Palette (Strict Monochrome)
- Page Background: Pitch Black (#000000)
- Text: Pure White #ffffff | Bright Gray #f5f5f5 | Body Gray #d4d4d4 | Muted Gray #a3a3a3 | Dim Gray #737373
- No other colors; no colored borders; no colored accents

#### 2. Glassmorphism (Border-None Policy)
- Subtle: background: rgba(255,255,255,0.03)
- Card: background: rgba(255,255,255,0.05); backdrop-filter: blur(20px)
- Header/Active: background: rgba(255,255,255,0.07)
- Hover: background: rgba(255,255,255,0.09)
- Zero Border: border: none !important; border-color: transparent !important

#### 3. Zero Shadows
*, *::before, *::after { box-shadow: none !important; text-shadow: none !important; }

#### 4. Typography
- Outfit (headings/body) + JetBrains Mono (code/badges)
- Text sizes: text-sm inside cards/divs, text-base for section headers
- Font weights: 400 (regular) and 500 (medium) only

#### 5. Layout Rules
- Container: 85% width, max-width 1280px
- Buttons: rounded-full, fixed height (h-10 default / h-8 small), fixed min-width (min-w-36 / min-w-28)
- Cards & divs: rounded-md
- Badges: rounded-full`;

const LINE_ONE = "Fonts: Outfit (headings/body, 400/500) & JetBrains Mono (code/metadata, 400/500).";
const LINE_TWO = "Palette: Pitch Black #000000 · Pure White #ffffff · Bright Gray #f5f5f5 · Body Gray #d4d4d4 · Muted Gray #a3a3a3 · Dim Gray #737373; 3–9% white glass (20px blur); distraction-free monochrome—work is always the loudest element.";

export const StyleNoteHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"note" | "prompt">("note");

  const handleCopyNote = () => {
    navigator.clipboard.writeText(STYLE_NOTE);
    toast.success("Two-line style note copied!");
  };

  const handleCopySystemPrompt = () => {
    navigator.clipboard.writeText(SYSTEM_PROMPT);
    toast.success("Full system prompt copied!");
  };

  const handleDownloadMd = () => {
    const content = `# Identity Kit – Style Note\n\n${STYLE_NOTE}\n\n---\n\n## Full System Prompt\n\n${SYSTEM_PROMPT}`;
    const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "identity-kit-note.md";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast.success("Downloaded identity-kit-note.md");
  };

  return (
    <section className="mb-14" id="style-note">
      {/* section header */}
      <div className="mb-6">
        <div className="font-mono text-xs uppercase tracking-wider text-[#737373] mb-1.5 flex items-center gap-1.5">
          <FileCode className="w-3.5 h-3.5" /> 05 / Style Note
        </div>
        <h2 className="text-2xl font-medium text-white tracking-tight">
          Two-Line Style Note Hub
        </h2>
        <p className="text-[#a3a3a3] text-sm mt-1">
          The canonical reference — paste into your Claude Project to keep every future build consistent.
        </p>
      </div>

      {/* tab switcher — div rounded-md */}
      <div className="flex gap-2 mb-4">
        <Button
          onClick={() => setActiveTab("note")}
          variant={activeTab === "note" ? "default" : "secondary"}
          size="sm"
        >
          Style Note
        </Button>
        <Button
          onClick={() => setActiveTab("prompt")}
          variant={activeTab === "prompt" ? "default" : "secondary"}
          size="sm"
        >
          System Prompt
        </Button>
      </div>

      {activeTab === "note" && (
        <div className="space-y-4">
          {/* two-line official note */}
          <Card className="p-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-white">Official Two-Line Style Note</span>
              <Badge variant="solid">Claude Project Ready</Badge>
            </div>
            <div className="space-y-2.5">
              {[{ num: "01", text: LINE_ONE }, { num: "02", text: LINE_TWO }].map(({ num, text }) => (
                <div key={num} className="flex gap-3 p-3.5 rounded-sm bg-white/[0.03]">
                  <span className="font-mono text-xs text-[#737373] mt-0.5 shrink-0">{num}</span>
                  <p className="text-sm text-[#d4d4d4] leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              <Button onClick={handleCopyNote} variant="default">
                <Copy className="w-4 h-4" /> Copy Style Note
              </Button>
              <Button onClick={handleDownloadMd} variant="secondary">
                <Download className="w-4 h-4" /> Download .md
              </Button>
            </div>
          </Card>
        </div>
      )}

      {activeTab === "prompt" && (
        <div>
          <Card className="p-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-white">Complete System Prompt</span>
              <Badge variant="default">Design Reference</Badge>
            </div>
            <pre className="rounded-sm bg-white/[0.03] p-4 text-xs font-mono text-[#d4d4d4] leading-relaxed overflow-auto max-h-72 whitespace-pre-wrap break-words">
              {SYSTEM_PROMPT}
            </pre>
            <div className="flex flex-wrap gap-3 mt-4">
              <Button onClick={handleCopySystemPrompt} variant="default">
                <Clipboard className="w-4 h-4" /> Copy Prompt
              </Button>
              <Button onClick={handleDownloadMd} variant="secondary">
                <Download className="w-4 h-4" /> Download .md
              </Button>
            </div>
          </Card>
        </div>
      )}
    </section>
  );
};
