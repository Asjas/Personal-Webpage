import React from 'react';
import { fireEvent, render } from 'react-testing-library';
import { createMemoryHistory } from 'history';
import NotFoundPage from '../404';

describe('404 page', () => {
  it('matches snapshot', () => {
    const { container } = render(<NotFoundPage />);
    expect(container).toMatchSnapshot();
  });

  it('contains link back to homepage', () => {
    const { getByText } = render(<NotFoundPage />);
    expect(getByText('Go Home')).toBeTruthy();
  });

  it('has a working link back to homepage', () => {
    const history = createMemoryHistory({ initialEntries: ['/wrong'] });
    const { getByText } = render(<NotFoundPage history={history} />);
    console.log(getByText('Go Home'));
  });
});
