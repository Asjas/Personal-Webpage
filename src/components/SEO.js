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
        defaultUrl: siteUrl
        defaultImage: image
        googleSiteVerification
        twitterUsername
      }
    }
  }
`;

function SEO({ title, description, siteUrl, image }) {
  const data = useStaticQuery(GET_SEO_METADATA);

  const seo = {
    title: title || data.site.siteMetadata.defaultTitle,
    description: description || data.site.siteMetadata.defaultDescription,
    siteUrl: siteUrl || data.site.siteMetadata.defaultUrl,
    image: image || data.site.siteMetadata.defaultUrl,
    googleSiteVerification: data && data.site.siteMetadata.googleSiteVerification,
    twitterUsername: data && data.site.siteMetadata.twitterUsername,
  };

  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: seo.siteUrl,
      name: seo.title,
    },
  ];

  if (siteUrl.includes('/blog/')) {
    schemaOrgJSONLD.push({
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
    });
  }

  return (
    <Helmet>
      {/* General Tags */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="google-site-verification" content={seo.googleSiteVerification} />

      {/* Schema.org tags */}
      <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>

      {/* OpenGraph tags */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.siteUrl} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content="article" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  siteUrl: PropTypes.string,
  image: PropTypes.string,
};

SEO.defaultProps = {
  title: 'A-J Roos | Personal Website',
  description: null,
  siteUrl: 'https://asjas.co.za/',
  image: 'testurl',
};

export default SEO;
