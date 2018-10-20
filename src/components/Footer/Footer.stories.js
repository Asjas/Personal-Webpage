import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Footer from './index';

storiesOf('Footer', module).addWithJSX(
  'displays social media icons correctly',
  () => <Footer color="black" onClick={action('Clicked!')} />,
);
