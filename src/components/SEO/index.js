import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

const GET_SEO_METADATA = graphql`
  query GET_SEO_METADATA {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultUrl: siteUrl
        googleSiteVerification
        twitterUsername
      }
    }
  }
`;

const SEO = ({ title, description, siteUrl }) => (
  <StaticQuery
    query={GET_SEO_METADATA}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          defaultDescription,
          defaultUrl,
          googleSiteVerification,
          twitterUsername,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        siteUrl: siteUrl || defaultUrl,
        googleSiteVerification,
        twitterUsername,
      };

      return (
        <>
          <Helmet title={seo.title}>
            {seo.description && <meta name="description" content={seo.description} />}
            {seo.googleSiteVerification && (
              <meta
                name="google-site-verification"
                content={seo.googleSiteVerification}
              />
            )}
            {seo.siteUrl && <meta property="og:url" content={seo.siteUrl} />}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}
            {seo.twitterUsername && (
              <meta name="twitter:creator" content={seo.twitterUsername} />
            )}
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && (
              <meta name="twitter:description" content={seo.description} />
            )}
          </Helmet>
        </>
      );
    }}
  />
);

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  siteUrl: PropTypes.string,
};

SEO.defaultProps = {
  title: 'A-J Roos | Personal Website',
  description: null,
  siteUrl: 'https://asjas.co.za/',
};

export default SEO;
