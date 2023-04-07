/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: '#FFFFFF',
        'primary-300': '#FFCC21',
        'primary-400': '#FF963C',
        'primary-500': '#EA6C00',
        'secondary-300': '#8FE9D0',
        'dark-600': '#2E2E2E',
        'dark-500': '#414141',
        'gray-400': '#777777',
      },
      width: {
        container: '960px',
        'burger-menu': '280px',
      },
      maxWidth: {
        container: '960px',
      },
      height: {
        header: '64px',
      },
      margin: {
        header: '64px',
      },
      padding: {
        header: '64px',
      },
      fontFamily: {
        inter: 'Inter',
      },
      dropShadow: {
        primary: '0px 0px 6px #FC7400',
      },
    },
  },
  plugins: [],
}
