import React from 'react';
import Navbar from '../components/navbar';
import ContactForm from '../components/form';
import Footer from '../components/footer';

const ContactPage = ({ data }) => (
  <div>
    <Navbar />
    <ContactForm contactImage={data.contactImage} />
    <Footer />
  </div>
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
