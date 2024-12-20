import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';
import ReactModal from "react-modal";


library.add(fas, far, fab)

const rootId = "root";

ReactModal.setAppElement(`#${rootId}`);
ReactModal.defaultStyles.content.background = "none";
ReactModal.defaultStyles.content.border = "none";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);

