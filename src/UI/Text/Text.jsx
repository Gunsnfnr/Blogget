import classNames from 'classnames';
import style from './Text.module.css';
import PropTypes from 'prop-types';

export const Text = prop => {
  const {
    As = 'span',
    color = 'black',
    bold,
    medium,
    size,
    tsize,
    dsize,
    className,
    children,
    href,
    center,
  } = prop;

  const classes = classNames(
    className,
    bold,
    medium,
    style[color],
    {[style.center]: center},
    {[style[`fs${size}`]]: size},
    {[style[`fst${size}`]]: tsize},
    {[style[`fst${size}`]]: dsize},
  );


  return <As className={classes} href={href}>{children}</As>;
};

Text.propTypes = {
  As: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  tsize: PropTypes.number,
  dsize: PropTypes.number,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  fontWeight: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
    PropTypes.number,
  ]),
  href: PropTypes.string,
  center: PropTypes.bool,
};


