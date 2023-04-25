import {useState} from 'react';
import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text/Text';
import {deleteToken} from '../../../store/tokenReducer';
import {useDispatch} from 'react-redux';
import {useAuth} from '../../../hooks/useAuth.js';
import Authloader from '../../../UI/Authloader';
import {Link} from 'react-router-dom';

export const Auth = () => {
  const [isVisible, setVisible] = useState(false);
  const [auth, loading, clearAuth] = useAuth();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(deleteToken());
    clearAuth({});
    // location.href = 'http://localhost:3000/';
  };

  return (
    <div className={style.container}>
      { loading ? (
        <Authloader />
      ) : auth.name ? (
        <>
          <button className={style.btn} onClick={() => {
            setVisible(!isVisible);
          }}>
            <img
              className={style.img}
              src={auth.img}
              title={auth.name}
              alt={`Аватар ${auth.name}`}
            />
          </button>
          {(isVisible ?
            <Link to='/'>
              <button className={style.logout} onClick={() => logoutHandler()}>Logout</button>
            </Link> :
          <button className={style.logoutInvisible}>Logout</button>
          )}
        </>
      ) : (
      <Text className={style.authLink} As='a' href={urlAuth}>
        <LoginIcon width={30} height={30} />
      </Text>
      )}
    </div>
  );
};

