import React from 'react';
import './styles.scss';

const nextivaInput = props => {
  return [
    <label className="nextiva-name">{props.name}</label>,
    <input className="nextiva-input" {...props} />
  ];
};

export default nextivaInput;
