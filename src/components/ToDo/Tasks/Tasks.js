import React, { useState } from 'react';

import {
  storeTaskGroupsStatusInLocalStorage,
  fetchTaskGroupsStatusFromLocalStorage,
} from '../../../common';

import Card from '../../UI/Card';
import Button from '../../UI/Button';

import TasksContent from './TasksContent';
import TasksFilter from './TasksFilter';

const Tasks = props => {
  const [showItems, setShowItems] = useState(
    fetchTaskGroupsStatusFromLocalStorage() === 'opened'
  );

  const showItemsHandler = () => {
    setShowItems(!showItems);
    storeTaskGroupsStatusInLocalStorage(!showItems ? 'opened' : 'closed');
  };

  const selectFilterHandler = filter => {
    props.onSelectFilter(filter);
  };

  let tasksContent = '';

  if (showItems) {
    tasksContent = (
      <TasksContent
        tasks={props.tasks}
        darkMode={props.darkMode}
        //
        onClickCheckBox={(groupId, taskId) => {
          props.onClickCheckBox(groupId, taskId);
        }}
        //
        onShowTaskInDetails={(groupId, task) => {
          props.onShowTaskInDetails(groupId, task);
        }}
      />
    );
  }

  return (
    <Card darkMode={props.darkMode}>
      <Button className="card-header" onClick={showItemsHandler}>
        <h3>Current Tasks</h3>
      </Button>

      {tasksContent}

      <TasksFilter
        disabled={props.disabledActionsBar}
        darkMode={props.darkMode}
        onSelectFilter={selectFilterHandler}
      />
    </Card>
  );
};

export default Tasks;
