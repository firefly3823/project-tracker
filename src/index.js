import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
import ContextShare from './contexts/ContextShare';
import AuthToken from './contexts/AuthToken';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextShare>
      <AuthToken>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthToken>
    </ContextShare>
  </React.StrictMode>
);


