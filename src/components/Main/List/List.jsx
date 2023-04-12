import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postsDataRequestAsync} from '../../../store/postsData/postsDataAction.js';
import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const bestPosts = useSelector(state => state.postsData.data);
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsDataRequestAsync());
  }, [token]);

  return (
    <ul className={style.list}>
      {bestPosts.map((postsData) => (
        <Post key={postsData.id} postData={postsData} />
      ))}
    </ul>
  );
};


