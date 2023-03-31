import React from 'react';
import {Text} from '../../../UI/Text/Text.jsx';
import style from './FormComment.module.css';
// import PropTypes from 'prop-types';

// import {authContext} from '../../../context/authContext.jsx';
// import PropTypes from 'prop-types';

// export const getUsername = () => {
//   const {auth} = useContext(authContext);
//   const user = auth.name;
//   console.log('username: ', user);
//   return user;
// };
// getUsername();

let formClass = style.noform;
let buttonClass = style.btn_center;

class FormComment extends React.Component {
  constructor(props) {
    super(props);
    this.inputReference = React.createRef();
  }

  handlerSubmit = (e) => {
    e.preventDefault();
    console.log(this.inputReference.current.value);
    this.inputReference.current.value = '';
  };
  handleBtn = () => {
    formClass = style.form;
    buttonClass = style.nobtn;
    console.log('handleBtn');
  };
  componentDidMount() {
    this.inputReference.current.focus();
  }

  render() {
    return (
      <>
        <button className={buttonClass} onClick={this.handleBtn}>
          Написать комментарий
        </button>
        <form className={formClass} onSubmit={this.handlerSubmit}>
          <Text As='h3' size={14} tsize={18}>Имя авторизованного пользователя</Text>
          <textarea ref={this.inputReference} className={style.textarea} ></textarea>
          <button className={style.btn}>Отправить</button>
        </form>
      </>);
  }
}
export default FormComment;
