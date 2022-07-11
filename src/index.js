import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import AppRoutes from './AppRoutes'

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div id="ApplicationContainer">
      <h1 id="pageTitle">AC/DC Studio Albums</h1>

      <div className="ApplicationContent">
        <AppRoutes />
      </div>

      <footer id="pageFooter">
        by <a href="https://github.com/rodrigovdb">@rodrigovdb</a>
      </footer>
    </div>
  </React.StrictMode>
)

reportWebVitals();