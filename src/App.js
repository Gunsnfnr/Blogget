import Header from './components/Header';
import Main from './components/Main';
import {Provider} from 'react-redux';
import {AuthContextProvider} from './context/authContext';
import {store} from './store/index.js';


const App = () => (
  <Provider store={store}>
    <AuthContextProvider>
      <Header />
      <Main />
    </AuthContextProvider>
  </Provider>
);

export default App;
