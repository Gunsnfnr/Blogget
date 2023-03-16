import style from './ImgComponent.module.css';
import notphoto from './../img/notphoto.jpg';

export const ImgComponent = () => (
  <img className={style.img} src={notphoto} alt='{title}' />
);
