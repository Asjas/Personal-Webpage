import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Container, Paragraph } from '../styles/blog';

export const GET_ALL_BLOGPOSTS = graphql`
  query GET_ALL_BLOGPOSTS {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            date
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`;

const seo = {
  title: 'A-J Roos | Blog',
  description:
    'I am a Front-End Web Developer that blogs about JavaScript, React, Gatsby.js and Web Development in general. This is where I keep my collection of blogs.',
};

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title={seo.title} description={seo.description} />
    <Container>
      <Paragraph>To be added</Paragraph>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>{node.frontmatter.title}</h3>
          <span>{node.frontmatter.date}</span>
          <span>Time to read: {node.timeToRead}</span>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </Container>
  </Layout>
);

BlogPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string.isRequired,
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              slug: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
            }).isRequired,
            excerpt: PropTypes.string.isRequired,
            timeToRead: PropTypes.number.isRequired,
          }).isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export default BlogPage;
