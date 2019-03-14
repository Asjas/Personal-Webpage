module.exports = {
  siteMetadata: {
    title: 'A-J Roos | Home',
    siteUrl: 'https://asjas.co.za',
    description:
      'Hey, my name is A-J Roos. I am a freelance JavaScript Web Developer based in Bloemfontein, South Africa. I enjoy working with HTML5, CSS3, JavaScript, React.js, Gatsby.js and Node.js.',
    googleSiteVerification: '5tLgWJK__aZr2ylpfLvZuN0wMdlKY05YcS4SZ2CoIx0',
    twitterUsername: '_asjas',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-remark-social-cards',
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
        path: `${__dirname}/src/posts/`,
        name: 'posts',
      },
    },
    'gatsby-plugin-catch-links',
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
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: '>',
              showLineNumbers: true,
            },
          },
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
      resolve: 'gatsby-plugin-fullstory',
      options: {
        fs_org: 'FQ01H',
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['UA-112825816-1'],
        gtagConfig: {
          optimize_id: 'GTM-NGT5XDP',
          anonymize_ip: true,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
        },
      },
    },
    'gatsby-plugin-remove-serviceworker',
  ],
};
