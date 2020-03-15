export const __useEffect = () => {
  const depsInClosure = {
    deps: [],
  }
  const isFirstRenderWrapper = {
    isFirstRender: true,
  }
  const updateDepsInClosure = (deps) => {
    depsInClosure.deps = []
    deps.forEach((dep) => depsInClosure.deps.push(dep));
  }

  return (callback, deps) => {
    if (isFirstRenderWrapper.isFirstRender) {
      updateDepsInClosure(deps);
    }
    if (isFirstRenderWrapper.isFirstRender || depsInClosure.deps.some((dep, idx) => dep !== deps[idx])) {
      callback();
      updateDepsInClosure(deps);
      isFirstRenderWrapper.isFirstRender = false;

      return;
    }
  }
};
