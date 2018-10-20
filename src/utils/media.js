// Media Query utils file for Styled-Components
import { css } from 'styled-components';

const sizes = {
  large: 1200,
  medium: 918,
  small: 768,
  xSmall: 576,
};

/**
 * Iterate through the sizes and create a media template
 * This code example is from https://www.styled-components.com/docs/advanced/#media-templates
 */
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});
