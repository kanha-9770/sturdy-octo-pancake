const loadImage = async (path) => {
  try {
    const image = await import(`${path}`);
    return image.default;
  } catch (error) {
    console.error("Error loading image:", error);
    return null; // Return a default or placeholder image path if needed
  }
};
