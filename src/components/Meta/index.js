import Head from 'next/head';
import PropTypes from 'prop-types';

const Meta = ({ title }) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <script src="../../../static/googleTM.js" type="text/javascript" />
    <script src="../../../static/fullstory.js" type="text/javascript" />
    <link rel="shortcut icon" href="../static/favicon.png" />
    <link rel="stylesheet" type="text/css" href="../static/normalize.min.css" />
    <link rel="stylesheet" type="text/css" href="../static/nprogress.min.css" />
    <meta name="author" content="A-J Roos" />
    <title>{title}</title>
  </Head>
);

Meta.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Meta;
