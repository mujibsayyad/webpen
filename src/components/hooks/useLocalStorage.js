import { useState, useEffect } from 'react';

let PREFIX = 'webpen';

const useLocalStorage = (key, initialValue) => {
  let i = 0;
  console.log('🚀 useLocalStorage rendered', i++);

  let prefixKey = PREFIX + key;

  const [value, setValue] = useState(() => {
    let jsonValue = localStorage.getItem(prefixKey);
    if (jsonValue !== null) return JSON.parse(jsonValue);

    if (typeof initialValue === 'function') {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixKey, JSON.stringify(value));
  }, [prefixKey, value]);

  return [value, setValue];
};

export default useLocalStorage;
