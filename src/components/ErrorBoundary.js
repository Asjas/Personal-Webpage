import React from 'react';
import PropTypes from 'prop-types';
import hub from '../utils/sentry';

class ErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    hub.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      });
      hub.captureException(error);
    });
  }

  render() {
    const { children } = this.props;

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ErrorBoundary;
