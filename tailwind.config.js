const mdx = require('@mdx-js/mdx');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    mode: 'all',
    content: ['./app/**/*.{tsx, mdx}'],
    options: {
      extractors: [
        {
          extensions: ['mdx'],
          extractor: content => {
            content = mdx.sync(content);
            // https://github.com/tailwindlabs/blog.tailwindcss.com/blob/eb2a0ff80c8e56a79f6514c8dc4253ef84ac5548/tailwind.config.js#L13

            const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
            const innerMatches = content.match(/[^<>"'`\s.(){}[\]#=%]*[^<>"'`\s.(){}[\]#=%:]/g) || [];

            return broadMatches.concat(innerMatches);
          },
        },
      ],
    },
  },
  theme: {
    fontFamily: {
      serif: ['Playfair Display', 'serif'],
      sans: ['Poppins', 'sans-serif'],
    },
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
    typography: theme => ({
      default: {
        css: {
          color: theme('colors.imperial-black'),
          h1: {
            fontFamily: theme('fontFamily.serif'),
            color: theme('colors.storm-gray'),
          },
          h2: {
            fontFamily: theme('fontFamily.serif'),
            color: theme('colors.storm-gray'),
          },
          h3: {
            fontFamily: theme('fontFamily.serif'),
            color: theme('colors.storm-gray'),
          },
          a: {
            color: theme('colors.tiger-orange'),
            '&:hover': {
              color: theme('colors.casandora-yellow'),
            },
          },
        },
      },
    }),
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};
