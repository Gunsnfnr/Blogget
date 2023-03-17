import style from './Logo.module.css';
// import logo from './img/logo.svg';
import {ReactComponent as LogoImg} from './img/logo.svg';

export const Logo = () =>
  <a className={style.link} href='/'>
    <LogoImg width={30} height={30} />
    {/* <img className={style.logo} src={logo} alt="Логотип Blogget" /> */}
  </a>;

