import React from 'react';
import { render } from 'react-testing-library';
import ContactForm from './index';

describe('Contact form', () => {
  it('renders correctly', () => {
    const { container } = render(<ContactForm />);

    expect(container).toMatchSnapshot();
  });
});
