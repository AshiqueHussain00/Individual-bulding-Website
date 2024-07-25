/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'very-dark-gray': '#101010',
        'very-light-gray': '#E7E7E7',
      },
    },
  },
  plugins: [],
}


