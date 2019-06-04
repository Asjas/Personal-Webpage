import React from 'react';
import { render } from '@testing-library/react';
import Fourohfour from '../../pages/404';

describe('Fourohfour page', () => {
  it('renders correctly and matches snapshot', () => {
    const { container } = render(<Fourohfour />);

    expect(container).toMatchSnapshot();
  });

  it('has a heading that says `page not found`', () => {
    const headingText = 'PAGE NOT FOUND';
    const { getByTestId } = render(<Fourohfour />);

    expect(getByTestId('404-heading')).toHaveTextContent(headingText);
  });

  it('has a link back to the main website', () => {
    const url = 'http://localhost';
    const { getByTestId } = render(<Fourohfour />);

    expect(getByTestId('404-link').href).toMatch(url);
  });
});
