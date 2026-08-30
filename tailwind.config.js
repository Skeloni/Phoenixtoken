/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        phoenixDark: '#0f141c',
        phoenixOrange: '#e05a16',
        glassBg: 'rgba(255, 255, 255, 0.03)',
      },
    },
  },
  plugins: [],
};
