/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#102B4E',
          50: '#F0F5FA',
          100: '#E1ECF6',
          200: '#C2D9ED',
          300: '#94BEE0',
          400: '#5F9ECD',
          500: '#3A82B8',
          600: '#23659E',
          700: '#1A4D7C',
          800: '#102B4E',
          900: '#0B1C33',
          950: '#071221',
        },
        royal: {
          DEFAULT: '#174EA6',
          50: '#EEF4FF',
          100: '#E0EBFF',
          200: '#C7D9FE',
          300: '#A4C0FD',
          400: '#799EFA',
          500: '#4E7AF6',
          600: '#2C57EC',
          700: '#174EA6',
          800: '#133E85',
          900: '#13356D',
        },
        gold: {
          DEFAULT: '#E7AD43',
          50: '#FCF8EE',
          100: '#F8F0DC',
          200: '#F2DFBA',
          300: '#ECCB91',
          400: '#E7AD43',
          500: '#D79528',
          600: '#B6761A',
          700: '#8A5416',
          800: '#6E4318',
          900: '#5A3817',
        },
        lightGrey: '#F5F7FA',
        darkText: '#202938',
      },
      fontFamily: {
        heading: ['Poppins', 'Montserrat', 'sans-serif'],
        body: ['Inter', 'Open Sans', 'sans-serif'],
      },
      boxShadow: {
        'wp': '0 4px 20px -2px rgba(16, 43, 78, 0.08)',
        'wp-hover': '0 12px 30px -4px rgba(16, 43, 78, 0.14)',
        'wp-card': '0 2px 12px 0 rgba(16, 43, 78, 0.06)',
      }
    },
  },
  plugins: [],
}
