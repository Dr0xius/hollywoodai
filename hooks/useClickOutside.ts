import { useEffect, useRef, RefObject } from "react";

export const useClickOutside = (
  handler: () => void,
): RefObject<HTMLDivElement> => {
  const domNodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const maybeHandler = (event: MouseEvent | TouchEvent) => {
      // If the click is NOT inside the element, trigger the handler (close)
      if (
        domNodeRef.current &&
        !domNodeRef.current.contains(event.target as Node)
      ) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);
    document.addEventListener("touchstart", maybeHandler); // Support for mobile

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
      document.removeEventListener("touchstart", maybeHandler);
    };
  }, [handler]);

  return domNodeRef;
};
