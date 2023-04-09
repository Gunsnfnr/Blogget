import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {URL_API} from '../api/const';
import {deleteToken} from '../store/tokenReducer';
// import {tokenContext} from '../context/tokenContext';

export const useGetBestPosts = () => {
  const [bestPosts, setBestPosts] = useState({});
  // const {token, delToken} = useContext(tokenContext);
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();

  useEffect(() => {
    token && fetch(`${URL_API}/best`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          // console.log('response: ', response);
          console.log('response.status 401');
          dispatch(deleteToken());
          throw new Error('Something went wrong');
        }
        return response.json();
      })
      .then(bestPosts => {
        setBestPosts(bestPosts.data.children);
      })
      .catch(err => {
        console.log('err: ', err);
      });
  }, [token]);
  return [bestPosts];
};

