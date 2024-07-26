/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'custom-80': '80px',
        
      },
      colors: {
        'very-dark-gray': '#101010',
        'very-light-gray': '#E7E7E7',
      },
    },
  },
  plugins: [],
}


