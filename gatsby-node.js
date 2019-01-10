const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value: `/blog${value}`,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const results = await graphql(`
    {
      posts: allFile(
        filter: { relativePath: { glob: "*.{md,mdx}" } }
        sort: { fields: relativePath, order: DESC }
      ) {
        edges {
          node {
            childMarkdownRemark {
              id
              frontmatter {
                title
                date
              }
            }
          }
        }
      }
    }
  `);

  if (results.errors) {
    throw results.errors;
  }

  const posts = results.data.posts.edges.map(({ node }) => node);

  posts.forEach(post => {
    if (
      !post.childMarkdownRemark.frontmatter.title ||
      !post.childMarkdownRemark.frontmatter.date
    ) {
      throw Error('All posts require a `title` and `date` field in the frontmatter.');
    }
  });

  posts.forEach(post => {
    createPage({
      path: `/blog${post.childMarkdownRemark.fields.slug}`,
      component: path.resolve('./src/templates/post.js'),
      context: { slug: post.childMarkdownRemark.fields.slug },
    });
  });
};
