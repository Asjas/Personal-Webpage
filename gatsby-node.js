/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const path = require('path');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  fmImagesToRelative(node);

  if (node.internal.type === 'Mdx') {
    createNodeField({ node });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  createRedirect({
    fromPath: '/portfolio',
    toPath: '/projects',
    isPermanent: true,
  });

  createRedirect({
    fromPath: '/blog/being-selected-for-andela-google-scholarship-phase-1/',
    toPath: '/blog/google-africa-scholarship-phase-1',
    isPermanent: true,
  });

  createRedirect({
    fromPath: '/blog/being-selected-for-google-africa-certification-scholarship-phase-2/',
    toPath: '/blog/google-africa-scholarship-phase-2',
    isPermanent: true,
  });

  createRedirect({
    fromPath: '/blog/use-date-fns-to-format-your-gatsby-js-blog-post-dates/',
    toPath: '/blog/formatting-gatsby-blog-dates-using-date-fns',
    isPermanent: true,
  });

  const blogPostTemplate = path.resolve('src/templates/BlogPostTemplate/index.tsx');
  const tagsTemplate = path.resolve('src/templates/TagsTemplate/index.tsx');
  const projectTemplate = path.resolve('src/templates/ProjectTemplate/index.tsx');

  const result = await graphql(`
    {
      posts: allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { type: { eq: "blogpost" } } }
      ) {
        edges {
          node {
            frontmatter {
              slug
              tags
            }
          }
        }
      }
      projects: allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { type: { eq: "project" } } }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const postTags = new Set();
  const posts = result.data.posts.edges.map(({ node }) => node);
  const projects = result.data.projects.edges.map(({ node }) => node);

  posts.forEach(post => {
    if (!post.frontmatter.tags) {
      throw Error(`${post.fileAbsolutePath} is missing tags in the frontmatter.`);
    } else {
      post.frontmatter.tags.forEach(tag => {
        postTags.add(tag);
      });
    }
  });

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].frontmatter.slug;
    const next = index === 0 ? null : posts[index - 1].frontmatter.slug;

    createPage({
      path: `/blog/${post.frontmatter.slug}`,
      component: blogPostTemplate,
      context: { slug: post.frontmatter.slug, previous, next },
    });
  });

  projects.forEach(project => {
    createPage({
      path: `/project/${project.frontmatter.slug}`,
      component: projectTemplate,
      context: { slug: project.frontmatter.slug },
    });
  });

  Array.from(postTags).forEach(tag => {
    createPage({
      path: `/tags/${tag}/`,
      component: tagsTemplate,
      context: {
        slug: `/tags/${tag}/`,
        postTags: Array.from(postTags),
        tag,
      },
    });
  });
};

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  // If production JavaScript and CSS build
  if (stage === 'build-javascript') {
    // Turn off source maps
    actions.setWebpackConfig({
      devtool: false,
    });
  }
};
