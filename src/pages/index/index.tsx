import React, { memo } from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

import * as Styled from './style';

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
        <Styled.Section>
          <Styled.Paragraph>
            "There are only two hard things in Computer Science: cache invalidation and naming
            things" - Phil Karlton
          </Styled.Paragraph>
          <Styled.Image fluid={data.file.childImageSharp.fluid} alt="" />
        </Styled.Section>
      </Layout>
    </>
  ),
);

IndexPage.displayName = 'IndexPage';

export default IndexPage;
