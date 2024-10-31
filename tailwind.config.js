/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gradientStart: '#006397',
        gradientEnd: '#C1EAFF',
        primary: '#006397',
        secondary: '#00A7FD',
        buttonColor: '#004264',
        outterCircle: '#81D1FA',
        innerCircle: '#E0F4FF',
      },
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
}

