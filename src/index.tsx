import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { getData } from './data/testData_v2';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  < React.StrictMode >
    <App presentation={getData()} />
  </React.StrictMode >
);