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
        lightPrimary: 'rgba(251,126,51,0.4)',
        secondary: '#EACC05'
      },
      backgroundImage: {
        heroPattern: "url('/src/assets/images/3.jpg')",
        noodlesPattern: "url('/src/assets/images/jollof.jpg')",
        pastasPattern: "url('/src/assets/images/creamy.jpg')",
        ricesPattern: "url('/src/assets/images/oriental.jpg')",
        swallowsPattern: "url('/src/assets/images/afang.jpeg')",
        extrasPattern: "url('/src/assets/images/yam.jpeg')",
      },
      fontFamily: {
        billabong: 'Billabong',
        poppins: 'Poppins'
      }

    },
  },
  plugins: [],
}