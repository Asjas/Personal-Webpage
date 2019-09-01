import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import styled from '../utils/themed-styled-components';

export const Section = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Image = styled(Img)`
  width: 100%;
  max-width: 420px;
  height: auto;
`;

export const Heading = styled.h1`
  margin-top: 50px;
  text-align: center;
`;

export const Paragraph = styled.p`
  font-size: ${props => props.theme.fontSize.large};
  font-size: ${props => props.theme.fontSize.xLarge};
  margin-top: 40px;
  text-align: center;
  width: 90%;
`;

export const AnchorLink = styled(Link)`
  font-size: ${props => props.theme.fontSize.xLarge};
  margin-top: 55px;
  color: ${props => props.theme.color.primary};
  text-decoration: underline;

  &:hover {
    color: ${props => props.theme.color.outline};
  }
`;

interface I404Image {
  fourohfour: {
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
}

export const FOUR_OH_FOUR_IMAGE = graphql`
  query FOUR_OH_FOUR_IMAGE {
    fourohfour: file(relativePath: { regex: "/ghost/" }) {
      childImageSharp {
        fluid(maxWidth: 700, quality: 95) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const seo = {
  title: 'Page not found | A-J Roos',
  description:
    "Oops! Something went wrong. Either the page you tried to access doesn't exist or something mysterious happened.",
};

const FourOhFour = () => {
  const { fourohfour } = useStaticQuery(FOUR_OH_FOUR_IMAGE) as I404Image;

  return (
    <>
      <SEO {...seo} />
      <Layout>
        <Section>
          <Image fluid={fourohfour.childImageSharp.fluid} alt="ghost" />
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
  );
};

export default FourOhFour;
