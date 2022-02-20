import React, { useState } from 'react';

import Card from '../../UI/Card';
import Button from '../../UI/Button';
import TaskInDetailsActions from './TaskInDetailsActions';
import TaskInDetailsBody from './TaskInDetailsBody';

const TaskInDetailsContent = props => {
  const [showTaskBody, setShowTaskBody] = useState(true);

  const showTaskBodyHandler = () => {
    setShowTaskBody(!showTaskBody);
  };

  let taskInDetailsBody = '';

  if (showTaskBody) {
    taskInDetailsBody = (
      <TaskInDetailsBody task={props.task} darkMode={props.darkMode} />
    );
  }

  return (
    <Card darkMode={props.darkMode}>
      <Button onClick={showTaskBodyHandler}>
        <h3 className="card-header">Task in Details</h3>
      </Button>

      {taskInDetailsBody}

      <TaskInDetailsActions
        darkMode={props.darkMode}
        onClickCloseBtn={props.onClickCloseBtn}
        onClickEditBtn={props.onClickEditBtn}
        onClickDeleteBtn={props.onClickDeleteBtn}
      />
    </Card>
  );
};

export default TaskInDetailsContent;
