import React from 'react';

import styles from './TaskInDetailsBody.module.css';

import TaskProp from './TaskProp';

const TaskInDetailsBody = props => {
  return (
    <div
      className={`
          overflow-auto
          ${styles['task-in-details-body']} 
          ${props.darkMode && styles['dark-mode']}`}
    >
      {Object.keys(props.task)
        .filter(k => k !== 'id')
        .map(key => (
          <TaskProp
            key={key}
            darkMode={props.darkMode}
            propKey={key}
            propVal={props.task[key]}
          />
        ))}
    </div>
  );
};

export default TaskInDetailsBody;
