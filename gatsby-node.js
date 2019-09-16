/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const path = require('path');
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

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  createRedirect({
    fromPath: '/blog/being-selected-for-andela-google-scholarship-phase-1',
    toPath: '/blog/google-africa-scholarship-phase-1',
    isPermanent: true,
  });

  const blogPostTemplate = path.resolve('src/templates/BlogPostTemplate/index.tsx');
  // const tagsTemplate = path.resolve('src/templates/TagsTemplate/index.tsx');
  const projectTemplate = path.resolve('src/templates/ProjectTemplate/index.tsx');

  const result = await graphql(`
    {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
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
  `);

  if (result.errors) {
    throw result.errors;
  }

  // const posts = result.data.allMdx.edges.map(({ node }) => node);
  // const tagsSet = new Set();
  const posts = result.data.allMdx.edges.map(({ node }) => node);
  // const projects = result.data.allSanityProject.edges.map(({ node }) => node);

  // posts.forEach(post => {
  //   if (!post.frontmatter.tags) {
  //     throw Error(`${post.fileAbsolutePath} is missing tags in the frontmatter.`);
  //   } else {
  //     post.frontmatter.tags.forEach(tag => {
  //       tagsSet.add(tag);
  //     });
  //   }
  // });

  // Array.from(tagsSet).forEach(tag => {
  //   createPage({
  //     path: `/tags/${tag}/`,
  //     component: tagsTemplate,
  //     context: {
  //       tag,
  //     },
  //   });
  // });

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].fields.slug;
    const next = index === 0 ? null : posts[index - 1].fields.slug;

    createPage({
      path: `/blog${post.fields.slug}`,
      component: blogPostTemplate,
      context: { slug: post.fields.slug, previous, next },
    });
  });

  // projects.forEach(project => {
  //   createPage({
  //     path: `/project/${project.slug.current}`,
  //     component: projectTemplate,
  //     context: { slug: project.slug.current },
  //   });
  // });
};
