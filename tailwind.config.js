module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./app/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'amor-red': '#ee5253',
        'casandora-yellow': '#feca57',
        'france-blue': '#2e86de',
        'imperial-black': '#222f3e',
        'jade-green': '#00d2d3',
        'lotus-pink': '#f368e0',
        'mountain-green': '#10ac84',
        'prince-purple': '#5f27cd',
        'storm-gray': '#c8d6e5',
        'tiger-orange': '#ff9f43',
      },
    },
  },
  variants: {},
  plugins: [],
};
