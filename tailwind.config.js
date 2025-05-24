/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./index.html"],
  theme: {
    extend: {},
    screens: {
      "md": { max: '510px'}
    }
  },
  plugins: [],
}

