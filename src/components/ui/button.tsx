import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer text-sm",
  {
    variants: {
      variant: {
        default: "bg-white text-black hover:bg-[#f5f5f5] hover:-translate-y-0.5 active:translate-y-0",
        secondary: "bg-[#262626] text-white hover:bg-[#333333] hover:-translate-y-0.5 active:translate-y-0",
        glass: "bg-white/[0.05] text-[#f5f5f5] backdrop-blur-[12px] hover:bg-white/[0.09] hover:text-white",
        ghost: "bg-transparent text-[#a3a3a3] hover:text-white hover:bg-white/[0.06]",
        outline: "bg-white/[0.03] text-white hover:bg-white/[0.08]",
        link: "text-white underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 min-w-36 px-5 text-sm",
        sm: "h-8 min-w-28 px-4 text-xs",
        lg: "h-11 min-w-44 px-6 text-sm",
        icon: "h-9 w-9 min-w-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
