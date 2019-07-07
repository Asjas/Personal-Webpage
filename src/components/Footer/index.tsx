import * as React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { FaTwitter, FaGithub, FaFreeCodeCamp, FaLinkedin, FaRegFileAlt } from 'react-icons/fa';

import * as Styled from './style';

function Footer(): React.ReactElement {
  return (
    <Styled.Footer>
      <OutboundLink
        href="https://twitter.com/_asjas"
        target="_blank"
        rel="noopener noreferrer"
        aria-labelledby="twitter-icon"
      >
        <FaTwitter />
        <span id="twitter-icon" className="sr-only">
          Link to twitter profile
        </span>
      </OutboundLink>
      <OutboundLink
        href="https://github.com/asjas"
        target="_blank"
        rel="noopener noreferrer"
        aria-labelledby="github-icon"
      >
        <FaGithub />
        <span id="github-icon" className="sr-only">
          Link to github profile
        </span>
      </OutboundLink>
      <OutboundLink
        href="https://www.freecodecamp.org/asjas"
        target="_blank"
        rel="noopener noreferrer"
        aria-labelledby="freecodecamp-icon"
      >
        <FaFreeCodeCamp />
        <span id="freecodecamp-icon" className="sr-only">
          Link to freeCodeCamp profile
        </span>
      </OutboundLink>
      <OutboundLink
        href="https://www.linkedin.com/in/asjasroos/"
        target="_blank"
        rel="noopener noreferrer"
        aria-labelledby="linkedin-icon"
      >
        <FaLinkedin />
        <span id="linkedin-icon" className="sr-only">
          Link to linkedin profile
        </span>
      </OutboundLink>
      <OutboundLink
        href="https://drive.google.com/open?id=19cfXz9GIPEPstCI_W_OWAiv1SmAwGM9l"
        rel="noopener noreferrer"
        target="_blank"
        aria-labelledby="resume-icon"
      >
        <FaRegFileAlt />
        <span id="resume-icon" className="sr-only">
          Link to resume
        </span>
      </OutboundLink>
    </Styled.Footer>
  );
}

export default Footer;
