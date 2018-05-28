// Media Query Util file for Styled-Components
import { css } from 'styled-components';

// Mobile Query Screen Sizes
const sizes = {
  medium: 918,
  small: 768,
  xSmall: 576,
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});
