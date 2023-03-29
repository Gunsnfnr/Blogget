import style from './Content.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text/Text.jsx';
import {useState} from 'react';
import Modal from '../../../../Modal';

export const Content = ({title, author, markdown}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={style.content}>
      <Text As='h2' className={[style.title, style.medium]}>
        <Text As='a'
          size={18}
          tsize={24}
          className={style.linkPost}
          href='#post'
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          {title}
        </Text>
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
      {isModalOpen && (<Modal
        markdown={markdown}
        title={title}
        author={author}
        closeModal={
          () => {
            setIsModalOpen(false);
          }} />)}
    </div>
  );
};

Content.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
};
