import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'generatorStorage';

type TLocalStorageHandler<T> = [T, (value: T | ((val: T) => T)) => void | null];

export const useLocalStorage = <T>(
  key: string | undefined,
  initialValue: T
): TLocalStorageHandler<T> => {
  const readValue = useCallback(() => {
    try {
      const item = window.localStorage.getItem(STORAGE_KEY);
      const storedData = item ? JSON.parse(item) : {};

      if (!key) {
        return null;
      }

      return storedData[key] ?? initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);

      return initialValue;
    }
  }, [initialValue, key]);

  const [storedValue, setStoredValue] = useState(readValue);

  const setValue: TLocalStorageHandler<T>[1] = (value) => {
    const newValue = value instanceof Function ? value(storedValue) : value;

    setStoredValue(newValue);

    try {
      if (key) {
        const storedData = {
          ...JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '{}'),
          [key]: newValue,
        };

        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(storedData));
      }
    } catch (error) {
      console.error(`Error writing localStorage key "${key}":`, error);
    }
  };

  useEffect(() => {
    setStoredValue(readValue());
  }, [key, readValue]);

  useEffect(() => {
    try {
      if (key) {
        const storedData = {
          ...JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '{}'),
          [key]: storedValue,
        };

        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(storedData));
      }
    } catch (error) {
      console.error(`Error writing localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setValue];
};
