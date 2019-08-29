/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  createRedirect({ fromPath: '', toPath: '', isPermanent: true });

  const blogPostTemplate = path.resolve('src/templates/BlogPostTemplate/index.tsx');
  // const tagsTemplate = path.resolve('src/templates/TagsTemplate/index.tsx');
  const projectTemplate = path.resolve('src/templates/ProjectTemplate/index.tsx');

  const result = await graphql(`
    {
      allSanityPost(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            slug {
              current
            }
            categories {
              title
            }
          }
        }
      }
      allSanityProject(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            slug {
              current
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
  const posts = result.data.allSanityPost.edges.map(({ node }) => node);
  const projects = result.data.allSanityProject.edges.map(({ node }) => node);

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
    const previous = index === posts.length - 1 ? null : posts[index + 1].slug.current;
    const next = index === 0 ? null : posts[index - 1].slug.current;

    createPage({
      path: `/blog/${post.slug.current}`,
      component: blogPostTemplate,
      context: { slug: post.slug.current, previous, next },
    });
  });

  projects.forEach(project => {
    createPage({
      path: `/project/${project.slug.current}`,
      component: projectTemplate,
      context: { slug: project.slug.current },
    });
  });
};
