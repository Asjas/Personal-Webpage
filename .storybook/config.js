import { configure, setAddon, addDecorator } from "@storybook/react";
import JSXAddon from "storybook-addon-jsx";
import { withThemes } from "storybook-styled-components";
import { checkA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs/react";
import { withTests } from "@storybook/addon-jest";
import { theme } from '../theme';

// import results from "../.jest-test-results.json";

const themes = {
  'theme': theme,
}

addDecorator(withThemes(themes));
addDecorator(checkA11y);
addDecorator(withKnobs);
setAddon(JSXAddon);
// addDecorator(
//   withTests({
//     results
//   })
// );

const req = require.context("../src", true, /.stories.js$/);

function loadStories() {
  require("./welcomeStory");
  req.keys().forEach(file => req(file));
}

configure(loadStories, module);
