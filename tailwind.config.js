/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
        'palanquin-dark': ['Palanquin Dark', 'sans-serif'],
      },
      screens : {
        '3xl' : '1800px',
        '4xl' : '1921px'
      }
    },
  },
  plugins: [],
}

