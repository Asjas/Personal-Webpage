import { withRouter } from 'next/router';
import PropTypes from 'prop-types';

const Link = ({ children, router = { pathname: '/' }, href, className }) => {
  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  };

  const ActiveLink = () => (
    <a href={href} onClick={handleClick} className={className} active="true">
      {children}
    </a>
  );

  const NonActiveLink = () => (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );

  return router.pathname === href ? <ActiveLink /> : <NonActiveLink />;
};

Link.propTypes = {
  children: PropTypes.string.isRequired,
  router: PropTypes.object.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default withRouter(Link);
