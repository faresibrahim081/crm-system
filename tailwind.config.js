/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#09DD96",
        },
        secondary: {
          DEFAULT: "#016644",
        },
        focus: {
          DEFAULT: "#09DD96",
        },
        text: {
          DEFAULT: "#23272E",
        },
      },
    },
    fontFamily: {
      Poppins: ["cairo", "sans-serif"],
    },
  },
  daisyui: {
    themes: [
      "dark"
    ],
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
