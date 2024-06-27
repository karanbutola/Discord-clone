/** @type {import('tailwindcss').Config} */
module.exports = {
  enabled: process.env.NODE_ENV === "production",
  content: ["*"],
  theme: {
    extend: {},
  },
  plugins: [],
  fontFamily:{
    Whitney:["Whitney"],
    Ginto:["Ginto"],
    ggSans:["ggSans"],
  },
}
