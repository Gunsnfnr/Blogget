import React, {useEffect, useRef, useState} from 'react';
import {Text} from '../../../UI/Text/Text.jsx';
import style from './FormComment.module.css';
import PropTypes from 'prop-types';

const FormComment = ({user}) => {
  const inputReference = useRef(null);
  const [showButton, setShowButton] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(inputReference.current.value);
    inputReference.current.value = '';
  };

  useEffect(() => {
    showForm && inputReference.current.focus();
  }, [showForm]);

  const handleBtn = () => {
    console.log('handleBtn');
    setShowButton(false);
    setShowForm(true);
  };

  return (
    <>
      {showButton && <button className={style.btn_center} onClick={handleBtn}>
        Написать комментарий
      </button>}
      {showForm && <form className={style.form} onSubmit={handlerSubmit}>
        <Text As='h3' size={14} tsize={18}>{user}</Text>
        <textarea ref={inputReference} className={style.textarea} ></textarea>
        <button className={style.btn}>Отправить</button>
      </form>}

    </>
  );
};
export default FormComment;

FormComment.propTypes = {
  user: PropTypes.string,
};

