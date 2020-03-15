import { styled } from '../ui/styled.js';
import { renderDOM } from '../ui/renderDOM.js';
import { useEffect } from '../hooks/index.js';

const PhotoContainer = styled`figure``
  border: 1px solid black;
  min-width: 500px;
  min-height: 500px;
`

const Photo = styled`img```

export default (store) => {
  const render = () => {
    const randomPhotoUrl = store.getState().randomPhotoUrl;

    useEffect(() => {
      if (randomPhotoUrl) {
        Photo.src = randomPhotoUrl;
      }
    }, [randomPhotoUrl])

    Photo.setAttribute('loading', 'lazy');

    return renderDOM([
      Photo,
    ], PhotoContainer);
  }

  return render;
};