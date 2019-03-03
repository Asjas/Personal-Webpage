import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ContactForm from '../components/Form';

const seo = {
  title: 'A-J Roos | Contact',
  description:
    'Do you have an interesting project or opportunity to discuss with me? Do you have a random question that you want to ask me? Feel free to use the contact details or contact form provided to get in touch with me.',
  siteUrl: 'https://asjas.co.za/contact',
};

const ContactPage = () => (
  <Layout>
    <SEO {...seo} />
    <div className="contactpage">
      <section className="contactpage-details">
        <h1 className="contactpage-heading">
          Don't be a stranger
          <br />
          <span>and say hello.</span>
        </h1>
        <p className="contactpage-paragraph">
          I am always open to discussing new projects or opportunities. Feel free to get
          in touch with me by using the provided contact form.
        </p>
        <p className="contactpage-paragraph">
          You can also send me an e-mail at{' '}
          <a href="mailto:asjas@outlook.com">asjas@outlook.com</a>.
        </p>
      </section>
      <ContactForm />
    </div>
  </Layout>
);

export default ContactPage;
