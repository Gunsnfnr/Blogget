import style from './Heading.module.css';
import PropTypes from 'prop-types';
import React from 'react';
import {Text} from '../../../UI/Text';

export const Heading = (props) =>
  <Text As='h1' size={22} tsize={26} center className={style.heading}>{props.text}</Text>;

Heading.propTypes = {
  text: PropTypes.string,
};

