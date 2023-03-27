import style from './Post.module.css';
import PropTypes from 'prop-types';
import ImgCopmponent from './ImgComponent';
import Content from './Content';
import Rating from './Rating';
import Delete from './Delete';
import Date from './Date';

export const Post = ({postData}) => {
  const {title, author, ups, date} = postData;
  return (
    <li className={style.post}>
      <ImgCopmponent />
      <Content title={title} author={author}/>
      <Rating ups={ups}/>
      <Delete />
      <Date date={date}/>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};

