import React from 'react';
import { render } from 'react-testing-library';
import NotFoundPage from '../404';

describe('404 page', () => {
  it('matches snapshot', () => {
    const { container } = render(<NotFoundPage />);
    expect(container).toMatchSnapshot();
  });
});
