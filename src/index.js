import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import DataProvider from './Context/DataContext'

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);