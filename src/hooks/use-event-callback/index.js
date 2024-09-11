// src/hooks/useEventCallback.js

import { useCallback, useRef } from 'react';

export const useEventCallback = (callback) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  return useCallback((...args) => {
    callbackRef.current(...args);
  }, []);
};

export default useEventCallback;
