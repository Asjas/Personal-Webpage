import React, { memo } from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import styled from '../utils/themed-styled-components';

export const Section = styled.section`
  align-items: center;
  flex-direction: column;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Paragraph = styled.p`
  max-width: 600px;
  text-align: center;
  font-family: ${props => props.theme.font.handwriting};
  font-size: ${props => props.theme.fontSize.heading2};
  color: ${props => props.theme.color.primary};

  @media screen and (max-width: ${props => props.theme.mobileQuery.tablet}) {
    width: 90%;
  }
`;

export const Image = styled(Img)`
  width: 100%;
  max-width: 540px;
  height: auto;
`;

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
        <Section>
          <Paragraph>
            "There are only two hard things in Computer Science: cache invalidation and naming
            things" - Phil Karlton
          </Paragraph>
          <Image fluid={data.file.childImageSharp.fluid} alt="" />
        </Section>
      </Layout>
    </>
  ),
);

IndexPage.displayName = 'IndexPage';

export default IndexPage;
