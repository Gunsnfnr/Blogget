import {useEffect, useContext, useState} from 'react';
import {URL_API} from '../api/const.js';
import {tokenContext} from '../context/tokenContext';

export const useGetBestPosts = () => {
  const [bestPosts, setBestPosts] = useState({});
  const {token, delToken} = useContext(tokenContext);

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
          delToken();
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

