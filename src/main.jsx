import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import GabeApp from '@/components/GabeApp';
import '@/styles/app.css';



const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GabeApp />
    </BrowserRouter>
  </React.StrictMode>
);