import { useRef, useState } from "react";

import useEventListener from "./useEventListener";

export default function useWindowSizeDebounce() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const timer = useRef();

  const handleResize = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, 100);
  };

  useEventListener("resize", handleResize);

  return windowSize;
}
