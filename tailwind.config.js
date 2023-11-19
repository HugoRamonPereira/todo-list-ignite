/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'Gray': {
          100: '#F2F2F2',
          200: '#D9D9D9',
          300: '#808080',
          400: '#333333',
          500: '#262626',
          600: '#1A1A1A',
          700: '#0D0D0D'
        },
        'Purple': '#8284FA',
        'PurpleDark': '#5E60CE',
        'Blue': '#4EA8DE',
        'BlueDark': '#1E6F9F',
        'Danger': '#E25858'
      },
      fontFamily: {
        'sans': ['Inter']
      }
    },
  },
  plugins: [],
};

