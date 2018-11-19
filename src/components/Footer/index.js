import React from 'react';
import PropTypes from 'prop-types';
import { FooterStyled, SocialMediaIcon } from './styles.js';

const Footer = ({ color }) => (
  <FooterStyled>
    <SocialMediaIcon
      href="https://twitter.com/asjasroos"
      target="_blank"
      rel="noopener noreferrer"
      color={color}
    >
      <svg aria-labelledby="twitter-icon" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.95 4.57a10 10 0 0 1-2.82.77 4.96 4.96 0 0 0 2.16-2.72c-.95.56-2 .96-3.12 1.19a4.92 4.92 0 0 0-8.38 4.48A13.93 13.93 0 0 1 1.63 3.16a4.92 4.92 0 0 0 1.52 6.57 4.9 4.9 0 0 1-2.23-.61v.06c0 2.38 1.7 4.37 3.95 4.82a5 5 0 0 1-2.21.09 4.94 4.94 0 0 0 4.6 3.42A9.87 9.87 0 0 1 0 19.54a14 14 0 0 0 7.56 2.21c9.05 0 14-7.5 14-13.98 0-.21 0-.42-.02-.63A9.94 9.94 0 0 0 24 4.59l-.05-.02z" />
      </svg>
      <span>Link to twitter profile</span>
    </SocialMediaIcon>
    <SocialMediaIcon
      href="https://github.com/asjas"
      target="_blank"
      rel="noopener noreferrer"
      color={color}
    >
      <svg aria-labelledby="github-icon" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3" />
      </svg>
      <span>Link to github profile</span>
    </SocialMediaIcon>
    <SocialMediaIcon
      href="https://medium.com/@asjas"
      target="_blank"
      rel="noopener noreferrer"
      color={color}
    >
      <svg aria-labelledby="medium-icon" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.85 6.36a.93.93 0 0 0-.3-.78L.3 2.88v-.4h6.96l5.38 11.79 4.73-11.8H24v.4l-1.92 1.84a.56.56 0 0 0-.21.54v13.5c-.03.2.05.41.21.54l1.87 1.84v.4h-9.4v-.4l1.93-1.89c.19-.19.19-.24.19-.53V7.78l-5.39 13.7h-.73L4.28 7.78v9.18c-.05.38.07.77.34 1.05l2.52 3.06v.4H0v-.4l2.52-3.06c.27-.28.39-.67.33-1.05V6.36z" />
      </svg>
      <span>Link to medium profile</span>
    </SocialMediaIcon>
    <SocialMediaIcon
      href="https://www.linkedin.com/in/asjasroos/"
      target="_blank"
      rel="noopener noreferrer"
      color={color}
    >
      <svg aria-labelledby="linkedin-icon" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.32-.02-3.03-1.85-3.03-1.85 0-2.13 1.44-2.13 2.94v5.66H9.35V9h3.42v1.56h.04a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.78C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
      </svg>
      <span>Link to linkedin profile</span>
    </SocialMediaIcon>
    <SocialMediaIcon
      href="https://codepen.io/asjas"
      target="_blank"
      rel="noopener noreferrer"
      color={color}
    >
      <svg aria-labelledby="codepen-icon" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 8.18l-.02-.08-.02-.05c0-.03-.01-.06-.03-.08l-.02-.05-.03-.07-.03-.05-.04-.06-.05-.04-.06-.05-.05-.03-.06-.04-.04-.04-.01-.02L12.57.19c-.35-.23-.8-.23-1.14 0L.45 7.5l-.01.02-.05.03-.06.05-.03.04-.05.06-.04.04-.05.06c-.02.02-.03.03-.03.05l-.05.06-.02.06c-.02 0-.02.04-.03.07l-.01.05C0 8.12 0 8.15 0 8.18v7.5l.01.13.01.05.02.08.01.05.03.08.02.05.03.06.03.04c.02 0 .03.04.05.06l.03.04.04.04c0 .01 0 .03.03.03l.06.04.04.03v.01L11.4 23.8c.16.12.37.17.57.17s.39-.06.57-.18l10.99-7.28.01-.01.05-.04.06-.04.05-.04.05-.06.03-.04.04-.06.03-.05.03-.07.02-.05.03-.08.01-.05.03-.08v-7.5l-.01-.14-.02-.04h.05zm-11.99 6.28l-3.65-2.44 3.65-2.44 3.65 2.44-3.65 2.44zM10.98 7.8L6.5 10.78 2.9 8.36l8.09-5.39V7.8zm-6.33 4.23l-2.59 1.73V10.3l2.59 1.73zm1.85 1.25l4.48 3v4.81L2.89 15.7l3.62-2.42zm6.54 3l4.47-2.99 3.62 2.42-8.09 5.4v-4.83zm6.33-4.24l2.58-1.72v3.46l-2.58-1.73zm-1.86-1.24L13.04 7.8V2.97l8.09 5.39-3.61 2.42z" />
      </svg>
      <span>Link to codepen profile</span>
    </SocialMediaIcon>
  </FooterStyled>
);

Footer.defaultProps = {
  color: '#EDEDED',
};

Footer.propTypes = {
  color: PropTypes.string,
};

export default Footer;
