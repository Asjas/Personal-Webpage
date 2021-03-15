module.exports = {
  plugins: [
    require('@tailwindcss/jit'),
    ...(process.env.NODE_ENV === 'production' ? [require('autoprefixer'), require('cssnano')] : []),
  ],
};
