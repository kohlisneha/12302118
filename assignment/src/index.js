import React from 'react';
import ReactDOM from 'react-dom/client';
import MainApp from './App';
import { BrowserRouter } from 'react-router-dom';


const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>
);
