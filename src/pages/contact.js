import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ContactForm from '../components/Form';
import { Container, Heading, StyledSpan, Paragraph } from '../styles/contact';

const seo = {
  title: 'A-J Roos | Contact',
  description:
    'Do you have an interesting project or opportunity to discuss with me? Do you have a random question that you want to ask me? Feel free to use the contact details or contact form provided to get in touch with me.',
};

const ContactPage = () => (
  <Layout>
    <SEO title={seo.title} description={seo.description} />
    <Container>
      <section>
        <Heading>
          Don't be a stranger
          <br />
          <StyledSpan>and say hello.</StyledSpan>
        </Heading>
        <Paragraph>
          I am always open to discussing new projects or opportunities. Feel free to get
          in touch with me by using the provided contact form.
        </Paragraph>
        <Paragraph>
          You can also send me an e-mail at{' '}
          <a href="mailto:asjas@outlook.com">asjas@outlook.com</a>.
        </Paragraph>
      </section>
      <ContactForm />
    </Container>
  </Layout>
);

export default ContactPage;
