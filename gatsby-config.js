module.exports = {
  siteMetadata: {
    title: 'Personal Portfolio| A-J Roos',
    siteUrl: 'https://asjasroos.co.za',
    description: 'This is the Personal Portfolio of A-J Roos.',
    keywords:
      'Personal Portfolio, A-J Roos, Asjas, GatsbyJS, React Developer, Node Developer, South Africa',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://asjasroos.co.za',
        sitemap: 'https://asjasroos.co.za/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/img/`,
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
        // The name of your prismic.io repository. This is required.
        // Example: 'gatsby-source-prismic-test-site' if your prismic.io address
        // is 'gatsby-source-prismic-test-site.prismic.io'.
        repositoryName: 'portfolio-site',
        // An API access token to your prismic.io repository. This is required.
        // You can generate an access token in the "API & Security" section of
        // your repository settings. Setting a "Callback URL" is not necessary.
        // The token will be listed under "Permanent access tokens".
        accessToken:
          'MC5Xd3RHTXlNQUFDVUF4UmZu.akYjFnIY77-977-9Be-_ve-_ve-_vX7vv73vv73vv70-77-977-9Ou-_vUDvv73vv73vv71Tc0xp77-977-977-9',
      },
    },
    // {
    //   resolve: 'gatsby-source-datocms',
    //   options: {
    //     // You can find your read-only API token under the Settings > API tokens
    //     // section of your administrative area:
    //     apiToken: '177d19f4a5a4abbfb0d264eac16ab3',

    //     // If you are working on development/staging environment, you might want to
    //     // preview the latest version of records instead of the published one:
    //     previewMode: false,

    //     // Disable automatic reloading of content when some change occurs on DatoCMS:
    //     disableLiveReload: false,

    //     // Custom API base URL
    //     apiUrl: 'https://site-api.datocms.com',
    //   },
    // },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {},
        allPageHeaders: [
          'Content-Security-Policy: frame-ancestors asjasroos.co.za',
          'Referrer-Policy: strict-origin',
          'Strict-Transport-Security: max-age=31536000',
          'X-Content-Type-Options: nosniff',
          'X-Frame-Options: DENY',
          'X-XSS-Protection: 1; mode=block',
          'proxy_hide_header: X-Powered-By',
        ],
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
        generateMatchPathRewrites: true,
      },
    },
    'gatsby-plugin-netlify-cache',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Playfair Display', 'Montserrat'],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Portfolio| A-J Roos',
        short_name: 'Portfolio',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'minimal-ui',
        icon: 'src/img/icon.png',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-112825816-1',
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
};
