import {Link} from 'react-router-dom';
import style from './Logo.module.css';
import {ReactComponent as LogoImg} from './img/logo.svg';

export const Logo = () =>
  <Link className={style.link} to='/'>
    <LogoImg width={30} height={30} />
  </Link>;

