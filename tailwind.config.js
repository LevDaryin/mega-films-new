module.exports = {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    gridTemplateColumns: {
      content: '240px 750px',
      header: '285px 1fr',
    },
    gridTemplateRows: {
      content: '890px',
      header: '86px 4px',
    },
    boxShadow: {
      specific: '2px 0px 10px 1px rgba(38, 60, 255, 0.8)',
    },
    extend: {},
  },
  plugins: [],
};
