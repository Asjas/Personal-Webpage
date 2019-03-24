module.exports = {
  siteMetadata: {
    title: 'A-J Roos | Home',
    siteUrl: 'https://asjas.co.za',
    description:
      'Hey, my name is A-J Roos. I am a freelance JavaScript Web Developer based in Bloemfontein, South Africa. I enjoy working with HTML5, CSS3, JavaScript, React.js, Gatsby.js and Node.js.',
    googleSiteVerification: '5tLgWJK__aZr2ylpfLvZuN0wMdlKY05YcS4SZ2CoIx0',
    image: 'testurl',
    twitterUsername: '_asjas',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-remark-social-cards',
    'gatsby-plugin-twitter',
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
        accessToken:
          'MC5Xd3RHTXlNQUFDVUF4UmZu.akYjFnIY77-977-9Be-_ve-_ve-_vX7vv73vv73vv70-77-977-9Ou-_vUDvv73vv73vv71Tc0xp77-977-977-9',
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
