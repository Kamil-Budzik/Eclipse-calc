import Title from 'components/shared/Title/Title';
import GlobalStyle from 'styles/globalStyle';
import theme from 'styles/theme';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Title title="Eclipse calculator" />
        <section>CONTENT</section>
      </div>
    </ThemeProvider>
  );
}

export default App;
