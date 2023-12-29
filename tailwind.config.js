/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D25A09',
        secondary: '#EACC05'
      },
      backgroundImage: {
        heroPattern: "url('/src/assets/images/3.jpg')"
      },
      fontFamily: {
        billabong: 'Billabong',
        poppins: 'Poppins'
      }

    },
  },
  plugins: [],
}