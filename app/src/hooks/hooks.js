import { useState, useEffect } from 'react';

// eslint-disable-next-line import/prefer-default-export
export const useLocalStorage = key => {
  const [value, setValue] = useState(localStorage.getItem(key) || '');

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);

  return [value, setValue];
};
