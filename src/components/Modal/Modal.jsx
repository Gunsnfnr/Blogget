import style from './Modal.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as CloseIcon} from './img/close.svg';
// import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import {useEffect, useRef} from 'react';
import {useCommentsData} from '../../hooks/useCommentsData';
import {Comments} from './Comments/Comments.jsx';
import FormComment from './FormComment/FormComment';
import {Text} from '../../UI/Text/Text';
// import {authContext} from '../../context/authContext.jsx';
// import { AuthContextProvider } from '../../context/authContext.jsx';

export const Modal = ({closeModal, id, author}) => {
  const [commentsData] = useCommentsData(id);
  const comments = commentsData[1];
  const overlayRef = useRef(null);

  const handleClick = e => {
    const target = e.target;
    if (target === overlayRef.current) {
      closeModal();
    }
  };

  // const {auth} = useContext(authContext);
  // const user = auth.name;

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>

        <Text As='p' className={[style.author]}>{author}</Text>

        {/* <FormComment user = {auth.name}/> */}
        <FormComment/>

        <Comments comments={comments} />

        <button className={style.close} onClick={(e) => closeModal()}>
          <CloseIcon/>
        </button>
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
  closeModal: PropTypes.func,
};


// {/* <h2 className={style.title}>{title}</h2> */}

// {/* <div className={style.content}>
//   <Markdown options={{
//     overrides: {
//       a: {
//         props: {
//           target: '_blank',
//         },
//       },
//     },
//   }}>
//     {markdown}
//   </Markdown>
// </div> */}

// {/* <p className={style.author}>{author}</p> */}
