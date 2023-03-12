import style from './ImgComponent.module.css';
import notphoto from './../img/notphoto.jpg';

export const ImgComponent = () => {
  console.log(style);
  return (
    <img className={style.img} src={notphoto} alt='{title}' />
  );
};
