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
import {useNavigate, useParams} from 'react-router-dom';


export const Modal = () => {
  const {id, page} = useParams();
  const navigate = useNavigate();
  const token = useSelector(state => state.token.token);
  const loading = useSelector(state => state.commentsData.loading);
  const error = useSelector(state => state.commentsData.error);
  const commentsData = useSelector(state => state.commentsData.data);

  const dispatch = useDispatch();
  let status = '';

  useEffect(() => {
    dispatch(commentsDataRequestAsync(id));
  }, [token]);

  const comments = commentsData[1];

  if (loading) {
    status = 'loading';
  }
  if (error) {
    status = 'error';
  }
  if (comments) {
    status = 'loaded';
  }

  const overlayRef = useRef(null);

  const handleClick = e => {
    const target = e.target;
    if (target === overlayRef.current) {
      navigate(`/category/${page}`);
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
            <Text As='p' className={[style.author]}>
              {/* {author} */}
              Автор поста
            </Text>
            <FormComment/>

            <button className={style.close} onClick={() => {
              navigate(`/category/${page}`);
            }
            }>
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
