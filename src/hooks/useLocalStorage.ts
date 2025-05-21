import { useState } from 'react';

function useLocalStorage(key: string, initialValue: string | null) {
  const [storageItem, setStorageItem] = useState<string | null>(() => {
    try {
      const value = window.localStorage.getItem(key);

      return value ? value : initialValue;
    } catch (error) {
      void error;

      return initialValue;
    }
  });

  const setItem = (value: string) => {
    try {
      window.localStorage.setItem(key, value);
      setStorageItem(value);
    } catch (error) {
      console.error('Error setting localStorage key', key, error);
    }
  };

  const removeItem = () => {
    try {
      window.localStorage.removeItem(key);
      setStorageItem(initialValue);
    } catch (error) {
      console.error('Error removing localStorage key', key, error);
    }
  };

  return { storageItem, setItem, removeItem } as const;
}

export default useLocalStorage;
