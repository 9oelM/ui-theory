import { styled } from '../ui/styled.js';
import { renderDOM } from '../ui/renderDOM.js';
import { initializeHooks } from '../hooks/index.js';
const { useEffect } = initializeHooks();

const PhotoContainer = styled`figure``
  border: 1px solid black;
  min-width: 500px;
  min-height: 500px;
  display: flex;
`

const Photo = styled`img``
  max-width: 500px;
  max-height: 500px;
  margin: auto;
`

export default (store) => {
  const render = () => {
    const randomPhotoUrl = store.getState().randomPhotoUrl;
    
    useEffect(() => {
      if (randomPhotoUrl) console.log(`The URL has changed to ${randomPhotoUrl}`);
    }, [randomPhotoUrl]);
    
    Photo.setAttribute('loading', 'lazy');
    if (randomPhotoUrl) Photo.src = randomPhotoUrl;

    return renderDOM([
      Photo,
    ], PhotoContainer);
  }

  return render;
};
