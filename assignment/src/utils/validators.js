export const validateUrlFormat = (inputUrl) => {
  try {
    new URL(inputUrl);
    return true;
  } catch (error) {
    return false;
  }
};
