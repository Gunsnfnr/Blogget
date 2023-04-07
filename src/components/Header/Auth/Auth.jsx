import {useState, useContext} from 'react';
import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text/Text';
// import {tokenContext} from '../../../context/tokenContext';
import {authContext} from '../../../context/authContext';
import {deleteToken} from '../../../store/index.js';

export const Auth = () => {
  // const {delToken} = useContext(tokenContext);
  const [isVisible, setVisible] = useState(false);
  const {auth, clearAuth} = useContext(authContext);

  const logoutHandler = () => {
    deleteToken();
    clearAuth({});
    // location.href = 'http://localhost:3000/';
  };

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
      <Text className={style.authLink} As='a' href={urlAuth}>
        <LoginIcon width={30} height={30} />
      </Text>
      )}
    </div>
  );
};

