import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Sparkles, CheckCircle2, ArrowRight, MousePointerClick, Sliders, Layers, Lock, Search } from "lucide-react";
import { toast } from "sonner";

export const ComponentShowcase: React.FC = () => {
  const [_searchValue, setSearchValue] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section className="mb-14" id="components">
      {/* section header */}
      <div className="mb-6">
        <div className="font-mono text-xs uppercase tracking-wider text-[#737373] mb-1.5 flex items-center gap-1.5">
          <Sliders className="w-3.5 h-3.5" /> 04 / Component System
        </div>
        <h2 className="text-2xl font-medium text-white tracking-tight">
          Design System in Action (shadcn/ui)
        </h2>
        <p className="text-[#a3a3a3] text-sm mt-1">
          Interactive demonstration of buttons, inputs, badges, and modals — strict{" "}
          <strong className="text-white font-medium">border-none</strong> and{" "}
          <strong className="text-white font-medium">zero-shadows</strong>.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* button family card */}
        <Card className="p-5">
          <div className="flex items-center gap-2 text-sm font-medium text-white mb-4">
            <MousePointerClick className="w-4 h-4" /> Button Family
          </div>
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2.5">
              <Button onClick={() => toast.success("Primary button clicked!")} variant="default">
                <span>Primary</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button onClick={() => toast.success("Dark button clicked!")} variant="secondary">
                <CheckCircle2 className="w-4 h-4" />
                <span>Dark</span>
              </Button>
            </div>

            <Button onClick={() => toast.success("Glass button clicked!")} variant="glass" className="w-full">
              <Sparkles className="w-4 h-4" />
              <span>Glass Translucent</span>
            </Button>

            {/* shadcn dialog trigger */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full text-xs">
                  Open Dialog Modal
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Pitch-Black Modal System</DialogTitle>
                  <DialogDescription>
                    This modal demonstrates shadcn/ui Dialog rendered strictly with 0px borders, pitch-black backdrop blur, and Outfit typography.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-3 space-y-2 text-xs text-[#d4d4d4]">
                  <p>• Zero outline borders (border: none !important;)</p>
                  <p>• 80% opacity dark backdrop with blur</p>
                  <p>• Solid monochrome action buttons</p>
                  <p>• Rounded-md dialog surface</p>
                </div>
                <DialogFooter>
                  <Button
                    onClick={() => { setIsDialogOpen(false); toast.success("Modal action confirmed!"); }}
                    variant="default"
                    size="sm"
                  >
                    Confirm Action
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </Card>

        {/* badges & tabs card */}
        <Card className="p-5">
          <div className="flex items-center gap-2 text-sm font-medium text-white mb-4">
            <Layers className="w-4 h-4" /> Badges &amp; Tabs
          </div>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="default">Component</Badge>
              <Badge variant="active" className="gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                <span>Active</span>
              </Badge>
              <Badge variant="secondary">2026.Q3</Badge>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="dark" className="gap-1.5">
                <Lock className="w-3 h-3" /> Pitch-Black v3
              </Badge>
              <Badge variant="solid">Solid Tag</Badge>
            </div>

            {/* shadcn tabs */}
            <Tabs defaultValue="overview" className="w-full mt-2">
              <TabsList className="w-full grid grid-cols-2">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="tokens">Tokens</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <div className="text-xs text-[#a3a3a3] p-2.5 bg-white/[0.02] rounded-md mt-1">
                  Minimalist monochrome layer system.
                </div>
              </TabsContent>
              <TabsContent value="tokens">
                <div className="text-xs text-[#a3a3a3] p-2.5 bg-white/[0.02] rounded-md mt-1 font-mono">
                  Outfit / JetBrains / 6 Swatches
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </Card>

        {/* input fields card */}
        <Card className="p-5">
          <div className="flex items-center gap-2 text-sm font-medium text-white mb-4">
            <Search className="w-4 h-4" /> Interactive Inputs
          </div>
          <div className="space-y-3.5">
            <Input
              type="text"
              placeholder="Search case studies..."
              onChange={(e) => setSearchValue(e.target.value)}
            />
            {/* sample list row — rounded-md */}
            <div className="p-3.5 rounded-sm bg-white/[0.03] hover:bg-white/[0.07] transition-all flex items-center justify-between cursor-pointer">
              <div>
                <div className="text-sm font-medium text-white">Portfolio Architecture</div>
                <div className="text-xs text-[#737373]">Decide once identity integration</div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#737373]" />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
