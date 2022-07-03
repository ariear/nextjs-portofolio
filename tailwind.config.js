/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ibmplex': ['"IBM Plex Mono"', 'monospace'],
        'sourcesansae': ['"Source Sans Pro"', 'sans-serif']
      } 
    },
  },
  plugins: [],
}
