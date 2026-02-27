const getWidth = () => window.innerWidth;

// Responsive Font Size based on screen width
export const responsiveFont = (percent) => {
  const screenWidth = getWidth();
  const calculatedSize = (screenWidth * percent) / 100;

  return calculatedSize;
};
