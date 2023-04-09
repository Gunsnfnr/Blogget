import React, {useState} from 'react';
import {Text} from '../../../UI/Text/Text.jsx';
import style from './FormComment.module.css';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {updateComment} from '../../../store/commentReducer';
import {useAuth} from '../../../hooks/useAuth.js';

const FormComment = () => {
  const value = useSelector(state => state.comment.comment);
  const dispatch = useDispatch();
  const [auth] = useAuth();

  const [showButton, setShowButton] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log('value: ', value);
  };

  const handleBtn = () => {
    setShowButton(false);
    setShowForm(true);
  };

  const handleChange = e => {
    dispatch(updateComment(e.target.value));
  };

  return (
    <>
      {showButton && <button className={style.btn_center} autoFocus onClick={handleBtn}>
        Написать комментарий
      </button>}
      {showForm && <form className={style.form} autoFocus onSubmit={handlerSubmit}>
        <Text As='h3' size={14} tsize={18}>{auth.name}</Text>
        <textarea className={style.textarea}
          value={value}
          onChange={handleChange}
        />
        <button className={style.btn}>Отправить</button>
      </form>}

    </>
  );
};
export default FormComment;

FormComment.propTypes = {
  user: PropTypes.string,
};

