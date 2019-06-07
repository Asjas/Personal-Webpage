module.exports = {
  siteMetadata: {
    title: 'A-J Roos | Home',
    siteUrl: 'https://asjas.co.za',
    description:
      'Hey, my name is A-J Roos. I am a freelance Web Developer based in Bloemfontein, South Africa. I enjoy working with HTML5, CSS3, JavaScript, React.js, Gatsby.js and Node.js.',
    googleSiteVerification: '5tLgWJK__aZr2ylpfLvZuN0wMdlKY05YcS4SZ2CoIx0',
    image: 'https://asjas.sfo2.cdn.digitaloceanspaces.com/messy-desk.jpg',
    twitterUsername: '_asjas',
    author: {
      name: 'A-J Roos',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-twitter',
    'gatsby-plugin-polyfill-io',
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
        path: `${__dirname}/src/images/`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts/`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
              withWebp: true,
            },
          },
          // { resolve: 'gatsby-remark-social-cards' },
          { resolve: 'gatsby-remark-responsive-iframe' },
          { resolve: 'gatsby-remark-code-titles' },
          { resolve: 'gatsby-remark-numbered-footnotes' },
          { resolve: 'gatsby-remark-prismjs' },
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
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
        icon: 'src/images/messy-desk.jpg',
        include_favicon: true,
      },
    },
    'gatsby-plugin-offline',
  ],
};
