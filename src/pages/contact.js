import React from 'react';
import { Container, Heading, StyledSpan, Paragraph } from '../styles/contact';
import Layout from '../components/Layout';
import ContactForm from '../components/Form';

const ContactPage = () => (
  <Layout>
    <Container>
      <section>
        <Heading>
          Don't be a stranger
          <br />
          <StyledSpan>and say hello.</StyledSpan>
        </Heading>
        <Paragraph>
          Feel free to get in touch with me. I am always open to discussing new projects or
          opportunities to be a part of your visions.
        </Paragraph>
        <Paragraph>
          You can also send me an <a href="mailto:asjas@outlook.com">e-mail</a> or give me a call on{' '}
          <a href="tel:+27662969827">+27 66 296 9827</a>.
        </Paragraph>
      </section>
      <ContactForm />
    </Container>
  </Layout>
);

export default ContactPage;
