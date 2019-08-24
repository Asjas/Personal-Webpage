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
        googleSiteVerification
        twitterUsername
        author {
          name
        }
      }
    }
  }
`;

interface Props {
  title?: string;
  description?: string;
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
  siteUrl,
  image,
  blogUrl,
  isBlogPost = false,
  datePublished,
  dateModified,
}): React.ReactElement => {
  const data = useStaticQuery(GET_SEO_METADATA);

  const seo = {
    title: title || data.site.siteMetadata.defaultTitle,
    description: description || data.site.siteMetadata.defaultDescription,
    siteUrl: blogUrl || siteUrl || data.site.siteMetadata.defaultUrl,
    image: image || data.site.siteMetadata.defaultImage,
    googleSiteVerification: data && data.site.siteMetadata.googleSiteVerification,
    twitterUsername: data && data.site.siteMetadata.twitterUsername,
    author: data && data.site.siteMetadata.author,
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
          name: seo.author.name,
        },
        mainEntityOfPage: {
          '@type': 'WebSite',
          '@id': seo.siteUrl,
        },
        datePublished,
        dateModified,
      }
    : baseSchema;

  return (
    <Helmet>
      {/* General Tags */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="preconnect" href="https://storage.googleapis.com" crossOrigin="true" />
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="true" />

      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <link rel="canonical" href={seo.siteUrl} />
      <meta name="google-site-verification" content={seo.googleSiteVerification} />

      {/* Schema.org tags */}
      <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>

      {/* OpenGraph tags */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.siteUrl} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      {isBlogPost ? (
        <meta property="og:type" content="article" />
      ) : (
        <meta property="og:type" content="website" />
      )}

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      {/* Fonts */}
      <link
        href="https://fonts.googleapis.com/css?family=Indie+Flower|Montserrat|Playfair+Display&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
};

export default SEO;
