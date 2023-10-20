/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "opacity-layer":
          "linear-gradient(180deg, rgba(4, 21, 45, 0), #04152d 79.17%)",
        gradient: "linear-gradient(98.37deg, #f89e00 0.99%, #da2f68 100%)",
      },
      keyframes: {
        fromTop: {
          "0%": { transform: "translateY(-130%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "header-menu": "fromTop 0.3s ease forwards",
      },
    },
  },
  plugins: [],
};
