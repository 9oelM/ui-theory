import { renderDOM } from './ui/renderDOM.js'
import { store } from './global-state/store.js'

import RequestRandomPhotoButton from './components/RequestRandomPhotoButton.js'
import Layout from './components/Layout.js'
import PhotoViewer from './components/PhotoViewer.js'

const main = () => {
  const root = document.getElementById('root');

  const render = (__store) => {
    renderDOM(
      [
        Layout()(),
        [
          PhotoViewer(__store)(),
          RequestRandomPhotoButton(__store)(),
        ]
      ],
      root,
    );
  }
    
  store.subscribe(() => {
    render(store);
  })

  render(store);
}

window.onload = main;