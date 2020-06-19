module.exports = {
  siteMetadata: {
    title: `A-J Roos`,
    siteUrl: `https://asjas.xyz`,
    description: `I'm a Web Developer based in Bloemfontein, South Africa. I love working with JavaScript libraries and frameworks such as React.js, Gatsby.js, Next.js, Node.js and Fastify.`,
  },
  plugins: [
    { resolve: `gatsby-plugin-react-helmet` },
    { resolve: `gatsby-plugin-postcss` },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: `./static/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-sentry`,
      options: {
        dsn: `https://18b2fcfdb3334223b3577719a6c05296@o183318.ingest.sentry.io/1275165`,
        environment: process.env.NODE_ENV,
        enabled: (() => [`production`].indexOf(process.env.NODE_ENV) !== -1)(),
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Playfair Display\:400`, `Lato\:400`],
      },
    },
  ],
};
