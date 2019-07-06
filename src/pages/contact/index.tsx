import * as React from 'react';
import * as Styled from './style';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import ContactForm from '../../components/Form';
import ErrorBoundary from '../../components/ErrorBoundary';

const seo = {
  title: 'A-J Roos | Contact',
  description:
    'Do you have an interesting project or opportunity to discuss with me? Do you have a Web Development related question that you want to ask me? Feel free to use the contact details or contact form provided to get in touch with me.',
  siteUrl: 'https://asjas.co.za/contact',
};

const ContactPage = (): React.ReactElement => (
  <>
    <SEO {...seo} />
    <Layout>
      <Styled.Contact>
        <section>
          <Styled.Heading>Don't be a stranger and say hello.</Styled.Heading>
          <Styled.Paragraph>
            I am always open to discussing new projects or opportunities. Feel free to get in touch
            with me by using the provided contact form.
          </Styled.Paragraph>
          <Styled.Paragraph className="contact__paragraph">
            You can also send me an e-mail at{' '}
            <a href="mailto:contact@asjas.co.za">contact@asjas.co.za</a>.
          </Styled.Paragraph>
        </section>
        <ErrorBoundary>
          <ContactForm />
        </ErrorBoundary>
      </Styled.Contact>
    </Layout>
  </>
);

export default ContactPage;
