import React, { memo } from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import styled from '../utils/themed-styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns:
    minmax(1.2rem, 1fr)
    minmax(auto, 1000px)
    minmax(1.2rem, 1fr);
  gap: 40px 0;

  & > * {
    grid-column: 2;
  }
`;

const Section = styled.section`
  align-items: center;
  display: grid;
  grid-template-columns: 240px 1fr;

  @media (max-width: ${props => props.theme.mobileQuery.tablet}) {
    grid-template-columns: 1fr;
    gap: 20px 0;
  }
`;

const Image = styled(Img)`
  width: 100%;
  max-width: 220px;
  height: 100%;

  @media (max-width: ${props => props.theme.mobileQuery.tablet}) {
    grid-column: 2;
    justify-self: center;
    max-width: 250px;
  }
`;

const Heading = styled.h1`
  grid-column: 2;

  @media (max-width: ${props => props.theme.mobileQuery.tablet}) {
    text-align: center;
  }
`;

const Content = styled.p`
  font-size: ${props => props.theme.fontSize.xLarge};
  grid-column: 2;
`;

const Quote = styled.p`
  color: ${props => props.theme.color.primary};
  font-family: ${props => props.theme.font.handwriting};
  font-size: ${props => props.theme.fontSize.heading2};
  grid-column: 2;

  @media (max-width: ${props => props.theme.mobileQuery.tablet}) {
    text-align: center;
  }
`;

interface Props {
  data: {
    quote: {
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
    profile: {
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

export const HOME_PAGE_IMAGES = graphql`
  query HOME_PAGE_IMAGES {
    quote: file(relativePath: { regex: "/messy-desk.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 250, quality: 95) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    profile: file(relativePath: { regex: "/profile-picture.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 250, quality: 95) {
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
        <Container>
          <Section>
            <Image fluid={data.profile.childImageSharp.fluid} alt="" />
            <Heading>Hi, I'm A-J and I am a Front-End Web Developer from South Africa.</Heading>
            <Content>
              I am a self-taught Web Developer that loves to work on anything JavaScript related
              such as working with React.js and Node.js. My favorite is working with Gatsby.js at
              the moment. Don't worry, I know HTML and CSS too.
            </Content>
            <Content>
              I started the journey on learning Web Development in early 2017. I have a background
              in IT managing Linux Servers, Firewalls and Networking, and I have always had a
              passion for solving complex issues.
            </Content>
          </Section>
          <Section>
            <Image fluid={data.quote.childImageSharp.fluid} alt="" />
            <Quote>
              "There are only two hard things in Computer Science: cache invalidation and naming
              things" - Phil Karlton
            </Quote>
          </Section>
        </Container>
      </Layout>
    </>
  ),
);

IndexPage.displayName = 'IndexPage';

export default IndexPage;
