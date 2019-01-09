module.exports = {
  siteMetadata: {
    title: 'A-J Roos | Home',
    siteUrl: 'https://asjas.co.za',
    description:
      'This is my personal website that includes my portfolio, blogs and contact information. I am Front-End Web Developer based in Bloemfontein, South Africa. I enjoy working with Front-End Technologies such as React, JavaScript, Gatsby.js and CSS-in-JS.',
    googleSiteVerification: '5tLgWJK__aZr2ylpfLvZuN0wMdlKY05YcS4SZ2CoIx0',
    twitterUsername: '_asjas',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://asjas.co.za',
        sitemap: 'https://asjas.co.za/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#FFD700',
        showSpinner: false,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'portfolio-site',
        accessToken:
          'MC5Xd3RHTXlNQUFDVUF4UmZu.akYjFnIY77-977-9Be-_ve-_ve-_vX7vv73vv73vv70-77-977-9Ou-_vUDvv73vv73vv71Tc0xp77-977-977-9',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-112825816-1',
        head: false,
        anonymize: true,
        respectDNT: true,
        optimizeId: 'GTM-NGT5XDP',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'A-J Roos | Web Developer',
        short_name: 'Portfolio',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'minimal-ui',
      },
    },
    'gatsby-plugin-offline',
  ],
};
