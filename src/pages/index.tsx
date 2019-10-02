import * as React from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import styled from '../utils/themed-styled-components';

const Container = styled.div``;

const Section = styled.section`
  align-items: center;
  display: grid;
  grid-template-columns: 240px 1fr;

  @media (max-width: ${props => props.theme.mobileQuery.tablet}) {
    grid-template-columns: 1fr;
    gap: 20px 0;
  }
`;

const ProfileImage = styled(Img)`
  height: 100%;
  max-width: 200px;
  width: 100%;

  @media (max-width: ${props => props.theme.mobileQuery.tablet}) {
    grid-column: 2;
    justify-self: center;
    max-width: 180px;
  }
`;

const QuoteImage = styled(Img)`
  height: 100%;
  max-width: 200px;
  width: 100%;

  @media (max-width: ${props => props.theme.mobileQuery.tablet}) {
    grid-column: 2;
    justify-self: center;
    margin-top: 40px;
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
  line-height: ${props => props.theme.fontSize.heading2};
  grid-column: 2;

  @media (max-width: ${props => props.theme.mobileQuery.tablet}) {
    text-align: center;
    margin-top: 20px;
  }
`;

interface IHomePageImages {
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
}

export const HOME_PAGE_IMAGES = graphql`
  query HOME_PAGE_IMAGES {
    profile: file(relativePath: { regex: "/profile-picture/" }) {
      childImageSharp {
        fluid(maxWidth: 250, quality: 95) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    quote: file(relativePath: { regex: "/messy-desk/" }) {
      childImageSharp {
        fluid(maxWidth: 250, quality: 95) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const seo = {
  title: 'Homepage | A-J Roos',
  description:
    'I am a Front-End Web Developer based in Bloemfontein, South Africa. I am a self-taught Web Developer that loves to create websites and working on anything JavaScript related such as working with React.js, Gatsby.js and Node.js.',
  siteUrl: 'https://asjas.xyz/',
};

const IndexPage = () => {
  const { profile, quote } = useStaticQuery(HOME_PAGE_IMAGES) as IHomePageImages;

  return (
    <>
      <SEO {...seo} />
      <Layout>
        <Container>
          <Section>
            <ProfileImage fluid={profile.childImageSharp.fluid} alt="A-J Roos" />
            <Heading>Hi, I'm A-J and I am a Front-End Web Developer from South Africa.</Heading>
            <Content>
              I am a self-taught Web Developer that loves to work on anything JavaScript related such as working with
              React.js and Node.js. My favorite is working with Gatsby.js at the moment. Don't worry, I know HTML and
              CSS too.
            </Content>
            <Content>
              I started the journey on learning Web Development in early 2017. I have a background in IT managing Linux
              Servers, Firewalls and Networking, and I have always had a passion for solving complex issues.
            </Content>
          </Section>
          <Section>
            <QuoteImage fluid={quote.childImageSharp.fluid} alt="A messy desk" />
            <Quote>
              'There are only two hard things in Computer Science: cache invalidation and naming things' - Phil Karlton
            </Quote>
          </Section>
        </Container>
      </Layout>
    </>
  );
};

export default IndexPage;
