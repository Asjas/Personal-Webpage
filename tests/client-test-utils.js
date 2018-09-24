import React from 'react';
import { Router } from '@reach/router';
import { render, wait } from 'react-testing-library';
import { createMemoryHistory } from 'history';
import 'jest-dom/extend-expect';

function renderWithRouter(ui, { route = '/', ...renderOptions } = {}) {
  const history = createMemoryHistory({ initialEntries: [route] });
  const utils = render(<Router history={history}>{ui}</Router>, renderOptions);
  const finishLoading = () =>
    wait(() => expect(utils.queryByText('Loading')).toBeNull());
  return {
    ...utils,
    finishLoading,
    history,
  };
}

export {
  Simulate,
  wait,
  render,
  cleanup,
  fireEvent,
} from 'react-testing-library';
export { renderWithRouter };
