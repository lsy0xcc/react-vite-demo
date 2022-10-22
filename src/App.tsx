import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.less';
import Route from './route';
import appStore from './store/stroe';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <Route />
    </Provider>
  </React.StrictMode>,
);
