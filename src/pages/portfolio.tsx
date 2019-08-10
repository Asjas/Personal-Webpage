import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

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

export const Div = styled.div`
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

const firebaseConfig = {
  apiKey: 'AIzaSyARArNM5Ps9wG-zSOS8Fe-tIzmNIu2lGBw',
  authDomain: 'personal-website-1213.firebaseapp.com',
  databaseURL: 'https://personal-website-1213.firebaseio.com',
  projectId: 'personal-website-1213',
  storageBucket: 'personal-website-1213.appspot.com',
  messagingSenderId: '436200487184',
  appId: '1:436200487184:web:a7cc904f69b93dd6',
};

const seo = {
  title: 'A-J Roos | Portfolio',
  description:
    'This is a collection of some of my Web Development projects. A complete collection of my projects can be found on my Github page at https://github.com/asjas.',
  siteUrl: 'https://asjas.co.za/portfolio',
};

interface IProject {
  id: string;
  title: string;
  description: string;
  image_url: string;
  website_url: string;
  github_url: string;
}

const PortfolioPage: React.FunctionComponent = (): React.ReactElement => {
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    var db = firebase.firestore();

    db.collection('projects')
      .get()
      .then(querySnapshot => {
        const projects: any[] = [];
        querySnapshot.forEach(function(doc) {
          projects.push(doc.data());
        });
        setProjects(projects);
      })
      .catch(function(error) {
        console.error('Error getting documents: ', error);
      });
  }, []);

  return (
    <>
      <SEO {...seo} />
      <Layout>
        <Section>
          <Heading>This is a collection of projects that I have worked on.</Heading>
          <Div className="projects">
            {console.log(projects)}
            {projects && projects.map(project => <Project key={project.id} project={project} />)}
          </Div>
        </Section>
      </Layout>
    </>
  );
};

export default PortfolioPage;
