import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../style/style.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { CookiesProvider } from 'react-cookie';

const MyApp = () => (
  <CookiesProvider>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </CookiesProvider>
);

ReactDOM.render(
  <MyApp />,
  document.getElementById('root')
);
