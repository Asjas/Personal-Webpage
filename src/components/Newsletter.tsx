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

const NewsletterForm = memo(function NewsletterForm(props) {
  const { handleChange, handleSubmit } = props;

  return (
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
});

NewsletterForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  function handleChange(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubscribed(true);
  }

  if (subscribed) {
    return <NewsletterSubscribed />;
  }
  return <NewsletterForm handleChange={handleChange} handleSubmit={handleSubmit} />;
}

export default Newsletter;
