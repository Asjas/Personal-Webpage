import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const ExportedLink = React.memo(({ children, ...props }) => (
  <Link activeStyle={{ color: '#FFD700' }} {...props}>
    {children}
  </Link>
));

ExportedLink.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ExportedLink;
