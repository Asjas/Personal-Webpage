/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const chalk = require('chalk');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  fmImagesToRelative(node);

  if (node.internal.type === 'Mdx') {
    const slug = createFilePath({ node, getNode, basePath: `blog` });
    createNodeField({ name: 'slug', node, value: slug });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('src/templates/BlogPostTemplate/index.tsx');
  const tagsTemplate = path.resolve('src/templates/TagsTemplate/index.tsx');

  return graphql(`
    {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            fileAbsolutePath
            fields {
              slug
            }
            frontmatter {
              tags
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
        if (!post.frontmatter.tags) {
          throw Error(`${post.fileAbsolutePath} is missing tags in the frontmatter.`);
        } else {
          post.frontmatter.tags.forEach(tag => {
            tagsSet.add(tag);
          });
        }
      });

      posts.forEach((post, index) => {
        const previous = index === posts.length - 1 ? null : posts[index + 1].fields.slug;
        const next = index === 0 ? null : posts[index - 1].fields.slug;

        createPage({
          path: `/blog${post.fields.slug}`,
          component: blogPostTemplate,
          context: { slug: post.fields.slug, previous, next },
        });
      });

      Array.from(tagsSet).forEach(tag => {
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
