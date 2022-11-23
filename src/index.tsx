import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { getData } from './data/testData_v2';
import { addChangeTextBlockHandler } from './state';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function render() {
  root.render(
    < React.StrictMode >
      <App presentation={getData()} />
    </React.StrictMode >
  );
}

addChangeTextBlockHandler(render)

render()