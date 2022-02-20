import React from 'react';

import styles from './CheckBox.module.css';

import checkIcon from '../../assets/icons/icon-check.svg';

const CheckBox = props => {
  return (
    <div
      className={`${styles['check-box-outer']} 
        ${props.darkMode && styles['dark-mode']} 
        ${props.className} 
        ${props.isChecked && styles['checked']}`}
      //
      onClick={e => {
        e.stopPropagation();
        props.onClickCheckBox();
      }}
    >
      <div className={styles['check-box-inner']}>
        <img
          src={checkIcon}
          alt="check-icon"
          className={styles['check-box-icon']}
        />
      </div>
    </div>
  );
};

export default CheckBox;
