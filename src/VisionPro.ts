/**
 * Determines if the current device is an Apple Vision Pro.
 *
 * @see https://www.reddit.com/r/visionosdev/comments/1azvzen/identifying_avp_users_on_web_pages/
 *
 * An Apple Vision Pro is defined as a device that:
 * 1. Is a Macintosh (as determined by the user agent string).
 * 2. Has exactly five touch points.
 *
 * @returns {boolean} True if the device is an Apple Vision Pro, false otherwise.
 */
export const isAppleVisionPro = (): boolean => {
  try {
    // Check if the user agent string includes "Macintosh"
    const isMacintosh = navigator.userAgent.includes("Macintosh");

    // Check if the device has exactly five touch points
    const hasFiveTouchPoints = navigator.maxTouchPoints === 5;

    // Return true if both conditions are met
    return isMacintosh && hasFiveTouchPoints;
  } catch (error) {
    console.error(
      "Error determining if the device is an Apple Vision Pro: ",
      error,
    );
    return false;
  }
};
