const path = require('path');
const chalk = require('chalk');
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
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              date
              tags
              published
              updated
            }
          }
        }
      }
    }
  `)
    .then(result => {
      if (result.errors) {
        throw result.errors;
      }

      const posts = result.data.allMarkdownRemark.edges.map(({ node }) => node);

      posts.forEach(post => {
        if (!post.frontmatter.title) {
          throw Error(`Post ${post.fields.slug} is missing a title in the frontmatter.`);
        }

        if (!post.frontmatter.date) {
          throw Error(`Post ${post.fields.slug} is missing a date in the frontmatter.`);
        }

        if (!post.frontmatter.tags) {
          throw Error(`Post ${post.fields.slug} is missing tags in the frontmatter.`);
        }
      });

      const publishedBlogPosts = posts.filter(
        post => post.frontmatter.published === true,
      );

      publishedBlogPosts.forEach(post => {
        createPage({
          path: `/blog${post.fields.slug}`,
          component: path.resolve('./src/templates/post.js'),
          context: { slug: post.fields.slug },
        });
      });
    })
    .catch(error => {
      console.error(chalk.black.bgRed(error));
      process.exit(1);
    });
};
