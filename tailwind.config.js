module.exports = {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    gridTemplateColumns: {
      cards: 'repeat(4, 150px)',
      content: '240px 753px',
      header: '285px 1fr',
    },
    gridTemplateRows: {
      cards: 'repeat(3, 257px)',
      content: '894px',
      header: '86px 4px',
    },
    boxShadow: {
      specific: '2px 0px 10px 1px rgba(38, 60, 255, 0.8)',
    },
    extend: {
      dropShadow: {
        neon: '0px 0px 3.5px #6590FF',
      },
    },
  },
  plugins: [],
};
