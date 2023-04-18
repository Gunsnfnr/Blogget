import Layout from '../Layout';
import style from './Main.module.css';
import Tabs from './Tabs';
import List from './List';
import {Route, Routes} from 'react-router-dom';
import Modal from '../Modal';
import {HomePage} from './HomePage/HomePage.jsx';
import {Error} from './Error/Error.jsx';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Tabs />
      <Routes>
        <Route path='/category/:page' element={<List />}>
          <Route path='post/:id' element={<Modal/>} />
        </Route>
        <Route path='/' element={<HomePage />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </Layout>
  </main>
);


