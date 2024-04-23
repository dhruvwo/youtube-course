import { useEffect, useState } from "react";

export default function useIsVisible(ref, rootMargin = "0px") {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const elementRef = ref?.current;
    if (!elementRef) return;
    if (elementRef == null) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin },
    );
    observer.observe(elementRef);
    return () => {
      if (elementRef) {
        observer.unobserve(elementRef);
        observer.disconnect();
      }
    };
  }, [ref, rootMargin]);

  return isVisible;
}
