import React from 'react';
import { Container, StyledImg } from '../ui/pages/contact';
import ContactForm from '../components/form';

const ContactPage = ({ data }) => (
  <Container>
    <StyledImg
      title="Macbook in a leather bag"
      alt="Macbook sticking out of a brown leather bag"
      sizes={data.contactImage.sizes}
    />
    <ContactForm />
  </Container>
);

export default ContactPage;

export const pageQuery = graphql`
  query ContactFormQuery {
    contactImage: imageSharp(id: { regex: "/contactform/" }) {
      sizes(maxWidth: 1200, quality: 92) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
