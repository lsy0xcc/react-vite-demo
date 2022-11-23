import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import muiCustomTheme from './constants/muiCustomTheme';
import { DialogProvider } from './hooks/useDialog';
import './index.css';
import Route from './routes';
import appStore from './store/stroe';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <ThemeProvider theme={muiCustomTheme}>
        <DialogProvider>
          <Route />
        </DialogProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
