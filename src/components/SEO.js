import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
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

function SEO({
  title,
  description,
  siteUrl,
  image,
  blogUrl,
  isBlogPost,
  datePublished,
  dateModified,
}) {
  const data = useStaticQuery(GET_SEO_METADATA);

  const seo = {
    title: title || data.site.siteMetadata.defaultTitle,
    description: description || data.site.siteMetadata.defaultDescription,
    siteUrl: blogUrl || siteUrl || data.site.siteMetadata.siteUrl,
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
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <link rel="canonical" href={seo.siteUrl} />
      <meta name="google-site-verification" content={seo.googleSiteVerification} />
      <link rel="shortcut icon" href="https://storage.googleapis.com/asjas.co.za/favicon.ico" />

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

      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />

      {/* Netlify CMS Redirect on Login */}
      <script>
        {window &&
          window.netlifyIdentity &&
          window.netlifyIdentity.on('init', user => {
            if (!user) {
              window.netlifyIdentity.on('login', () => {
                document.location.href = '/admin/';
              });
            }
          })}
      </script>
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  siteUrl: PropTypes.string,
  blogUrl: PropTypes.string,
  image: PropTypes.string,
  isBlogPost: PropTypes.bool,
  datePublished: PropTypes.string,
  dateModified: PropTypes.string,
};

SEO.defaultProps = {
  isBlogPost: false,
  datePublished: '',
  dateModified: '',
};

export default SEO;
