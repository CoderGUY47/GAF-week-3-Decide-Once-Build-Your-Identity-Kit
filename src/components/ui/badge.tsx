import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/* badges use rounded-full since they are pill-shaped status indicators */
const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-mono font-normal transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        default: "bg-white/[0.04] text-[#a3a3a3]",
        secondary: "bg-white/[0.08] text-white",
        active: "bg-white/[0.07] text-[#f5f5f5]",
        solid: "bg-white text-black font-sans font-medium",
        dark: "bg-[#262626] text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
