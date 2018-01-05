import React from 'react';
import ReactDOM from 'react-dom';
import {
  Lightbox,
  LightboxTrigger,
  LightboxModal
} from "react-image-lightbox";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
