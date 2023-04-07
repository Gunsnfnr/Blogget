import {useState, useEffect} from 'react';
import {URL_API} from '../api/const.js';
import {getToken} from '../api/token.js';
import {deleteToken} from '../store/index.js';
// import {tokenContext} from '../context/tokenContext';


export const useAuth = () => {
  const [auth, setAuth] = useState({});
  // const {token, delToken} = useContext(tokenContext);
  const token = getToken();
  // console.log('token: ', token);

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
          deleteToken();
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
        deleteToken();
      });
  }, [token]);

  const clearAuth = () => setAuth({});

  return [auth, clearAuth];
};
