import { createApiService } from "@services/api";
import { useCallback, useEffect, useRef, useState } from "react";

export default function useFetch(endpoint, options = {}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [value, setValue] = useState();
  const optionsRef = useRef(options);
  useEffect(() => {
    optionsRef.current = options;
  }, [options]);

  const callbackMemoized = useCallback(() => {
    setLoading(true);
    setError(undefined);
    createApiService(endpoint, optionsRef.current)
      .then(setValue)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [endpoint]);

  useEffect(() => {
    callbackMemoized();
  }, [callbackMemoized]);

  return { loading, error, value, forceFetch: callbackMemoized };
}
