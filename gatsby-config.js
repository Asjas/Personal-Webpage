module.exports = {
  siteMetadata: {
    title: 'A-J Roos | Web Developer',
    siteUrl: 'https://asjas.co.za',
    description: 'This is the Personal Portfolio of A-J Roos.',
    googleSiteVerification: '5tLgWJK__aZr2ylpfLvZuN0wMdlKY05YcS4SZ2CoIx0',
    keywords: 'JavaScript, React.js, Node.js, Web Development, Web Developer, South Africa',
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
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {},
        allPageHeaders: [
          'Content-Security-Policy: frame-ancestors asjas.co.za',
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
    // {
    //   resolve: 'gatsby-plugin-google-fonts',
    //   options: {
    //     fonts: ['Playfair Display', 'Montserrat'],
    //   },
    // },
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
