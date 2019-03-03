import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const seo = {
  title: 'A-J Roos | 404 - Page not found',
  description:
    "Oops! Something went wrong. Either the page you tried to access doesn't exist or something mysterious happened.",
};

const FourOhFour = () => (
  <Layout>
    <SEO {...seo} />
    <section>
      <h1 data-testid="404-heading">PAGE NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <a to="/" data-testid="404-link">
        Go Home
      </a>
    </section>
  </Layout>
);

export default FourOhFour;
