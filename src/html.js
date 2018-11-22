import React from 'react';
import PropTypes from 'prop-types';

export default class HTML extends React.Component {
  render() {
    return (
      <html lang="en" {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {this.props.headComponents}
          <link rel="shortcut icon" href="../static/favicon.png" />
          <link rel="stylesheet" type="text/css" href="../static/normalize.min.css" />
          <link rel="stylesheet" type="text/css" href="../static/nprogress.min.css" />
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {this.props.postBodyComponents}
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
          <script src="../../../static/googleTM.js" type="text/javascript" />
          <script src="../../../static/fullstory.js" type="text/javascript" />
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
