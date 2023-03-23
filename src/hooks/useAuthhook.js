import {useState, useEffect} from 'react';
import {URL_API} from '../api/const.js';
import {delToken} from './useToken.js';

export const useAuth = (state) => {
  const [token, setAuth] = useState(state);
  // token += 'break token';
  useEffect((state) => {
    if (!token) return;
    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log('response: ', response);
          return response.json();
        }
        if (response.status === 401) {
          console.log('response.status 401');
          delToken();
        }
        console.log('response: ', response);
        throw new Error('Something went wrong');
      })
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      })
      .catch(err => {
        console.log('err: ', err);
        setAuth({});
      });
  }, [token]);
};

