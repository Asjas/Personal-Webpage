import React from 'react';
import { Container, Heading, StyledSpan, Paragraph } from './styles/contact';
import ContactForm from '../src/components/Form';

const ContactPage = () => (
  <Container>
    <section>
      <Heading>
        Don't be a stranger
        <br />
        <StyledSpan> say hello.</StyledSpan>
      </Heading>
      <Paragraph>
        Feel free to get in touch with me. I am always open to discussing new projects or
        opportunities to be a part of your visions.
      </Paragraph>
      <Paragraph>
        You can also send me an <a href="mailto:asjas@outlook.com">e-mail</a> or give me a call on{' '}
        <a href="tel:+27662969827">+27 66 296 9827.</a>
      </Paragraph>
    </section>
    <ContactForm />
  </Container>
);

export default ContactPage;
