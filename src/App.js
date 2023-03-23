import Header from './components/Header';
import Main from './components/Main';
import {useToken, delToken} from './hooks/useToken';
import {useAuth} from './hooks/useAuth';


function App() {
  const [token] = useToken('');

  return (
    <>
      <Header token={token} delToken={delToken} useAuth={useAuth}/>
      <Main />
    </>
  );
}

export default App;
