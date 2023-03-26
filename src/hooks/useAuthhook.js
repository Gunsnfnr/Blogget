import {useState, useEffect, useContext} from 'react';
import {URL_API} from '../api/const.js';
import {tokenContext} from '../context/tokenContext';


export const useAuth = () => {
  const [auth, setAuth] = useState({});
  const {token, delToken} = useContext(tokenContext);

  // token += 'break  token';

  useEffect(() => {
    if (!token) return;
    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          console.log('response.status 401');
          delToken();
          throw new Error('Something went wrong');
        }
        return response.json();
      })
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      })
      .catch(err => {
        console.log('err: ', err);
        setAuth({});
        delToken();
      });
  }, [token]);

  const clearAuth = () => setAuth({});

  return [auth, clearAuth];
};
