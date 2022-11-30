import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addChangePresentationHandler, getState } from './data/testData_v2';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function render() {
  root.render(
    < React.StrictMode >
      <App presentation={getState()} />
    </React.StrictMode >
  );
}

addChangePresentationHandler(render);
render();