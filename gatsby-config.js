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
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Portfolio| A-J Roos',
        short_name: 'Portfolio',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        // Setting a color is optional.
        color: 'tomato',
        // Disable the loading spinner.
        showSpinner: false,
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
