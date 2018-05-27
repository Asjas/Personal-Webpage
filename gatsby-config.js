module.exports = {
  siteMetadata: {
    title: 'Personal Portfolio| A-J Roos',
    siteUrl: 'https://asjasroos.co.za',
    description: 'This is the Personal Portfolio of A-J Roos.',
    keywords:
      'Personal Portfolio, Front-End, Back-End, Full-Stack Web Developer, React.js, Node.js, A-J Roos',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Portfolio| A-J Roos',
        short_name: 'Portfolio',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'minimal-ui',
        icon: 'src/img/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-styled-components',
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
      resolve: 'gatsby-plugin-nprogress',
      options: {
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    // {
    //   resolve: 'gatsby-source-prismic',
    //   options: {
    //     // The name of your prismic.io repository. This is required.
    //     // Example: 'gatsby-source-prismic-test-site' if your prismic.io address
    //     // is 'gatsby-source-prismic-test-site.prismic.io'.
    //     repository: 'portfolio-site.cdn',

    //     // An API access token to your prismic.io repository. This is required.
    //     // You can generate an access token in the "API & Security" section of
    //     // your repository settings. Setting a "Callback URL" is not necessary.
    //     // The token will be listed under "Permanent access tokens".
    //     accessToken:
    //       'MC5Xd3RHTXlNQUFDVUF4UmZu.akYjFnIY77-977-9Be-_ve-_ve-_vX7vv73vv73vv70-77-977-9Ou-_vUDvv73vv73vv71Tc0xp77-977-977-9',

    //     // Set a link resolver function used to process links in your content.
    //     // Fields with rich text formatting or links to internal content use this
    //     // function to generate the correct link URL.
    //     // The document node, field key (i.e. API ID), and field value are
    //     // provided to the function, as seen below. This allows you to use
    //     // different link resolver logic for each field if necessary.
    //     // See: https://prismic.io/docs/javascript/query-the-api/link-resolving
    //     linkResolver: ({ node, key, value }) => doc => {
    //       // Your link resolver
    //     },

    //     // Set an HTML serializer function used to process formatted content.
    //     // Fields with rich text formatting use this function to generate the
    //     // correct HTML.
    //     // The document node, field key (i.e. API ID), and field value are
    //     // provided to the function, as seen below. This allows you to use
    //     // different HTML serializer logic for each field if necessary.
    //     // See: https://prismic.io/docs/nodejs/beyond-the-api/html-serializer
    //     htmlSerializer: ({ node, key, value }) => (
    //       type,
    //       element,
    //       content,
    //       children,
    //     ) => {
    //       // Your HTML serializer
    //     },
    //   },
    // },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        analyzerPort: 3000,
        production: false,
      },
    },
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
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-112825816-1',
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: [''],
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Playfair Display', 'Montserrat'],
      },
    },
  ],
};
