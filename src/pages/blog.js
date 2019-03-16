import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Tags from '../components/Tags';
import Newsletter from '../components/Newsletter';
import ErrorBoundary from '../components/ErrorBoundary';

export const GET_ALL_POSTS = graphql`
  query GET_ALL_POSTS {
    allMdx {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          timeToRead
          frontmatter {
            title
            date
            tags
            published
            updated
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
  title: 'A-J Roos | Blog Posts',
  description:
    'This is where I blog about different Web Development topics. I write blog posts about HTML5, CSS3, JavaScript, React.js and Node.js. You can signup for my newsletter as well.',
  siteUrl: 'https://asjas.co.za/blog',
};

const BlogPage = ({ data }) => (
  <Layout>
    <SEO {...seo} />
    <section className="blog">
      <h1 className="blog-heading">My collection of blog posts.</h1>
      <Tags />
      <ErrorBoundary>
        {data.allMdx.edges.map(
          ({ node }) =>
            node.frontmatter.published && (
              <article className="blogpost-article" key={node.id}>
                <Link className="blogpost-link" to={`/blog${node.fields.slug}`}>
                  <h2 className="blogpost-heading">{node.frontmatter.title}</h2>
                </Link>
                <span className="blogpost-date">Published: {node.frontmatter.date}</span>
                <span className="blogpost-date">Last Updated: {node.frontmatter.updated}</span>
                <span className="blogpost-readingtime">Time to read: {node.timeToRead} min</span>
                <div className="blogpost-tags">
                  {node.frontmatter.tags.map(tag => (
                    <Link key={tag} className="tag" to={`/tags/${tag}`}>
                      {tag}
                    </Link>
                  ))}
                </div>
                <p className="blogpost-excerpt">{node.excerpt}</p>
              </article>
            ),
        )}
      </ErrorBoundary>
      <ErrorBoundary>
        <Newsletter />
      </ErrorBoundary>
    </section>
  </Layout>
);

BlogPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string.isRequired,
            excerpt: PropTypes.string.isRequired,
            timeToRead: PropTypes.number.isRequired,
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              tags: PropTypes.array.isRequired,
              updated: PropTypes.string.isRequired,
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
