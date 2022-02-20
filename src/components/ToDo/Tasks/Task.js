import React from 'react';

import CheckBox from '../../UI/CheckBox';

import styles from './Task.module.css';

const Task = props => {
  const taskInfo = props.task;

  return (
    <div
      className={`
        ${styles.task} 
        ${taskInfo.status === 'done' && styles.done} 
        ${props.darkMode && styles['dark-mode']}`}
      //
      onClick={() => {
        props.onShowTaskInDetails(taskInfo);
      }}
    >
      <h4 className={styles['task-title']}>{taskInfo.title}</h4>
      <span className={styles['task-des']}>{taskInfo.description}</span>

      <CheckBox
        className={styles['check-box']}
        darkMode={props.darkMode}
        isChecked={taskInfo.status === 'done'}
        //
        onClickCheckBox={() => {
          props.onClickCheckBox(props.task.id);
        }}
      />
    </div>
  );
};

export default Task;
