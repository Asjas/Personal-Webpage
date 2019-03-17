import React from 'react';
import PropTypes from 'prop-types';

class HTML extends React.Component {
  render() {
    return (
      <html lang="en" {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link rel="preconnect" href="https://storage.googleapis.com" crossOrigin />
          <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin />

          <link rel="shortcut icon" href="https://storage.googleapis.com/asjas.co.za/favicon.ico" />
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
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
