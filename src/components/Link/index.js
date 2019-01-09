import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const CustomLink = React.memo(function CustomLink({ children, ...props }) {
  return (
    <Link activeStyle={{ color: '#FFD700' }} {...props}>
      {children}
    </Link>
  );
});

CustomLink.propTypes = {
  children: PropTypes.string.isRequired,
};

export default CustomLink;
