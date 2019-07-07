/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  siteMetadata: {
    title: 'A-J Roos | Home',
    siteUrl: 'https://asjas.co.za',
    description:
      'Hey, my name is A-J Roos. I am a freelance Web Developer based in Bloemfontein, South Africa. I enjoy working with HTML5, CSS3, JavaScript, React.js, Gatsby.js and Node.js.',
    googleSiteVerification: '5tLgWJK__aZr2ylpfLvZuN0wMdlKY05YcS4SZ2CoIx0',
    image: 'https://asjas.sfo2.cdn.digitaloceanspaces.com/images/messy-desk.jpg',
    twitterUsername: '_asjas',
    author: {
      name: 'A-J Roos',
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`style.(js|ts)?(x)`],
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-twitter',
    'gatsby-plugin-polyfill-io',
    `gatsby-plugin-typescript`,
    'gatsby-plugin-advanced-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://asjas.co.za',
        sitemap: 'https://asjas.co.za/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: [`${__dirname}/src/styles/main.scss`],
        sourceComments: true,
        sourceMap: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    // {
    //   resolve: `gatsby-plugin-page-creator`,
    //   options: {
    //     path: `${__dirname}/src/pages`,
    //   },
    // },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-mdx',
      options: {
        gatsbyRemarkPlugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              quality: 95,
              withWebp: true,
              backgroundColor: 'transparent',
            },
          },
          // { resolve: 'gatsby-remark-social-cards' },
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              width: 600,
              ratio: 1.77,
              related: false,
              noIframeBorder: true,
            },
          },
          'gatsby-remark-responsive-iframe',
          { resolve: 'gatsby-remark-code-titles' },
          { resolve: 'gatsby-remark-prismjs' },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: `${__dirname}/static`,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'portfolio-site',
        accessToken: process.env.PRISMIC_API_KEY,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-112825816-1',
        head: false,
        anonymize: true,
        respectDNT: false,
        siteSpeedSampleRate: 10,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'A-J Roos | Personal Website',
        short_name: 'A-J Roos',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: 'hsl(341, 79%, 45%)',
        display: 'standalone',
        icon: 'static/assets/logo_transparent.png',
        include_favicon: true,
      },
    },
    'gatsby-plugin-offline',
  ],
};
