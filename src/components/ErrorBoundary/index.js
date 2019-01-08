import React, { Component } from 'react';
import hub from '../../utils/sentry';

class ErrorBoundary extends Component {
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

export default ErrorBoundary;
