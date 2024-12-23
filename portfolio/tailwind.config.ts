import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      gridTemplateColumns: {
        "20": "repeat(20, minmax(100px,1fr))",
      },
      fontFamily:{
        mono:['Mona Sans','sans-serif'],
        dmsans:['DM Sans','sans-serif']
      }
    },
  },
  plugins: [],
} satisfies Config;
