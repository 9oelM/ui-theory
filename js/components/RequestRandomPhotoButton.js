import { styled } from '../ui/styled.js';
import { fetchSingleRandomPhoto } from '../api/api.js';
import { initializeHooks } from '../hooks/index.js';
import { updateRandomPhoto } from '../global-state/actions.js';

const { useEffect, useState } = initializeHooks();

const Button = styled`button``
  width: max-content;
  min-width: 250px;
  height: 50px;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
  font-size: 32px;
`

const RequestRandomPhotoButton = (store) => {
  const render = () => {
    const [isLoading, setIsLoading] = useState(false, render);

    const getRandomPhoto = async () => {
      setIsLoading(true);
      const { data, error } = await fetchSingleRandomPhoto();
      if (error) console.error(error);
      store.dispatch(updateRandomPhoto(data.url));
      setIsLoading(false);
    }

    useEffect(() => {
      getRandomPhoto();
    }, []);

    Button.onclick = getRandomPhoto;
    
    if (isLoading.value) Button.textContent = 'loading'
    else Button.textContent = 'click the button to request random image'

    return Button;
  }

  return render;
}

export default RequestRandomPhotoButton;
