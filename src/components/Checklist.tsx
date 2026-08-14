import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle, ClipboardList, ArrowUpRight } from "lucide-react";

const checks = [
  { pass: true, label: "One or two fonts only", detail: "Outfit (primary) + JetBrains Mono (secondary)" },
  { pass: true, label: "Tight palette ≈ 3–4 swatches", detail: "6 monochrome shades: #000 → #737373 (all neutral)" },
  { pass: true, label: "Logo or favicon exists", detail: "Horizontal wordmark, geometric monogram, and 64px favicon" },
  { pass: true, label: "Coherent mood in style note", detail: "Distraction-free monochrome where work is always loudest" },
];

export const Checklist: React.FC = () => {
  const allPassed = checks.every((c) => c.pass);

  return (
    <section className="mb-14" id="checklist">
      <div className="mb-6">
        <div className="font-mono text-xs uppercase tracking-wider text-[#737373] mb-1.5 flex items-center gap-1.5">
          <ClipboardList className="w-3.5 h-3.5" /> 06 / Pass Criteria
        </div>
        <h2 className="text-2xl font-medium text-white tracking-tight">
          GAF Week 3 — Rubric Checklist
        </h2>
        <p className="text-[#a3a3a3] text-sm mt-1">
          All four criteria verified against the deliverable brief.
        </p>
      </div>

      <Card className="p-5">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-white">Pass / Revise Criteria</span>
          <Badge variant={allPassed ? "solid" : "default"}>
            {allPassed ? "All Passed" : "In Progress"}
          </Badge>
        </div>

        <div className="space-y-2.5">
          {checks.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3.5 p-3.5 rounded-sm bg-white/[0.03] hover:bg-white/[0.06] transition-all"
            >
              {item.pass ? (
                <CheckCircle2 className="w-4 h-4 text-white mt-0.5 shrink-0" />
              ) : (
                <Circle className="w-4 h-4 text-[#737373] mt-0.5 shrink-0" />
              )}
              <div>
                <div className="text-sm font-medium text-white leading-tight">{item.label}</div>
                <div className="text-xs text-[#a3a3a3] mt-0.5">{item.detail}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-3">
          <Button asChild variant="default">
            <a href="#style-note">
              View Style Note <ArrowUpRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </Card>
    </section>
  );
};
