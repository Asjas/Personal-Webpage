import React, { useState } from 'react';

import Button from '../Button';

import * as Styled from './style';

function NewsletterSubscribed() {
  return (
    <Styled.Section>
      <Styled.Heading>Success!</Styled.Heading>
      <Styled.Paragraph>You've been subscribed to my newsletter.</Styled.Paragraph>
    </Styled.Section>
  );
}

function Newsletter(): React.ReactElement {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  function handleChange(e: React.SyntheticEvent<HTMLInputElement>) {
    setEmail(e.currentTarget.value);
  }

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setSubscribed(true);
  }

  return subscribed ? (
    <NewsletterSubscribed />
  ) : (
    <Styled.Section>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.Heading>Subscribe to my newsletter.</Styled.Heading>
        <Styled.Paragraph>
          I send a newsletter on occasion that contains news updates surrounding Web Development. I
          also include links to new blog posts that I write.
        </Styled.Paragraph>
        <label htmlFor="newsletter-input">
          Enter your email:
          <Styled.Input
            id="newsletter-input"
            type="email"
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </label>
        <Button />
      </Styled.Form>
    </Styled.Section>
  );
}

export default Newsletter;
