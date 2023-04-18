import style from './HomePage.module.css';

export const HomePage = () => (
  <div className={style.container}>
    <div className={style.title}>Blogget</div>
    <div className={style.welcome}>Welcome</div>
    <div className={style.choose}>Choose category</div>
  </div>
);

