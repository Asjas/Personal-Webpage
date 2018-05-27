module.exports = {
  siteMetadata: {
    title: 'Personal Portfolio| A-J Roos',
    description: 'This is the Personal Portfolio of A-J Roos.',
    keywords: 'Front-End, Back-End, Full-Stack Web Developer, Portfolio, Gatsby.js, React.js, A-J Roos',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        // Setting a color is optional.
        color: 'tomato',
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
  ],
};
