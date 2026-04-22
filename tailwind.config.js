/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          dark: '#50301B',
          primary: '#985827',
          secondary: '#A67B5B',
          light: '#FED8B1',
        }
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
