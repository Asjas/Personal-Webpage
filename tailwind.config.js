module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./app/**/*.tsx', './app/**/*.js', './app/**/*.mdx'],
  theme: {
    fontFamily: {
      serif: ['Wotfard'],
      sans: ['Wotfard'],
    },
    extend: {
      colors: {
        'casandora-yellow': '#ffe100',
        'imperial-black': '#0e141b',
        'hot-pink': '#ff0a78',
        'madonna-purple': '#5773ff',
        'storm-gray': '#c8d6e5',
        success: '#00cc88',
        error: '#fa3879',
        alert: '#ff7f00',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: [
            {
              color: theme('colors.white'),
              fontFamily: theme('fontFamily.serif'),
              strong: {
                fontWeight: '500',
              },
              h1: {
                color: theme('colors.white'),
                fontWeight: '500',
                position: 'relative',
              },
              h2: {
                color: theme('colors.casandora-yellow'),
                fontWeight: '500',
                position: 'relative',
              },
              h3: {
                color: theme('colors.casandora-yellow'),
                fontWeight: '500',
              },
              h4: {
                color: theme('colors.casandora-yellow'),
                fontWeight: '500',
              },
              p: {},
              strong: {
                color: theme('colors.storm-gray'),
              },
              em: {
                color: theme('madonna-purple'),
                fontStyle: 'italic',
              },
              a: {
                color: theme('colors.hot-pink'),
                '&:hover': {
                  color: theme('colors.casandora-yellow'),
                  textDecoration: 'none',
                },
              },
              code: {
                color: theme('colors.white'),
                backgroundColor: theme('colors.storm-gray'),
                fontFamily: theme('fontFamily.serif'),
                padding: '4.5px 6px',
                borderRadius: '3px',
              },
              ul: {},
              ol: {},
              blockquote: {
                borderLeftColor: theme('colors.casandora-yellow'),
              },
            },
          ],
        },
      }),
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')],
};
