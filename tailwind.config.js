module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          light: '#ffe4e6',
          dark: '#ff7b7b',
        },
        zinc: {
          light: '#d4d4d8',
        },
        stone: {
          300: '#d6d3d1',
          700: '#44403c',
        },
        emerald: {
          500: '#10b981',
        },
        offblack: '#3e4346',
        aliceblue: "#ebf2ff",
        royalblue: "#226ce8",
        gray: "#181818",
        dimgray: "#4f4f4f",
        lightgray: {
          "100": "#d6d6d6",
          "200": "#cdcdcd",
          "300": "#ccc",
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};