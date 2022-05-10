module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      gridTemplateRows: {
        '10': 'repeat(10, minmax(0, 1fr))',
      },
      gridRow: {
        'span-9': 'span 9 / span 9',
      },
      colors: {
        'custom-pink': '#eba6e7',
      },
    },
  },
  plugins: [],
}
