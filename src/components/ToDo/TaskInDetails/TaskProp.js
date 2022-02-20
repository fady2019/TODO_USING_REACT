import React from 'react';

import styles from './TaskProp.module.css';

import { formatDate, formatDateTime, toCapitalize } from '../../../common';

const TaskProp = props => {
  let propKey = props.propKey;
  let propVal = props.propVal;

  if (
    ['date', 'creation date', 'last update'].findIndex(
      val => val === propKey
    ) !== -1
  ) {
    if (propKey === 'date') {
      propVal = formatDate(propVal);
    } else {
      propVal = formatDateTime(propVal);
    }
  }

  return (
    <div
      className={`${styles['task-prop']} ${
        props.darkMode && styles['dark-mode']
      }`}
    >
      <h4 className={styles['prop-key']}>{toCapitalize(propKey)}</h4>
      <span className={styles['prop-value']}>{propVal}</span>
    </div>
  );
};

export default TaskProp;
