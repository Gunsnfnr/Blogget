import Layout from '../Layout';
import style from './Main.module.css';
import Tabs from './Tabs';
import List from './List';
import {PostsContextProvider} from '../../context/postsContext.jsx';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Tabs />
      <PostsContextProvider>
        <List />
      </PostsContextProvider>
    </Layout>
  </main>
);

