import React, { memo } from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import styled from '../utils/themed-styled-components';

export const Section = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Image = styled(Img)`
  width: 100%;
  max-width: 480px;
  height: auto;
`;

export const Heading = styled.h1`
  margin: 40px 0 20px 0;
`;

export const Paragraph = styled.p`
  font-size: ${props => props.theme.fontSize.large};
  width: 90%;
`;

export const AnchorLink = styled(Link)`
  margin-top: 15px;
  padding: 3px;
  font-size: ${props => props.theme.fontSize.large};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.color.primary};
    text-decoration: underline;
  }
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

export const FOUR_OH_FOUR_IMAGE = graphql`
  query FOUR_OH_FOUR_IMAGE {
    file(relativePath: { regex: "/ghost.png/" }) {
      childImageSharp {
        fluid(maxWidth: 700, quality: 95) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const seo = {
  title: 'A-J Roos | 404 - Page not found',
  description:
    "Oops! Something went wrong. Either the page you tried to access doesn't exist or something mysterious happened.",
};

const FourOhFour: React.FunctionComponent<Props> = memo(
  ({ data }): React.ReactElement => (
    <>
      <SEO {...seo} />
      <Layout>
        <Section>
          <Image fluid={data.file.childImageSharp.fluid} alt="" />
          <Heading data-testid="404-heading">This page is a Ghost</Heading>
          <Paragraph>
            Once alive and now dead, this ghost appears to have some unfinished business. Could it
            be with you? Or the treasure hidden under the floorboards of the old mansion in the
            hills that may never reach its rightful owner, a compassionate school teacher in
            Brooklyn.
          </Paragraph>
          <AnchorLink to="/" data-testid="404-link">
            Go Home
          </AnchorLink>
        </Section>
      </Layout>
    </>
  ),
);

FourOhFour.displayName = 'FourOhFour';

export default FourOhFour;
