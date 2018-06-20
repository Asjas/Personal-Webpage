import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';
import Rollbar from 'rollbar';

export default function setupLogRocket() {
  LogRocket.init('tmyqjr/personal-website-jkld5');
  // after calling LogRocket.init()
  setupLogRocketReact(LogRocket);

  Rollbar.configure({
    transform(obj) {
      obj.sessionURL = LogRocket.sessionURL;
      return obj;
    },
  });
}
