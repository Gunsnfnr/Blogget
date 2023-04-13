import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CircleLoader} from 'react-spinners';
import {postsDataRequestAsync} from '../../../store/postsData/postsDataAction.js';
import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const bestPosts = useSelector(state => state.postsData.data);
  const token = useSelector(state => state.token.token);
  const loading = useSelector(state => state.postsData.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsDataRequestAsync());
  }, [token]);

  return (
    <ul className={style.list}>
      { (token && loading) ? (
        <CircleLoader color='#94f285' css={{display: 'block'}} size={150} />
      ) : bestPosts.map((postsData) => (
        <Post key={postsData.id} postData={postsData} />
      ))}
    </ul>
  );
};


