import { describe, expect, it, vi } from "vitest";
import { isAppleVisionPro } from "../src";

describe("isAppleVisionPro", () => {
  it('should return true if the user agent includes "Macintosh" and maxTouchPoints is 5', () => {
    // Mocking navigator properties
    Object.defineProperty(window.navigator, "userAgent", {
      value: "Macintosh",
      configurable: true,
    });
    Object.defineProperty(window.navigator, "maxTouchPoints", {
      value: 5,
      configurable: true,
    });

    expect(isAppleVisionPro()).toBe(true);
  });

  it('should return false if the user agent does not include "Macintosh"', () => {
    // Mocking navigator properties
    Object.defineProperty(window.navigator, "userAgent", {
      value: "Windows",
      configurable: true,
    });
    Object.defineProperty(window.navigator, "maxTouchPoints", {
      value: 5,
      configurable: true,
    });

    expect(isAppleVisionPro()).toBe(false);
  });

  it("should return false if maxTouchPoints is not 5", () => {
    // Mocking navigator properties
    Object.defineProperty(window.navigator, "userAgent", {
      value: "Macintosh",
      configurable: true,
    });
    Object.defineProperty(window.navigator, "maxTouchPoints", {
      value: 4,
      configurable: true,
    });

    expect(isAppleVisionPro()).toBe(false);
  });

  it("should return false and log an error if accessing navigator properties throws an error", () => {
    // Mocking console.error
    const consoleErrorSpy = vi.spyOn(console, "error");

    // Mocking navigator properties to throw an error
    Object.defineProperty(window.navigator, "userAgent", {
      get: () => {
        throw new Error("User agent access error");
      },
      configurable: true,
    });

    expect(isAppleVisionPro()).toBe(false);
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Error determining if the device is an Apple Vision Pro: ",
      new Error("User agent access error"),
    );

    // Resetting the mocks
    consoleErrorSpy.mockRestore();
  });
});
