export const __useState = ({ renderCount, setRenderCount }) => {
  const valueInClosure = {
    value: undefined,
  }
  const renderInClosure = {
    render: undefined,
  }

  const setter = (newValue) => {
    valueInClosure.value = newValue;
    if (renderCount.value > 0) {
      renderInClosure.render();
    }
    setRenderCount(renderCount.value + 1);
  }

  return (initialValue, render) => {
    if (renderCount.value === 0) {
      renderInClosure.render = render
      setter(initialValue);
    }
  
    return [valueInClosure, setter];
   };
};

export const __useStateInteral = (() => {
  const valueInClosure = {
    value: undefined,
  }
  const setter = (newValue) => {
    valueInClosure.value = newValue;
  }

  return (initialValue) => {
      setter(initialValue);
    
      return [valueInClosure, setter];
   };
})();
