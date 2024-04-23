import { isElementInViewport } from "@services/utils";
import { useEffect, useState } from "react";

export default function useOnScreen(ref, rootMargin = "10px 10px 10px 10px") {
  const [size, setSize] = useState();

  useEffect(() => {
    const elementRef = ref?.current;
    if (!elementRef) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setSize(
          entry.isIntersecting
            ? undefined
            : {
                height: elementRef?.offsetHeight,
                width: elementRef?.offsetWidth,
              },
        );
      },
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

  useEffect(() => {
    const resetSize = () => {
      setSize(undefined);
    };
    let timer;
    const elementRef = ref?.current;
    if (size && elementRef) {
      elementRef.addEventListener("mouseover", resetSize);
      timer = setInterval(() => {
        if (isElementInViewport(elementRef)) {
          resetSize();
        }
      }, 1000);
    }
    return () => {
      elementRef.removeEventListener("mouseover", resetSize);
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [size, ref]);

  return size;
}
