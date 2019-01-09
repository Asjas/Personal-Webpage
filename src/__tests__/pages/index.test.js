import React from 'react';
import { render } from 'react-testing-library';
import Homepage from '../../pages/index';

describe('Homepage', () => {
  it('renders correctly', () => {
    const location = {
      pathname: '/',
    };

    const { container, getByText } = render(<Homepage location={location} />);
    expect(container).toMatchSnapshot();
  });
});
