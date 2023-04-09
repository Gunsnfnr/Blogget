import axios from 'axios';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {URL_API} from '../api/const.js';
import {
  authRequest,
  authRequestError,
  authRequestSuccess
} from '../store/auth/action.js';
import {deleteToken} from '../store/tokenReducer';


export const useAuth = () => {
  const [auth, setAuth] = useState({});
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;
    dispatch(authRequest());
    axios(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(({data: {name, icon_img: iconImg}}) => {
        const img = iconImg.replace(/\?.*$/, '');
        const data = {name, img};
        setAuth(data);
        dispatch(authRequestSuccess(data));
      })
      .catch(err => {
        console.log('err: ', err);
        setAuth({});
        dispatch(deleteToken());
        dispatch(authRequestError(err.toString()));
      });
  }, [token]);

  const clearAuth = () => setAuth({});

  return [auth, clearAuth];
};
