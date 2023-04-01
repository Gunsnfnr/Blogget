import React, {useEffect, useRef} from 'react';
import {Text} from '../../../UI/Text/Text.jsx';
import style from './FormComment.module.css';
import PropTypes from 'prop-types';

let formClass = style.noform;
let buttonClass = style.btn_center;

const FormComment = ({user, modalIsClosed}) => {
  const inputReference = useRef(null);
  console.log('modalIsClosed: ', modalIsClosed);

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(inputReference.current.value);
    inputReference.current.value = '';
  };

  useEffect(() => {
    if (modalIsClosed) {
      formClass = style.noform;
      buttonClass = style.btn_center;
    } else {
      formClass = style.form;
      buttonClass = style.nobtn;
    }
  }, [modalIsClosed]);

  useEffect(() => {
    inputReference.current.focus();
  }, []);

  const handleBtn = () => {
    formClass = style.form;
    buttonClass = style.nobtn;
    console.log('handleBtn');
  };

  return (
    <>
      <button className={buttonClass} onClick={handleBtn}>
        Написать комментарий
      </button>
      <form className={formClass} onSubmit={handlerSubmit}>
        <Text As='h3' size={14} tsize={18}>{user}</Text>
        <textarea ref={inputReference} className={style.textarea} ></textarea>
        <button className={style.btn}>Отправить</button>
      </form>

    </>
  );
};
export default FormComment;

FormComment.propTypes = {
  user: PropTypes.string,
  modalIsClosed: PropTypes.bool,
};

