"use client";
import { useEffect } from "react";

export function ScrollRestorer() {
  useEffect(() => {
    // Restore scroll position after navigation
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    const targetLocale = sessionStorage.getItem("targetLocale");
    
    if (scrollPosition && targetLocale) {
      // Use multiple delays to ensure DOM is fully rendered
      const restoreScroll = () => {
        const position = parseInt(scrollPosition, 10);
        window.scrollTo({
          top: position,
          behavior: "instant" as ScrollBehavior
        });
        // Clear the stored values after restoring
        sessionStorage.removeItem("scrollPosition");
        sessionStorage.removeItem("targetLocale");
      };
      
      // Try immediately
      requestAnimationFrame(() => {
        restoreScroll();
        // Also try after a short delay to ensure content is loaded
        setTimeout(restoreScroll, 50);
      });
    }
  }, []);

  return null;
}

