import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Sparkles, ShieldCheck, Moon, ArrowRight, Wand2 } from "lucide-react";

const FULL_PROMPT = `### UI/UX & Design System Instructions

Build the web application following this strict minimalist, pitch-black glassmorphic design system:

#### 1. Color Palette (Strict Monochrome)
- Page Background: Pitch Black (#000000 / background-color: #000000;).
- Text Family: Only pure white (#ffffff), bright gray (#f5f5f5), body gray (#d4d4d4), muted gray (#a3a3a3), and dim gray (#737373).
- No Other Colors: Do not use any colored text, colored accents, or colored borders.

#### 2. Glassmorphism & Border Rules (Border-None)
- Subtle layer: background: rgba(255, 255, 255, 0.03);
- Card layer: background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(20px);
- Header / Active layer: background: rgba(255, 255, 255, 0.07);
- Hover state: background: rgba(255, 255, 255, 0.09);
- Zero Border Outlines: border: none !important; border-color: transparent !important;

#### 3. Zero Shadows Rule
*, *::before, *::after { box-shadow: none !important; text-shadow: none !important; }

#### 4. Typography
- Outfit (headings/body) + JetBrains Mono (code/badges)
- Font sizes: text-sm for cards/divs, text-base for headers
- Font weights: 400 and 500 only

#### 5. Layout
- Container: 85% width, max-width 1280px
- Buttons: rounded-full, fixed height (h-10/h-8), fixed min-width
- Cards/divs: rounded-md
- Badges: rounded-full`;

export const Hero: React.FC = () => {
  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(FULL_PROMPT);
    toast.success("Complete System Prompt copied to clipboard!");
  };

  return (
    <section className="py-10 pb-8 text-left" id="hero">
      {/* meta badges */}
      <div className="flex flex-wrap items-center gap-2.5 mb-4">
        <Badge variant="default" className="gap-1.5 py-1 px-3">
          <ShieldCheck className="w-3 h-3 text-white" /> Identity Kit Deliverable
        </Badge>
        <Badge variant="default" className="gap-1.5 py-1 px-3">
          <Moon className="w-3 h-3 text-white" /> Pitch-Black Glassmorphic
        </Badge>
        <Badge variant="default" className="gap-1.5 py-1 px-3">
          React + Tailwind + shadcn/ui
        </Badge>
      </div>

      {/* hero title — text-base used on section, page headers below use text-3xl/4xl for visual hierarchy */}
      <h1 className="text-4xl font-medium tracking-tight text-white leading-tight mb-3">
        Decide Once. Build Your Identity Kit.
      </h1>
      <p className="text-[#a3a3a3] text-base max-w-3xl leading-relaxed mb-6 font-normal">
        A consistent look separates a portfolio that feels intentional from one that feels thrown together. A cohesive monochrome palette, curated typography, and razor-sharp borderless glass layers—decided once, inherited everywhere.
      </p>

      {/* mood banner — rounded-md card */}
      <div className="rounded-md bg-white/[0.05] backdrop-blur-[20px] p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-5 transition-all hover:bg-white/[0.08]">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-white font-medium text-base">
            <Sparkles className="w-4 h-4 text-white" /> The Established Mood
          </div>
          <p className="text-[#d4d4d4] text-sm leading-relaxed max-w-2xl">
            "A hyper-focused, distraction-free monochrome aesthetic with luminous glass layers where your creative work is unconditionally the loudest element on the canvas."
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button onClick={handleCopyPrompt} variant="secondary">
            <Wand2 className="w-4 h-4" />
            <span>Copy System Prompt</span>
          </Button>
          <Button asChild variant="glass">
            <a href="#components">
              <span>Explore System</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
