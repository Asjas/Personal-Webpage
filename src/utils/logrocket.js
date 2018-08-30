import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';

export default function setupLogRocket() {
  LogRocket.init('tmyqjr/personal-website-jkld5');

  setupLogRocketReact(LogRocket);
}
