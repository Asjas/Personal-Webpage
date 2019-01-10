import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import {
  Container,
  Post,
  StyledLink,
  Heading,
  Date,
  ReadingTime,
  Paragraph,
} from '../styles/blog';

export const GET_ALL_POSTS = graphql`
  query GET_ALL_POSTS {
    mdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
            <Heading>{node.frontmatter.title}</Heading>
          </StyledLink>
          <Date>{node.frontmatter.date}</Date>
          <ReadingTime>Time to read: {node.timeToRead} minutes</ReadingTime>
          <Paragraph>{node.excerpt}</Paragraph>
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
