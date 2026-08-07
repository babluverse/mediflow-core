/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#0F766E',
        },
        navy: {
          DEFAULT: '#0F172A',
        },
      },
    },
  },
  plugins: [],
}