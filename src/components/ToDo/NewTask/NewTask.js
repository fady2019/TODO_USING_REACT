import React, { useState } from 'react';

import {
  storeFormStatusInLocalStorage,
  fetchFormStatusFromLocalStorage,
} from '../../../common';

import Button from '../../UI/Button';
import Card from '../../UI/Card';

import NewTaskForm from './NewTaskForm';

const NewTask = props => {
  const [showForm, setShowForm] = useState(
    fetchFormStatusFromLocalStorage() === 'opened'
  );

  if (props.isEditMode && !showForm) {
    setShowForm(true);
  }

  const addingNewTaskHandler = taskInfo => {
    props.onAddingNewTask(taskInfo);
  };

  const editTaskHandler = taskInfo => {
    props.onEditTask(taskInfo);
  };

  const showFormHandler = () => {
    setShowForm(!showForm);
    storeFormStatusInLocalStorage(!showForm ? 'opened' : 'closed');
  };

  return (
    <Card darkMode={props.darkMode}>
      <Button className="card-header" onClick={showFormHandler}>
        <h3>Add New Task</h3>
      </Button>

      <NewTaskForm
        isEditMode={props.isEditMode}
        taskToEdit={props.taskToEdit}
        showFormBody={showForm}
        darkMode={props.darkMode}
        onAddingNewTask={addingNewTaskHandler}
        onEditTask={editTaskHandler}
        onCancelEditMode={props.onCancelEditMode}
      />
    </Card>
  );
};

export default NewTask;
