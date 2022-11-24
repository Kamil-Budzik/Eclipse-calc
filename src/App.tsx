import { ThemeProvider } from 'styled-components';

import MainPage from 'pages/index';

import GlobalStyle from 'styles/globalStyle';
import theme from 'styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
