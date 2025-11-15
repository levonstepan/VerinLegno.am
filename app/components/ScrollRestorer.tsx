"use client";
import { useEffect } from "react";

export function ScrollRestorer() {
  useEffect(() => {
    // Restore scroll position after navigation
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    const targetLocale = sessionStorage.getItem("targetLocale");
    
    if (scrollPosition && targetLocale) {
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        window.scrollTo(0, parseInt(scrollPosition, 10));
        // Clear the stored values after restoring
        sessionStorage.removeItem("scrollPosition");
        sessionStorage.removeItem("targetLocale");
      });
    }
  }, []);

  return null;
}

