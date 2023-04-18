import {Text} from '../../../UI/Text/Text.jsx';
import style from './Comments.module.css';
import PropTypes from 'prop-types';
import {Date} from '../../Main/List/Post/Date/Date.jsx';

export const Comments = ({comments}) => {
  let returnContent = '<div>Loading...</div>';
  const returnArr = [];
  if (comments) {
    for (let i = 0; i < comments.length - 1; i++) {
      const fragment = (
        <li className={style.item} key = {i}>
          <Text As='h3' className={style.author} size={18} tsize={22}>{comments[i].author}</Text>
          <Text As='p' className={style.comment} size={14} tsize={18}>{comments[i].body}</Text>
          <Date date={comments[i].created} />
        </li>
      );
      if (comments[i].body) {
        returnArr.push(fragment);
      }
    }
    returnContent = (
      <ul className={style.list}>
        {returnArr}
      </ul>
    );
  } else {
    returnContent = (
      'There are no comments for this post'
    );
  }
  return comments ? returnContent : (
    ''
    // <div className={style.author}>Loading...</div>
  );
};

Comments.propTypes = {
  comments: PropTypes.array,
};
