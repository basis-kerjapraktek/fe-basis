/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'biru-denim': '#272264',
        'biru-keabuan': '#47437B',
        'putih-tulang': '#F6F6FF',
        'putih-keabuan': '#B3B1B6',
        'ungu-terang': '#9987C1',
        'ungu-keabuan': '#5D50BC',
        'hijau': '#4CAF50',
        'merah': '#F44336',
        'kuning': '#FFC107',
      },
      backgroundImage: {
        'gradient-purple': 'linear-gradient(27deg, #5D50BC 27%, #9987C1 100%)'
      }
    },
  },
  plugins: [],
}
