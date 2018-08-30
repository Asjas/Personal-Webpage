import Typography from 'typography';

const { rhythm, scale } = typography;

const typography = new Typography({
  baseFontSize: '10px',
  baseLineHeight: 1.45,
  headerFontFamily: ['Playfair Display'],
  bodyFontFamily: ['Montserrat'],
});

export { rhythm, scale, typography as default };
