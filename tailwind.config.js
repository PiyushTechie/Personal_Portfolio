/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        marquee: "marquee 40s linear infinite",
      },
      colors: {
        zinc: {
          850: '#1f1f22', 
          950: '#0c0c0e', 
        }
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      fontFamily: {
        serif: ['"EB Garamond"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}