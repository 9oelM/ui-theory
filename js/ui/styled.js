/**
 * when you use a syntax like styled(`button`)`width: 10px; height: 10px;` instead of
 * styled(`button`)(`width: 10px; height: 10px;`)
 */ 
const receiveCorrectStringInput = (mightBeString) => {
  if (Array.isArray(mightBeString)) return mightBeString[0];
  else return mightBeString;
}

const generateRandomString = (length) => {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
   
  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
   
  return text;
}

const initializeStyled = () => {
  const head = document.getElementsByTagName('head')[0];

  const classCache = {}

  return (tagName) => {
    const correctTagName = receiveCorrectStringInput(tagName);
    const element = document.createElement(correctTagName);

    return (styles) => {
      const correctStyles = receiveCorrectStringInput(styles);

      const classNameInCache = classCache[correctStyles];
      if (classNameInCache) {
        element.className = classNameInCache;
  
        return element;
      }
  
      const className = generateRandomString(7);
      const style = document.createElement('style');
      style.textContent = `.${className} { ${correctStyles} }`;
      head.appendChild(style);
  
      element.className = className;

      /**
       * Caveat: you should also write the order of styles the same
       * which is very inconvenient. But it just works now (to keep the simplicity)
       */
      classCache[correctStyles.replace(/\s+/g, '')] = className;
  
      return element;
    }
  }
}

export const styled = initializeStyled();
