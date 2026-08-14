import React from "react";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

export const Toaster: React.FC<ToasterProps> = ({ ...props }) => {
  return (
    <Sonner
      position="bottom-right"
      theme="light"
      toastOptions={{
        style: {
          background: "#ffffff",
          color: "#000000",
          border: "none",
          boxShadow: "none",
          borderRadius: "10px",
          padding: "12px 18px",
          fontWeight: "500",
          fontSize: "13.5px",
          fontFamily: "'Outfit', sans-serif",
        },
      }}
      {...props}
    />
  );
};
