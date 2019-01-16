const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    createNodeField({ name: 'slug', node, value });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    const posts = result.data.allMarkdownRemark.edges.map(({ node }) => node);

    posts.forEach(post => {
      if (!post.frontmatter.title || !post.frontmatter.date) {
        throw Error('All posts require a `title` and `date` field in the frontmatter.');
      }
    });

    posts.forEach(post => {
      createPage({
        path: `/blog${post.fields.slug}`,
        component: path.resolve('./src/templates/post.js'),
        context: { slug: post.fields.slug },
      });
    });
  });
};
