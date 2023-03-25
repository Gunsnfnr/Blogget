import {useState} from 'react';
import PropTypes from 'prop-types';
import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text/Text';
import {useAuth} from '../../../hooks/useAuthHook';

export const Auth = ({token, delToken}) => {
  const [auth, setAuth] = useAuth(token);
  const [isVisible, setVisible] = useState(false);
  // const [auth, setAuth] = useState({});
  const logoutHandler = () => {
    delToken();
    setAuth({});
    location.href = 'http://localhost:3000/';
  };

  // // token += 'break token';
  // useEffect(() => {
  //   if (!token) return;
  //   fetch(`${URL_API}/api/v1/me`, {
  //     headers: {
  //       Authorization: `bearer ${token}`,
  //     },
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         console.log('response: ', response);
  //         return response.json();
  //       }
  //       if (response.status === 401) {
  //         console.log('response.status 401');
  //         delToken();
  //       }
  //       console.log('response: ', response);
  //       throw new Error('Something went wrong');
  //     })
  //     .then(({name, icon_img: iconImg}) => {
  //       const img = iconImg.replace(/\?.*$/, '');
  //       setAuth({name, img});
  //     })
  //     .catch(err => {
  //       console.log('err: ', err);
  //       setAuth({});
  //     });
  // }, [token]);

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

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
