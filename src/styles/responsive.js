// Get current screen size
const getWidth = () => window.innerWidth;
const getHeight = () => window.innerHeight;

// Responsive Width (percentage based)
export const responsiveWidth = (percentageWidth) => {
  const screenWidth = getWidth();
  const percent =
    typeof percentageWidth === "number"
      ? percentageWidth
      : parseFloat(percentageWidth);

  return (screenWidth * percent) / 100;
};

// Responsive Height (percentage based)
export const responsiveHeight = (percentageHeight) => {
  const screenHeight = getHeight();
  const percent =
    typeof percentageHeight === "number"
      ? percentageHeight
      : parseFloat(percentageHeight);

  return (screenHeight * percent) / 100;
};

// Export actual values
export const WIDTH = getWidth();
export const HEIGHT = getHeight();
