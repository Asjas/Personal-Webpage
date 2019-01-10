const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'markdown' });
    createNodeField({ node, name: 'slug', value: slug });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `/blog${node.fields.slug}`,
        component: path.resolve('./src/templates/BlogPost.js'),
        context: { slug: node.fields.slug },
      });
    });
  });
};
