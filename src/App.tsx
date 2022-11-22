import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import MyThemeProvider from './providers/MyThemeProvider';
import Route from './routes';
import appStore from './store/stroe';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <MyThemeProvider>
        <Route />
      </MyThemeProvider>
    </Provider>
  </React.StrictMode>,
);
