/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#a90000',
          dark: '#800000',
          light: '#ff1a1a'
        },
        secondary: {
          DEFAULT: '#07617d',
          dark: '#054d63',
          light: '#0885ab'
        }
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        maven: ['Maven Pro', 'sans-serif']
      },
      animation: {
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out'
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      }
    },
  },
  plugins: [],
}