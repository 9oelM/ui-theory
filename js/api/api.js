import { tryCatchWrapper } from './tryCatchWrapper.js';

export const RANDOM_PHOTO_URL = 'https://source.unsplash.com/random';

export const fetchSingleRandomPhoto = () => tryCatchWrapper(fetch(RANDOM_PHOTO_URL));

