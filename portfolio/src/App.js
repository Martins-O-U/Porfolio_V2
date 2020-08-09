import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './styles/theme.styles';
import { GlobalStyles } from './styles/global.styles';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import WebsiteRouter from './components/Router/WebsiteRouter';




const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <WebsiteRouter />

        <ToastContainer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
