import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {
  const localStorageName = "squares-" + key ;

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(localStorageName) 
    if (jsonValue != null)  return JSON.parse(jsonValue)
    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(localStorageName, JSON.stringify(value));
  }, [localStorageName, value]);

  return [value, setValue];
}
