import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/navbar';
import Home from '../components/home';
import Footer from '../components/footer';

const IndexPage = ({ data }) => (
  <div>
    <Navbar />
    <Home homepageImage={data.homepageImage} />
    <Footer />
  </div>
);

export default IndexPage;

export const pageQuery = graphql`
  query HomePageQuery {
    homepageImage: imageSharp(id: { regex: "/homepage/" }) {
      sizes(maxWidth: 1200, quality: 92) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
