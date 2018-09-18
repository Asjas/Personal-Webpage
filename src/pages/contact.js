import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { Container, StyledImg } from '../ui/pages/contact';
import ContactForm from '../components/form';

const ContactPage = ({ data }) => (
  <Layout>
    <Container>
      <StyledImg
        title="Macbook in a leather bag"
        alt="Macbook sticking out of a brown leather bag"
        fixed={data.contactpageImage.childImageSharp.fixed}
      />
      <ContactForm />
    </Container>
  </Layout>
);

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ContactPage;

export const CONTACTFORM_QUERY = graphql`
  query CONTACTFORM_QUERY {
    contactpageImage: file(relativePath: { regex: "/contactform/" }) {
      childImageSharp {
        fixed(width: 1200, quality: 85) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`;
