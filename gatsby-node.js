const path = require('path');
const chalk = require('chalk');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });
    createNodeField({ name: 'slug', node, value });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('src/templates/blogPostTemplate.js');
  const tagsTemplate = path.resolve('src/templates/tagsTemplate.js');

  return graphql(`
    {
      allMdx(sort: { fields: [frontmatter___date], order: ASC }) {
        edges {
          node {
            id
            fileAbsolutePath
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

      const posts = result.data.allMdx.edges.map(({ node }) => node);
      const tagsSet = new Set();

      posts.forEach(post => {
        if (!post.frontmatter.title) {
          throw Error(`${post.fileAbsolutePath} is missing a title property in the frontmatter.`);
        }

        if (!post.frontmatter.date) {
          throw Error(`${post.fileAbsolutePath} is missing a date property in the frontmatter.`);
        }

        if (!post.frontmatter.tags) {
          throw Error(`${post.fileAbsolutePath} is missing a tags property in the frontmatter.`);
        } else {
          post.frontmatter.tags.forEach(tag => {
            tagsSet.add(tag);
          });
        }

        if (!post.frontmatter.published) {
          throw Error(
            `${post.fileAbsolutePath} is missing a published property in the frontmatter.`,
          );
        }
      });

      const publishedBlogPosts = posts.filter(post => post.frontmatter.published === true);
      const tags = Array.from(tagsSet);

      publishedBlogPosts.forEach((post, index) => {
        const previous = index === posts.length - 1 ? null : posts[index + 1].node;
        const next = index === 0 ? null : posts[index - 1].node;

        createPage({
          path: `/blog${post.fields.slug}`,
          component: blogPostTemplate,
          context: { slug: post.fields.slug, previous, next },
        });
      });

      tags.forEach(tag => {
        createPage({
          path: `/tags/${tag}/`,
          component: tagsTemplate,
          context: {
            tag,
          },
        });
      });
    })
    .catch(error => {
      console.error(chalk.black.bgRed(error));
      process.exit(1);
    });
};
