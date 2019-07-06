import React, { memo } from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

interface Props {
  data: {
    file: {
      childImageSharp: {
        fluid: {
          aspectRatio: number;
          base64: string;
          sizes: string;
          src: string;
          srcSet: string;
          srcSetWebp: string;
          srcWebp: string;
        };
      };
    };
  };
}

export const HOME_PAGE_IMAGE = graphql`
  query HOME_PAGE_IMAGE {
    file(relativePath: { regex: "/messy-desk.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 700, quality: 95) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const IndexPage: React.FunctionComponent<Props> = memo(
  ({ data }): React.ReactElement => (
    <>
      <SEO />
      <Layout>
        <section className="homepage">
          <p className="homepage__quote">
            "There are only two hard things in Computer Science: cache invalidation and naming
            things" - Phil Karlton
          </p>
          <Img className="homepage__image" fluid={data.file.childImageSharp.fluid} alt="" />
        </section>
      </Layout>
    </>
  ),
);

IndexPage.displayName = 'IndexPage';

export default IndexPage;
