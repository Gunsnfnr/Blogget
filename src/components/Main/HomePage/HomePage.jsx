import {useSelector} from 'react-redux';
import style from './HomePage.module.css';

export const HomePage = () => {
  const token = useSelector(state => state.token.token);

  return (
    <div className={style.container}>
      <div className={style.title}>Blogget</div>
      <div className={style.welcome}>Welcome</div>
      {token ?
        <div className={style.choose}>Choose category</div> :
        <div className={style.choose}>Log in first</div>
      }
    </div>
  );
};

