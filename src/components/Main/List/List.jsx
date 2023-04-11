import style from './List.module.css';
import Post from './Post';
import {useGetBestPosts} from '../../../hooks/getbestposts.js';

export const List = () => {
  const [bestPosts] = useGetBestPosts();
  const postsData = [];
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


