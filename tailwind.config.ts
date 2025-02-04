import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#1A1A1A",
        foreground: "#FFFFFF",
        primary: {
          DEFAULT: "#00FFFF",
          hover: "#00CCCC",
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#FF007F",
          hover: "#CC0066",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#00FF00",
          hover: "#00CC00",
          foreground: "#000000",
        },
        muted: {
          DEFAULT: "#2A2A2A",
          foreground: "#999999",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FFFFFF",
        },
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
      },
      backgroundColor: {
        popover: 'white',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
