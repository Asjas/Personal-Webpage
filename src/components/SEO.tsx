import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const GET_SEO_METADATA = graphql`
  query GET_SEO_METADATA {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultImage: image
        defaultUrl: siteUrl
        twitterUsername
      }
    }
  }
`;

interface Props {
  title?: string;
  description?: string;
  author?: string;
  authorImage?: string;
  siteUrl?: string;
  blogUrl?: string;
  image?: string;
  isBlogPost?: boolean;
  datePublished?: string;
  dateModified?: string;
}

const SEO: React.FunctionComponent<Props> = ({
  title,
  description,
  author,
  authorImage,
  siteUrl,
  image,
  blogUrl,
  isBlogPost = false,
  datePublished,
  dateModified,
}) => {
  const data = useStaticQuery(GET_SEO_METADATA);

  const seo = {
    title: title || data.site.siteMetadata.defaultTitle,
    description: description || data.site.siteMetadata.defaultDescription,
    author: author || '',
    authorImage: authorImage || '',
    siteUrl: blogUrl || siteUrl || data.site.siteMetadata.defaultUrl,
    image: image || data.site.siteMetadata.defaultImage,
    twitterUsername: data && data.site.siteMetadata.twitterUsername,
  };

  const baseSchema = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: seo.siteUrl,
      name: seo.title,
    },
  ];

  const schemaOrgJSONLD = isBlogPost
    ? {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        url: seo.siteUrl,
        name: seo.title,
        headline: seo.title,
        image: {
          '@type': 'ImageObject',
          url: seo.image,
        },
        description: seo.description,
        author: {
          '@type': 'Person',
          name: seo.author,
          email: 'asjas@outlook.com',
          jobTitle: 'JavaScript Web Developer',
          image: {
            '@type': 'ImageObject',
            url: seo.authorImage,
          },
        },
        mainEntityOfPage: {
          '@type': 'WebSite',
          '@id': seo.siteUrl,
        },
        publisher: {
          '@type': 'Organization',
          name: seo.author,
          email: 'asjas@outlook.com',
          logo: {
            '@type': 'ImageObject',
            url: seo.authorImage,
          },
        },
        datePublished,
        dateModified,
      }
    : baseSchema;

  return (
    <Helmet>
      {/* General HTML Tags */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <link rel="canonical" href={seo.siteUrl} />

      {/* DNS Prefetching */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com"></link>
      <link rel="dns-prefetch" href="//fonts.gstatic.com"></link>
      <link rel="dns-prefetch" href="//www.gstatic.com/"></link>
      <link rel="dns-prefetch" href="//cdnjs.cloudflare.com"></link>
      <link rel="dns-prefetch" href="//cdn.sanity.io"></link>
      <link rel="dns-prefetch" href="//cdn.lr-ingest.io"></link>
      <link rel="dns-prefetch" href="//cdn.polyfill.io"></link>

      {/* DNS Pre-Connection */}
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="true" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link rel="preconnect" href="https://www.gstatic.com/" crossOrigin="true" />
      <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="true" />
      <link rel="preconnect" href="https://cdn.sanity.io" crossOrigin="true" />
      <link rel="preconnect" href="https://cdn.lr-ingest.io" crossOrigin="true" />
      <link rel="preconnect" href="https://cdn.polyfill.io" crossOrigin="true" />

      {/* Schema.org tags */}
      <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>

      {/* OpenGraph tags */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.siteUrl} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      {isBlogPost ? <meta property="og:type" content="article" /> : <meta property="og:type" content="website" />}

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      {/* Normalize.css */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/0.5.0/modern-normalize.min.css"
        integrity="sha256-N6+kUxTWxpqVK+BrPWt3t4jeOWPtp37RZEbm5n9X+8U="
        crossOrigin="anonymous"
      />

      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css?family=Indie+Flower|Luckiest+Guy|Playfair+Display:400,500&text=abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`'!:;_-=,.?|0123456789&display=swap"
        rel="stylesheet"
      />
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i&display=swap" rel="stylesheet" />

      {/* Favicon Icons */}
      <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/assets/favicons/site.webmanifest" />
      <link rel="mask-icon" href="/assets/favicons/safari-pinned-tab.svg" color="#5bbad5" />
      <link rel="shortcut icon" href="/assets/favicons/favicon.ico" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="msapplication-config" content="/assets/favicons/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  );
};

export default SEO;
