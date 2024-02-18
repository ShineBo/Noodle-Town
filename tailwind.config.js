/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        inconsol: ['Oxygen', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
      colors: {
        'primary': '#FFD700',
        'primary-100': '#FFEBCD',
        'primary-200': '#FFE4B5',
        'primary-300': '#FFD700',
        'primary-400': '#EEDC82',
        'primary-500': '#DAA520',
        'primary-dark': '#B37D00',
        "dark-slate-gray": "#2F4F4F",
        "slate-gray": "#6D6D6D",
        "white-400": "rgba(255, 255, 255, 0.80)"
        // 'secondary': '#008000',
        // 'secondary-100': '#98FB98',
        // 'secondary-200': '#90EE90',
        // 'secondary-300': '#00FF7F',
        // 'secondary-400': '#3CB371',
        // 'secondary-500': '#2E8B57',
        // 'secondary-dark': '#005600',
        // "pale-blue": "#F5F6FF",
      },
    },
  },
  plugins: [
    
  ],
}

