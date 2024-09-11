import { useState, useEffect } from 'react';


/**
 * @name useMediaQuery
 * @description A React hook that detects whether a media query is true or false.
 * @param {string} queryString The media query to test against.
 * @returns {boolean} Whether the media query is true or false.
 */

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const handleChange = (event) => setMatches(event.matches);

    mediaQueryList.addEventListener('change', handleChange);

    return () => {
      mediaQueryList.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
