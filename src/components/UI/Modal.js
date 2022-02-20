import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.css';

import Backdrop from './Backdrop';

const Modal = props => {
  return ReactDOM.createPortal(
    <Fragment>
      <Backdrop darkMode={props.darkMode} />

      <div className={`overflow-auto ${styles.modal}`}>{props.children}</div>
    </Fragment>,
    document.getElementById('modal-root')
  );
};

export default Modal;
