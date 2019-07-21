import * as React from 'react';
import { Helmet } from 'react-helmet';

import Button from '../Button';

import * as Styled from './style';

function handleSubmit(event: React.SyntheticEvent): void {
  event.preventDefault();
}

const ContactForm = (): React.ReactElement => (
  <>
    <Helmet>
      <script src="https://www.google.com/recaptcha/api.js?render=6LfRSKAUAAAAAOWRrjorE2kWWLN_aRlCuhTu6x-b" />
    </Helmet>
    <Styled.Form
      name="contact"
      onSubmit={handleSubmit}
      data-netlify-recaptcha="true"
      data-netlify="true"
    >
      <Styled.Fieldset data-testid="form-disabled">
        <Styled.Label htmlFor="name">
          <span>Enter your name:</span>
          <Styled.Input id="name" type="text" name="name" placeholder="full name" />
        </Styled.Label>
        <Styled.Label htmlFor="email">
          <span>Enter your email:</span>
          <Styled.Input id="email" type="email" name="email" placeholder="example@gmail.com" />
        </Styled.Label>
        <Styled.Label htmlFor="message">
          <span>Enter a message:</span>
          <Styled.Textarea id="message" name="message" placeholder="type your message here" />
        </Styled.Label>
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
      </Styled.Fieldset>
    </Styled.Form>
  </>
);

export default ContactForm;
