import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Form from './index';

storiesOf('Form', module).addWithJSX('displays correctly', () => (
  <Form color="black" onClick={action('Clicked!')} />
));
