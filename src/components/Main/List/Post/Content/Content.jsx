import style from './Content.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text/Text.jsx';
import {useState} from 'react';
import Modal from '../../../../Modal';
export let modalIsClosed = true;
// console.log('modalIsClosed: ', modalIsClosed);

export const Content = ({title, author, markdown, id}) => {
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
            modalIsClosed = false;
            // console.log('modalIsClosed: ', modalIsClosed);
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
        id={id}
        // markdown={markdown}
        // title={title}
        author={author}
        closeModal={
          () => {
            setIsModalOpen(false);
            modalIsClosed = true;
            // console.log('modalIsClosed: ', modalIsClosed);
          }} />)}
    </div>
  );
};

Content.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
};
