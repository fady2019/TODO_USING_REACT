import React from 'react';

import styles from './TaskGroups.module.css';
import Task from './Task';

import { formatDate } from '../../../common';

const TaskGroups = props => {
  return (
    <div
      className={`
        ${styles['tasks-group']} ${props.darkMode && styles['dark-mode']}`}
    >
      <h4 className={styles['group-date']}>{formatDate(props.group.date)}</h4>

      {props.group.tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          darkMode={props.darkMode}
          //
          onClickCheckBox={taskId => {
            props.onClickCheckBox(props.group.id, taskId);
          }}
          //
          onShowTaskInDetails={task => {
            props.onShowTaskInDetails(task);
          }}
        />
      ))}
    </div>
  );
};

export default TaskGroups;
