import { actionTypes } from './actionTypes.js';

export const updateRandomPhoto = (randomPhotoUrl) => ({
  type: actionTypes.UPDATE_RANDOM_PHOTO_URL,
  randomPhotoUrl,
});
