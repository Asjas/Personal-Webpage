module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./app/**/*.js'],
  theme: {
    fontFamily: {
      serif: ['Playfair Display', 'serif'],
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'casandora-yellow': '#feca57',
        'imperial-black': '#222f3e',
        'lotus-pink': '#f368e0',
        'storm-gray': '#c8d6e5',
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
          h4: {
            fontFamily: theme('fontFamily.serif'),
            color: theme('colors.storm-gray'),
          },
          p: {
            color: theme('colors.storm-gray'),
          },
          strong: {
            color: theme('colors.storm-gray'),
          },
          em: {
            color: theme('colors.storm-gray'),
          },
          a: {
            color: theme('colors.lotus-pink'),
            '&:hover': {
              color: theme('colors.casandora-yellow'),
              textDecoration: 'none',
            },
          },
          code: {
            color: theme('colors.casandora-yellow'),
          },
          ul: {
            color: theme('colors.storm-gray'),
          },
          ol: {
            color: theme('colors.storm-gray'),
          },
          blockquote: {
            color: theme('colors.storm-gray'),
            borderLeftColor: theme('colors.casandora-yellow'),
          },
        },
      },
    }),
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};
