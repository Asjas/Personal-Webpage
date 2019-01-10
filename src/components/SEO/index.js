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
        siteUrl
        googleSiteVerification
        twitterUsername
      }
    }
  }
`;

const SEO = ({ title, description }) => (
  <StaticQuery
    query={GET_SEO_METADATA}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          defaultDescription,
          siteUrl,
          googleSiteVerification,
          twitterUsername,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        siteUrl,
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

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

SEO.defaultProps = {
  title: 'A-J Roos | Personal Website',
  description: null,
};
