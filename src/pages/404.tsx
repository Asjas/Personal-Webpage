import * as React from 'react';
import Img from 'gatsby-image';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { navigate } from '@reach/router';

import SEO from '../components/SEO';
import Layout from '../components/Layout';

import styled from '../utils/themed-styled-components';

export const Section = styled.section`
  display: grid;
  grid-template-rows: repeat(4, max-content);
  justify-items: center;
`;

export const Image = styled(Img)`
  width: 100%;
  max-width: 380px;
  height: auto;
`;

export const Heading = styled.h1`
  margin-top: 50px;
  text-align: center;
`;

export const Paragraph = styled.p`
  font-size: ${props => props.theme.fontSize.xLarge};
  margin-top: 20px;
  text-align: center;
`;

export const AnchorLink = styled(Link)`
  color: ${props => props.theme.color.primary};
  font-size: ${props => props.theme.fontSize.xLarge};
  margin-top: 35px;
  text-decoration-color: ${props => props.theme.color.primary};
  text-decoration: underline;

  &:hover,
  &:focus {
    outline: 3px solid ${props => props.theme.color.outline};
  }

  &:visited {
    color: ${props => props.theme.color.linkVisited};
    text-decoration-color: ${props => props.theme.color.linkVisited};
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
        fluid(maxWidth: 400, quality: 95) {
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

  function handleKeyDown(event: React.KeyboardEvent) {
    const { keyCode } = event;

    if (keyCode === 32 || keyCode === 13) {
      navigate('/');
    }
  }

  return (
    <>
      <SEO {...seo} />
      <Layout>
        <Section>
          <Image fluid={fourohfour.childImageSharp.fluid} alt="ghost" />
          <Heading data-testid="404-heading">This page is a Ghost</Heading>
          <Paragraph>
            Once alive and now dead, this ghost appears to have some unfinished business. Could it be with you? Or the
            treasure hidden under the floorboards of the old mansion in the hills that may never reach its rightful
            owner, a compassionate school teacher in Brooklyn.
          </Paragraph>
          <AnchorLink to="/" data-testid="404-link" onKeyDown={handleKeyDown}>
            Go Home
          </AnchorLink>
        </Section>
      </Layout>
    </>
  );
};

export default FourOhFour;
