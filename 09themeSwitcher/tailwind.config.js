/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // very imp for using dark mode of tailwind:
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
}