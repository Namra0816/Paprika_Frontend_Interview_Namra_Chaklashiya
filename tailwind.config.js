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
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
