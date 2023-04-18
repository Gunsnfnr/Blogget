import style from './Error.module.css';

export const Error = () => (
  <div className={style.container}>
    <div className={style.title}>404</div>
    <div className={style.oops}>Ooops&nbsp;&nbsp;.&nbsp;.&nbsp;.</div>
    <div className={style.error_text}>The page your looking for is&nbsp;unavalable</div>
  </div>
);
