import {useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {getToken} from '../api/token';
import {deleteToken} from '../store/index';
// import {tokenContext} from '../context/tokenContext';

export const useGetBestPosts = () => {
  const [bestPosts, setBestPosts] = useState({});
  // const {token, delToken} = useContext(tokenContext);
  const token = getToken();

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
          deleteToken();
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

