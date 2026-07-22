/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: {
          primary: '#FFC300',
          dark: '#E6A800',
          light: '#FFD54F',
        },
        black: {
          bg: '#111111',
          card: '#1A1A1A',
          surface: '#222222',
        },
      },
      fontFamily: {
        sans: ['Noto Sans Thai', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
