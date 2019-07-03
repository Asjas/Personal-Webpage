import React, { ReactNode } from 'react';
import hub from '../utils/sentry';

type Props = {
  children: ReactNode | ReactNode[];
};

type State = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<Props, State> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: object, errorInfo: any) {
    hub.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      });
      hub.captureException(error);
    });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <p className="errorboundary-content">
          Something went wrong displaying this section of the website. A log of the error has been
          sent to the website owner.
        </p>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
