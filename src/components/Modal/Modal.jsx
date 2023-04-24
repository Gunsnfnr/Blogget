import style from './Modal.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as CloseIcon} from './img/close.svg';
import ReactDOM from 'react-dom';
import {useEffect, useRef} from 'react';
import {Comments} from './Comments/Comments.jsx';
import FormComment from './FormComment/FormComment';
import {Text} from '../../UI/Text/Text';
import {commentsDataRequestAsync} from '../../store/comments/commentsAction.js';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';


export const Modal = () => {
  const {id, page} = useParams();
  const navigate = useNavigate();
  const token = useSelector(state => state.token.token);
  const post = useSelector(state => state.comments.post);
  const commentsData = useSelector(state => state.comments.comments);
  const status = useSelector(state => state.comments.status);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commentsDataRequestAsync(id));
  }, [token]);

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
        {status === 'loading' && 'Loading...'}
        {status === 'error' && 'An error occurred'}
        {status === 'loaded' && (
          <>
            <Comments comments={commentsData} />
            <Text As='p' className={[style.author]}>
              {post.author}
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
