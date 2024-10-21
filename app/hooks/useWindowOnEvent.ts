import { DependencyList, useEffect, useRef } from "react";

const useWindowOnEvent = (
  eventName: string,

  callback: (event?: any) => void,
  deps?: DependencyList | undefined,
  isCallImmediately?: boolean
): void => {
  const fnRef = useRef(callback);
  fnRef.current = callback;

  useEffect(() => {
    if (isCallImmediately) {
      fnRef.current();
    }
  }, [isCallImmediately, ...(deps || [])]);

  useEffect(() => {
    const handler = (event: any) => {
      fnRef.current(event);
    };
    window.addEventListener(eventName, handler);
    return () => window.removeEventListener(eventName, handler);
  }, deps || []);
};

export default useWindowOnEvent;
