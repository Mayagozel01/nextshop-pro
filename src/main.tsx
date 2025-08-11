import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import store from "./redux/store";
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { theme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import "./styles/global.css"



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
