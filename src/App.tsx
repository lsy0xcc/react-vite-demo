import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.less';
import Route from './route';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Route />
  </React.StrictMode>,
);
