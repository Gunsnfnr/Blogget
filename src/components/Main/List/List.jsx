// import {useGetBestPosts} from '../../../hooks/getbestposts.js';
import style from './List.module.css';
import Post from './Post';
import {useContext} from 'react';
import {postsContext} from '../../../context/postsContext.jsx';

export const List = () => {
  const {bestPosts} = useContext(postsContext);
  const postsData = [];
  // console.log('bestPosts[0]:', bestPosts[0]);
  // console.log('bestPosts[1]:', bestPosts[1]);
  for (let i = 0; i < bestPosts.length; i++) {
    postsData[i] = {
      title: bestPosts[i].data.title,
      author: bestPosts[i].data.author,
      ups: bestPosts[i].data.ups,
      markdown: bestPosts[i].data.selftext,
      date: bestPosts[i].data.created,
      id: bestPosts[i].data.id,
      thumbnail: bestPosts[i].data.thumbnail,
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


