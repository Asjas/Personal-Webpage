import React from 'react';
import Navbar from '../components/navbar';
import AboutInfo from '../components/aboutinfo';
import Footer from '../components/footer';

const About = ({ data }) => (
  <div>
    <Navbar />
    <AboutInfo aboutImage={data.aboutImage} />
    <Footer />
  </div>
);

export const pageQuery = graphql`
  query AboutPageQuery {
    aboutImage: imageSharp(id: { regex: "/aboutpage/" }) {
      sizes(maxWidth: 1200, quality: 92) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;

export default About;
