/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",     // For app directory (Next.js 13+)
      "./pages/*.{js,ts,jsx,tsx}",    // For classic pages
      "./components/*.{js,ts,jsx,tsx,css}" // Your components
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };