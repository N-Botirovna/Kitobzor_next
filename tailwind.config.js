/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // Agar app directory bo‘lsa
  ],
  theme: {
    extend: {},
  },
  darkMode: "false", // yoki 'media' yoki false
  plugins: [],
};
