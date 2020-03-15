import { __useEffect } from './useEffect.js';
import { __useState, __useStateInteral } from './useState.js';

export const { useEffect, useState } = (() => {
  // setState just for internal use
  const [renderCount, setRenderCount] = __useStateInteral(0);
  // for external use
  const useEffect = __useEffect();
  const useState = __useState({ renderCount, setRenderCount });

  return { useEffect, useState }
})();
