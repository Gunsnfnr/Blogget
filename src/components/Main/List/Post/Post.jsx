import style from './Post.module.css';
import PropTypes from 'prop-types';
import ImgCopmponent from './ImgComponent';
import Content from './Content';
import Rating from './Rating';
import Delete from './Delete';
import Date from './Date';

export const Post = ({postData}) => {
  const {
    title,
    author,
    ups,
    markdown,
    date,
    thumbnail,
  } = postData;
  return (
    <li className={style.post}>
      <ImgCopmponent thumbnail={thumbnail}/>
      <Content title={title} author={author} markdown={markdown}/>
      <Rating ups={ups}/>
      <Delete />
      <Date date={date}/>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};

