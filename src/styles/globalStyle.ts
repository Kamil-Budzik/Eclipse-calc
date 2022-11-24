import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 *, *::before, *::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
html, body, a, button {
  font-family: 'Source Sans Pro', 'Roboto', 'Arial', sans-serif;
}
`;

export default GlobalStyle;
