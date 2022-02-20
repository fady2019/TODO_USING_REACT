import React from 'react';

import ActionsBar from '../../UI/ActionsBar';
import Button from '../../UI/Button';

const TaskInDetailsActions = props => {
  return (
    <ActionsBar darkMode={props.darkMode}>
      <Button className="action-btn" onClick={props.onClickCloseBtn}>
        <span className="btn-text">Close</span>
      </Button>

      <Button className="action-btn" onClick={props.onClickEditBtn}>
        <span className="btn-text">Edit</span>
      </Button>

      <Button className="action-btn" onClick={props.onClickDeleteBtn}>
        <span className="btn-text">Delete</span>
      </Button>
    </ActionsBar>
  );
};

export default TaskInDetailsActions;
