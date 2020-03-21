export const __useEffect = ({ renderCount, setRenderCount }) => {
  const depsInClosure = {
    deps: [],
  }
  const updateDepsInClosure = (deps) => {
    depsInClosure.deps = []
    deps.forEach((dep) => depsInClosure.deps.push(dep));
  }

  return (callback, deps) => {
    const isFirstRender = renderCount.value === 0;
    const areDepsChanged = depsInClosure.deps.some((dep, idx) => dep !== deps[idx]);
    if (isFirstRender || areDepsChanged) {
      callback();
      updateDepsInClosure(deps);
      setRenderCount(renderCount.value + 1);
      return;
    }
  }
};
