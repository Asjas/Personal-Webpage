import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ContactForm from '../components/Form';
import { Container, Heading, StyledSpan, Paragraph } from '../styles/contact';

const ContactPage = () => (
  <Layout>
    <SEO title="A-J Roos | Contact" />
    <Container>
      <section>
        <Heading>
          Don't be a stranger
          <br />
          <StyledSpan>and say hello.</StyledSpan>
        </Heading>
        <Paragraph>
          Feel free to get in touch with me. I am always open to discussing new projects
          or opportunities to be a part of your visions.
        </Paragraph>
        <Paragraph>
          You can also send me an <a href="mailto:asjas@outlook.com">e-mail</a> or give me
          a call on <a href="tel:+27662969827">+27 66 296 9827</a>.
        </Paragraph>
      </section>
      <ContactForm />
    </Container>
  </Layout>
);

export default ContactPage;
