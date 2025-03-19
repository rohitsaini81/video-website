/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",  // For App Router components & pages
    "./src/components/**/*.{js,ts,jsx,tsx}", // For component-based UI
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
