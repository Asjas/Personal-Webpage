import React, { ReactNode } from 'react';

import hub from '../../utils/sentry';

import * as Styled from './style';

interface Props {
  children: ReactNode | ReactNode[];
}

interface State {
  hasError: boolean;
}

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
        <Styled.ErrorBoundary>
          Something went wrong displaying this section of the website. An error notification has
          been sent to the website owner.
        </Styled.ErrorBoundary>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
