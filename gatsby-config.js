/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  siteMetadata: {
    title: `Home | A-J Roos`,
    siteUrl: `https://asjas.co.za/`,
    description: `Hey, my name is A-J Roos. I am a Front-End Web Developer based in Bloemfontein, South Africa. I am a self-taught Web Developer that loves to work on anything JavaScript related such as working with React.js and Node.js.`,
    image: `https://asjas.co.za/assets/logo_transparent.png`,
    twitterUsername: `_asjas`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-polyfill-io`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://asjas.co.za`,
        sitemap: `https://asjas.co.za/sitemap.xml`,
        policy: [{ userAgent: `*`, allow: `/` }],
      },
    },
    {
      resolve: `gatsby-plugin-netlify-functions`,
      options: {
        functionsSrc: `${__dirname}/src/functions`,
        functionsOutput: `${__dirname}/functions`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/project`,
        name: `project`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              quality: 95,
              withWebp: true,
              backgroundColor: `transparent`,
            },
          },
          {
            resolve: `gatsby-remark-embed-video`,
            options: {
              width: 600,
              ratio: 1.77,
              related: false,
              noIframeBorder: true,
            },
          },
          `gatsby-remark-responsive-iframe`,
          { resolve: `gatsby-remark-code-titles` },
          { resolve: `gatsby-remark-prismjs` },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: `${__dirname}/static`,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-112825816-1`,
        head: false,
        anonymize: true,
        respectDNT: false,
        siteSpeedSampleRate: 10,
      },
    },
    `gatsby-plugin-remove-serviceworker`,
  ],
};
