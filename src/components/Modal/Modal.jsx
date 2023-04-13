import style from './Modal.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as CloseIcon} from './img/close.svg';
import ReactDOM from 'react-dom';
import {useEffect, useRef} from 'react';
import {Comments} from './Comments/Comments.jsx';
import FormComment from './FormComment/FormComment';
import {Text} from '../../UI/Text/Text';
import {commentsDataRequestAsync} from '../../store/commentsData/commentsDataAction.js';
import {useDispatch, useSelector} from 'react-redux';


export const Modal = ({closeModal, id, author}) => {
  const token = useSelector(state => state.token.token);
  const loading = useSelector(state => state.commentsData.loading);
  const error = useSelector(state => state.commentsData.error);
  const commentsData = useSelector(state => state.commentsData.data);
  console.log('commentsData: ', commentsData);

  const dispatch = useDispatch();
  let status = '';

  useEffect(() => {
    dispatch(commentsDataRequestAsync(id));
  }, [token]);

  console.log('status: ', status);

  const comments = commentsData[1];

  loading ? status = 'loading' : '';
  error ? status = 'error' : '';
  (comments) ? status = 'loaded' : '';

  const overlayRef = useRef(null);

  const handleClick = e => {
    const target = e.target;
    if (target === overlayRef.current) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        {status === 'loading' && 'Загрузка...'}
        {status === 'error' && 'Ошибка'}
        {status === 'loaded' && (
          <>
            <Comments comments={comments} />
            <Text As='p' className={[style.author]}>{author}</Text>
            <FormComment/>

            <button className={style.close} onClick={(e) => closeModal()}>
              <CloseIcon/>
            </button>
          </>
        )}
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
