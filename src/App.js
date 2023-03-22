import Header from './components/Header';
import Main from './components/Main';
import {useToken, delToken} from './hooks/useToken';


function App() {
  const [token] = useToken('');

  return (
    <>
      <Header token={token} delToken={delToken} />
      <Main />
    </>
  );
}

export default App;
