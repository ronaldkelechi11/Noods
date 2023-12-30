/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(251,126,51)',
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