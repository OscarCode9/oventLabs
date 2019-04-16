import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types'
import  AppProvider from './AppProvider'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ContextOneProvider } from "./Redux/store";

AOS.init();

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#6ec6ff',
      dark: '#0069c0',
      contrastText: '#ffffff',
      main: '#2196f3',
    },
    secondary: {
      light: '#9cff57',
      dark: '#1faa00',
      contrastText: '#000000',
      main: '#64dd17',
    },
    // error: will use the default color
  },
});

class App extends Component {
  render() {
    return (
      <ContextOneProvider> 
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <AppProvider />
        </div>
      </MuiThemeProvider>
      </ContextOneProvider>
    );
  }
}

export default App;
