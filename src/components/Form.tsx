import * as React from 'react';
import Helmet from 'react-helmet';
import Button from './Button';

function handleSubmit(event: React.SyntheticEvent): void {
  event.preventDefault();
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
          <input id="name" type="text" name="name" placeholder="full name" />
        </label>
        <label htmlFor="email">
          <span>Enter your email:</span>
          <input id="email" type="email" name="email" placeholder="example@gmail.com" />
        </label>
        <label htmlFor="message">
          <span>Enter a message:</span>
          <textarea id="message" name="message" placeholder="type your message here" />
        </label>
        {typeof window !== 'undefined' &&
          window.grecaptcha &&
          window.grecaptcha.ready(function() {
            window.grecaptcha
              .execute('6LfRSKAUAAAAAOWRrjorE2kWWLN_aRlCuhTu6x-b', { action: 'contactpage' })
              .then(function(token: any) {
                console.warn(token);
              });
          })}
        <Button />
      </fieldset>
    </form>
  </>
);

export default ContactForm;
