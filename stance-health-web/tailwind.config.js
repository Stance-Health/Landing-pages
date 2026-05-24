/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lime: "#ddfe71",
        "light-blue": "#addcec",
        navy: "#132644",
        "near-black": "#2f2f32",
        "light-grey": "#ececec",
        "off-white": "#fbf9ed",
        orange: "#fe7833",
      },
      fontFamily: {
        unbounded: ["var(--font-unbounded)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
    },
  },
  plugins: [],
}
