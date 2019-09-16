// import React from 'react';
// import { graphql } from 'gatsby';
// import Img from 'gatsby-image';

// import SEO from '../../components/SEO';
// import Layout from '../../components/Layout';

// // import * as Styled from './style';

// export const GET_PROJECT_PAGE = graphql`
//   query GET_PROJECT_PAGE($slug: String) {
//     sanityProject(slug: { current: { eq: $slug } }) {
//       title
//       description
//       meta
//       image {
//         asset {
//           fluid(maxWidth: 1000) {
//             ...GatsbySanityImageFluid
//           }
//         }
//       }
//     }
//   }
// `;

// interface IProject {
//   pageContext: {
//     slug: string;
//   };
//   data: {
//     sanityProject: {
//       title: string;
//       description: string;
//       meta: string;
//       slug: {
//         current: string;
//       };
//       image: {
//         asset: {
//           fluid: {
//             aspectRatio: number;
//             base64: string;
//             sizes: string;
//             src: string;
//             srcSet: string;
//             srcWebp: string;
//             srcSetWebp: string;
//           };
//         };
//       };
//     };
//   };
// }

// const ProjectTemplate: React.FunctionComponent<IProject> = ({
//   pageContext,
//   data: { sanityProject },
// }) => {
//   const seo = {
//     title: `${sanityProject.title} | A-J Roos`,
//     description: `${sanityProject.meta}`,
//     siteUrl: `https://asjas.co.za/project/${pageContext.slug}`,
//   };

//   return (
//     <>
//       <SEO {...seo} />
//       <Layout>
//         <section>
//           <Img fluid={sanityProject.image.asset.fluid} alt={sanityProject.title} />
//           <h2 data-testid={sanityProject.title}>{sanityProject.title}</h2>
//           <p>{sanityProject.description}</p>
//         </section>
//       </Layout>
//     </>
//   );
// };

// export default ProjectTemplate;
