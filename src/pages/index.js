import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import MessyDeskImage from '../assets/messy-desk.jpg';

const IndexPage = () => (
  <Layout>
    <SEO />
    <section className="homepage">
      <p className="homepage-quote">
        "There are only two hard things in Computer Science: cache invalidation and naming
        things" - Phil Karlton
      </p>
      <img
        className="homepage-image"
        src={MessyDeskImage}
        alt="A messy desk with a computer."
      />
    </section>
  </Layout>
);

export default IndexPage;
