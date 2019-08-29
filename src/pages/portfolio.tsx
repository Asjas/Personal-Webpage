import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import SEO from '../components/SEO';
import Layout from '../components/Layout/index';
import Project from '../components/Project';
import styled from '../utils/themed-styled-components';

export const Section = styled.section`
  display: grid;
  grid-template-columns:
    minmax(1.2rem, 1fr)
    minmax(auto, 800px)
    minmax(1.2rem, 1fr);
  justify-items: center;
  gap: 40px 0;

  & > * {
    grid-column: 2;
  }
`;

export const Heading = styled.h1`
  font-size: ${props => props.theme.fontSize.heading1};
  text-align: center;
  margin: 0 auto 25px 0;

  @media screen and (max-width: ${props => props.theme.mobileQuery.tablet}) {
    width: 90%;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns:
    minmax(1.2rem, 1fr)
    minmax(auto, 800px)
    minmax(1.2rem, 1fr);
  justify-items: center;
  gap: 40px 0;

  & > * {
    grid-column: 2;
  }
`;

export const GET_ALL_PROJECTS = graphql`
  query GET_ALL_PROJECTS {
    allSanityProject {
      edges {
        node {
          id
          title
          description
          slug {
            current
          }
        }
      }
    }
  }
`;

const seo = {
  title: 'Portfolio | A-J Roos',
  description:
    'This is a collection of some of my Web Development projects. A complete collection of my projects can be found on my Github page at https://github.com/asjas.',
  siteUrl: 'https://asjas.co.za/portfolio',
};

interface IAllSanityProject {
  allSanityProject: {
    edges: Array<IProject>;
  };
}

interface IProject {
  node: {
    id: string;
    title: string;
    description: string;
    slug: {
      current: string;
    };
  };
}

const PortfolioPage: React.FunctionComponent = (): React.ReactElement => {
  const { allSanityProject: projects } = useStaticQuery(GET_ALL_PROJECTS) as IAllSanityProject;

  return (
    <>
      <SEO {...seo} />
      <Layout>
        <Section>
          <Heading>This is a collection of projects that I have worked on.</Heading>
          <p>
            A complete collection of all my projects can be found on my{' '}
            <a href="https://github.com/asjas" rel="noopener noreferrer" target="_blank">
              Github page
            </a>
            .
          </p>
          <Container className="projects">
            {projects.edges.map(({ node: project }) => (
              <Link to={`/project/${project.slug.current}`} key={project.id}>
                <Project project={project} />
              </Link>
            ))}
          </Container>
        </Section>
      </Layout>
    </>
  );
};

export default PortfolioPage;
