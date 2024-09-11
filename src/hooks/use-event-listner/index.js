import { useEffect } from 'react';

export const useEventListener = (eventName, handler, element = window) => {
  useEffect(() => {
    const eventListener = (event) => handler(event);

    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, handler, element]);
};

export default useEventListener;
