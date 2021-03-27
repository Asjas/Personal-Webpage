import ReactDOM from "react-dom";
import Remix from "@remix-run/react/browser";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import { CaptureConsole as CaptureConsoleIntegration } from "@sentry/integrations";

Sentry.init({
  dsn: "https://18b2fcfdb3334223b3577719a6c05296@o183318.ingest.sentry.io/1275165",
  integrations: [new Integrations.BrowserTracing(), new CaptureConsoleIntegration()],
  tracesSampleRate: 0.4,
});

ReactDOM.hydrate(
  // @types/react-dom says the 2nd argument to ReactDOM.hydrate() must be a
  // `Element | DocumentFragment | null` but React 16 allows you to pass the
  // `document` object as well. This is a bug in @types/react-dom that we can
  // safely ignore for now.
  // @ts-ignore
  <Remix />,
  document,
);
