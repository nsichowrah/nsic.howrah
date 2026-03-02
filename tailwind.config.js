/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        saffron: "#f08a24",
        navy: "#0c4a7d",
        "navy-strong": "#08365b",
        "site-bg": "#f4f7fb",
      },
      fontFamily: {
        heading: ["Manrope", "sans-serif"],
        body: ["Source Sans 3", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(10, 31, 68, 0.08)",
      },
      backgroundImage: {
        "institutional-grid":
          "radial-gradient(circle at 1px 1px, rgba(10, 31, 68, 0.08) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};
