import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TypographySection } from "@/components/TypographySection";
import { PaletteSection } from "@/components/PaletteSection";
import { LogoStudio } from "@/components/LogoStudio";
import { ComponentShowcase } from "@/components/ComponentShowcase";
import { StyleNoteHub } from "@/components/StyleNoteHub";
import { Checklist } from "@/components/Checklist";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-[#f5f5f5] font-sans antialiased selection:bg-white selection:text-black">
      <Navbar />

      <main className="app-container space-y-4">
        <Hero />
        <TypographySection />
        <PaletteSection />
        <LogoStudio />
        <ComponentShowcase />
        <StyleNoteHub />
        <Checklist />
      </main>

      <Footer />
      <Toaster />
    </div>
  );
};

export default App;
