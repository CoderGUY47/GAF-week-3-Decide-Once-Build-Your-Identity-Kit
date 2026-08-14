import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Copy, Type, Palette, Component, FileCode, CheckCircle2 } from "lucide-react";

export const Navbar: React.FC = () => {
  const handleQuickCopy = () => {
    const note = `Fonts: Outfit (headings/body, 400/500) & JetBrains Mono (code/metadata, 400/500).
Palette: Pitch Black #000000, Pure White #ffffff, Bright Gray #f5f5f5, Body Gray #d4d4d4, Muted Gray #a3a3a3, Dim Gray #737373, with 3–9% translucent white glass layers; a distraction-free monochrome aesthetic where the work is unconditionally the loudest element on the page.`;
    navigator.clipboard.writeText(note);
    toast.success("Two-line style note copied to clipboard!");
  };

  return (
    <header className="sticky top-0 z-50 bg-white/[0.07] backdrop-blur-[24px] py-3.5 mb-8">
      <div className="app-container flex items-center justify-between">
        {/* brand logo */}
        <a href="#hero" className="inline-flex items-center gap-3 text-white font-medium text-base tracking-tight">
          <div className="w-8 h-8 rounded-md bg-white text-black flex items-center justify-center font-bold text-xs">
            DO
          </div>
          <span>DECIDE ONCE</span>
          <span className="text-[#737373] font-mono text-xs hidden sm:inline">/ IDENTITY KIT</span>
        </a>

        {/* nav links */}
        <nav className="hidden md:flex items-center gap-1">
          {[
            { href: "#typography", icon: <Type className="w-3.5 h-3.5" />, label: "Typography" },
            { href: "#palette", icon: <Palette className="w-3.5 h-3.5" />, label: "Palette" },
            { href: "#logo-studio", icon: <Component className="w-3.5 h-3.5" />, label: "Logo Studio" },
            { href: "#components", icon: <CheckCircle2 className="w-3.5 h-3.5" />, label: "Components" },
            { href: "#style-note", icon: <FileCode className="w-3.5 h-3.5" />, label: "Style Note" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[#a3a3a3] hover:text-white px-3 py-1.5 rounded-md text-sm font-normal transition-all hover:bg-white/[0.08] inline-flex items-center gap-2"
            >
              {item.icon} {item.label}
            </a>
          ))}
        </nav>

        {/* nav actions */}
        <div className="flex items-center gap-3">
          <Badge variant="active" className="hidden sm:inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            <span>Week 03 Active</span>
          </Badge>
          <Button onClick={handleQuickCopy} variant="default" size="sm">
            <Copy className="w-3.5 h-3.5" />
            <span>Copy Note</span>
          </Button>
        </div>
      </div>
    </header>
  );
};
