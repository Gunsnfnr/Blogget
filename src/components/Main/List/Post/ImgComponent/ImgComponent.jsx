import style from './ImgComponent.module.css';
import notphoto from './../img/notphoto.jpg';
import {useState} from 'react';

export const ImgComponent = (thumbnail) => {
  const [loading, setLoading] = useState(false);
  const img = new Image();
  img.src = thumbnail.thumbnail;
  img.onload = function() {
    setLoading(true);
  };
  img.onerror = function() {
    setLoading(false);
  };
  return (loading ?
    <img className={style.img} src={thumbnail.thumbnail} alt='{title}' /> :
    <img className={style.img} src={notphoto} alt='{title}' />
  );
};

// export const ImgComponent = (thumbnail) => (
//   <img className={style.img} src={thumbnail.thumbnail} alt='{title}' />
// );
