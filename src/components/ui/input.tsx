import * as React from "react";
import { cn } from "@/lib/utils";

/* input uses rounded-md, text-sm */
const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md bg-white/[0.04] px-3.5 py-2 text-sm text-white placeholder:text-[#737373] transition-colors focus-visible:outline-none focus-visible:bg-white/[0.08] disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
