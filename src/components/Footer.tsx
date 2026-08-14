import React from "react";

export const Footer: React.FC = () => (
  <footer className="py-8 mt-6 border-t border-white/[0.06]">
    <div className="app-container flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-md bg-white flex items-center justify-center text-black font-bold text-xs">
          D
        </div>
        <span className="text-[#737373] text-sm font-normal">
          Decide Once — Identity Kit v1.0
        </span>
      </div>
      <div className="font-mono text-xs text-[#737373] flex items-center gap-3">
        <span>GAF Week 03 Deliverable</span>
        <span className="text-[#404040]">·</span>
        <span className="text-[#404040]">React + Tailwind + shadcn/ui</span>
      </div>
    </div>
  </footer>
);
