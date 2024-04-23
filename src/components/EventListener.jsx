import useEventListener from "@hooks/useEventListener";
import { useState } from "react";

function EventListener() {
  const [isFocused, setIsFocused] = useState(true);
  useEventListener("focus", () => {
    setIsFocused(true);
  });
  useEventListener("blur", () => {
    setIsFocused(false);
  });

  return (
    <div>
      <div>Is window focused: {`${isFocused}`}</div>
    </div>
  );
}

export default EventListener;
