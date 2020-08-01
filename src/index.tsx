import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ThemeProvider } from "@material-ui/styles";
import { theme } from './config/CustomTheme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      
      <App />
      
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
