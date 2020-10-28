import React from 'react';
import { Meta, Scripts, Styles, Routes } from '@remix-run/react';

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&family=Poppins:ital,wght@0,400;0,600;1,400&display=swap"
          rel="stylesheet"
        />
        <Styles />
      </head>
      <body className="bg-imperial-black px-5 py-8 mx-auto w-full max-w-2xl">
        <Routes />
        <Scripts />
      </body>
    </html>
  );
}
