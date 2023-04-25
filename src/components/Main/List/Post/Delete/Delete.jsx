import style from './Delete.module.css';
import {ReactComponent as DeleteIcon} from '../img/delete.svg';

export const Delete = () => (
  <button className={style.delete}>
    <DeleteIcon width={25} height={25}/>
  </button>
);

