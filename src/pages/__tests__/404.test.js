import React from 'react';
import { render } from 'react-testing-library';
import NotFoundPage from '../404';

const { debug } = render(<NotFoundPage />);
debug();
