import * as React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ContactForm from '../components/Form';
import ErrorBoundary from '../components/ErrorBoundary';
import styled from '../utils/themed-styled-components';

export const Section = styled.section`
  display: grid;
`;

export const Heading = styled.h1`
  width: 100%;
  margin-bottom: 25px;
  text-align: center;
`;

export const Paragraph = styled.p`
  margin: 0 auto;
  font-size: ${props => props.theme.fontSize.large};
  padding: 10px 0;
  width: 100%;
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

const seo = {
  title: 'Contact Page | A-J Roos',
  description:
    'I am available to work on projects. Feel free to use the contact form or email address on the page to contact me. You can also reach me on twitter at https://twitter.com/_asjas.',
  siteUrl: 'https://asjas.xyz/contact/',
};

const ContactPage = () => (
  <>
    <SEO {...seo} />
    <Layout>
      <Section>
        <Heading>Don't be a stranger and say hello.</Heading>
        <Paragraph>
          I am always open to discuss new projects or opportunities. Feel free to get in touch with me by using the
          provided contact form.
        </Paragraph>
        <Paragraph className="contact__paragraph">
          You can also send me an e-mail at <a href="mailto:contact@asjas.co.za">contact@asjas.co.za</a>.
        </Paragraph>
      </Section>
      <ErrorBoundary>
        <ContactForm />
      </ErrorBoundary>
    </Layout>
  </>
);

export default ContactPage;
