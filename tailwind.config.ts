import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#1B4332",
          50: "#EEF4F0",
          100: "#D6E5DC",
          200: "#A9C9B7",
          300: "#7CAE92",
          400: "#4F8B6C",
          500: "#2D6A4F",
          600: "#1B4332",
          700: "#14352780",
          800: "#0F2A1F",
          900: "#081A13",
        },
        gold: {
          DEFAULT: "#B7791F",
          light: "#D6A84E",
          dark: "#8A5A12",
        },
        cream: "#FAFAF7",
        sand: "#F1EBE0",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.25em",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(27, 67, 50, 0.25)",
        card: "0 20px 50px -20px rgba(27, 67, 50, 0.35)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "kenburns": {
          "0%": { transform: "scale(1) translate(0, 0)" },
          "100%": { transform: "scale(1.12) translate(-1.5%, -1.5%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "fade-up": "fade-up 0.7s ease forwards",
        kenburns: "kenburns 18s ease-out forwards",
        shimmer: "shimmer 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
