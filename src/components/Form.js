import React from 'react';
import Helmet from 'react-helmet';
import StyledButton from './Button';

function handleSubmit(event) {
  event.stopDefault();
}

const ContactForm = () => (
  <>
    <Helmet>
      <script src="https://www.google.com/recaptcha/api.js?render=6LfRSKAUAAAAAOWRrjorE2kWWLN_aRlCuhTu6x-b" />
    </Helmet>
    <form name="contact" onSubmit={handleSubmit} data-netlify-recaptcha="true" data-netlify="true">
      <fieldset data-testid="form-disabled">
        <label htmlFor="name">
          <span>Enter your name:</span>
          <span name="name" component="span" />
          <input id="name" type="text" name="name" placeholder="full name" />
        </label>
        <label htmlFor="email">
          <span>Enter your email:</span>
          <span name="email" component="span" />
          <input id="email" type="email" name="email" placeholder="example@gmail.com" />
        </label>
        <label htmlFor="message">
          <span>Enter a message:</span>
          <span name="message" component="span" />
          <textarea
            component="textarea"
            id="message"
            name="message"
            placeholder="type your message here"
          />
        </label>
        {typeof window !== 'undefined' &&
          window.grecaptcha &&
          window.grecaptcha.ready(function() {
            window.grecaptcha
              .execute('6LfRSKAUAAAAAOWRrjorE2kWWLN_aRlCuhTu6x-b', { action: 'contactpage' })
              .then(function(token) {
                console.warn(token);
              });
          })}
        <StyledButton />
      </fieldset>
    </form>
  </>
);

export default ContactForm;
