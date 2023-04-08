/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const extendTheme = require('./src/constants')

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      ...extendTheme.TAILWIND_EXTEND_CONFIG,
    },
  },
  plugins: [],
}
