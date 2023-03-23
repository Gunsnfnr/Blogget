import {useState} from 'react';
import PropTypes from 'prop-types';
import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text/Text';
import {useAuth} from '../../../hooks/useAuthhook.js';

export const Auth = ({token, delToken}) => {
  const [auth, setAuth] = useState({});
  const [isVisible, setVisible] = useState(false);
  const logoutHandler = () => {
    delToken();
    setAuth({});
  };

  useAuth();

  return (
    <div className={style.container}>
      { auth.name ? (
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
          <button className={style.logout} onClick={() => logoutHandler()}>Logout</button> :
          <button className={style.logoutInvisible}>Logout</button>
          )}
        </>
      ) : (
      <Text className={style.aurhLink} As='a' href={urlAuth}>
        <LoginIcon width={30} height={30} />
      </Text>
      )}
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
  useAuth: PropTypes.func,
};
