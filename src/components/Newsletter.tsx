import React, { useState, memo } from 'react';

import Button from './Button';

function NewsletterSubscribed() {
  return (
    <section className="newsletter">
      <h3 className="newsletter-heading">Success!</h3>
      <p className="newsletter-content">You've been subscribed to my newsletter.</p>
    </section>
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
    <section className="newsletter">
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <h3 className="newsletter-heading">Subscribe to my newsletter.</h3>
        <p className="newsletter-content">
          I send a newsletter on occasion that contains news updates surrounding Web Development. I
          also include links to new blog posts that I write.
        </p>
        <label htmlFor="newsletter-input">
          Enter your email:
          <input
            className="newsletter-input"
            id="newsletter-input"
            type="email"
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </label>
        <Button />
      </form>
    </section>
  );
}

export default Newsletter;
