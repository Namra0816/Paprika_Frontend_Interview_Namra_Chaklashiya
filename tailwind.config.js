module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          light: '#ffe4e6',
          dark: '#fb7185',
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
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
