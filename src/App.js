import Header from './components/Header';
import Main from './components/Main';
import {useDispatch} from 'react-redux';
import {AuthContextProvider} from './context/authContext';
import {updateToken} from './store/tokenReducer';
import {getToken} from './api/token';


const App = () => {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));

  return (
    <AuthContextProvider>
      <Header />
      <Main />
    </AuthContextProvider>
  );
};

export default App;
