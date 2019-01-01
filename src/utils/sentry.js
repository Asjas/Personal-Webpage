import { BrowserClient, Hub } from '@sentry/browser';

const client = new BrowserClient({
  dsn: 'https://18b2fcfdb3334223b3577719a6c05296@sentry.io/1275165',
});

const hub = new Hub(client);

export default hub;
