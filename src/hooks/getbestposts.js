import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  postsDataRequest, postsDataRequestAsync,
} from '../store/postsData/postsDataAction';

export const useGetBestPosts = () => {
  const bestPosts = useSelector(state => state.postsData.data);
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();
  dispatch(postsDataRequest());
  useEffect(() => {
    dispatch(postsDataRequestAsync());
  }, [token]);
  return [bestPosts];
};

