import React from 'react';
import PropTypes from 'prop-types';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Container, Post, StyledLink } from '../styles/blog';

export const GET_ALL_POSTS = graphql`
  query GET_ALL_POSTS {
    allMdx {
      edges {
        node {
          id
          excerpt(pruneLength: 350)
          timeToRead
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

const seo = {
  title: 'A-J Roos | Blog',
  description:
    'I am a Front-End Web Developer that blogs about JavaScript, React, Gatsby.js and Web Development in general. This is where I keep my collection of blogs.',
  siteUrl: 'https://asjas.co.za/blog',
};

const BlogPage = ({ data }) => (
  <Layout>
    <SEO {...seo} />
    <Container>
      {data.allMdx.edges.map(({ node }) => (
        <Post key={node.id}>
          <StyledLink to={`/blog${node.fields.slug}`}>
            <h2>{node.frontmatter.title}</h2>
          </StyledLink>
          <span>{node.frontmatter.date}</span>
          <span>Time to read: {node.timeToRead} min</span>
          <p>{node.excerpt}</p>
        </Post>
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
            excerpt: PropTypes.string.isRequired,
            timeToRead: PropTypes.number.isRequired,
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
            }).isRequired,
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export default BlogPage;
