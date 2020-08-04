import { useState, useEffect } from 'react';

function parseJsonOr<T>(str:string|null, def:T){
  if (str === null) return def;
  return JSON.parse(str) as T;
}

function usePersistentState<T>(key:string, defaultValue:T):[T, React.Dispatch<T>] {
    const [state, setState] = useState<T>(
      () => parseJsonOr<T>(localStorage.getItem(key), defaultValue)
    );
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);
    return [state, setState];
  }
  

export default usePersistentState;