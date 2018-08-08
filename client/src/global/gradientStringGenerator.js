const genGradient = (colors, direction) => `linear-gradient(to ${direction}, ${
  colors.length > 1 ? colors.join(', ') : '#001529, #001529'
});`;
export default genGradient;
