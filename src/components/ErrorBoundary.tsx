import React, { ReactNode } from 'react';
import hub from '../utils/sentry';

interface Props {
  children: ReactNode;
}

class ErrorBoundary extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
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
      // You can render any custom fallback UI
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
