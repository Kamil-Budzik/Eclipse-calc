import RouterProvider from 'router';
import GlobalStyle from 'styles/globalStyle';
import { store } from 'store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <RouterProvider />
    </Provider>
  );
}

export default App;
