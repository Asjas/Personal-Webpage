import { configure, setAddon, addDecorator } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withThemes } from 'storybook-styled-components';
import { checkA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withTests } from '@storybook/addon-jest';
import { theme } from '../src/theme';

// import results from "../.jest-test-results.json";

const themes = {
  theme: theme,
};

addDecorator(withThemes(themes));
addDecorator(checkA11y);
addDecorator(withKnobs);
setAddon(JSXAddon);
// addDecorator(
//   withTests({
//     results
//   })
// );

const req = require.context('../src', true, /.stories.js$/);

function loadStories() {
  require('./welcomeStory');
  req.keys().forEach(file => req(file));
}

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};

// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = '';

// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action('NavigateTo:')(pathname);
};

configure(loadStories, module);
