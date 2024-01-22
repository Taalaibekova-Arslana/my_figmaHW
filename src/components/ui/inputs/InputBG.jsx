import React from 'react';
// import scss from './InputBG.module.scss';

const InputBG = ({ type, placeholder, className }) => {
	return <input className={className} type={type} placeholder={placeholder} />;
};

export default InputBG;
