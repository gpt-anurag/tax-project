/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary100: '#3b68e7',
        primary200: '#6588f0',
        primaryBtn: '#007aff',
        primaryFont: '#314450',
        FontDark: '#06163a',
        FontHover: '#d4d3d2',
      },
    },
  },
  plugins: [],
}
