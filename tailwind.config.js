/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2A71D0",
        darkGray: "#4B4B4B",
        lightBlue: "#E3F2FD"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif']
      }
    },
  },
  plugins: [],
};
