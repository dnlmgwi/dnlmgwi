/**
 * Utility functions for image handling and validation
 */

/**
 * Validates if an image URL is accessible
 * @param src - Image URL to validate
 * @returns Promise that resolves to true if image loads successfully
 */
export const validateImageUrl = (src: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
};

/**
 * Filters an array of image URLs to only include valid ones
 * @param imageUrls - Array of image URLs to validate
 * @returns Promise that resolves to array of valid image URLs
 */
export const filterValidImages = async (imageUrls: string[]): Promise<string[]> => {
  const validationResults = await Promise.all(
    imageUrls.map(async (url) => {
      const isValid = await validateImageUrl(url);
      return isValid ? url : null;
    })
  );

  return validationResults.filter((url): url is string => url !== null);
};

/**
 * Creates a fallback image URL (placeholder service)
 * @param width - Image width
 * @param height - Image height
 * @param text - Optional text to display
 * @returns Placeholder image URL
 */
export const createFallbackImage = (
  width: number = 400, 
  height: number = 600, 
  text: string = 'Image Not Available'
): string => {
  return `https://via.placeholder.com/${width}x${height}/e7e5e4/78716c?text=${encodeURIComponent(text)}`;
};