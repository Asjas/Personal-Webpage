/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  siteMetadata: {
    title: `Home | A-J Roos`,
    siteUrl: `https://asjas.co.za`,
    description: `Hey, my name is A-J Roos. I am a Front-End Web Developer based in Bloemfontein, South Africa. I am a self-taught Web Developer that loves to work on anything JavaScript related such as working with React.js and Node.js.`,
    googleSiteVerification: `5tLgWJK__aZr2ylpfLvZuN0wMdlKY05YcS4SZ2CoIx0`,
    image: `https://asjas.co.za/assets/logo_transparent.png`,
    twitterUsername: `_asjas`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-polyfill-io`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify-cache`,
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
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/*.html': ['Cache-Control: public, max-age=0, must-revalidate;'],
          '/sw.js': ['Cache-Control: public, max-age=0, must-revalidate;'],
          '/*.js|*.css': ['Cache-Control: "public, max-age=604800, immutable;'],
          '/*.jpg|*.jpeg|*.pjpeg|*.webp|*.svg|*.png|*.ttf|*.woff|*.woff2': [
            'Cache-Control: "public, max-age=604800, must-revalidate;',
          ],
          '/*.yml|*.json|*.xml|*.ico|*.webmanifest': [
            'Cache-Control: "public, max-age=604800, must-revalidate;',
          ],
          '/static/': ['Cache-Control: "public, max-age=604800, immutable;'],
        },
        allPageHeaders: [
          'Expect-CT: max-age=604800, report-uri https://asjas.report-uri.com/r/d/ct/enforce; report-to default',
          'Referrer-Policy: same-origin',
          'Strict-Transport-Security: max-age=31536000; includeSubdomains; preload',
          'X-Content-Type-Options: nosniff',
          'X-Frame-Options: DENY',
          'X-XSS-Protection: 1; mode=block',
          "Feature-Policy: geolocation 'none'; camera 'none'; payment 'none'; usb 'none'; midi 'none'",
          "Report-To: {'group':'default','max_age':31536000,'endpoints':[{'url':'https://asjas.report-uri.com/a/d/g'}],'include_subdomains':true}",
        ],
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
        generateMatchPathRewrites: true,
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
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `st3lzyf2`,
        dataset: `development`,
        token: process.env.MY_SANITY_TOKEN,
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
