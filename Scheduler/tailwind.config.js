/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#2C3E50",
          white: "#FFFFFF",
          violet: "#AB65F8",
          blueHover: "#212E3B",
          green: "#32A858"
        },
        secondary : {
          blue: "#3498DB",
          gray: "#ECF0F1"
        },
        accent : {
          lime: "#2ECC71",
          orange: "#E67E22"
        },
        text : {
          dg: "#34495E",
          mdg: "#7F8C8D"
        },
        infographic : {
          red: "#E74C3C",
          yellow: "#F1C40F",
          green: "#27AE60"
        }
      },
      height : {
        '60px': "60px",
        '80px': "80px"
      },
      leading : {
        '60px': "60px"
      },
      fontFamily: {
        'brush-script': ['"Brush Script MT"', 'cursive'],
      },
    },
  },
  plugins: [],
}

