/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "ytube-darkest": "#181818",
        "ytube-darker": "#212121",
        "ytube-dark": "#3d3d3d",
        "ytube-grey": "#aaaaaa",
      },
    },
  },
  plugins: [],
};
