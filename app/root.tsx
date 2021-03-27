import type { LinksFunction } from "@remix-run/react";
import { Meta, Links, Scripts } from "@remix-run/react";
import { Outlet } from "react-router-dom";

import tailwind from "css:./styles/tailwind.css";
import styles from "css:./styles/global.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwind },
  { rel: "stylesheet", href: styles },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Links />
      </head>
      <body className="w-full max-w-2xl px-5 py-8 mx-auto bg-imperial-black">
        <article className="prose lg:prose-xl">
          <Outlet />
          <Scripts />
        </article>
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Oops!</title>
      </head>
      <body>
        <div>
          <h1>App Error</h1>
          <pre>{error.message}</pre>
          <p>
            Replace this UI with what you want users to see when your app throws uncaught errors. The file is at{" "}
            <code>app/App.tsx</code>.
          </p>
        </div>

        <Scripts />
      </body>
    </html>
  );
}
