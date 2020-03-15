import { actionTypes } from './actionTypes.js';

export const reducer = (prevState = {
  randomPhotoUrl: undefined,
}, action) => {
  switch(action.type) {
    case actionTypes.UPDATE_RANDOM_PHOTO_URL:
      return {
        ...prevState,
        randomPhotoUrl: action.randomPhotoUrl,
      }
  }
}
