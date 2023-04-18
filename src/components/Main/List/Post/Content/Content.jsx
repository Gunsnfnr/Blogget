import style from './Content.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text/Text.jsx';
import {Link, useParams} from 'react-router-dom';

export const Content = ({title, author, markdown, id}) => {
  const {page} = useParams();
  return (
    <div className={style.content}>
      <Text As='h2' className={[style.title, style.medium]}>
        <Link className={style.linkPost} to={`/category/${page}/post/${id}`}>
          <Text bold
            size={18}
            tsize={24}
            className={style.linkPost}
          >
            {title}
          </Text>
        </Link>
      </Text>
      <Text
        As='a'
        size={12}
        tsize={14}
        color='orange'
        className={[style.linkAuthor, style.medium]}
        href="#author"
      >
        {author}
      </Text>
    </div>
  );
};


Content.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
};
