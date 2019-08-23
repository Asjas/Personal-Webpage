import React from 'react';
import PropTypes from 'prop-types';

class HTML extends React.Component {
  render() {
    return (
      <html lang="en" {...this.props.htmlAttributes}>
        <head>
          {this.props.headComponents}
          {/* Normalize */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/0.5.0/modern-normalize.min.css"
            integrity="sha256-N6+kUxTWxpqVK+BrPWt3t4jeOWPtp37RZEbm5n9X+8U="
            crossOrigin="anonymous"
          />

          {/* Favicon Icons */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/assets/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/assets/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/assets/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/assets/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/assets/favicons/safari-pinned-tab.svg" color="#5bbad5" />
          <link rel="shortcut icon" href="/assets/favicons/favicon.ico" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="msapplication-config" content="/assets/favicons/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <div id="___modal" />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};

export default HTML;
