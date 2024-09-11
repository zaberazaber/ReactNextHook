// src/hooks/useIntersectionObserver.js

import { useState, useEffect, useRef } from 'react';

export const useIntersectionObserver = (options) => {
  const [entry, setEntry] = useState(null);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setEntry(entry);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, entry];
};

export default useIntersectionObserver;
