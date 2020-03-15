export const renderDOM = (arrayOfHTMLElements, parent) => {
    if (!Array.isArray(arrayOfHTMLElements)) {
      throw new Error('htmlelements is not array');
    } else {
      arrayOfHTMLElements.forEach((element, currentIndex) => {
          if (Array.isArray(element)) {
            const cannotUsePrevElementAsParent = Array.isArray(arrayOfHTMLElements[currentIndex - 1])
            renderDOM(element, currentIndex === 0 || cannotUsePrevElementAsParent ? parent : arrayOfHTMLElements[currentIndex - 1]);
          } else {
            parent.appendChild(element);
          }
      });
    };

    return parent;
  }
