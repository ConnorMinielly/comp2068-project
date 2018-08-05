const genGradient = (colors, direction) => {
  let directionString = '';
  switch (direction) {
    case 'right':
      directionString = 'to right';
      break;
    case 'left':
      directionString = 'to right';
      break;
    case 'vertical':
      directionString = 'to right';
      break;
    default:
      directionString = 'to right';
      break;
  }

  return `linear-gradient(${directionString}, ${colors.join(', ')} )`;
};
export default genGradient;
