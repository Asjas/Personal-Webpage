import React, { memo } from 'react';
import { Link, graphql } from 'gatsby';

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
        <Styled.Section>
          <Styled.Image fluid={data.file.childImageSharp.fluid} alt="" />
          <Styled.Heading data-testid="404-heading">This page is a Ghost</Styled.Heading>
          <Styled.Paragraph>
            Once alive and now dead, this ghost appears to have some unfinished business. Could it
            be with you? Or the treasure hidden under the floorboards of the old mansion in the
            hills that may never reach its rightful owner, a compassionate school teacher in
            Brooklyn.
          </Styled.Paragraph>
          <Styled.AnchorLink to="/" data-testid="404-link">
            Go Home
          </Styled.AnchorLink>
        </Styled.Section>
      </Layout>
    </>
  ),
);

FourOhFour.displayName = 'FourOhFour';

export default FourOhFour;
