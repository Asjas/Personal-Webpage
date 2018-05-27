import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/navbar';
import HomePage from '../components/homepage';
import Footer from '../components/footer';

const IndexPage = ({ data }) => (
  <div>
    <Navbar />
    <HomePage homepageImage={data.homepageImage} />
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
