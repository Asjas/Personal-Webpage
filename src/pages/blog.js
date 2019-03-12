import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export const GET_ALL_POSTS = graphql`
  query GET_ALL_POSTS {
    allMarkdownRemark {
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
    'This is where I blog about different Web Development topics. I blog about HTML5, CSS3, JavaScript, React.js and Node.js. You can signup for my newsletter as well.',
  siteUrl: 'https://asjas.co.za/blog',
};

const BlogPage = ({ data }) => (
  <Layout>
    <SEO {...seo} />
    <section>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <a to={`/blog${node.fields.slug}`}>
            <h1>{node.frontmatter.title}</h1>
          </a>
          <span>{node.frontmatter.date}</span>
          <span>Time to read: {node.timeToRead} min</span>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </section>
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
