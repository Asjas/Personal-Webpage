import Typography from 'typography';
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants';

const typography = new Typography({
  baseFontSize: '10px',
  baseLineHeight: 1.45,
  scaleRatio: 5 / 2,
  headerFontFamily: ['Contender', 'Roboto'],
  bodyFontFamily: ['Abberwick', 'Roboto'],
  headerWeight: 500,
  bodyWeight: 400,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    'html,body': {
      boxSizing: 'border-box',
    },
    '*,*:before,*:after': {
      boxSizing: 'inherit',
    },
    blockquote: {
      ...scale(1 / 5),
      margin: 0,
      fontSize: '1.5rem',
      backgroundColor: 'rgba(209, 0, 108, 0.2)',
      color: '#222',
      fontStyle: 'italic',
      paddingLeft: rhythm(13 / 16),
      marginLeft: rhythm(-1),
      marginBottom: '50px',
      borderLeft: `${rhythm(3 / 16)} solid rgba(209, 0, 108, 0.9)`,
    },
    'ul,ol': {
      marginLeft: 0,
    },
    [MOBILE_MEDIA_QUERY]: {
      'ul,ol': {
        marginLeft: rhythm(1),
      },
      blockquote: {
        marginLeft: rhythm(-3 / 4),
        marginRight: 0,
        paddingLeft: rhythm(9 / 16),
      },
    },
    'h1,h2,h3,h4,h5,h6': {
      color: '#d2006b',
      letterSpacing: '0.02rem',
      margin: 0,
      fontDisplay: 'swap',
      marginTop: rhythm(2),
      marginBottom: rhythm(1),
    },
    h1: {
      fontSize: '5.5rem',
    },
    h2: {
      fontSize: '4.2rem',
    },
    h3: {
      fontSize: '3.2rem',
    },
    h4: {
      fontSize: '2.2rem',
    },
    'p, span': {
      paddingTop: rhythm(13 / 16),
      fontDisplay: 'swap',
      fontSize: '1.6rem',
    },
    'mark, ins': {
      background: '#007acc',
      color: 'white',
      padding: `${rhythm(1 / 16)} ${rhythm(1 / 8)}`,
      textDecoration: 'none',
    },
  }),
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
