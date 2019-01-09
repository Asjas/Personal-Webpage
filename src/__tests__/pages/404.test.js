import React from 'react';
import { render } from 'react-testing-library';
import Fourohfour from '../../pages/404';

describe('Fourohfour', () => {
  it('renders correctly', () => {
    const linkText = 'Go Home';
    const headingText = 'PAGE NOT FOUND';
    const location = {
      pathname: '/404',
    };

    const { container, getByTestId } = render(<Fourohfour location={location} />);
    expect(getByTestId('404-heading')).toHaveTextContent(headingText);
    expect(getByTestId('404-link')).toHaveTextContent(linkText);
    expect(container).toMatchSnapshot();
  });
});
