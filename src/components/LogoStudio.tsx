import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Component, Copy, Download } from "lucide-react";
import { toast } from "sonner";

const WORDMARK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 60" width="340" height="54">
  <rect width="42" height="42" rx="10" fill="#ffffff" y="9" />
  <path d="M14 21H28M14 21V39M28 21V30M14 30H26M14 39H28" stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <text x="56" y="37" fill="#ffffff" font-family="'Outfit', sans-serif" font-size="20" font-weight="500" letter-spacing="-0.3">DECIDE ONCE</text>
  <text x="188" y="37" fill="#737373" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="400" letter-spacing="1">/ STUDIO</text>
</svg>`;

const MONOGRAM_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100" height="100">
  <rect width="120" height="120" rx="24" fill="#000000" />
  <rect x="4" y="4" width="112" height="112" rx="20" fill="rgba(255, 255, 255, 0.05)" />
  <circle cx="60" cy="60" r="42" fill="none" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1.5"/>
  <path d="M42 36H78M42 36V84M78 36V60M42 60H74M42 84H78" stroke="#ffffff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="78" cy="84" r="3.5" fill="#ffffff"/>
</svg>`;

const FAVICON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" rx="14" fill="#000000" />
  <rect x="2" y="2" width="60" height="60" rx="12" fill="rgba(255, 255, 255, 0.05)" />
  <path d="M22 18H42M22 18V46M42 18V32M22 32H40M22 46H42" stroke="#ffffff" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`;

export const LogoStudio: React.FC = () => {
  const handleCopySvg = (svgContent: string, title: string) => {
    navigator.clipboard.writeText(svgContent);
    toast.success(`Copied SVG: ${title}`);
  };

  const handleDownloadSvg = (svgContent: string, filename: string) => {
    const blob = new Blob([svgContent], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast.success(`Downloaded ${filename}`);
  };

  const logos = [
    {
      svg: WORDMARK_SVG,
      title: "Horizontal Wordmark",
      desc: "For desktop headers, case study hero banners, and PDF exports.",
      filename: "logo-horizontal.svg",
    },
    {
      svg: MONOGRAM_SVG,
      title: "Geometric Monogram",
      desc: "For profile avatars, app icons, social previews, and watermarks.",
      filename: "logo-monogram.svg",
    },
    {
      svg: FAVICON_SVG,
      title: "Browser Favicon",
      desc: "Pixel-crisp 16/32/64px square icon for web browser tab bars.",
      filename: "favicon.svg",
    },
  ];

  return (
    <section className="mb-14" id="logo-studio">
      {/* section header */}
      <div className="mb-6">
        <div className="font-mono text-xs uppercase tracking-wider text-[#737373] mb-1.5 flex items-center gap-1.5">
          <Component className="w-3.5 h-3.5" /> 03 / Visual Identity
        </div>
        <h2 className="text-2xl font-medium text-white tracking-tight">
          Logo &amp; Favicon Suite
        </h2>
        <p className="text-[#a3a3a3] text-sm mt-1">
          Minimalist, geometric vector marks. Crisp at 16px favicon scale and bold on headers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {logos.map((logo) => (
          <Card key={logo.title} className="p-5 flex flex-col justify-between gap-5">
            <div>
              {/* logo stage — rounded-md */}
              <div
                className="min-h-40 bg-black rounded-md p-6 mb-4 flex items-center justify-center"
                style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 0)", backgroundSize: "16px 16px" }}
              >
                <div dangerouslySetInnerHTML={{ __html: logo.svg }} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-white mb-1">{logo.title}</h3>
                <p className="text-xs text-[#a3a3a3] leading-relaxed">{logo.desc}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              <Button onClick={() => handleCopySvg(logo.svg, logo.title)} variant="secondary" size="sm">
                <Copy className="w-3.5 h-3.5" /> Copy SVG
              </Button>
              <Button onClick={() => handleDownloadSvg(logo.svg, logo.filename)} variant="glass" size="sm">
                <Download className="w-3.5 h-3.5" /> Download
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
