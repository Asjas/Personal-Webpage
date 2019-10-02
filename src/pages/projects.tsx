import * as React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import SEO from '../components/SEO';
import Layout from '../components/Layout/index';
import Project from '../components/Project';
import ErrorBoundary from '../components/ErrorBoundary';

import styled from '../utils/themed-styled-components';

export const Section = styled.section`
  display: grid;
  gap: 20px 0;
`;

export const Heading = styled.h1`
  font-size: ${props => props.theme.fontSize.heading1};
  text-align: center;

  @media screen and (max-width: ${props => props.theme.mobileQuery.tablet}) {
    width: 90%;
  }
`;

export const Paragraph = styled.p`
  font-size: ${props => props.theme.fontSize.xLarge};
  text-align: center;

  a {
    color: ${props => props.theme.color.primary};
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.color.primary};

    &:hover,
    &:focus {
      outline: 3px solid ${props => props.theme.color.outline};
    }

    &:visited {
      color: ${props => props.theme.color.linkVisited};
      text-decoration-color: ${props => props.theme.color.linkVisited};
    }
  }
`;

export const Container = styled.div`
  display: grid;
  gap: 20px 0;
`;

export const GET_ALL_PROJECTS = graphql`
  query GET_ALL_PROJECTS {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, filter: { frontmatter: { type: { eq: "project" } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            meta_desc
            featured_image {
              childImageSharp {
                fluid(maxWidth: 400, quality: 95) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;

const seo = {
  title: 'Web Development Projects | A-J Roos',
  description:
    'This is a collection of some of my Web Development projects that I have worked on. A complete collection of all my projects can be found on my Github page at https://github.com/asjas.',
  siteUrl: 'https://asjas.xyz/projects/',
};

interface IAllMdxProject {
  allMdx: {
    edges: Array<IProject>;
  };
}

interface IProject {
  node: {
    id: string;
    frontmatter: {
      title: string;
      slug: string;
      meta_desc: string;
    };
  };
}

const ProjectsPage: React.FunctionComponent = (): React.ReactElement => {
  const { allMdx: projects } = useStaticQuery(GET_ALL_PROJECTS) as IAllMdxProject;

  return (
    <>
      <SEO {...seo} />
      <Layout>
        <Section>
          <Heading>This is a collection of projects that I have worked on.</Heading>
          <Paragraph>
            A complete collection of all my projects can be found on my{' '}
            <a href="https://github.com/asjas" rel="noopener noreferrer" target="_blank">
              Github page
            </a>
            .
          </Paragraph>
          <Container className="projects">
            <ErrorBoundary>
              {projects.edges.map(({ node: project }) => (
                <Link
                  data-testid={project.frontmatter.slug}
                  to={`/project/${project.frontmatter.slug}`}
                  key={project.id}
                >
                  <Project project={project} />
                </Link>
              ))}
            </ErrorBoundary>
          </Container>
        </Section>
      </Layout>
    </>
  );
};

export default ProjectsPage;
