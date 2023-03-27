// import {useGetBestPosts} from '../../../hooks/getbestposts.js';
import style from './List.module.css';
import Post from './Post';
import {useContext} from 'react';
import {postsContext} from '../../../context/postsContext.jsx';

export const List = () => {
  const {bestPosts} = useContext(postsContext);
  const postsData = [];
  for (let i = 0; i < bestPosts.length; i++) {
    postsData[i] = {
      thumbnail: bestPosts[i].data.thumbnail,
      title: bestPosts[i].data.title,
      author: bestPosts[i].data.author,
      ups: bestPosts[i].data.ups,
      date: bestPosts[i].data.created,
      id: bestPosts[i].data.id,
    };
  }
  return (
    <ul className={style.list}>
      {postsData.map((postsData) => (
        <Post key={postsData.id} postData={postsData} />
      ))}
    </ul>
  );
};


