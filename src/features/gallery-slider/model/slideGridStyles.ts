export const slideGridStyles = (index: number) => {
  // if (index % 5 === 0)
  //   return {
  //     gridRow: `span 2 / span 2`,
  //     gridColumn: `span 2 / span 2`,
  //     gridColumnStart: 1 + 4 * (index / 5),
  //     gridRowStart: 1,
  //   };

  return {
    gridRow: `span 1 / span 1`,
    gridColumn: `span 1 / span 1`,
    gridColumnStart: index + 1,
    // gridRowStart: 1 + Math.floor(((index - 1) % 4) / 2),
  };
};
