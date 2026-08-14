/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pitch: {
          black: "#000000",
          card: "#0d0d0d",
          elevated: "#141414",
        },
        gray: {
          bright: "#f5f5f5",
          body: "#d4d4d4",
          muted: "#a3a3a3",
          dim: "#737373",
        },
        glass: {
          subtle: "rgba(255, 255, 255, 0.03)",
          card: "rgba(255, 255, 255, 0.05)",
          header: "rgba(255, 255, 255, 0.07)",
          hover: "rgba(255, 255, 255, 0.09)",
          active: "rgba(255, 255, 255, 0.12)",
        }
      },
      fontFamily: {
        sans: ['Outfit', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        lg: "16px",
        md: "12px",
        sm: "8px",
      },
      backdropBlur: {
        '20': '20px',
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}
