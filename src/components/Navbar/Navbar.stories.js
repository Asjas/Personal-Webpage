import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Navbar from './index';

storiesOf('Navbar', module).addWithJSX('renders correctly', () => (
  <Navbar onClick={action('Clicked!')} />
));
