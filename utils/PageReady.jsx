import { useEffect, useState } from "react";

export function usePageReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const handleReady = () => {
      // Wait for all images (even bg ones) to load
      const allImages = Array.from(document.images);
      const imagePromises = allImages.map((img) =>
        img.complete
          ? Promise.resolve()
          : new Promise((resolve) => {
              img.onload = img.onerror = resolve;
            })
      );

      Promise.all(imagePromises).then(() => {
        // Optional: wait a beat for smoother fade
        setTimeout(() => setReady(true), 300);
      });
    };

    if (document.readyState === "complete") {
      handleReady();
    } else {
      window.addEventListener("load", handleReady);
    }

    return () => window.removeEventListener("load", handleReady);
  }, []);

  return ready;
}
