import React from 'react';

import styles from './TasksContent.module.css';

import TaskGroups from './TaskGroups';

const TasksContent = props => {
  if (props.tasks.length === 0) {
    return (
      <h4
        className={`${styles['no-tasks-msg']} ${
          props.darkMode && styles['dark-mode']
        }`}
      >
        There's no Tasks!
      </h4>
    );
  }

  return (
    <div className={`overflow-auto ${styles.groups}`}>
      {props.tasks.map(group => (
        <TaskGroups
          key={group.id}
          group={group}
          darkMode={props.darkMode}
          //
          onClickCheckBox={(groupId, taskId) => {
            props.onClickCheckBox(groupId, taskId);
          }}
          //
          onShowTaskInDetails={task => {
            props.onShowTaskInDetails(group.id, task);
          }}
        />
      ))}
    </div>
  );
};

export default TasksContent;
