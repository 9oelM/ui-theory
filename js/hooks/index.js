import { __useEffect } from './useEffect.js';
import { __useState, __useStateInteral } from './useState.js';

export const initializeHooks = () => {
  // setState just for internal use
  const useStateInternal = __useStateInteral();
  const [renderCount, setRenderCount] = useStateInternal(0);
  // for external use
  const useEffect = __useEffect({ renderCount, setRenderCount });
  const useState = __useState({ renderCount, setRenderCount });

  return { useEffect, useState }
};
