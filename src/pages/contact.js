import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import ContactForm from '../components/form';
import { media } from '../utils/media';

const Container = styled.div`
  display: flex;
  justify-content: center;
  letter-spacing: 0.04rem;
  margin: 0 auto;
  max-width: 1200px;
  overflow: hidden;

  ${media.small`
      max-width: 768px;
  `};
`;

const StyledImg = styled(Img)`
  height: auto;
  margin-top: 10px;
  width: 1200px;
  z-index: -4;
`;

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
