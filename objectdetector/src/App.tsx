import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CssBaseline, ThemeOptions, ThemeProvider } from '@mui/material';
import { Box, createTheme } from '@mui/material';
import themeObj from './theme';
import RootStoreProvider from './provider/RootStoreProvider';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const theme = createTheme(themeObj as ThemeOptions)
  return (
    <Box sx={{height:'100vh'}}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
        <Header/>
        <Main/>
    </ThemeProvider>
    </Box>
  );
}

export default App;
