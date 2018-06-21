import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import { Container, StyledImg } from '../ui/pages/contact';
import ContactForm from '../components/form';

const ContactPage = ({ data }) => (
  <Layout>
    <Container>
      <StyledImg
        title="Macbook in a leather bag"
        alt="Macbook sticking out of a brown leather bag"
        sizes={data.contactImage.sizes}
      />
      <ContactForm />
    </Container>
  </Layout>
);

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ContactPage;
/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ContactFormQuery {
    contactImage: imageSharp(id: { regex: "/contactform/" }) {
      sizes(maxWidth: 1200, quality: 92) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
