/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Poppins: ["cairo", "sans-serif"],
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [require("daisyui")],
  
    rtl: true,
    
  
};
