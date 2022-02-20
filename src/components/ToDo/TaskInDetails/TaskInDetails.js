import React from 'react';

import TaskInDetailsContent from './TaskInDetailsContent';

import Modal from '../../UI/Modal';

const TaskInDetails = props => {
  return (
    <Modal darkMode={props.darkMode}>
      <TaskInDetailsContent
        darkMode={props.darkMode}
        task={props.taskInfo.task}
        onClickCloseBtn={props.onClose}
        //
        onClickEditBtn={() => {
          props.onClickEditBtn(props.taskInfo.groupId, props.taskInfo.task);
          props.onClose();
        }}
        //
        onClickDeleteBtn={() => {
          props.onClickDeleteBtn(
            props.taskInfo.groupId,
            props.taskInfo.task.id
          );
          props.onClose();
        }}
      />
    </Modal>
  );
};

export default TaskInDetails;
