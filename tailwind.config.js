/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        airbnb: {
          red: "#FF385C",
          gray: "#F7F7F7",
          darkGray: "#222222",
          lightGray: "#EBEBEB",
        },
      },
      fontFamily: {
        sans: ["Circular", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
