/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#252A3B",
        secondary: "#7F8A9E",
        borderClr: "#6E7892",
        btnClr: "#5254F1",
      },
    },
  },
  plugins: [],
};
